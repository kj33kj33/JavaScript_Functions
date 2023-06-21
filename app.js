console.log("Hello Reviewer!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1: Printing Odd Numbers\n==========\n");

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
console.log("EXERCISE 2: Checking Age\n==========\n");

checkAge(18);
checkAge(30, "James");
checkAge(13, "Addison");

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
console.log("EXERCISE 3: Checking Coordinates\n==========\n");

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
console.log("EXERCISE 4: Checking Triangles\n==========\n");

isTriangle(1,2,3);
isTriangle(1,1,1);
isTriangle(1,2,2);
isTriangle(2,3,4);

function isTriangle(a,b,c) {
    if(a + b > c && a + c > b && b + c > a) {
        if(a === b && b === c) {
            console.log(`Side lengths ${a}, ${b}, and ${c} form an equilateral triangle.`)
        } else if (a === b || a === c || b === c ) {
            console.log(`Side lengths ${a}, ${b}, and ${c} form an isosceles triangle.`)
        } else {
            console.log(`Side lengths ${a}, ${b}, and ${c} form a scalene triangle.`)
        }
    } else {
        console.log(`Side lengths ${a}, ${b}, and ${c} do not form a triangle.`);
    }
}

// Exercise 5 Section
console.log("EXERCISE 5: Checking Data Plan Status\n==========\n");

console.log("Case Over: plan limit = 100 GB, days remaining = 15, usage = 60 GB")
dataPlanStatus(100, 15, 60);
console.log("==========\n");
console.log("Case Under: plan limit = 100 GB, days remaining = 15, usage = 40 GB");
dataPlanStatus(100, 15, 40);
console.log("==========\n");
console.log("Case On Average: plan limit = 100 GB, days remaining = 15, usage = 50 GB");
dataPlanStatus(100, 15, 50);
console.log("==========\n");
console.log("Case Over Limit: plan limit = 100 GB, days remaining = 15, usage = 150 GB");
dataPlanStatus(100, 15, 150);

function dataPlanStatus(planLimit, day, usage) {
    
    if(usage > planLimit) {
        console.log("You are out of data.");
    } else {      
        let planAvg = planLimit / 30;
        let userAvg = usage / day;
        let daysRemaining = 30 - day;
        let dataRemaining = planLimit - usage;
    
        console.log(`${day} days used, ${daysRemaining} days remaining`);
        console.log(`Average daily use: ${userAvg} GB/day`);
        console.log(`${dataRemaining} GB remaining`);
    
        let potentialOverage = ((userAvg * 30) - (planAvg * 30));
        let correctionAvg = dataRemaining / daysRemaining;
        
        if (userAvg > planAvg) {
            console.log(`You are EXCEEDING your plan's daily average data use of ${planAvg} GB/day.`);
            console.log(`Continued usage at the current rate will result in an overage of ${potentialOverage} GB.`);
            console.log(`In order to not go over your limit of ${planLimit} GB, use no more than ${correctionAvg} GB/day.`);
        } else if (userAvg < planAvg) {
            console.log(`You are BELOW your plan's daily average data use of ${planAvg} GB/day.`);
            console.log(`Continued usage at this rate will result in ${Math.abs(potentialOverage)} GB left over.`);
            console.log(`You can use up to ${correctionAvg} GB/day for the remaining ${daysRemaining} days.`);
        } else {
            console.log(`You are on track with your plan's daily average data use of ${planAvg} GB/day.`);
        }
    }
}
