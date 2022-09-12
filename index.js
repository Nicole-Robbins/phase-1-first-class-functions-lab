let people = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let fare = 5;

const returnFirstTwoDrivers = function(names){
    return names.slice(0,2);
}
const returnLastTwoDrivers = function(names){
    return names.slice(2);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){
        return multiplier * fare};
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function (names, ab){
    if (ab === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(names);
    }
    else {
        return returnLastTwoDrivers(names);
    }
}

returnFirstTwoDrivers(people);
returnLastTwoDrivers(people);
selectingDrivers;
createFareMultiplier();
createFareDoubler();
createFareTripler();
fareDoubler();
fareTripler();
selectDifferentDrivers();
