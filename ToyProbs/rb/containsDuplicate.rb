=begin
  FROM : https://leetcode.com/problems/contains-duplicate/

  Given an integer array nums, return true if any value appears at least twice
  in the array, and return false if every element is distinct.

  I : array of nums
  O : boolean ~ whether or not all elements are distinct
  E :
   - no input
   - non-array input
   - empty array input
   - array contains something other then nums
  C :
   - linear time
   - constant space

  STRATEGY
  sort the array
  two pointers at 0th and 1st indices
  if values at pointers are equal
    return true

  if values at pointers are not equal
    increment both pointers


=end

def contains_duplicate(nums)
  nums.sort
end

contains_duplicate([1,2,3,1])
contains_duplicate([1,2,3,4])
contains_duplicate([1,1,1,3,3,4,3,2,4,2])
