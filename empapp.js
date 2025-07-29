var express = require("express");
var app = express();
const PORT = 8000

//Create web service /employee to perform following operations
/**
1. get => to get all employees records
2. post => to insert(push) new employee record in array
3. put => to update employee's salary
4. delete => to delete employee record from array based on id
*/
app.get('/', (req,res)=>{
    console.log('post request');
    res.send("HELLO");
});
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});