const Manager = require('../lib/Manager');

// creating manager card
test('creates an Manager card', () => {
    const manager = new Manager('Sierra Davis', 10 , 'sierra.davis502@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Sierra Davis', 10 , 'sierra.davis502@gmail.com',1);

    expect(manager.getRole()).toEqual("Manager");
}); 