const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [User, Comment],
  });

  let posts = postData.map((post) => post.get({ plain: true }));

  res.render("homepage", {
    posts,
    logged_in: req.session.logged_in,
    title: "homepage",
    activie: { homepage: true },
  });
});

module.exports = router;
