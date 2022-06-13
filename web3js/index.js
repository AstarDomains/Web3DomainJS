const Web3 = require('web3');

const contractJSON = require('contract/Web3Domain.json');

const rpcURL = 'https://rpc.shibuya.astar.network:8545';

const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

const abi = contractJSON.abi;

const currentAddress = "";

const contractAddress = "";

const domain = "helloworld.astr"

getDomain(currentAddress);

getDomains(currentAddress);

getOwner(domain);

getMetadata('avatar', domain);

getMetadatas(['website','twitter'], domain);

hashname(domain);

async function getDomain(currentAddress){
	const abi = contractJSON.abi;
	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const domainReverse = await contractFirst.methods.reverseOf(currentAddress).call();
	console.log(domainReverse);
}

async function getDomains(currentAddress){
	const abi = contractJSON.abi;
	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const arg = await contractFirst.methods.getDomainbyAddress(currentAddress).call();
	console.log(arg);
}

async function getOwner(domain){
	
	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const ownerAddress = await contractFirst.methods.getOwner(domain).call();
	console.log(ownerAddress);
}

async function getMetadata(key, domain){

	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const tokenId = await contractFirst.methods.genTokenId(domain).call();
	const value = await contractFirst.methods.get(key, tokenId);
	console.log(value);
}

async function getMetadatas(keys, domain){

	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const tokenId = await contractFirst.methods.genTokenId(domain).call();
	const values = await contractFirst.methods.getMany(keys, tokenId);
	console.log(values);
}

async function hashname(domain){
	
	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	const tokenId = await contractFirst.methods.genTokenId(domain).call();
	console.log(tokenId);
}
