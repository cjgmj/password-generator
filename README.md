# password-generator

Currently, it works as a terminal password generator. To use it you have to execute `npm run compile` follow of `node dist/app`. Some arguments could be defined by the command line:
- `hasLowerCase`: Indicate if the password should contain lowercase letters. Default: `true`.
- `hasUpperCase`: Indicate if the password should contain capital letters. Default: `true`.
- `hasNumeric`: Indicate if the password should contain numbers. Default: `true`.
- `hasSymbol`: Indicate if the password should contain symbols. Default: `true`.
- `symbols`: Indicate the possibles symbols include in the password. Default: ``~!@#$%^&*+-/.,\{}[]();:|?<>="`\``. 
- `length`: Indicate the password length. Default: `16`.
