var Augur = require("augur.js");
var augur = new Augur();


// date/time within a fee/dispute window

var ethereumNode = {
  httpAddresses: [
    "http://127.0.0.1:8545", // local HTTP address for Geth node
    "https://kovan.augur.net/ethereum-http" // hosted http address for Geth node on the Rinkeby test network
  ],
  wsAddresses: [
    "ws://127.0.0.1:8546", // local WebSocket address for Geth node
    "wss://kovan.augur.net/ethereum-ws" // hosted WebSocket address for Geth node on the Rinkeby test network
  ]
  // ipc addresses can also be specified as:
  // ipcAddresses: [ ... ]
};        
// To connect to a hosted Augur Node instead of a local Augur Node, substitute its WebSocket address below.
var augurNode = "ws://127.0.0.1:9001"; // local WebSocket address for an Augur Node
         
// Attempt to connect to a local Ethereum node
augur.connect({ ethereumNode, augurNode }, (err, connectionInfo) => {
  // do stuff
augur.markets.getMarketsInCategory({
  universe: "0xe0fb73227c37051611c3edc091d6858f2a230ffe",
  category: "STOCKS",
}, function (error, result) {
  console.log(result);
  augur.markets.getMarketsInfo({
  marketIds: result,
}, function (error, result) {
  console.log(result);
}); 
});
        //0xe0fb73227c37051611c3edc091d6858f2a230ffe
});// If that fails, fall back to the hosted Ethereum node

//Example Market
//0x7ff5587568854bebe22fc75d663dacd4b6aaceb9