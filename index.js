// Packages
const inquirer = require ('inquirer');
const fs = require ('fs');

//employee team profiles
const Engineer = require('./lib/Engineer');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');

const employeeArray = []; 

const generateHTML = require('./src/createHTML');

//functions to input team profile data 

const addManager = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name', 
            message: 'Please enter the name of the Manager of this Team:'
        },
        {
            type:'input',
            name: 'id', 
            message: 'Please enter the id of the Manager:'
        },
        {
            type:'input',
            name: 'email', 
            message: 'Please enter the email of the Manager:'
        },
        {
            type:'input',
            name: 'officeNumber', 
            message: 'Please enter the office number of the Manager:'
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);
        employeeArray.push(manager); 
    })
}

const addEmployee = () => {
    return inquirer.prompt ([
       {
           type: 'list',
           name: 'role', 
           message: 'Please select the role of the employee you would like to add:',
           choices: ['Engineer','Intern'],
       },
       {
           type:'input',
           name: 'name', 
           message: 'Please enter the name of the Employee:'
       },
       {
         type:'input',
         name: 'id', 
         message: 'Please enter the id of the Employee:'
       },
       {
         type:'input',
         name: 'email', 
         message: 'Please enter the email of the Employee:'
       },
       {
         type: 'input',
         name: 'github',
         message: "Please enter the Engineer's github username:",
         when: (input) => input.role === "Engineer",
       }, 
       {
         type: 'input',
         name: 'school',
         message: "Please enter the intern's school",
         when: (input) => input.role === "Intern",
       },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);


        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

        }

        employeeArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(employeeArray); 
        } else {
            return employeeArray;
        }
    })
}

//write html file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created. You can find under ./dist/index.html.")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(employeeArray => {
    return generateHTML(employeeArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });