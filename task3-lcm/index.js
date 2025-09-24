const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// LCM helper functions
function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Your email formatted: replace all non-alphanumeric chars with "_"
const emailPath = 'md_smith2_mail_srv_com';

app.get(`/app/${emailPath}`, (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);

  if (!Number.isInteger(x) || x <= 0 || !Number.isInteger(y) || y <= 0) {
    return res.send('NaN');
  }

  res.send(String(lcm(x, y)));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/app/${emailPath}`);
});
