import web3 from "./web3";
import Jazzian from "../build/contracts/Jazzian.json";

  const instance = new web3.eth.Contract(
    Jazzian.abi,
    "0x2E737D27Ad8a426714714b3dB11C76b4866B655F"
  );

export default instance;