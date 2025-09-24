const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GCD + LCM helpers using BigInt to avoid overflow
function gcd(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}
function lcm(a, b) {
  return (BigInt(a) * BigInt(b)) / gcd(a, b);
}

// Your email path (replace non-alphanumerics with "_")
const emailPath = 'mohimreza1234_gmail_com';

// Route with /app prefix
app.get(`/app/${emailPath}`, (req, res) => {
  const x = parseInt(req.query.x, 10);
  const y = parseInt(req.query.y, 10);

  if (isNaN(x) || x <= 0 || isNaN(y) || y <= 0) {
    return res.type('text/plain').send('NaN');
  }

  res.type('text/plain').send(lcm(x, y).toString());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/app/${emailPath}`);
});
