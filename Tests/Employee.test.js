const Employee = require ('../lib/Employee');

test('creating an employee card', ()=> {
    const employee = new Employee ('Sierra Davis', 10 , 'sierra.davis502@gmail.com' );
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

//test employee name 
test('employee name', () => {
    const employee = new Employee('Sierra Davis', 10 , 'sierra.davis502@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
// test employee id
test('employee ID', () => {
    const employee = new Employee('Sierra Davis', 10 , 'sierra.davis502@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});
// test employee email 
test(' employee email', () => {
    const employee = new Employee('Sierra Davis', 10 , 'sierra.davis502@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('role of employee', () => {
    const employee = new Employee('Sierra Davis', 10 , 'sierra.davis502@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 