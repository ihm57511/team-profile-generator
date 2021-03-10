// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const name = 'Jenn';
    const id = 1;
    const email = 'test@gmail.com';
    const school = 'hard knocks';
    const intern = new Intern(name, id, email, school);

    expect(intern.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
    const name = 'Jenn';
    const id = 1;
    const email = 'test@gmail.com';
    const school = 'hard knocks';
    const role = 'Intern'
    const intern = new Intern(name, id, email, school);

    expect(intern.getRole()).toBe(role);
});

test("Can get school via getSchool()", () => {
    const name = 'Jenn';
    const id = 1;
    const email = 'test@gmail.com';
    const school = 'hard knocks';
    const intern = new Intern(name, id, email, school);

    expect(intern.getSchool()).toBe(school);
});
