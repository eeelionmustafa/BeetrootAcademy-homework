// In the HTML page, add the ability for the user to create their own dashboard of clocks. These are clocks for different parts of the world. It is necessary to add an input field and a button to create a new clock when clicked. WorldClock is implemented via the class. Each instance of this class is a new clock. The class must have the following components:

// getCurrentDate
// getCurrentDateTime
// deleteClock
// button one – shows the user the time in text form
// button two – displays the current date and time in text form
// // button three – deletes the clock from the "wall" of clocks

class WorldClock {
    constructor(city) {
        this.city = city;

        this.clockCard = document.createElement("div");
        this.clockCard.style.border = "1px solid #ccc";
        this.clockCard.style.padding = "15px";
        this.clockCard.style.borderRadius = "10px";
        this.clockCard.style.width = "220px";
        this.clockCard.style.textAlign = "center";
        this.clockCard.style.backgroundColor = "#f9f9f9";

        const title = document.createElement("h3");
        title.textContent = city.replace("_", " ");
        this.clockCard.appendChild(title);


        this.timeBtn = document.createElement("button");
        this.timeBtn.textContent = "Show Time";
        this.timeBtn.style.margin = "5px";
        this.timeBtn.onclick = () => this.showTime();
        this.clockCard.appendChild(this.timeBtn);

        this.dateTimeBtn = document.createElement("button");
        this.dateTimeBtn.textContent = "Show Date & Time";
        this.dateTimeBtn.style.margin = "5px";
        this.dateTimeBtn.onclick = () => this.showDateTime();
        this.clockCard.appendChild(this.dateTimeBtn);

        this.deleteBtn = document.createElement("button");
        this.deleteBtn.textContent = "Delete Clock";
        this.deleteBtn.style.margin = "5px";
        this.deleteBtn.style.backgroundColor = "#dc3545";
        this.deleteBtn.style.color = "white";
        this.deleteBtn.onclick = () => this.deleteClock();
        this.clockCard.appendChild(this.deleteBtn);


        this.output = document.createElement("p");
        this.output.style.marginTop = "10px";
        this.clockCard.appendChild(this.output);

        document.getElementById("clockContainer").appendChild(this.clockCard);
    }

    getCurrentDate() {
        return new Date().toLocaleString("en-US", { timeZone: this.city, year: "numeric", month: "2-digit", day: "2-digit" });
    }

    getCurrentDateTime() {
        return new Date().toLocaleString("en-US", { timeZone: this.city });
    }

    showTime() {
        this.output.textContent = `Time: ${new Date().toLocaleTimeString("en-US", { timeZone: this.city })}`;
    }

    showDateTime() {
        this.output.textContent = `Date & Time: ${this.getCurrentDateTime()}`;
    }

    deleteClock() {
        this.clockCard.remove();
        console.log(`Clock for ${this.city} deleted.`);
    }
}

document.getElementById("addClockBtn").addEventListener("click", () => {
    const timezone = document.getElementById("timezoneInput").value.trim();
    if (timezone) {
        try {
        
            new Date().toLocaleString("en-US", { timeZone: timezone });
            new WorldClock(timezone);
            document.getElementById("timezoneInput").value = "";
        } catch (e) {
            alert("Invalid timezone. Example: America/New_York");
        }
    } else {
        alert("Please enter a timezone.");
    }
});
