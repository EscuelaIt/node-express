const moment = require("moment");

const relativeTime = moment().startOf('day').fromNow();

console.log(relativeTime);