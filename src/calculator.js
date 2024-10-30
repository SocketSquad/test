// Global variable - bad practice
var globalVar = "I am global";

// Duplicated function
function processData(data) {
    if(data == null) return;  // == instead of === (bad practice)
    if(data == null) return;  // Duplicated code
    
    var unusedVar = "never used";  // Unused variable
    
    if(data) {
        if(data.length > 0) {  // Nested if statements - complexity
            if(data[0]) {
                console.log(data);  // Direct console.log in production code
            }
        }
    }
}

// Function with too many parameters
function tooManyParams(param1, param2, param3, param4, param5, param6, param7, param8) {
    try {
        // Empty catch block - bad practice
    } catch(e) {
        
    }
    
    return param1;  // Other parameters are unused
}

// Duplicated function with slight modification
function processDataAgain(data) {
    if(data == null) return;
    if(data == null) return;
    
    var unusedVar = "never used";
    
    if(data) {
        if(data.length > 0) {
            if(data[0]) {
                console.log(data);
            }
        }
    }
}

// Security issue - hardcoded credentials
const password = "123456";
const apiKey = "abcdef123456";

// Complex function with high cognitive complexity
function complexFunction(a, b) {
    let result = 0;
    for(let i = 0; i < a; i++) {
        for(let j = 0; j < b; j++) {
            if(i % 2 === 0) {
                if(j % 2 === 0) {
                    result += i * j;
                } else {
                    result -= i * j;
                }
            } else {
                if(j % 2 === 0) {
                    result *= i;
                } else {
                    result /= (j || 1);
                }
            }
        }
    }
    return result;
}

module.exports = {
    processData,
    tooManyParams,
    processDataAgain,
    complexFunction
};