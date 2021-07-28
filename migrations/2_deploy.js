const SafeMath = artifacts.require("SafeMath");
const Token = artifacts.require("Token");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(Token);
  
};