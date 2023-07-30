import StatusCodes from "http-status-codes";
import storeDataHelper from "../utils/StoreData.js";
import NewsModel from "../model/NewsModel.js";

class NewsController {
  async storeData(req, res) {
    try {
      const response = await storeDataHelper();
      return res.status(StatusCodes.OK).json({
        message: "data stored successfully",
        data: response,
        success: true,
        err: {},
      });
    } catch (error) {
      console.log("Error in creating Organization Controller");
      console.log(error);
      return res
        .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: error.message,
          data: {},
          success: false,
          err: error,
        });
    }
  }

  async getAnnouncements(req, res) {
    try {
      const { companyIds, start, end, critical, pastDays } = req.query;
      const query = {};

      if (companyIds) {
        // Parse the companyIds string into an array of integers
        const companyIdArr = companyIds
          .split(",")
          .map((id) => parseInt(id, 10));
        query.SCRIP_CD = { $in: companyIdArr };
      }

      if (start && end) {
        query.NEWS_DT = { $gte: new Date(start), $lte: new Date(end) };
      }

      console.log(critical);
      if (critical == "true") {
        query.CRITICALNEWS = 1;
      }

      if (pastDays) {
        let day = Math.max(parseInt(pastDays), 2)
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - day);
        console.log(pastDate);
        query.NEWS_DT = { $gte: pastDate };
      }

      const announcements = await NewsModel.find(query).sort({
        NEWS_DT: -1,
      });

      return res.status(StatusCodes.OK).json({
        message: "data fetched successfully",
        data: announcements,
        success: true,
        err: {},
      });
    } catch (error) {
      return res
        .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: error.message,
          data: {},
          success: false,
          err: error,
        });
    }
  }
}

export default NewsController;
