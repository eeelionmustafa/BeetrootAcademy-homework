// Implement a class that describes a stationery marker. It must have the following components:

// a field that stores the color of the marker;
// a field that stores the amount of ink in the marker (in percent);
// an input method (accepts a string and prints the text in the corresponding color; the text is displayed as long as there is ink in the marker; one non-whitespace character is 0.5% of the ink in the marker).
// Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.

class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }

    print(text) {
        let printText = "";

        for (let char of text) {
            if (this.ink <= 0) break;
            this.ink -= 0.5;
            printText += char;
        }

        console.log(`${printText}`, `color:${this.color}`);
        console.log(`Remaining ink: ${this.ink.toFixed(1)}%`);
    }
}

class RefillableMarker extends Marker {
    constructor(color, ink) {
        super(color, ink);
    }

    refill(amount = 100) {
        this.ink = amount;
        console.log(`Marker refilled to ${this.ink}% ink.`);
    }
}

const marker = new Marker("blue", 10);
marker.print("Pershendetje nga Beetroot Academy!");

const refillMarker = new RefillableMarker("black", 15);
refillMarker.print("Pershendetje nga Beetroot Academy!");
refillMarker.refill();
refillMarker.print("Pershendetje nga Beetroot Academy!");
