const protect = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(404).json({ message: "ta ehleed newtreh ystoi" });
    }
    console.log(req.headers.authorization);
    next();
  } catch (e) {
    return res
      .status(404)
      .json({ message: "email esvel nuuts ud buruu baina" });
  }
};

module.exports = protect;
