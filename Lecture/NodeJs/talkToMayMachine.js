const machine = require('os');
let totalMemo = machine.totalmem();
let availableMemo = machine.freemem();
function printMachineInfo(){
    //console.log(totalMemo);
//console.log(availableMemo);
//console.log(process.env.USERNAME);
return process.env.USERNAME;
}
//export and converting the block of codes to reusable module
module.exports = printMachineInfo;
