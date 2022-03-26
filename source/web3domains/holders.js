const Web3 = require('web3');
const contractJSON = require('web3domainjs/contract/Web3Domain.json');
const fs = require('fs');

const rpcURL = 'https://rpc.shibuya.astar.network:8545';

const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

const abi = contractJSON.abi;

const contractAddress = "0x73ABAA0036085caEb287C17EC427a27F93bb13B7";

getHolders();

async function getHolders(){
	
	var datafile = "domains.json"

	var jsonString = fs.readFileSync(datafile);
	
	const domains = JSON.parse(jsonString);
	
	const contractFirst = new web3.eth.Contract(abi, contractAddress);
	
	var holders = new Array();
	
	for(var domain in domains){
		try{
			const ownerAddress = await contractFirst.methods.getOwner(domain).call();
			var found = obj.find(e => e === ownerAddress);
			if (found == false){
				holders.push(ownerAddress);
			}
		}catch{}
	}
	
	fs.writeFile('holders.json', holders.toString(), function (err) {
	  if (err) return console.log(err);
	  console.log('Done > holders.json');
	});
}
