//~update one record in collection
db.students.updateOne({ major: "actress" }, { $set: { major: "acting" } });
//~update many record in collection
db.students.updateMany({ major: "aactress" }, { $set: { major: "actress" } });

//~replace a record in collection
db.students.replaceOne(
  { major: "Developer" },
  { name: "mohamed abdulla", age: 20, major: "fullstackdeveloper" }
);

//~delete
db.students.deleteMany({ age: { $gte: 50 } });
db.students.deleteOne({ major: "actress" });
