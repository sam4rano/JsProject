/** const feature_1 = document.querySelectorAll('div.feature-1');

console.log(feature_1);


const language = {
    1:
}*/ 
import menu from /.app
const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
  ];

// console.log(items);

const mapped = items.map( item => {
    if (item.id === '🍟') {
        return {
            ...item,
            price: item.price/3
        }
    }
    return item;
})

console.log(mapped)