const playwright = require("playwright");

const capController = {
  async getCapture(req, res) {
    try {
      const uri = req.query.uri;
      console.log("URL:" + uri);
      res.contentType("image/jpeg");
      res.send(await createScreenCapture(uri));
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

const createScreenCapture = async (uri) => {
  try {
    const chrome = await playwright.chromium.launch();
    const chromePage = await chrome.newPage();
    await chromePage.goto(uri);
    const buffer = await chromePage.screenshot();
    await chrome.close();
    return buffer;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = capController;
