# Recursion
## The call stack
All programming languages has a data structure responsible for managing the order of operations executed by the interpreter.

In javascript this data structure is a stack. More specifically it's called the **call stack**.

Any time a function is invoked its placed at the top of the call stack.

When javascript sees the return keyword or when the function ends, the compiler removes that function call from the top of the stack. 
