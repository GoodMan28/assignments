let count = 1;
let limit = 10;
function stopWatch(lt) {
    if(count <= lt){
        console.log(count);
        count++;   
    }
    else {
        // console.log("Timer Stopped!");
        clearInterval(interval);
        console.log("Timer Stopped!");
    }
}

let interval = setInterval(stopWatch, 1000, limit); // the third argument is passsed to the stopWatch function

// ----------------------------------------------------------------------------------------------------

// What is clearInterval(interval)?
// setInterval() returns an Interval ID (a number).

// This ID is stored in the interval variable.

// clearInterval(interval) stops the interval using that ID