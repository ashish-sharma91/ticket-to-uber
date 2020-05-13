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
