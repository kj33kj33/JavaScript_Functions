console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

printOdds(-33);

function printOdds(count) {
    if(count < 0) {
        for(let i = 0; i >= count; i--) {
            if(i % 2 !== 0) {
                console.log(i);
            }
        }
    } else {
        for(let i = 0; i <= count; i++) {
            if(i % 2 !== 0) {
                console.log(i);
            }
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

checkAge(18);
checkAge(30, "James");
checkAge;

function checkAge(age, name) {
    let above16 = `Congrats ${name}, you can drive!`
    let below16 = `Sorry ${name}, but you need to wait until you are 16.`

    if(age < 16) {
        console.log(below16);
    } else {
        console.log(above16);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

onAxis(0,0);
onAxis(1,0);
onAxis(0,1);
onAxis(1,1);
onAxis(-1,1);
onAxis(-1,-1);
onAxis(1,-1);

function onAxis(x, y) {
    if(x === 0 && y === 0) {
        console.log(`(${x}, ${y}) is on the x and y axis`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis`);
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant I`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant II`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant III`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant IV`);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

