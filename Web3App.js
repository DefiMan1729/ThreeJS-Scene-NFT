import abi from "./newABI.json" assert {type: "json"};

const blockchain = new Promise((res, rej) => {
    // If Metamask is not available
    if(typeof window.ethereum == "undefined"){
        rej("Must have Metamask");
    }
    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0xc1F3Bc65DB1dA258A42d88f08a6379e90eA54da3");
    // Get my Metamask address
    web3.eth.requestAccounts().then((accounts) =>{
        console.log("-> My account is: ", accounts[0]);
    });
    // Get the current supply of NFT Tokens
    web3.eth.requestAccounts().then((accounts) =>{
        contract.methods.balanceOf(accounts[0]).call().then((supply) =>{
            console.log("-> Number of NFTs you have: ", supply);
            res({supply: supply});

        });
    });
});

export default blockchain;