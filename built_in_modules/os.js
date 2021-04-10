const os = require('os')

// info about current user
const user = os.userInfo();
console.log(user);

// System upTime
console.log(`The system upTime is ${os.uptime()} seconds.`);

// In object

const currentOs = {
    name:     os.type(),
    release:  os.release(),
    totalMem: os.totalmem(),
    freeMem:  os.freemem(),

}
console.log(currentOs);

