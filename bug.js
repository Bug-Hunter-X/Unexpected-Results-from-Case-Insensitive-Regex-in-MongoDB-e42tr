```javascript
const query = {
  field: { $regex: /pattern/i },
};

// Find documents
db.collection.find(query);
```