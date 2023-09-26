const buy_low_sell_high = (lst) => {
  // You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your
  // profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
  // buy_low_sell_high([7,1,5,3,6,4]) returns 5
  // buy_low_sell_high([7,6,4,3,1]) returns 0

  let l_pointer = 0;
  let r_pointer = 1;
  let maxProfit = 0;

  // Let's go through the list one by one with two pointer (make sure that the r_pointer does not go out of bounds)
  // Check is the value at the left pointer is smaller than the value at the right pointer
  // If this is the case then it means we've found a case where we can buy low but sell high
  // Calculate the profit and then compare it to the max profit

  // if the value left pointer is not smaller than the value at the right pointer then update the l_pointer to the r_pointer
  // Finally return the max profit

  while (r_pointer < lst.length) {
    if (lst[l_pointer] < lst[r_pointer]) {
      const profit = lst[r_pointer] - lst[l_pointer];
      maxProfit = max(maxProfit, profit);
    } else {
      l_pointer = r_pointer;
    }
  }

  return maxProfit;
};

console.log(buy_low_sell_high([7, 1, 5, 3, 6, 4]));
