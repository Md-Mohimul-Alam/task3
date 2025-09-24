const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GCD + LCM using BigInt
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

// Route
app.get(`/app/${emailPath}`, (req, res) => {
  const x = req.query.x;
  const y = req.query.y;

  // Validate strictly as natural numbers (1,2,3,...)
  if (!/^[1-9]\d*$/.test(x) || !/^[1-9]\d*$/.test(y)) {
    return res.type('text/plain').send('NaN');
  }

  res.type('text/plain').send(lcm(x, y).toString());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/app/${emailPath}`);
});
