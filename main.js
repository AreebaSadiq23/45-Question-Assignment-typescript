"use strict";
// Question no 2
let personName = "Hello Eric , would you like to learn some python today?";
console.log(personName);
// Question no 3
let pName = "Areeba";
// lowercase
console.log("lowercase:", pName.toLocaleLowerCase());
// Uppercase
console.log("uppercase:", pName.toLocaleUpperCase());
/// titlecase
console.log("titlecase:", pName.replace(/\bw/g, c => c.toUpperCase()));
// Question no 4
let quotes = "A person who never made a mistake never tired anything new";
let author = "Albert Einstien";
let messages = `${author} once said, ${quotes}`;
console.log(messages);
/// Question no 5
let quote = "A person who never made a mistake never tired anything new";
let famous_person = "Albert Einstien";
// // let message =`${famous_person} once said, ${ quote}`
// console.log(message)
/// Question no 6
let Pname = "\n\t Areeba \n\t";
console.log(Pname);
let stripped = Pname.trim();
console.log(stripped);
/// Questio no  7
console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
/// Question no 8
console.log(5 + 3);
// Question no 9
let favouriteNumber = "7";
console.log(`My favourite Number is ${favouriteNumber}`);
/// Question no 10
/// Exercise 10
// My name is Areeba
// Dated : 20 / 2 / 2024
console.log("Hello world simple program");
// Question no 11
let memebers = ["Areeba", "Maryam", "Bisma"];
for (let i = 0; i < memebers.length; i++) {
    console.log(memebers[i]);
}
/// Question no 12
let memeberName = ["Areeba", "Maryam", "Bisma", "wania"];
let message = 'Tommorrow will be party';
for (let i = 0; i < memebers.length; i++) {
    console.log(message + memebers[i]);
}
// Question no 13
let transpotation = ["Honda", "crown", "superpower",];
for (let i = 0; i < transpotation.length; i++) {
    console.log(` I would like to own a ${transpotation[i]}`);
}
//  Question no 14
let guest_list = ['areeba', 'sabeen', 'anoosha'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected madeam' + guest_list[i] + ',\nwe invited you on a dinner tommorow.\n\nThank you');
}
// Question no 15
let guests_list = ['areeba', 'sabeen', 'anoosha'];
for (let i = 0; i < guests_list.length; i++) {
    console.log('Respected madeam' + guest_list[i] + ',\nwe invited you on a dinner tommorow.\n\nThank you');
}
let not_presents = "sabeen";
let new_guests = "BISMA";
guests_list: [] = new_guests;
for (let i = 0; i < guests_list.length; i++) {
    console.log('Respected madeam' + guests_list[i] + ',\nwe invited you on a dinner tommorow.\n\nThank you');
}
console.log('madam   ${not_present} will not coming tommorow dinner.');
/// Question no 16
let guest_lists = ['areeba', 'sabeen', 'anoosha'];
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected madeam'+ guest_list[i] + ',\nwe invited you on a dinner tommorow.\n\nThank you');
//}
let nots_present = "sabeen";
let news_guest = "BISMA";
guest_lists[1] = news_guest;
for (let i = 0; i < guest_lists.length; i++) {
    console.log('Respected madeam' + guest_lists[i] + ',\nwe invited you on a dinner tommorow.\nThank you\n');
}
// console.log('madam   ${not_present} will not coming tommorow dinner.')  
guest_lists.unshift('saba', 'zara', 'urooj');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected madeam' + guest_lists[i] + ',\nwe invited you on a dinner tommorow. we found a big table so we decide ti invite 3 more guest\nThank you\n');
}
// Question no 17
let guest_listing = ['areeba', 'sabeen', 'anoosha'];
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected madeam'+ guest_list[i] + ',\nwe invited you on a dinner tommorow.\n\nThank you');
//}
let not_present = "sabeen";
let new_guest = "BISMA";
guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//console.log('Respected madeam'+ guest_list[i] + ',\nwe invited you on a dinner tommorow.\nThank you\n');
//}
guest_listing.unshift('saba', 'zara', 'urooj');
//for(let i=0; i<guest_list.length; i++){
//console.log('Respected madeam'+ guest_list[i] + ',\nwe invited you on a dinner tommorow. we found a big table so we decide ti invite 3 more guest\nThank you\n');
//}
console.log('\nUnfortunently we can not arrange a big table , only two people allow');
while (guest_listing.length > 2) {
    let remove_guest = guest_listing.pop();
    console.log(`sorry Madam .${remove_guest}you are not invited for a dinner.`);
}
for (let i = 0; i < guest_listing.length; i++) {
    console.log('Respected madeam' + guest_list[i] + ',\n Yes you are still invited on tommorow dinner \nThank you\n');
}
guest_listing.splice(0, 2);
console.log(guest_list);
// Question no 18
let places = [] = ['lahore', 'Islamabad', 'Queeta', 'peshawar'];
console.log('original:' + places);
// Print your array in alphabetical order without modifying the actual list.
//  console.log('copy'+[...places].sort());
// Show that your array is still in its original order by printing it.
console.log('original:' + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + [...places].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log('copy' + [...places].sort().reverse());
// Reverse the order of your list. Print the array to show that its
//order has changed.
console.log('original:' + places.sort().reverse());
// Question no 19
let gust_list = ['areeba', 'sabeen', 'anoosha'];
for (let i = 0; i < gust_list.length; i++) {
    console.log('Respected madeam' + gust_list[i] + ',\nwe invited you on a dinner tommorow.\nThank you');
}
console.log(`\n we had finally invited ${gust_list.length} guests`);
// // Question no 20
let lanaguages = [] = ["Html", "Css", "Javascript", "Typescript"];
console.log(lanaguages);
//create two object
const book = {
    name: 'Essential Typescript',
    price: 350
};
const mango = {
    name: 'mango',
    price: 200
};
console.log(`book name: ${book.name}, price:$${book.price}`);
console.log(`fruit name: ${mango.name}, price:$${mango.price}`);
/// Question no 22
let array = ['Areeba', 'Maryam', 9, 8, 7, "Zara"];
console.log(array[5]);
// Question no 23
let cars = 'shabru';
//Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');
//Test 2 :strict equality comparison(True)
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'subaru');
//Test 3 :Inquality comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(cars != 'subaru');
//Test 4 : strict inequality comparison (false)
console.log("Is car !== 'subaru'? I predict False.");
console.log(cars !== 'subaru');
//Test 5 :less than comparison (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(cars < 'subaru');
//Test 6 : Greatar than comparison  (false)
console.log("Is car > 'subaru'? I predict false.");
console.log(cars > 'subaru');
//Test 7 :less than or equal comperison(true)
console.log("Is car <= 'subaru'? I predict True.");
console.log(cars <= 'subaru');
//Test 8 :less than or equal comperison (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');
//Test 9 :checking truthnies(true)
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');
//Test 10 : checking falsiness (false)
console.log("Is car == 'subaru'? I predict false.");
console.log(cars == 'subaru');
// Question no 24
console.log("less then test:", 5 < 10);
console.log("less then test:", 10 >= 10);
console.log("less then test:", 5 === 5 && 10 > 5);
console.log("less then test:", 5 === 5 || false);
const fruit = ['banana', 'apple', 'mango'];
console.log('test "banana" is the array:', fruit.includes("banana"));
console.log('test "cheery" is not  array:', !fruit.includes("cheery"));
// Question no 25
let align_color = "Green";
if (align_color === "Green") {
    console.log("The player earned 5 point");
}
align_color = "red";
if (align_color === "Green") {
    console.log("The player earned 5 point");
}
// Question no 26
let alien_color2 = "green";
if (alien_color2 === "green") {
    console.log("Player just earned 5 point for shooting the alien.");
}
else {
    console.log("Player just earned 5 point");
}
alien_color2 = "red";
if (alien_color2 === "green") {
    console.log("Player just earned 5 point for shooting the alien");
}
else {
    console.log("player just earned 10 point");
}
//Question no 27
let alien_color = "green";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color");
}
//version 2
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color");
}
//version 3
alien_color = "yellow";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color");
}
// Question  no 28
/// Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
let age = 25;
// If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler ");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("person is an adult");
}
else {
    console.log("person is an elder");
}
// Question no 29
let favourite_fruits = ['Mango', 'Apple', 'orange'];
if (favourite_fruits.includes('Apple')) {
    console.log('I really like a Apple');
}
if (favourite_fruits.includes('Mango')) {
    console.log('I really like a Mango');
}
if (favourite_fruits.includes('orange')) {
    console.log('I really like a orange');
}
if (favourite_fruits.includes('Bananas')) {
    console.log('I really like a Bananas');
}
// Question no 30
const username = ['admin', 'Bugs bunny', 'Daffy Duck'];
for (let i = 0; i < username.length; i++) {
    if (username[i] === 'admin') {
        console.log("Hello Admin , would you like to see a status report?");
    }
    else {
        console.log(`hello ${username[i]}`);
    }
}
// Question no 31
let person = ['saba', 'sabeen', "Anoosha"];
if (person.length === 0) {
    console.log("we need find to some user!");
}
// Remove all of the usernames from your array, and make sure the correct message is printed.
else {
    person = [];
    console.log("All user have been removed " + person.length);
}
// Question no 32
let current_users = ['anoosha', 'areeba', 'sabeen', 'zara', 'saba'];
let new_users = ['tooba', 'maryam', 'bisma', 'wania', 'urooj'];
new_users.forEach(newUsername => {
    let lowercase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase().includes)) {
        console.log(`the username ${newUsername} is not available.please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
// Question no 33
let number = [1, 2, 3, 4, 5];
for (let num of number) {
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    if (num === 2) {
        ordinalEnding = "nd";
    }
    if (num === 3) {
        ordinalEnding = "rd";
    }
    if (num === 4) {
        ordinalEnding = "th";
    }
    if (num === 5) {
        ordinalEnding = "th";
    }
    console.log(`${num} ${ordinalEnding}`);
}
// Question no 34
let pizzas = ["Cheese", "BBQ chicken", "Tikka"];
for (let pizza of pizzas) {
    console.log(`I like a ${pizza} pizza.`);
}
console.log(`I really like a pizza.`);
// Question no 35
let Animals = ['Dog', 'Cat', 'Tiger'];
for (let Animal of Animals) {
    console.log(`A ${Animal} would you like a great pet.`);
}
console.log(`Any of these animals would make a great pet!`);
// Question no 36
function make_shirt(size, text) {
    console.log(`creating a ${size} shirt with the message : ${text}`);
}
make_shirt('large', 'Hello world');
make_shirt('medium', 'Hello world');
make_shirt('small', 'Hello world');
// Question no 37
function make_shirts(size = 'large', text = 'I love typescript.') {
    console.log(`creating a ${size} shirt with the message : ${text}`);
}
make_shirts();
make_shirts('medium');
make_shirts('small', 'I love python');
// Question no 38
function describe_city(city, country = "America") {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'japan');
describe_city('New York');
// Question no 39
function city_country(city, country) {
    return (`${city}  ${country}.`);
}
const city1 = city_country('Karachi', 'Pakistan');
const city2 = city_country('Tokyo', 'japan');
const city3 = city_country('New York', 'Unitedstate');
console.log(city1);
console.log(city2);
console.log(city3);
function make_album(artist, title, tracks) {
    const album = {
        artist, title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artists1", "Album Title1");
const album2 = make_album("Artists2", "Album Title1");
const album3 = make_album("Artists3", "Album Title1");
console.log(album1);
console.log(album2);
console.log(album3);
// Question no 41
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
const magicians = ["David", 'Albert Einestien', 'dai vernon', 'Harry Houdin'];
show_magicians(magicians);
// Question no 42
function returnstringlength(str) {
    return str.length;
}
console.log(returnstringlength("Areebasadiq"));
// Question no 43
let magician = ['David', 'Albert Einestien', 'dai vernon', 'Harry Houdin'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'new Great' + magicianArray[i];
    }
}
;
function show_magician(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log(`\n This is original Array:`);
show_magicians(magician);
console.log(`\n This is my modified copy of the Array:`);
show_magicians(copyMagicianArray);
// Question no 44
function make_sandwhich(item) {
    console.log('Making your sandwhich with:');
    item.forEach(element => console.log("-" + element));
    console.log("Enjoy your sandwhich!");
}
;
make_sandwhich(['Ham', 'cheese', 'lettuce']);
make_sandwhich(['Turkey', ' Bacon']);
make_sandwhich(['Peanut butter', 'Jelly']);
// Question no 45
function make_car(manufacture, model, ...options) {
    let car = { manufacture, model };
    options.forEach(([key, value]) => value);
    return car;
}
console.log(make_car("Toyota", "Corrolla", ["color", "red"], ["year", "2024"]));
console.log(make_car("fard", "fiestta", ["color", "blue"], ["year", "2024"]));
