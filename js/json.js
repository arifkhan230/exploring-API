const user = {id: 1, name: 'Gorib Amir', job: 'actor'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/*
{ id: 1, name: 'Gorib Amir', job: 'actor' }
{"id":1,"name":"Gorib Amir","job":"actor"
*/


const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet voot er goli',
        city: 'ranbir',
        country: 'Bd'
    },
    product: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false 
}
console.log(shop);

// converting object to string
const shopJson = JSON.stringify(shop);
console.log(shopJson);

// converting JSON string to object 
const shopObject = JSON.parse(shopJson);
console.log(shopObject)