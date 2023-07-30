import StatusCodes from "http-status-codes";
import NewsController from "./NewsController";
import storeDataHelper from "../utils/StoreData.js";
import NewsModel from "../model/NewsModel.js";

// Mock the dependencies
jest.mock("../utils/StoreData.js");
jest.mock("../model/NewsModel.js");

describe("NewsController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("storeData", () => {
    it("should store data successfully and return status 200", async () => {
      const responseData = [];
      storeDataHelper.mockResolvedValue(responseData);

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const req = {};

      await NewsController.storeData(req, res);

      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith({
        message: "data stored successfully",
        data: responseData,
        success: true,
        err: {},
      });
    });

    it("should handle errors and return status 500 if storeDataHelper rejects", async () => {
      const errorMessage = "Error in storing data";
      storeDataHelper.mockRejectedValue(new Error(errorMessage));

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const req = {};

      await NewsController.storeData(req, res);

      expect(res.status).toHaveBeenCalledWith(
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      expect(res.json).toHaveBeenCalledWith({
        message: errorMessage,
        data: {},
        success: false,
        err: expect.any(Error),
      });
    });
  });

  describe("getAnnouncements", () => {
    it("should fetch announcements with valid query parameters and return status 200", async () => {
      // Mock request with valid query parameters
      const req = {
        query: {
          companyIds: "1,2,3",
          start: "2023-07-01",
          end: "2023-07-30",
          critical: "true",
          pastDays: "7",
        },
      };

      // Mock NewsModel.find to return a list of announcements
      const announcements = [
        {
          /* Mock your announcement data here */
        },
      ];
      NewsModel.find.mockResolvedValue(announcements);

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await NewsController.getAnnouncements(req, res);

      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith({
        message: "data fetched successfully",
        data: announcements,
        success: true,
        err: {},
      });
    });

    it("should handle errors and return status 500 if NewsModel.find rejects", async () => {
      // Mock request with valid query parameters
      const req = {
        query: {
          companyIds: "1,2,3",
          start: "2023-07-01",
          end: "2023-07-30",
          critical: "true",
          pastDays: "7",
        },
      };

      const errorMessage = "Error fetching announcements";
      NewsModel.find.mockRejectedValue(new Error(errorMessage));

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await NewsController.getAnnouncements(req, res);

      expect(res.status).toHaveBeenCalledWith(
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      expect(res.json).toHaveBeenCalledWith({
        message: errorMessage,
        data: {},
        success: false,
        err: expect.any(Error),
      });
    });
  });
});
