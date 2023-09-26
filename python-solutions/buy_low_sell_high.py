def buy_low_sell_high(lst: list[int]) -> int:
    """
    You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    >>> buy_low_sell_high([7,1,5,3,6,4])
    5

    >>> buy_low_sell_high([7,6,4,3,1])
    0
    """

    l, r = 0, 1
    maxP = 0

    # Let's go through the list one by one with two pointer (make sure that the r_pointer does not go out of bounds)
    # Check is the value at the left pointer is smaller than the value at the right pointer
    # If this is the case then it means we've found a case where we can buy low but sell high
    # Calculate the profit and then compare it to the max profit
    # If the value left pointer is not smaller than the value at the right pointer then update the l_pointer to the r_pointer
    # Finally return the max profit

    while r < len(lst):
        if lst[l] < lst[r]:
            profit = lst[r] - lst[l]
            maxP = max(maxP, profit)
        else:
            l = r
        r += 1
    return maxP


if __name__ == "__main__":
    print(buy_low_sell_high([7, 1, 5, 3, 6, 4]))
