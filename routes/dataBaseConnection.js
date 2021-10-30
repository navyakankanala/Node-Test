const MongoClient = require("mongodb").MongoClient;
const constants = require("../constants");
const mongoUrl = constants.mongoUrl;
// const mongoUrl =
//   "mongodb+srv://Navya:Sreeman123@cluster0.ezd3x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
connect = (url) => {
  return MongoClient.connect(url, { useUnifiedTopology: true }).then((client) =>
    client.db()
  );
};

module.exports = async () => {
  let databases = await Promise.all([connect(mongoUrl)]);

  return databases[0];
};
