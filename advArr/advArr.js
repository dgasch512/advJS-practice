// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let excited = [];
let addExcite = array.forEach((obj) => {
  obj.username = `${obj.username}!`;
  excited.push(obj)
});

// OR------
  
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);


//Create an array using map that has all the usernames with a "? to each of the usernames

let notSure = array.map((obj) => {
  obj.username = `${obj.username}?`;
  return obj.username
})

// OR------

const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red

let redFilter = array.filter(obj => obj.team === 'red')

//Find out the total score of all users using reduce

let total = array.reduce((accumulator, obj) => {
  let num = obj.score;
  return accumulator + num;
}, 0)

// (1), what is the value of i?
 index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num * 2)


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

let allNew2 = array.map(user => {
  user.items = user.items.map(item => `${item}!`);
  return user;
})