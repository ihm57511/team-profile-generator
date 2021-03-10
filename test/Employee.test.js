// Starter file provided by Instructor (03/09/2021) AC
const { expect } = require("@jest/globals");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object')
});

test("Can set name via constructor arguments", () => {
    const name = 'Ian';
    const employee = new Employee(name);
    
    expect(employee.name).toBe(name)
});

test("Can set id via constructor argument", () => {
    const name = 'Ian';
    const id = 1;
    const employee = new Employee(name, id);

    expect(employee.id).toBe(id)
});

test("Can set email via constructor argument", () => {
    const name = 'Ian';
    const id = 1;
    const email = 'test@email.com';
    const employee = new Employee(name, id, email);

    expect(employee.email).toBe(email);
});

test("Can get name via getName()", () => {
    const name = 'Ian';
    const employee = new Employee(name);
    
    expect(employee.getName()).toBe(name);
});

test("Can get id via getId()", () => {
    const name = 'Ian';
    const id = 1;
    const email = 'test@email.com';
    const employee = new Employee(name, id, email);

    expect(employee.getId()).toBe(id);
});

test("Can get email via getEmail()", () => {
    const name = 'Ian';
    const id = 1;
    const email = 'test@email.com';
    const employee = new Employee(name, id, email);

    expect(employee.getEmail()).toBe(email);
});

test("getRole() should return \"Employee\"", () => {
    const role = "Employee"
    const employee = new Employee();

    expect(employee.getRole()).toBe(role);
});
