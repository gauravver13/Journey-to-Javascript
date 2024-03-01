// Browser execution and memory allocation
// in browser
function one() {
    console.log("One")
        two()
    }
    
    function two() {
    console.log("Two")
        three()
    }
    
    function three() {
    console.log("Three")
    }
    
    one()
    two()
    three()

    // run in browser sources and implement breakPoints and execution 
    