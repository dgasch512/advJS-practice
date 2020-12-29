//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

let experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
undefined

//#3 return value when moveCommand("back");
"you arrived home"

//#4 return value when moveCommand("right");
"you found a river"

//#5 return value when moveCommand("left");
undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

 favoriteTMNT = (attr) => {
    let fav;
    switch(attr) {
        case "leader":
            fav = "Leonardo";
            break;
        case "moody":
            fav = "Raphael";
            break;
        case "nerd":
            fav = "Donatello";
            break;
        case "party": 
            fav = "Michaelangelo";
            break;
        default:
            fav = "Casey. You didn't choose so you get Casey"
    }
    return 'Your favorite Ninja Turtle is ' + fav + '!';
}