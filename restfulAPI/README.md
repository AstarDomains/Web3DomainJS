## Restful API for Astar Domains

### Get Resolve .astr domain
Resolve .astr domain to get the address of the owner.

Endpoint: https://app.astr.domains/api/domains/:domain?network=testnet&metadata=true

Method: GET

:domain: 'astarnetwork.astr'

Param: 

network: 'testnet' // mainnet default
metadata: true // false default return metadata along with name information

Return: 
``
{
    :status": true,
    "message": 'Success',
    "data": { 
        "owner": "0x37Jrh74Jdff...",
        "metadata": [
            {"key": "avatar","value":"{url}"},
            {"key": "twitter","value":"https://twitter.com/astar_domains"},
            {"key": "website","value":"https://astr.domains"},
            {"key": "btc.address","value":"bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh..."},
            {"key": "eth.address","value":"0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2 ..."}
        ]
    }
}
``

### Get Domain owned by address
Resolve .astr domain to get the address of the owner.

https://app.astr.domains/api/domains/:address

Param

domain: true (return socials along with name information)

Return: 
``
{
    status: true,
    message: 'Success',
    data: { address: "0x37Jrh74Jdff..."}
}
``


