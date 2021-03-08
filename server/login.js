export default (req, res) => {
  console.log(req.method)
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
    console.log(body);
    res.end(body);
    // res.end('ok');
  });
}