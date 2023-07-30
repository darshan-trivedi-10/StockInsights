import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  NEWSID: {
    type: String,
    unique : true
  },
  SCRIP_CD: {
    type: Number,
  },
  XML_NAME: {
    type: String,
  },
  NEWSSUB: {
    type: String,
  },
  DT_TM: {
    type: Date,
  },
  NEWS_DT: {
    type: Date,
  },
  CRITICALNEWS: {
    type: Number,
  },
  ANNOUNCEMENT_TYPE: {
    type: String,
  },
  QUARTER_ID: {
    type: Number,
  },
  FILESTATUS: {
    type: String,
  },
  ATTACHMENTNAME: {
    type: String,
  },
  MORE: {
    type: String,
  },
  HEADLINE: {
    type: String,
  },
  CATEGORYNAME: {
    type: String,
  },
  OLD: {
    type: Number,
  },
  RN: {
    type: Number,
  },
  PDFFLAG: {
    type: Number,
  },
  NSURL: {
    type: String,
  },
  SLONGNAME: {
    type: String,
  },
  AGENDA_ID: {
    type: Number,
  },
  TotalPageCnt: {
    type: Number,
  },
  News_submission_dt: {
    type: Date,
  },
  DissemDT: {
    type: Date,
  },
  TimeDiff: {
    type: String,
  },
  Fld_Attachsize: {
    type: Number,
  },
  SUBCATNAME: {
    type: String,
  },
  AUDIO_VIDEO_FILE: {
    type: String,
  },
});

// Create a Mongoose model based on the schema
const NewsModel = mongoose.model("News", newsSchema);

export default NewsModel;