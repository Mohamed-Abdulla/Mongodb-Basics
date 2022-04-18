//~grab all the records from the collection
db.students.find({}, { _id: 0 }); //1st {} get all the data and 2nd {} skips what we dont want to see

//~limiting results
db.students.find({}, { _id: 0 }).limit(3);

//~sort results -- ascending-(1),descending-(-1)
db.students.find({}, { _id: 0 }).sort({ age: -1, name: 1 }); //sort by name

//~filter results --and logic
db.students.find({ major: "acting", name: "sam" }, { _id: 0 });

//~Final all students who are acting majors or named samantha
db.students.find(
  { $or: [{ major: "acting" }, { name: "samantha" }] },
  { _id: 0 }
);

//~Find all the students whose age is above 20
db.students.find({ age: { $gt: 20 } }, { _id: 0 });

//~Find all the students whose age is less than and equal to 30
db.students.find({ age: { $lte: 30 } }, { _id: 0 }).sort({ age: -1 });

//~$eq-equalto,$ne-notequalto,$lt-lesserthan,$gt-greater than,$gte-greater thanequalto

//~find by name
db.students.find({ name: { $in: ["samantha", "rashmika"] } }, { _id: 0 });
//~$nin -give all name without samantha and rashmika
db.students.find({ name: { $nin: ["samantha", "rashmika"] } }, { _id: 0 });

//~ check if who has awards-exists
db.students.find({ awards: { $exists: true } }, { _id: 0 });

//~get name fields which has string(type:2) --search the datatype in internet
db.students.find({ awards: { $type: 4 } }, { _id: 0 });

//~get specific array element using index num
db.students.find({ "awards.0": "mern" }, { _id: 0 });

//~get array which has greater than 80
db.students.find({ grades: { $elemMatch: { $gte: 80 } } }, { _id: 0 });

//~get array which has the particular size
db.students.find({ awards: { $size: 2 } }, { _id: 0 });
