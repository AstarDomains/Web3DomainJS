## Restful API for Astar Domains

### Resolve .astr domain
Resolve .astr domain to get the address of the owner.

https://api.astr.domains/domains/:domain

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


