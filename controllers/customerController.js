
function index (req, res) {
  res.json({greet: 'hi'});
}

module.exports = {
  index: index
};
