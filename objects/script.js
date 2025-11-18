const car = {
    manufacturer: "BMW",
    model: "XM",
    year: 2022,
    avgSpeed: 270,

    showInfo() {
        console.log(
            `Manufacturer: ${this.manufacturer}\n` +
            `Model: ${this.model}\n` +
            `Year: ${this.year}\n` +
            `Average speed: ${this.avgSpeed} km/h`
        );
    },

    getTravelTime(distance) {
        if (typeof distance !== "number" || distance <= 0) {
            return "Error: distance must be a positive number.";
        }

        const travelHours = distance / this.avgSpeed;
        const breaks = Math.floor(travelHours / 4);

        return travelHours + breaks;
    }
};

car.showInfo();
console.log("Travel time:", car.getTravelTime(650), "hours");



const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    show() {
        const pad = (n) => String(n).padStart(2, "0");
        return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
    },

    addSeconds(sec) {
        if (typeof sec !== "number") return "Error: seconds must be a number.";

        let total = this.toSeconds() + sec;
        if (total < 0) total = 0;

        this.fromSeconds(total);
    },

    addMinutes(min) {
        if (typeof min !== "number") return "Error: minutes must be a number.";
        this.addSeconds(min * 60);
    },

    addHours(hr) {
        if (typeof hr !== "number") return "Error: hours must be a number.";
        this.addSeconds(hr * 3600);
    },

    toSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    },

    fromSeconds(total) {
        this.hours = Math.floor(total / 3600);
        this.minutes = Math.floor((total % 3600) / 60);
        this.seconds = total % 60;
    }
};

time.hours = 20;
time.minutes = 30;
time.seconds = 45;

time.addSeconds(30); 
console.log(time.show());


const Fraction = {
    num: 0,
    den: 1,

    isValid() {
        return (
            typeof this.num === "number" &&
            typeof this.den === "number" &&
            this.den !== 0
        );
    },

    gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return Math.abs(a);
    },


    create(num, den) {
        return {
            __proto__: this,
            num,
            den
        }.simplify();
    },


    simplify() {
        if (!this.isValid()) {
            return "Error: invalid fraction.";
        }
        const d = this.gcd(this.num, this.den);
        this.num /= d;
        this.den /= d;

 
        if (this.den < 0) {
            this.num *= -1;
            this.den *= -1;
        }

        return this;
    },

    add(fr) {
        if (!this.isValid() || !fr.isValid())
            return "Error: invalid fraction.";

        return this.create(
            this.num * fr.den + fr.num * this.den,
            this.den * fr.den
        );
    },

    subtract(fr) {
        if (!this.isValid() || !fr.isValid())
            return "Error: invalid fraction.";

        return this.create(
            this.num * fr.den - fr.num * this.den,
            this.den * fr.den
        );
    },

    multiply(fr) {
        if (!this.isValid() || !fr.isValid())
            return "Error: invalid fraction.";

        return this.create(
            this.num * fr.num,
            this.den * fr.den
        );
    },

    divide(fr) {
        if (!this.isValid() || !fr.isValid())
            return "Error: invalid fraction.";
        if (fr.num === 0)
            return "Error: division by zero.";

        return this.create(
            this.num * fr.den,
            this.den * fr.num
        );
    }
};
