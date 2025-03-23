/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map = {};
  for(let mp of transactions) {
    let cat = mp.category;
    // if the key is not present
    if(!Object.hasOwn(map, cat)) {
      map[cat] = {category: cat, totalSpent: mp.price};
    }
    // if the key is not present
    else {
      map[cat].totalSpent += mp.price;
    }
  }

  // IMP- converting the map values in the form of array. Since our values are in the desired form
  return Object.values(map);
}

module.exports = calculateTotalSpentByCategory;

// Here we can do is that we will maintain an object having key-value pairs as key: category
// value : {category: mp.category or cat, totalSpent: mp.price}

// We will iterate through each object in the array 'transactions' and we will see whether the category
// exist in the new array or not. If not then we will give them a new spent value
// If yes, then we will update the value of the totalSpent 