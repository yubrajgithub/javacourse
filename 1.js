// alert("hellow yubraj tme kasto caring xau humble xau I love you");


// ### 2.1 Hello World!
// To display a simple message, you can use:
// ```javascript
// alert("Hello world!");
// ```

// ### 2.2 Code Structure
// **Statements**: These are commands that perform actions. Multiple statements can be separated by a semicolon.
// ```javascript
// alert("Hello"); alert("World");
// ```

// **Semicolons**: Often optional if a line break exists, but there are exceptions.
// ```javascript
// alert('Hello')
// alert('World')
// ```
// In cases like this, JavaScript interprets the line break as a semicolon automatically.

// However, if the statement is split into multiple lines, the semicolon might be required:
// ```javascript
// alert(3 +
//     1
//     + 2);
// ```

// ### 2.3 The Modern Mode: "use strict"
// **"use strict"** enables modern JavaScript features and stricter parsing.
// ```javascript
// "use strict";
// x = 3.14; // Throws ReferenceError: x is not declared
// ```
// Classes and modules in modern JavaScript automatically enable strict mode, so `"use strict"` isn't necessary within them.

// ### 2.4 Variables
// Variables can be declared using `let`, `const`, or `var` (less common now).

// **Declaration and Assignment**:
// ```javascript
// let message = 'Hello!';
// alert(message); // Hello!
// ```
// You can also declare multiple variables in one line:
// ```javascript
// let user = 'John', age = 25, message = 'Hello';
// ```

// **Variable Naming**:
// - Names can include letters, digits, `$`, and `_`.
// - Names cannot start with a digit.
// ```javascript
// let userName;
// let $ = 1;
// let _ = 2;
// ```

// **Constants**: Use `const` to declare a constant.
// ```javascript
// const myBirthday = '18.04.1982';
// ```

// ### 2.5 Data Types
// **Number**: Represents both integers and floating points.
// ```javascript
// let n = 123;
// n = 12.345;
// ```
// **Special Numeric Values**: `Infinity`, `-Infinity`, and `NaN`.

// **BigInt**: Used for integers of arbitrary length.
// ```javascript
// const bigInt = 1234567890123456789012345678901234567890n;
// ```

// **String**: Can be enclosed in single, double, or backticks for template literals.
// ```javascript
// let str = "Hello";
// let phrase = `can embed another ${str}`;
// ```

// **Boolean**: Represents true/false values.
// ```javascript
// let isGreater = 4 > 1; // true
// ```

// **Null and Undefined**:
// - `null` is an explicit absence of a value.
// - `undefined` means a variable has been declared but not assigned.
// ```javascript
// let age = null;
// let age; // undefined
// ```

// **typeof Operator**: Returns the type of the operand.
// ```javascript
// typeof undefined // "undefined"
// typeof 0 // "number"
// ```

// ### 2.6 Interaction: `alert`, `prompt`, `confirm`
// - `alert`: Displays a message.
// - `prompt`: Asks the user for input.
// - `confirm`: Asks for confirmation.
// ```javascript
// alert("Hello");
// let age = prompt('How old are you?', 100);
// let isBoss = confirm("Are you the boss?");
// ```

// ### 2.7 Type Conversion
// **String Conversion**:
// ```javascript
// let value = true;
// value = String(value); // "true"
// ```

// **Numeric Conversion**:
// ```javascript
// let str = "123";
// let num = Number(str); // 123
// ```

// **Boolean Conversion**:
// ```javascript
// Boolean(1); // true
// Boolean(0); // false
// ```

// ### 2.8 Basic Operators
// **Math Operators**: `+`, `-`, `*`, `/`, `%`, `**`.

// **String Concatenation**:
// ```javascript
// let s = "my" + "string"; // "mystring"
// ```
// Note: If one operand is a string, the other will be converted to a string.

// **Unary `+` for Numeric Conversion**:
// ```javascript
// let apples = "2";
// let oranges = "3";
// alert( +apples + +oranges ); // 5
// ```

// **Operator Precedence**: Some operators have higher precedence and are evaluated first.

// **Assignment Operator**: `=`
// ```javascript
// let x = 2 * 2 + 1; // 5
// ```
// Chaining assignments is possible but should be done with care:
// ```javascript
// let a, b, c;
// a = b = c = 2 + 2; // a, b, c all get 4
// ```

// This is a high-level overview, but I hope it gives a clear structure to your JavaScript fundamentals. Let me know if you'd like any more details on specific topics!