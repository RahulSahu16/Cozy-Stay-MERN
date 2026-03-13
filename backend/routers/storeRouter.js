const express = require("express");
const router = express.Router();

const storeController = require("../controllers/storeController");

// Homes API
router.get("/api/homes", storeController.getAllHomes);
router.get("/api/homes/:homeId", storeController.getHomeDetails);

// Favourites API
router.get("/api/favourites", storeController.getFavourites);
router.post("/api/favourites", storeController.postaddToFavourites);
router.delete("/api/favourites/:homeId", storeController.postRemoveFromFavourites);

// Rules API
router.get("/api/rules", storeController.getHouseRules);

module.exports = router;