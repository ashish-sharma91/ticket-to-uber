// 35. Search Insert Position

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0


var searchInsert = function (nums, target) {
    let index = binarySearch(nums, target);
    console.log(index);
    if (index > -1) return index;
    else {
        console.log(index);
    }
};

var binarySearch = function (arr, val) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    let mid = Math.floor((lastIndex + firstIndex) / 2);

    while (firstIndex <= lastIndex) {
        mid = Math.floor((lastIndex + firstIndex) / 2);
        if (val > arr[mid]) {
            firstIndex = mid + 1;
        } else if (val < arr[mid]) {
            lastIndex = mid - 1;
        } else {
            return mid;
        }
    }
    return firstIndex;
};


searchInsert([1, 3, 5, 6], 4);
