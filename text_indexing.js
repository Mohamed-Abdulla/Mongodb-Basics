//?text indexes is used to allow text searching in collection like text  query

// db.stores.insertMany([
//   { _id: 1, name: "Java Hut", description: "Coffee and cakes" },
//   { _id: 2, name: "Burger Buns", description: "Gourmet hamburgers" },
//   { _id: 3, name: "Coffee Shop", description: "Just coffee" },
//   { _id: 4, name: "Clothes Clothes Clothes", description: "Discount clothing" },
//   { _id: 5, name: "Java Shopping", description: "Indonesian goods" },
// ]);

db.stores.createIndex({ name: "text", description: "text" });

//~it searchs all the text called 'coffee' in our created indexes such as name and description
db.stores.find({ $text: { $search: "Coffee" } });

//~like we search in search bar.it gives all the related info we searched
db.stores.find({ $text: { $search: "Java Hut Coffee" } });
//~score is like how close it related to our given query
db.stores
  .find(
    { $text: { $search: "java hut coffee" } },
    { score: { $meta: "textScore" } }
    //rank results by how close it we search for our term
  )
  .sort({ score: { $meta: "textScore" } });
