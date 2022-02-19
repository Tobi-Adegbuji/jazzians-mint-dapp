import web3 from "./web3.js";
import Jazzian from "./build/Jazzian.json";

const jazzianContract = (address) =>
  new web3.eth.Contract(Jazzian.abi, address);

export default jazzianContract;