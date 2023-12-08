//DATE
console.log(new Date());
console.log(new Date(). toLocaleString());
console.log(new Date().toString());
console.log(Date.now());
let d = new Date(2021, 0,  5, 10, 33, 30, 0);
console.log(d);
console.log(d.toLocaleString());

//DATE get methods
console.log(new Date().toLocaleString());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());

//DATE set methods
console.log(new Date().setFullYear(2022, 10, 5));
console.log(new Date().setMonth(10));
console.log(new Date().setDate(5));

//TIME get method
console.log(new Date().getTime());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());

//TIME set method
console.log(new Date().setHours(5));
console.log(new Date().setMinutes(6));
console.log(new Date().setSeconds(7));
console.log(new Date().setMilliseconds(80));

//specific
console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleString());
