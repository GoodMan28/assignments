let count = 1;
let limit = 15;
function callBack(lt) {
    if(count <= lt) {
        console.clear();
        console.log(count);
        count++;
        setTimeout(callBack, 1000, lt)
    }
    else {
        console.log('Timer Stopped!');
        clearTimeout(interval);
    }
}

let interval = setTimeout(callBack, 1000, limit);