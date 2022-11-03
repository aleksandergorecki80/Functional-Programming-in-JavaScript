const orders = [
  { amount: 40 },
  { amount: 80 },
  { amount: 70 },
  { amount: 30 },
  { amount: 20 },
];

const total = orders.reduce((sum, order) => {
  console.log(sum, order);
  return sum + order.amount;
}, 0);

console.log(total);
