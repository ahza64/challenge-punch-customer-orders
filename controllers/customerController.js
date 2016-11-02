
function index (req, res) {
  res.json({name: 'david'});
}

module.exports = {
  index: index
};
