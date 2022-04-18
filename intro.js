// `It is a cross platform opensource document-oriented database management system  and is also classified as a cross platform
// `no-sql database.

// `It is fast and flexible
// `mongod-for connecting mongodo community server using cmd
// `mongo --host localhost:27017  -connecting to host using cmd

//~> use dbname
//~ > db.createCollection("students")
//~ > db.students.drop()

// ~store db like bson format -key value pairs

const datatypes = {
  string: "String of text",
  int: 405,
  double: 3.223,
  boolean: true, //false,
  array: [1, 2, 3],
  object: { attr1: "attr1", attr2: "attr2" },
  date: new Date("<YYYY-mm-dd>"),
  object_id: "<ObjectId>",
  no_value: null,
};
//?Additional datatypes
//*Timestamp
//*Binary data
//*Regular expressions
//*JS
