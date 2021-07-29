let empDailyHrs = new Array(0,4,8,0,0,4,8);
totalHours = Array.from(empDailyHrs.values()).filter(dailyHrs => dailyWage > 0).reduce(findTotal,0);

let nonWorkingDays = new Array();
let pertWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value,key, ) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full Working Days:" +fullWorkingDays);
console.log("Part Working Days:" +partWorkingDays);
console.log("Non Working Days:" +nonWorkingDays);