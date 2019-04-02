const Orders = [ 
     {amount: 250},
     {amount: 400},
     {amount: 100},
     {amount: 325}
]

const total = function(arr){
    // for(let i = 0; i < arr.length; i++){
    //     return arr[i].amount += arr[i].amount
    // }
    let sum = 0
    for (let i = 0; i < arr.length; i++){
       sum += arr[i].amount;
    }
    return sum
}

const totals = total(Orders)
console.log(totals)


let totalsOfObject = Orders.reduce(function (a, b) {
  return {amount: a.amount + b.amount};
})


console.log(totalsOfObject)