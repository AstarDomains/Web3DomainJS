const Web3 = require('web3');
const contractJSON = require('web3domainjs/contract/Web3Domain.json');

const rpcURL = 'https://rpc.shibuya.astar.network:8545';

const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

const abi = contractJSON.abi;

const currentAddress = "0x3b946C2C84a316Fe8821D1662b83AF5521537943";

const contractAddress = "0x73ABAA0036085caEb287C17EC427a27F93bb13B7";

const domain = "thuphuong.astr"

reverseOf(currentAddress);

getOwner(domain);

hashname(domain);

async function Web3Domain(){
	const balance = await web3.eth.getBalance(currentAddress);
	console.log(balance);
}

async function reverseOf(currentAddress){
	const abi = contractJSON.abi;
	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const domainReverse = await contractFirst.methods.reverseOf(currentAddress).call();
	console.log(domainReverse);
}

async function getOwner(domain){
	
	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const ownerAddress = await contractFirst.methods.getOwner(domain).call();
	console.log(ownerAddress);
}

async function hashname(domain){
	
	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const tokenId = await contractFirst.methods.genTokenId(domain).call();
	console.log(tokenId);
}