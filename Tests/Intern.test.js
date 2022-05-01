const Intern = require('../lib/Intern');

// creating intern card 
test('creates intern card', () => {
    const intern = new Intern('Sierra Davis', 10, 'sierra.davis502@gmail.com', 'Carleton U');
    
    expect(intern.school).toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets intern school', () => {
    const intern = new Intern('Sierra Davis', 10, 'sierra.davis502@gmail.com', 'Carleton U');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const intern = new Intern('Sierra Davis', 10, 'sierra.davis502@gmail.com', 'Carleton U');

    expect(intern.getRole()).toEqual("Intern");
});