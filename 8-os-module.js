const os = require('os')


// user Info
const user = os.userInfo()
console.log(user) 

// system Uptime

console.log(`on uptime is ${os.uptime} seconds`);

const currentOs = {
    name: os.type(),
    version:os.version(),
    release:os.release(),
    platform:os.platform(),
    totalMem:os.totalmem(),
    freeMen : os.freemem(),
    
}
console.log(os.networkInterfaces())

console.log(currentOs)


