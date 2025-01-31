// 973. K Closest Points to Origin
// https://leetcode.com/problems/k-closest-points-to-origin/

// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)



// Example 1:

// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation: 
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)


// Note:

// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000
// Accepted


/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    let arr = [];
    let ans = [];

    for (let i = 0; i < points.length; i++) {
        let x = points[i][0];
        let y = points[i][1];
        arr.push({ distance: Math.sqrt(x * x + y * y), point: [x, y] });
    }
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }

    let heapLen = arr.length;
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (count < K) {
            count++;
            swap(arr, 0, heapLen - 1);
            ans.push(arr[i].point);
            heapLen--;
            heapify(arr, 0, heapLen);
        }
    }
    return ans;

};

let heapify = function (arr, i, heapLen) {
    let parent = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heapLen && arr[left].distance < arr[parent].distance) {
        parent = left;
    }

    if (right < heapLen && arr[right].distance < arr[parent].distance) {
        parent = right;
    }

    if (i !== parent) {
        swap(arr, i, parent);
        heapify(arr, parent, heapLen);
    }
};

let swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};





