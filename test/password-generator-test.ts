import {expect} from "chai";
import {PasswordGenerator} from "../src/application/password-generator";
import {PasswordOptions} from "../src/application/password-options";
import {Password} from "../src/domain/password/password";

describe("Password generator", () => {
    it("should return a password with default options", () => {
        const passwordGenerator: PasswordGenerator = new PasswordGenerator();
        const options: PasswordOptions = new PasswordOptions();

        const password: Password = passwordGenerator.execute(options);

        expect(password.getValue()).to.match(/[a-z|A-Z|0-9|~!@#$%^&*+\-\/.,\\{}[\]();:\|?<>="`]{16}/g);
    });

    it("should return a password without symbols", () => {
        const passwordGenerator: PasswordGenerator = new PasswordGenerator();
        const options: PasswordOptions = new PasswordOptions(true, true, true, false);

        const password: Password = passwordGenerator.execute(options);

        expect(password.getValue()).to.match(/[a-z|A-Z|0-9]{16}/g);
    });

    it("should return a password without numeric", () => {
        const passwordGenerator: PasswordGenerator = new PasswordGenerator();
        const options: PasswordOptions = new PasswordOptions(true, true, false, true);

        const password: Password = passwordGenerator.execute(options);

        expect(password.getValue()).to.match(/[a-z|A-Z|~!@#$%^&*+\-\/.,\\{}[\]();:\|?<>="`]{16}/g);
    });

    it("should return a password without upper case", () => {
        const passwordGenerator: PasswordGenerator = new PasswordGenerator();
        const options: PasswordOptions = new PasswordOptions(true, false, true, true);

        const password: Password = passwordGenerator.execute(options);

        expect(password.getValue()).to.match(/[a-z|0-9|~!@#$%^&*+\-\/.,\\{}[\]();:\|?<>="`]{16}/g);
    });

    it("should return a password without lower case", () => {
        const passwordGenerator: PasswordGenerator = new PasswordGenerator();
        const options: PasswordOptions = new PasswordOptions(false, true, true, true);

        const password: Password = passwordGenerator.execute(options);

        expect(password.getValue()).to.match(/[A-Z|0-9|~!@#$%^&*+\-\/.,\\{}[\]();:\|?<>="`]{16}/g);
    });

    it("should return a password with custom symbols", () => {
        const passwordGenerator: PasswordGenerator = new PasswordGenerator();
        const options: PasswordOptions = new PasswordOptions(true, true, true, true, "~!@#$%");

        const password: Password = passwordGenerator.execute(options);

        expect(password.getValue()).to.match(/[a-z|A-Z|0-9|~!@#$%]{16}/g);
    });

    it("should return a password with length four", () => {
        const passwordGenerator: PasswordGenerator = new PasswordGenerator();
        const options: PasswordOptions = new PasswordOptions(true, true, true, true, "~!@#$%", 4);

        const password: Password = passwordGenerator.execute(options);

        expect(password.getValue()).to.match(/[a-z|A-Z|0-9|~!@#$%]{4}/g);
    });

    it("should return a password with length four as the option length is less than four", () => {
        const passwordGenerator: PasswordGenerator = new PasswordGenerator();
        const options: PasswordOptions = new PasswordOptions(true, true, true, true, "~!@#$%", 3);

        const password: Password = passwordGenerator.execute(options);

        expect(password.getValue()).to.match(/[a-z|A-Z|0-9|~!@#$%]{4}/g);
    });
});