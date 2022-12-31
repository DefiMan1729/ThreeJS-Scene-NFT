# Displaying NFTs as Obects in Metaverse (easy version with Three.js)

In the example I am checking the number of NFTs owned by a Metamask address and displaying them as random cubes in the Three.js Scene

#### Verified Goerli Smart Contract 
```
0xc1F3Bc65DB1dA258A42d88f08a6379e90eA54da3
```

<img width="328" alt="image" src="https://user-images.githubusercontent.com/115624087/210150459-e23d67bd-8b82-44c4-85d9-a424c98283ad.png">


Run the Index.js file on Live server to see the NFTs being displayed
Before you run the code, change the contract address in Web3App.js file and the corresponding ABI
```
let contract = new web3.eth.Contract(<your ABI>, "<Smart Contract Address>");
```
