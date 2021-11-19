# password-generator

This is a terminal password generator. It has some configuration to be considered when the password is created.

## Usage

Once the project is downloaded, it has to install the dependencies running `npm i` followed by `npm run compile` to
compile the TypeScript files.

To generate a password with default configuration just execute `npm start`. Output example: `I7n*0jay}$JT{C87`.

It can be configured by some arguments, for example `npm start -- -l=5`. Output example: `r0D?A`.

## Arguments

- `--hasLowerCase (-hlc)`: Indicates if the password should contain lowercase letters. Default: `true`.
- `--hasUpperCase (-huc)`: Indicates if the password should contain capital letters. Default: `true`.
- `--hasNumeric (-hn)`: Indicates if the password should contain numbers. Default: `true`.
- `--hasSymbol (-hs)`: Indicates if the password should contain symbols. Default: `true`.
- `--symbols (-s)`: Indicates the symbols that can be included in the password. Default: ``~!@#$%^&*+-/.,\{}[]();:|?<>="`\``.
- `--length (-l)`: Indicates the password length. Default: `16`. The password will have a minimum length of `4`.
