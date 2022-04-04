## Javascript for Astar Domains

**Step 1: insert web3js script to head tag**

``
<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@3.0.0-rc.5/dist/web3.min.js"></script>
``

**Step 2: Connect network**

``
if (!window.ethereum) {
			return;
}

const rpcURL = 'https://rpc.shibuya.astar.network:8545';

var web3Provider = new Web3.providers.HttpProvider(rpcURL);

window.web3 = new Web3(web3Provider);
``
 
** Step 3: Load ABI Contract**

``
const fetchABI = async () =>
{
		const d = new Date();
		var response = await fetch('https://astr.domains/contract/Web3Domains.json');
		const result = await response.json();
		const abi = result.abi;
		return abi;
};
``

**Step 4: Connect Contract**

``
var contactAddress = '';

var abi = await fetchABI();
			
var contractFirst = new web3.eth.Contract(
						abi,
						contactAddress
);
``

**Get Owner Address by domain name**

``
var owner = '';
var domain = 'astarnetwork.astr';

owner = await contractFirst.methods.getOwer(domain).call();

console.log(owner);
``


**Get domain default from address**

``
var domain = '';
var currentAddress = '';

domain = await contractFirst.methods.reverseOf(currentAddress).call();

console.log(domain);
``

**Get Metatada**

``
var domain = 'astarnetwork.astr';
var key = 'avatar';

var tokenId = await contractFirst.methods.genTokenId(domain).call();
var value = await contractFirst.methods.get(key, tokenId);

console.log(value);
``


**Get Multi Metatada**

``
var domain = 'astarnetwork.astr';
var keys = ['website','twitter'];

var tokenId = await contractFirst.methods.genTokenId(domain).call();
var values = await contractFirst.methods.getMany(keys, tokenId);

console.log(values);
``

Thanks




