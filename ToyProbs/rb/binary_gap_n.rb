=begin
  A binary gap within a positive integer N is any maximal sequence of consecutive
  zeros that is surrounded by ones at both ends in the binary representation of N.
  For example, the number 9 has binary representation 1001 and contains a binary
  gap of length 2. The number 529 has binary representation 1000010001 and
  contains two binary gaps: one of length 4 and one of length 3. The number 20
  has binary representation 10100 and contains one binary gap of length 1. The
  number 15 has binary representation 1111 and has no binary gaps. Write a
  function def binary_gap(n) that, given a positive integer N, returns the length
  of its longest binary gap. The function should return 0 if N doesn’t contain a
  binary gap. For example, if N = 1041, the function should return 5, because N
  has binary representation 10000010001 and its longest binary gap is 5.
=end


=begin
  I : integer (any valid whole number)
  O : integer (length of longest binary gap)
  E :
  - empty input - return nill - ruby will throw an exception on invocations with missing arguments
  - non-integer input - return nill
  - infinity
  C : not specified but should be doable in linear time, constant space

  STRATEGY ~ two pointers solution
    convert integer input to binary string
    initialize a longest var to 0
    initialize a current gap length to 0
    initialize a slow pointer to 0
    initialize a fast pointer to 1

    loop while the fast pointer is less than the length of the binary string
      if slow points to a 1 and fast points to a 1 and the current gap length is 0
      OR
      if slow points to 0 and fast points to 1
        increment both pointers
      if slow points to a 1 and fast points to a 1 and the current gap length is not 0
        set longest to max value of longest and current gap length
        re-set current gap length to 0
        advance slow pointer to position of fast pointer
        advance fast pointer to one ahead of slow pointer
      if slow points to a 1 and fast points to a 0
        increment current gap length
        increment fast pointer

  STRATEGY ~ one-line functional solution
    convert to binary
    split on 1s
    slice
    map on gap lengths
=end

# this solution is linear time + constant space
def binary_gap(n)
  binary = n.to_s(2)

  longest = 0
  current_gap_length = 0
  slowPointer = 0
  fastPointer = 1

  while fastPointer < binary.length
    if
      binary[slowPointer] == '1' &&
      binary[fastPointer] == '1' &&
      current_gap_length == '0' or
      binary[slowPointer] == '0' &&
      binary[fastPointer] == '1'

      slowPointer += 1
      fastPointer += 1
    end

    if binary[slowPointer] == '1' && binary[fastPointer] == '1' && current_gap_length != '0'
      longest = [longest, current_gap_length].max
      current_gap_length = 0
      slowPointer = fastPointer
      fastPointer = slowPointer + 1
    end

    if binary[slowPointer] == '1' && binary[fastPointer] == '0'
      current_gap_length += 1
      fastPointer += 1
    end
  end

  longest
end

# TESTS
p binary_gap(0) # 0
p binary_gap(1) # 0
p binary_gap(2) # 0
p binary_gap(3) # 0
p binary_gap(4) # 0
p binary_gap(5) # 1
p binary_gap(100) # 2
p binary_gap(1041) # 5
p binary_gap(100000) # 4
