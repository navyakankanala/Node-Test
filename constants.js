const dataBaseName = "Student_Info";

const collections = {
  SignIn: "SignIn",
  bookmarksList: "bookmarksList",
  downloadedList: "downloadedList",
  enrolledCoursesList: "enrolledCoursesList",
};

const mongoUrl =
  "mongodb+srv://Navya:Sreeman123@cluster0.ezd3x.mongodb.net/Student_Info?retryWrites=true&w=majority";

module.exports = { dataBaseName, collections, mongoUrl };
