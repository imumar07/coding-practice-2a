const addDays = require("date-fns/addDays");
var format = require("date-fns/format");
function change(num) {
  let data = addDays(new Date(2020, 7, 22), num);
  return format(data, "dd-MM-yyyy");
}

module.exports = change;
