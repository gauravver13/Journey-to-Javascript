// IIFE: Imediately Invoked Function Expressions (IIFE)

(function chai() {
    // Named IIFE
    console.log(`DataBase Connected`)
})();

// chai()
// facing problem from the polution of global scope sometimes, to geeting rid of this problem we can use iife

// ( () => {
//     // Unnamed  iife 
//     console.log(`DB Connected Two`);
// } )('gaurav');

( (name) => {
    // parameter passed in unnamed iife
    console.log(`DB Connected Two ${name}`);
} )('gaurav');

// two iife in one file-: Upward written
