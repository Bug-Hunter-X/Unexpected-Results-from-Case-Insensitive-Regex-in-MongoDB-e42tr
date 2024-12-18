# Unexpected Results from Case-Insensitive Regex in MongoDB

This repository demonstrates a common issue encountered when using case-insensitive regular expressions in MongoDB queries.  The problem arises from the interaction between case-insensitive regexes and indexes.  While case-insensitive searches are often convenient, they can significantly impact query performance if not handled carefully.

## The Bug
The provided `bug.js` file contains a simple MongoDB query that uses a case-insensitive regex.  Under certain circumstances (especially with large datasets and indexes), this query might return unexpected results, possibly missing documents or exhibiting unexpectedly slow execution.

## The Solution
The `bugSolution.js` file offers a solution that addresses the performance and correctness issues associated with the original query.  The solution focuses on ensuring that the query efficiently leverages indexes and avoids potential pitfalls related to case-insensitive regex matching.

## How to Reproduce
1. Clone this repository.
2. Ensure you have MongoDB and a Node.js environment set up.
3. Install the MongoDB Node.js driver: `npm install mongodb`
4. Populate a sample collection in your MongoDB database.
5. Run `bug.js` to observe the potentially unexpected behavior.
6. Run `bugSolution.js` to see the improved query execution and correct results.