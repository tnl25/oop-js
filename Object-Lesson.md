1. Instead of using `var`, use `let` if you want to redefine the variable or `const` if you do not need to redefine the variable.
2. Value types: 
    1. Number
    2. String
    3. Boolean
    4. Symbol
    5. undefined
    6. null

3. Reference Types
    1. Object
    2. Function (but it is also object)
    3. Array

4. **Primitives** are copied by their **values**.
5. **Objects** are copied by their **preferences**.

6. **Abstraction** is used to hide the details and show only the essentials. 

7. **Closure** is an inner function that has access to the outer function's variables - scope chain. The closure has access to **three** scope chains: its own scope (variables defined between its curly bracker), outer function's variables, and global variables.

Example of closure:
```
var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

add();
add();
add();
```
The variable **add** is assigned to the return value of a self-invoking function. 
The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

8. Use Object.defineProperty to create getter or setter