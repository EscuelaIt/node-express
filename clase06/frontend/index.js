const moment = require("moment");
console.log(`Hola desde Webpack! DEVSERVER ${4+4}`);
const relativeTime = ()=> console.log(moment().startOf('day').fromNow());
relativeTime();