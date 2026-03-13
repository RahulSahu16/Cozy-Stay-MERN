// =====================================
// IMPORTS
// =====================================

const User = require("../models/user");
const Home = require("../models/home");
const path = require("path");


// =====================================
// HOME PAGE CONTROLLERS
// =====================================

// GET: Homepage
// exports.getHomePage = async (req, res) => {
//   try {

//     const homes = await Home.find();

//     res.status(200).json({
//       success: true,
//       homes: homes
//     });

//   } catch (err) {

//     console.log("Error loading homepage:", err);

//     res.status(500).json({
//       success: false,
//       message: "Failed to load homepage"
//     });

//   }
// };


// GET: All Homes
exports.getAllHomes = async (req, res) => {
  try {

    const homes = await Home.find().lean();

    res.status(200).json({
      success: true,
      count : homes.length,
      homes: homes
    });

  } catch (err) {

    console.log("Error fetching homes:", err);

    res.status(500).json({
      success: false,
      message: "Error fetching homes"
    });

  }
};


// GET: Home Details
exports.getHomeDetails = async (req, res) => {
  try {

    const homeId = req.params.homeId;

    const home = await Home.findById(homeId);

    if (!home) {

      return res.status(404).json({
        success: false,
        message: "Home not found"
      });

    }

    res.status(200).json({
      success: true,
      home: home
    });

  } catch (err) {

    console.log("Error fetching home details:", err);

    res.status(500).json({
      success: false,
      message: "Error fetching home details"
    });

  }
};


// =====================================
// FAVOURITES CONTROLLERS
// =====================================


// POST: Add Home to Favourites
exports.postaddToFavourites = async (req, res) => {
  try {

    const homeId = req.body.homeId;
    const userId = req.session.user._id;

    const user = await User.findById(userId);

    if (!user.favouriteHomes.includes(homeId)) {

      user.favouriteHomes.push(homeId);
      await user.save();

    }

    res.status(200).json({
      success: true,
      message: "Home added to favourites"
    });

  } catch (err) {

    console.log("Error adding favourite:", err);

    res.status(500).json({
      success: false,
      message: "Error adding to favourites"
    });

  }
};


// GET: Favourites Page
exports.getFavourites = async (req, res) => {
  try {

    const userId = req.session.user._id;

    if (!req.session.user) {
      return res.status(401).json({
        success: false,
        message: "User not logged in"
      });
    }
    
    const user = await User.findById(userId)
      .populate("favouriteHomes");

    res.status(200).json({
      success: true,
      favourites: user.favouriteHomes
    });

  } catch (err) {

    console.log("Error loading favourites:", err);

    res.status(500).json({
      success: false,
      message: "Error loading favourites"
    });

  }
};


// POST: Remove Home from Favourites
exports.postRemoveFromFavourites = async (req, res) => {
  try {

    const homeId = req.params.homeId;
    const userId = req.session.user._id;

    const user = await User.findById(userId);

    user.favouriteHomes = user.favouriteHomes.filter(
      id => id.toString() !== homeId
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Home removed from favourites"
    });

  } catch (err) {

    console.log("Error removing favourite:", err);

    res.status(500).json({
      success: false,
      message: "Error removing from favourites"
    });

  }
};


// =====================================
// HOUSE RULES (PDF FILE)
// =====================================

exports.getHouseRules = (req, res, next) => {

  const filePath = path.join(__dirname, "..", "rules", "CozyStayRules.pdf");

  res.sendFile(filePath, (err) => {

    if (err) {

      console.log("Error sending rules PDF:", err);

      res.status(500).json({
        success: false,
        message: "Error loading house rules"
      });

    }

  });

};