//Question 1

var PI = 3.14;
PI = 42; // stop me from doing this!

//Answer
const PI = 3.14;
PI = 42; // Error!




//What is the difference between var and let?

You can reassign and redeclare var, but you can't redeclare using the let keyword. You can access a hoisted variable with var. 

//What is the difference between var and const?

You can reassign and redeclare var, but you can't redeclare or reassign using const. You can access a hoisted variable with var. 

//What is the difference between let and const?

You can reassign let, but you can't redeclare or reassign using const.

//What is hoisting?

It’s the way that we explain how the JS compiler works. Variables are lifting or “hoisted” to the top of the scope they are declared in. When using var, you can access the variable name and it’s undefined value before it is used later on.

Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.