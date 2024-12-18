```javascript
db.collection.createIndex( { field: 'text' } );
//Use this to avoid unexpected result
const query = {
  field: { $regex: /pattern/i },
};

db.collection.find(query);
```