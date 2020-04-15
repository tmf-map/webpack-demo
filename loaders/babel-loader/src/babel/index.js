/**
 * @param {array} arr
 * @return {array}
 */
let threeSum = (arr) => {
  let res = [];
  if (arr.length < 3) {
    return [];
  }
  arr.sort((a, b) => a - b); // 数组升序排列

  let len = arr.length;

  if (arr[0] > 0 || arr[len - 1] < 0) {
    // 如果数组全部小于0或者全部大于0，则不可能存在三个数的和为0
    return [];
  }
  for (let i = 0; i < len; i++) {
    // 按顺序取arr中的元素，作为第一个加数
    if (arr[i] > 0) {
      // 如果第一个加数大于0，则总和必然大于0，所以结束循环
      break;
    }
    if (i > 0 && arr[i] === arr[i - 1]) {
      // 如果当前数值与前一个数值相同，为了避免产生重复的结果，跳过本轮循环
      continue;
    }
    // 取剩余数字两端的值，作为另外两个加数
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      // 避免重复取值
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        res.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }

  return res;
};

export default threeSum;
