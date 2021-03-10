// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { expect } = require("@jest/globals");

test("Can set office number via constructor argument", () => {
    const name = 'Cadence';
    const id = 1;
    const email = 'test@gmail.com';
    const officeNumber = 2;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);

});

test('getRole() should return "Manager"', () => {
    const name = 'Cadence';
    const id = 1;
    const email = 'test@gmail.com';
    const officeNumber = 2;
    const role = 'Manager'
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getRole()).toBe(role);
});

test("Can get office number via getOffice()", () => {
    const name = 'Cadence';
    const id = 1;
    const email = 'test@gmail.com';
    const officeNumber = 2;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});
