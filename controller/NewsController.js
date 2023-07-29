import StatusCodes from "http-status-codes";
import storeData from "../utils/StoreData.js";

class NewsController {
  async storeData(req, res) {
    try {
      const response = await storeData();
      return res.status(StatusCodes.OK).json({
        message: "Data Stored SuccesFully",
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
}

export default NewsController;