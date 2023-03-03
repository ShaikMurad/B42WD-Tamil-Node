 --- Create Table






-- Stage 1 - filter urgent orders


Select * from Orders
where status = "urgent"

[
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
];

-- Stage 2 -- group productName & sum quantity

Select productName _id,sum (quantity)as totalUrgentQuantity from Orders
where status = "urgent"
group by productName


-- Output

[
    {_id:"Steel beam", totalUrgentQuantity:50},
    {_id:"Iron rod", totalUrgentQuantity:60},

]
