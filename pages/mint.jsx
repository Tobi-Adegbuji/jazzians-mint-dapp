import React, { useState } from "react";
import Layout from "../components/Layout";
import NftCard from "../components/NftCard";
import styles from "../styles/Mint.module.css";
import instance from "../util/jazzian";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";

import Router from "next/router";
import Link from "next/link";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Zoom,
} from "@material-ui/core";
import Transition from "../components/Transition";
import web3 from "../util/web3";
import { AlertTitle, IconButton, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Mint(props) {
  const [nftCount, setNftCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [mintedIds, setMintedIds] = useState({});
  const [supply, setSupply] = useState(props.totalSupply);

  const mintPriceEth = web3.utils.fromWei(props.mintPrice);

  const onSubmit = async (event) => {
    //Keeps browser from attempting to submit the form right away
    event.preventDefault();

    setErrorMessage("");

    setShowSpinner(true);

    try {
      const accounts = await web3.eth.getAccounts();

      await instance.methods.mint(nftCount).send({
        //when we set one of multiple Metamask accounts to be the default account, that account is placed at accounts[0]
        from: accounts[0],
      });

      const ids = await instance.methods.getMintedIds(nftCount).call();
      setMintedIds(ids);
    } catch (err) {
      setErrorMessage(err.message);
    }

    setShowSpinner(false);
    
    if(supply != 0){
    setSupply(supply - nftCount);
    }
  };

  return (
    <Transition>
      <div className={styles.mint}>
        <div className={styles.mint__cardSection}>
          {showSpinner ? (
            <Skeleton
              variant="rectangle"
              width={300}
              height={460}
              sx={{ bgcolor: "#b8b8b8", borderRadius: 2 }}
            />
          ) : (
            <NftCard
              nftId={mintedIds[0]}
              tilt
              glare
              img={
                Object.keys(mintedIds).length != 0
                  ? `img/${mintedIds[0]}.jfif`
                  : null
              }
              mintPrice={mintPriceEth}
            />
          )}
        </div>
        <div className={styles.mint__paySection}>
          <div className={styles.mint__payContainer}>
            <h1>
              Only {supply} Jazzians Left <br /> Mint below now{" "}
            </h1>
            <p>
              The NFT you get will be shown on the left right after your
              purchase is processed on the ETH network. An address can only buy
              one Jazzian.
            </p>
            <Table sx={{}}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Total you can purchase</TableCell>
                  <TableCell align="center">Total Available</TableCell>
                  <TableCell align="center">Mint Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell align="center">{props.maxMintAmount}</TableCell>
                <TableCell align="center">{supply}</TableCell>
                <TableCell align="center">{mintPriceEth} ETH</TableCell>
              </TableBody>
            </Table>
            <form className={styles.mint__form} onSubmit={onSubmit}>
              <p>How many Jazzian's would you like to purchase?</p>
              <FormControl variant="filled">
                <InputLabel>Amount</InputLabel>
                <Select
                  defaultValue={1}
                  value={nftCount}
                  label="Amount *"
                  onChange={(e) => setNftCount(e.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                </Select>
                <FormHelperText>Required *</FormHelperText>
              </FormControl>
              <br />
              <button className={styles.mint__button}>Purchase/Mint</button>
            </form>

            {showSpinner ? <LinearProgress /> : null}

            <Zoom in={!!errorMessage}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="large"
                    onClick={() => {
                      setErrorMessage("");
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                <AlertTitle>Oops!</AlertTitle>
                {errorMessage}
              </Alert>
            </Zoom>
          </div>
        </div>
      </div>
    </Transition>
  );
}

Mint.getInitialProps = async () => {
  const summary = await instance.methods.getSummary().call();
  return {
    maxMintAmount: summary[0],
    totalSupply: summary[1],
    mintPrice: summary[2],
  };
};

export default Mint;
