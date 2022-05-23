const userInfo = require('./information');
/*console.log(`Hi, my name is ${userInfo.name} and I'm from ${userInfo.campus}.`);
*/

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} and I am from ${userInfo.campus}`,
    e : "oO",
    T : "U ",
}));