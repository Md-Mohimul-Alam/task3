const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GCD + LCM helpers
function gcd(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

function lcm(a, b) {
  return (BigInt(a) * BigInt(b)) / gcd(a, b);
}

// Email path
const emailPath = 'mohimreza1234_gmail_com';

// Route with /app/ prefix
app.get(`/app/${emailPath}`, (req, res) => {
  const x = req.query.x;
  const y = req.query.y;

  // Validate natural numbers (positive integers)
  if (!/^[1-9]\d*$/.test(x) || !/^[1-9]\d*$/.test(y)) {
    return res.type('text/plain').send('NaN');
  }

  res.type('text/plain').send(lcm(x, y).toString());
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/app/${emailPath}`);
});
