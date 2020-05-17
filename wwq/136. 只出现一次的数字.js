var singleNumber = function(nums) {
  //  let a = 0
  //  for(let i =0 ;i<nums.length;i++){
  //     a ^= nums[i]
  //  }
  //  return a
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (obj[item] != undefined) {
      delete obj[item];
    } else {
      obj[item] = item;
    }
  }
  return Object.keys(obj)[0];
};
