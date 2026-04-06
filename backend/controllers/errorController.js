exports.getError = (req, res) => {
  res.status(500).json({
    success: false,
    message: "Something went wrong"
  });
};