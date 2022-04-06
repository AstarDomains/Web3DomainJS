## Restful API for Astar Domains

### Get Resolve .astr domain
Resolve .astr domain to get the address of the owner.

Endpoint: https://app.astr.domains/api/domains/getOwner?domain=domain&network=testnet&metadata=true

**Method: GET**

**Param:**

domain: 'astarnetwork.astr'
network: 'testnet' // mainnet default
metadata: true // false default return metadata along with domain information

**Return:** 
```
{
    "status": true,
    "message": "Success",
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
```
### Get a domain default from address
Get a domain default from a user's address, requiring the user to set the default domain name initially.

Endpoint: https://app.astr.domains/api/domains/getDomain?address=0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2

**Method: GET**

**Param**

address: 0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2 ... // wallet address

**Return:** 
```
{
    status: true,
    message: "Success",
    data:
        { 
            "domain": "astarnetwork.astr",
            "setDefault":true
        }
    ]
}
```

### Get all domains owned by address
This GET method gets all the domains owned by an wallet address.

Endpoint: https://app.astr.domains/api/domains/getDomains?address=0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2

**Method: GET**

**Param**

address: 0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2 ...

**Return:** 
```
{
    status: true,
    message: "Success",
    data: [
        { 
            "domain": "astarnetwork.astr",
            "createtime": "",
            "setDefault":true
        },
        { 
            "domain": "astar.astr",
            "createtime": "",
            "setDefault":false
        },
    ]
}
```


### Get Metatada
Get a value of metadata from the domain name

https://app.astr.domains/api/domains/getMetadata?key=website,twitter&domain=astarnetwork.astr

**Method: GET**

**Param**

keys: 'website,twitter'
domain: 'astarnetwork.astr'

**Return:** 
```
{
    status: true,
    message: "Success",
    data:
        { 
            "metadata": [
                {"key": "twitter","value":"https://twitter.com/astar_domains"},
                {"key": "website","value":"https://astr.domains"}
            ]
        }
}
```

### Gen hashname
Namehash is a recursive process that can generate a unique hash for any valid domain name.

https://app.astr.domains/api/domains/hashname?domain=hello.astr

**Method: GET**

**Param**

domain: 'hello.astr'

**Return:** 
```
{
    status: true,
    message: "Success",
    data:
        { 
            "hashname": "95056584996377272172318102362430335359056670016098380788598434836875371874275"
        }
}
```


