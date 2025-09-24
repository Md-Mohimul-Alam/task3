const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GCD + LCM helpers using BigInt
function gcd(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

function lcm(a, b) {
  return (BigInt(a) * BigInt(b)) / gcd(a, b);
}

// Your email path (replace non-alphanumeric characters with "_")
const emailPath = 'mohimreza1234_gmail_com';

// Define route (no /app prefix)
app.get(`/${emailPath}`, (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);

  // Check if x and y are natural numbers
  if (!Number.isInteger(x) || x <= 0 || !Number.isInteger(y) || y <= 0) {
    return res.type('text/plain').send('NaN');
  }

  res.type('text/plain').send(lcm(x, y).toString());
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/${emailPath}`);
});
