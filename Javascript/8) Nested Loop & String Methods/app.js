// for (var i = 1; i <= 3; i++) {
//     console.log("Parent Loop", i);
//     for (var n = 1; n <= 5; n++) {
//         console.log("Child Loop", n);
//     }
// }

// var cities = ["karachi", "lahore", "quetta"]
// var city = prompt('Enter your city?');
// var isFind = false;
// for (var i = 0; i < cities.length; i++) {
//     if (cities[i] === city.toLowerCase()) {
//         console.log(city.toLowerCase());
//         isFind = true;
//     }
// }
// if (isFind === true) {
//     console.log("City Found");
// } else {
//     console.log("City Not Fpund");
// }



// var text = "Hello  World"




// for (var i = 1; i <= 3; i++) {
//     console.log('Parent Loop', i);
//     for (var j = 1; j <= 5; j++) {
//         console.log('Child Loop', j);
//     }
// }

// var cities = ["karachi", "lahore", "peshawar"];
// var userCity = prompt('Enter Your City ?');
// var isFound = false;
// for (var i = 0; i < cities.length; i++) {
//     if (cities[i] === userCity.toLowerCase()) {
//         isFound = true;
//         break;
//     }
// }

// if (isFound === true) {
//     console.log('City Found');
// } else {
//     console.log('City Not Found');
// }

// var text = 'Hello  World';
// var isFound = false;
// for (var i = 0; i < text.length; i++) {
//     var checkText = text[i] + text[i + 1];
//     if (checkText === "  ") {
//         isFound = true;
//         break;
//     }
// }

// if (isFound === true) {
//     console.log('Double Space Found');
// } else {
//     console.log('Double Space Not Found');
// }


// var text = "Hello  World";
// var copyText = text.slice(5, 7)
// console.log(copyText);


var text = "Hello  World";
var isFound = false;
for (var i = 0; i < text.length; i++) {
    var copyText = text.slice(i, i + 2);
    if (copyText === "  ") {
        isFound = true;
        break;
    }
}
if (isFound) {
    console.log('Double Space Found');
} else {
    console.log('Double Space Not Found');
}