//~do all bulk insert/update/delete /replaace one

db.students.bulkWrite(
  [
    {
      insertOne: {
        document: {
          name: "Andrew",
          major: "Architecture",
          gpa: 3.2,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: "Terry",
          major: "Math",
          gpa: 3.8,
        },
      },
    },
    {
      updateOne: {
        filter: { name: "Terry" },
        update: { $set: { gpa: 4.0 } },
      },
    },
    { deleteOne: { filter: { name: "mohamed abdulla" } } },
    {
      replaceOne: {
        filter: { name: "mohamed" },
        replacement: { name: "Genny", major: "Counsling", gpa: 2.4 },
      },
    },
  ],
  { ordered: false }
);
