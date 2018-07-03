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

/** Below is another canvas */
let a = 10;
let b = a;

a = 20;

console.log('a is ', a) // answer is 20
console.log('b is ', b) // answer is 20

let x = { value: 10 };
let y = x;

x.value = 20;

console.log('x.value is ', x) // answer is value: 20
console.log('y is ', y) // answer is value: 20

let number = 10;
function increase(number) {
    number++;
}

increase(number);
/** answer is still 10 because the value was copied directly. 
 * After the function, the number is returned to its original value. 
 * There are 2 independent variables called number here.*/
console.log(number)

function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    // create this as a private function by using 'let'
    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function () {
        return defaultLocation;
    }
    this.draw = function () {
        console.log('draw');
    }

    // do below to create a read-only property
    // use Object.defineProperty to create getter or setter
    Object.defineProperty(this, 'defaultLocation', {
        // get and set are special keywords in JS
        // these two functions are closure functions
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location');

            defaultLocation: value;
        }
    })
}

let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
/** answer is obj = {value:11} because the object was passed as a reference. 
 * There is only 1 object.*/
console.log(obj)

// add object property
circle.location = { x: 1 };
circle['prop'] = { y: 1 };
const propertyName = 'center-location';
circle[propertyName] = { x: 1 };

// delete object property
delete circle.location;
delete circle['prop'];
delete cirlce[propertyName];

// to enumerate all members in object
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}
// return all keys in the object circle as an array
const keys = Object.keys(circle);
console.log(keys);

// to check if something is inside an object
if ('radius' in circle) {
    console.log('circle has a radius')
}
