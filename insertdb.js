//~inserting data in mongodb
//*if you dont specify the _id,it will automatically generate object id
db.students.insertOne({ name: "abd", major: "Developer", age: 20 });
//~we can specify id and also add any thing dtype extra
db.students.insertOne({
  _id: 2,
  name: "mohamed",
  major: "fullstack",
  age: 20,
  awards: ["mern", "fullstack"],
});
db.students.insertOne({
  name: "sam",
  major: "acting",
  age: 30,
  awards: { 2019: "sima", 2020: "behindwoods" },
});
db.students.insertOne({
  name: "elon",
  major: "spacex",
  age: 50,
  awards: ["richestman", "tesla"],
});
db.students.insertOne({
  name: "billgates",
  major: "microsoft",
  age: 50,
  apps: ["msoffice", "powerpoint"],
  startdate: new Date(2020 - 12 - 12),
});
//~insert many at a time
db.students.insertMany([
  { name: "rashmika", major: "actress", age: 25 },
  {
    name: "samantha",
    major: "acting",
    age: 30,
    awards: { 2019: "sima", 2020: "behindwoods" },
  },
]);
