/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i + 1] === nums[i]) {
            nums.splice(i+1, 1);
           i--;
        }  
    }
    return nums.length;
}

/**
 * 思路
 * 后一项和当前项比较，相同的话就把后一项给删除；删除了一项，数组的长度减一了，所以当前的i减一
 * 比如第1项和第1项相同，删除完第1项后，执行i--,变成了-1 ，然后执行i++；
 * i变成了0，第二轮的时候，第0项又和新的第1项进行比较了；
 */