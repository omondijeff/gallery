var config = {};

// Update to have your correct username and password
config.mongoURI = {
  production:
    "mongodb+srv://admin:#Moring2022@cluster0.e6lmfea.mongodb.net/?retryWrites=true&w=majority",
  development:
    "mongodb+srv://admin:#Moring2022@cluster0.e6lmfea.mongodb.net/?retryWrites=true&w=majority",
  test: "mongodb+srv://admin:#Moring2022@cluster0.e6lmfea.mongodb.net/?retryWrites=true&w=majority",
};
module.exports = config;
