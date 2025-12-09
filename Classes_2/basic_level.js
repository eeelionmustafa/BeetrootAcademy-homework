// Implement the User class. When creating an instance based on this class, the object must have the form {name: ‘Petro’, role: ‘admin’} (role can be either admin or user). In case of incorrectly transferred data of such an object, the corresponding field that was entered incorrectly should be warned using an alert. The User class must have the following components: 

// getName
// getRole
// login
// logout
// сhangeName
// changePassword
// The Admin class should have the following components:

// addUser
// removeUser
// changeUserRole
// getAllUsers
// removeAllUsers

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;

        this.loggedIn = false;
        this.password = 'user';
    }

    getName() {
        return this.name;
    }
    getRole() {
        return this.role;
    }
    login(password) {
        if (password = this.password) {
            this.loggedIn = true;
            console.log(`${this.name} logged in successfully.`);
        }
        else {
            console.log('Incorrect Password');
        }
    }
    logout() {
        this.loggedIn = false;
        console.log(`${this.name} logged out!`);
    }
    changeName(newName) {
        if (typeof newName === "string") {
            this.name = newName;
        }
        else {
            alert('Invalid Name!');
        }
    }
    changePassword(newPassword) {
        if (typeof newPassword === "string") {
            this.password = newPassword;
        }
        else {
            alert('Invalid Password');
        }
    }

}


class Admin extends User {
    constructor(name) {
        super(name, 'admin');
        this.users = [];
    }
    addUser(user) {
        if (user instanceof User) {
            this.users.push(user);
            console.log(`${user.getName()} has been added successfully!`);
        }

        else {
            alert('Invalid User!');
        }
    }

    removeUser(user) {

        let newList = [];
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i] !== user) {
                newList[newList.length] = this.users[i];
            }
        }
        this.users = newList;
        console.log(`${user.getName()} has been removed!`);
    }

    changeUserRole(user, newRole) {
        if (this.users.includes(user)) {
            if (newRole === 'admin' || newRole === 'user') {
                user.role = newRole;
                console.log(`${user.getName()} has changed the role to ${newRole}`);
            }
            else {
                alert('Invalid Role');
            }
        }
        else {
            alert('User Not Found!');
        }
    }

    removeAllUsers(){
        this.users = [];
        console.log('All users have been removed!');
    }

    getAllUsers(){
        let result = [];
        for(let u of this.users){
            result[result.length] = { name: u.getName(), role: u.getRole()};
        }
        return result;
    }
}

let admin_name = new Admin('Elion');
let user_name = new User('Filan', 'user');

admin_name.addUser(user_name);
console.log(admin_name.getAllUsers());

user_name.login('user'
);

user_name.changePassword('1234567890');

user_name.logout();

admin_name.changeUserRole(user_name, 'admin');
console.log(admin_name.getAllUsers());

admin_name.removeUser(user_name);
console.log(admin_name.getAllUsers());

admin_name.removeAllUsers();