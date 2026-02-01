class Solution {
  constructor() {
    // empty constructor
  }
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let hashmp = {
      // 3: 0,
      // 4: 1,
      // 5: 2
    }
    for (let i = 0; i < nums.length; ++i) {
      hashmp[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; ++i) {
      let difference = target - nums[i];
      if (hashmp[difference] !== undefined && hashmp[difference] !== i) {
        return [i, hashmp[difference]];
      }
    }

    return [NaN, NaN];
  }
}

import { createInterface } from 'readline';
let vars = [];
const rl = createInterface({
  input: process.stdin,
  // output: process.stdout // outputs the input to console.log
});

rl.on('line', (line) => {  // Process each line as it is read
  vars.push(line);
});

rl.on('close', () => {   // Finished reading input line by line.
  const mySolution = new Solution();
  const nums = vars[0].slice(1, -1).split(',').map(Number);
  const target = Number(vars[1]);

  // console.log(nums, target);
  console.log(mySolution.twoSum(nums, target));

});


