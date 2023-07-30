import express from "express";
import NewsController from "../controller/NewsController.js";

const router = express.Router();

const newsController = new NewsController();

router.get("/dataprocessing/start", newsController.storeData);

router.get("/announcements", newsController.getAnnouncements);

export default router;
