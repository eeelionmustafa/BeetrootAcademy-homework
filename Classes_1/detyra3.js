// 3) Implement the Employee class that describes the employee and create an array of bank employees.

// Implement the EmpTable class to generate HTML code for a table with a list of bank employees. The array of employees must be passed through the constructor and get the HTML code using the getHtml () method.

// Create an object of class EmpTable and display the result of the getHtml () method.


class Employee{
    constructor(name, age, position){
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

class EmpTable{
    constructor(employees){
        this.employees = employees;
    }

    getHtml(){
        let html =
        `
        <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Position</th>
            </tr>
            
        `;
        this.employees.forEach(employee => {
            html+= `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.position}</td>
            
            </tr>

            `
            
        });

         html+= "</table>";
            return html;
    }
}

const employees =  [
    new Employee('Elion Mustafa',22,"Back End Developer"),
    new Employee('Filan Fisteku',23,'Student')
];

const emptable = new EmpTable(employees);

console.log(emptable.getHtml());