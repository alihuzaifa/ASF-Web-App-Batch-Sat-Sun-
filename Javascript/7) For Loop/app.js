// // initialization , Condition, Increment ya Decrement
// for (var i = 1; i <= 10; i++) {
//     var statement = "2 x 1 = 2"
//     console.log(statement);
// }



// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }




// for (var i = 1; i <= 10; i++) {
//     var tr = "2 x " + i + " = " + i * 2;
//     console.log(tr);
// }



// var cities = ["Karachi", "Islamabad", "Lahore"]
// var userCity = prompt('Enter your city name?')
// for (var i = 0; i < cities.length; i++) {
//     if (userCity === cities[i]) {
//         console.log("It's one of the cleanest ciity");
//     }
// }


// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//         console.log(i + " is odd Number");
//     }
// }



// var numbers = [10, 20, 300, 4000, 7, 0, 30, 40];
// var maxNumber = 0;
// for (var i = 0; i < numbers.length; i++) {
//     var currentNumber = numbers[i];
//     if (currentNumber > maxNumber) {
//         maxNumber = currentNumber
//     }
// }

// console.log(maxNumber);

// var bakeryItems = ["Pastry", "Cake", "Biscuits", "Coldrinks"]
// var bakeryItem = prompt("What do you want to buy?")
// var isAvailable = false;

// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i] === bakeryItem) {
//         isAvailable = true;
//         break;
//     }
// }

// if (isAvailable) {
//     console.log(bakeryItem + " is available in our bakery");
// } else {
//     console.log("Sorry we do not have it.");
// }


// var userNumber = +prompt("Enter a number ?");
// var total = 0;
// for (var i = 1; i <= userNumber; i++) {
//     total = total + i
// }

// console.log(total);
// array = [2, 45, 65, 76, 8, 9, 89, 67, 57, 20, 30]

// var count = 0
// for (var i = 0; i <= 50; i = i + 3) {
//     count = i
// }
// console.log(count / 3);

var numbers = [2, 45, 65, 76, 8, 9, 89, 67, 57, 20, 30]
var count = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 25) {
        count++
    }
}

console.log(count);
