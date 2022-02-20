const Jazzians = artifacts.require("Jazzian");

module.exports = function (deployer) {
  deployer.deploy(Jazzians, "Jazzians", "JAZZ", "baseuri/");
};
