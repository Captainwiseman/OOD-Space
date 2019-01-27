const { parse } = require('url')
const currDate = new Date();
const dayOfMonth = currDate.getDate();

module.exports = (req, res) => {
  const query = parse(req.url, true)
  res.end(`Day is: ${dayOfMonth}!`)
}
