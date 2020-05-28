var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[low] <= nums[mid]) {
      if (target < nums[mid] && target >= nums[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};
