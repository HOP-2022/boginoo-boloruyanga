const Link = require("../model/Link");
const crypto = require("crypto");

exports.getLinks = async (req, res, next) => {
  const links = await Link.find({});
  res.status(200).json({
    success: true,
    data: links,
  });
};
exports.createLink = async (req, res, next) => {
  console.log("ajillaa...");
  const random = crypto.randomBytes(5).toString("hex");
  console.log("ajilsaar bn...");
  const link = await Link.create({
    link: req.body.url,
    id: random,
    short: "https://localhost:3000/" + random,
  });
  console.log("duusah ystoi...");
  res.status(200).json({
    success: true,
    data: link,
  });
};

exports.getLink = async (req, res, next) => {
  const link = await Link.findOne({ id: req.params.id });
  res.status(200).json({
    success: true,
    data: link,
  });
};
