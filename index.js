// code your solution here
function saturdayFun(param = "roller-skate") {
    return "This Saturday, I want to " + param + "!";
}

// function mondayWork(param = "go to the office") {
//     return "This Monday, I will " + param + ".";
// }

const mondayWork = function (param = "go to the office") {
    return "This Monday, I will " + param + ".";
}
mondayWork();

function wrapAdjective(flair = "*") {
    inner = function (param = "special") {
        return "You are " + flair + param + flair + "!";
    }
    return inner;
}