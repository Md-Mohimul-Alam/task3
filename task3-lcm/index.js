const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GCD + LCM helpers
function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Your email path
const emailPath = 'mohimreza1234_gmail_com';

// Define route (no /app prefix)
app.get(`/${emailPath}`, (req, res) => {
  const x = parseInt(req.query.x, 10);
  const y = parseInt(req.query.y, 10);

  if (!Number.isInteger(x) || x <= 0 || !Number.isInteger(y) || y <= 0) {
    return res.type('text/plain').send('NaN');
  }

  res.type('text/plain'); // plain text response
  res.send(String(lcm(x, y)));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/${emailPath}`);
});
