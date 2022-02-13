// 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];
    let ans = [];
    let phone = {};
    phone["2"] = "abc";
    phone["3"] = "def";
    phone["4"] = "ghi";
    phone["5"] = "jkl";
    phone["6"] = "mno";
    phone["7"] = "pqrs";
    phone["8"] = "tuv";
    phone["9"] = "wxyz";
    recursive(digits, ans, phone, "", 0);
    return ans;
};

let recursive = function (digits, ans, phone, curr, i) {
    if (curr.length === digits.length) {
        ans.push(curr);
        return;
    }
    let string = phone[digits[i]];
    for (let j = 0; j < string.length; j++) {
        recursive(digits, ans, phone, curr + string[j], i + 1);
    }
};





// tried again
module.exports = {
    //param A : string
    //return a array of strings
    letterCombinations: function (A) {
        let phone = {};
        phone["0"] = "0";
        phone["1"] = "1";
        phone["2"] = "abc";
        phone["3"] = "def";
        phone["4"] = "ghi";
        phone["5"] = "jkl";
        phone["6"] = "mno";
        phone["7"] = "pqrs";
        phone["8"] = "tuv";
        phone["9"] = "wxyz";
        let ans = [];
        for (let i = 0; i < phone[A[0]].length; i++) {
            this.recursion(A, phone, ans, 1, phone[A[0]][i]);
        }
        return ans;
    },
    recursion: function (A, phone, ans, i, currSpell) {
        if (currSpell.length === A.length) {
            ans.push(currSpell);
            return;
        }
        for (let j = 0; j < phone[A[i]].length; j++) {
            this.recursion(A, phone, ans, i + 1, currSpell + phone[A[i]][j]);
        }
    }
};
