// 1) Implement a class that describes a circle. It must have the following components:

// a field that stores the radius of the circle;
// get-property that returns the radius of the circle;
// set-property that sets the radius of the circle;
// get-property that returns the diameter of the circle;
// a method that calculates the area of a circle;
// a method that calculates the length of the circle.

class Circle{

    constructor(radius){
        this._radius = radius;
    }


    get radius(){
        return this._radius;
    }


    set radius(value){
        if (value <= 0){
            console.log('Radius should a positive.');
            return;
        }
        this._radius = value;
    }

    get diameter(){
        return this._radius * 2;
    }

    area(){
        return Math.PI * this._radius * this._radius;
    }

    length(){
        return 2 * Math.PI * this._radius;
    }

}

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

const circle = new Circle(5);
console.log('Radius:', circle.radius);
console.log('Diameter:', circle.diameter);
console.log('Area:', circle.area());
console.log('Length of circle:', circle.length());

