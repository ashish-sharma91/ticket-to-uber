// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/

// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// TODO: Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let maxLen = Math.max(s.length, t.length);

    let sArr = [];
    let tArr = [];

    for (let i = 0; i < maxLen; i++) {
        if (i < s.length) {
            if (sArr.length && s[i] === '#') {
                sArr.pop();
            } else if (s[i] !== '#') {
                sArr.push(s[i]);
            }
        }

        if (i < t.length) {
            if (tArr.length && t[i] === '#') {
                tArr.pop();
            } else if (t[i] !== '#') {
                tArr.push(t[i]);
            }
        }
    }
    if (sArr.length !== tArr.length) return false;

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) return false;
    }
    return true;
};





// arroach II
// O(n) time and O(1) space


/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    while (i >= 0 || j >= 0) {
        let skipS = 0;
        while (i >= 0) {
            if (s[i] === "#") {
                skipS++;
                i--;
            } else if (s[i] !== "#" && skipS > 0) {
                i--;
                skipS--;
            } else {
                break;
            }
        }

        let skipT = 0;
        while (j >= 0) {
            if (t[j] === "#") {
                skipT++;
                j--;
            } else if (t[j] !== "#" && skipT > 0) {
                j--;
                skipT--;
            } else {
                break;
            }
        }

        if (i >= 0 && j >= 0 && s[i] !== t[j]) {
            return false;
        }
        if ((i >= 0 && j < 0) || (i < 0 && j >= 0)) {
            return false;
        }
        i--;
        j--;
    }
    return true;
};
