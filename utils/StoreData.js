import fs from "fs";
import NewsModel from "../model/NewsModel.js";

async function readDataFromFile() {
  try {
    const currentFileUrl = import.meta.url;
    const filePath = new URL("../data/bse_data.json", currentFileUrl);
    const data = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
}

async function saveDataToDb(data) {
  try {
    await NewsModel.insertMany(data);
  } catch (error) {
    console.error("Error while saving data:", error);
  }
}

async function storeData() {
  try {
    const bseData = await readDataFromFile();
    await saveDataToDb(bseData);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default storeData;
