
function index (req, res) {
  console.log("hi");
  res.json({greet: 'hi'});
}

module.exports = {
  index: index
};
