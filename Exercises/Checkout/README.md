# Checkout application

## Task description
This is the task at the end of the first training/first 4 chapters.

You are to build an application that simulates a shop checkout system. You must build only the application (Work in scripts/checkout.js)

The app reads the requests from orders.js and from employees.js and has to process it, and return the final price.

The final price can be discounted with an employee discount. The employee discount must be between 0 and 70, if not, the final cost must be false.

## Data
### Employees.js
This file provides a variable called employees, that represents the data of the employees, with the following format:

```javascript
var employees = [
    {
        id: 1, // int, unique
        firstName: "The name of the employee", // string
        lastName: "The name of the employee", // string
        discount: 10, // value that must be from 0 to 70 - represents the discount that the employee has inside the store
    }
];
```

### Items.js

This file provides a variable called items, representing an array of items available in the store

```javascript
var items = [
    {
        code: 1, //int, unique
        name: "the name of the item", //string
        cost: 10.0// float, cost per item 
    }
];
```

### Orders.js
This file provides a variable called orders, representing an array of orders to be processed

```javascript
var orders = [
    {
        id: 1, //int unique
        items : [
            {
                item: 1,// the id of the item
                quantity: 1, // the quantity of the item
            }
        ],
        employee: 1 // opt, the id of the employee
    }
]
```

## Task
Write the algorithm for returning an array of final_prices that represent the orders processed:

```javascript
var final_prices = [
    {
        order_id: 1,
        cost: 100 // double
    }
]
```

## Additional info
1. Fork the project
2. Write the code
3. Test it by opening index.html in a browser
