
//  // Input array contain some elements.
//  var array = [10, 20, 24, 30, 40, 50];

//  // Method (return element > 10).
//  var found = array.find(function (element) {
//   return element > 20;
//  });

//  // Printing desired values.
//  console.log(found);


 let box1 = [50,60,55,80,100,11];
//  let result = box1.find(function(x){
//     return x < 55;
//  })
//  console.log(result)

let result = box1.findIndex(function(x){
    return x==80;
})
console.log(result)