// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const name = 'paul';
    const id = 1;
    const email = 'tes@gmail.com'
    const gitHub = "testGitHub";
    const engineer = new Engineer(name, id, email, gitHub);

    expect(engineer.gitHub).toBe(gitHub);
});

test("getRole() should return \"Engineer\"", () => {
    const name = 'paul';
    const id = 1;
    const email = 'tes@gmail.com'
    const gitHub = "testGitHub";
    const role = 'Engineer';
    const engineer = new Engineer(name, id, email, gitHub);
    

    expect(engineer.getRole()).toBe('Engineer');
});

test("Can get GitHub username via getGithub()", () => {
    const name = 'paul';
    const id = 1;
    const email = 'tes@gmail.com'
    const gitHub = "testGitHub";
    const engineer = new Engineer(name, id, email, gitHub);

    expect(engineer.getGitHub()).toBe(gitHub);
});
