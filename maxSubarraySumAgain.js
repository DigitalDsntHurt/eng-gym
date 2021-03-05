const maxSubArraySum = (arr, n) => {


    let maxSum = arr.slice(0, n).reduce((num, acc) => num + acc);
    let tmp = maxSum;

    let start = 1;
    let end = n;

    while (start < arr.length - (n - 1)) {
      tmp = tmp - arr[start] + arr[end + 1]
      maxSum = Math.max([maxSum, tmp])
      start++;
      end++;
    }

    return maxSum;
};

console.log(maxSubArraySum([100,200,300,400], 2))
