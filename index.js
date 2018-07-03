// this is an object literal
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
}

circle.draw();

/** if you want to create another circle, you don't want to duplicate another circle.
 * You want to create a factory or a constructor.
 * A factory function returns an object */

//  factory function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);

/** this is to create another cirlce. 
 * A constructor function looks like creating an instance of a class.
 * Every object in JS has its own constructor. 
 * We also have constructors for String, Boolean, Number. Ex: let temp = new String();
 * A constructor for the object references the function that was used to create the object. */

// constructor function 
/** even Circle function has its own constructor because the function is also an object */
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    // create this as a private function by using 'let'
    let defaultLocation = { x: 0, y: 0 };
    let computeOptimumLocation = function (factor) {
        //...
    }
    this.draw = function () {
        /** what belongs inside this function is called local scope */
        let x, y;
        // because we use 'let', we can call the function directly
        computeOptimumLocation(0.1);
        // however you have to use 'this.radius' to access the other function
        console.log('draw');
    }
}
// you call new so you will redefine 'this' in global object
const another = new Circle(10);
another.draw();
/** when you call this function, it also means that you're 'calling' it. Below is the equivalent of the new object/function. 
 * A function is an object in JS */
Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

/** Another way of define the function is below (not recommended) */
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('draw');
}
`)
const circle = new Circle1(1);


