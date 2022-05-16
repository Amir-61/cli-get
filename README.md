# cli-get
This is the GET plugin for [CLI project](https://github.com/Amir-61/cli).

- **NPM:** [@amir-cli/cli-get](https://www.npmjs.com/package/@amir-cli/cli-get), **GITHUB:** [cli-get](https://github.com/Amir-61/cli-get)

![image](https://user-images.githubusercontent.com/10672146/168502057-f6c5c630-cb30-4825-b578-989620c9a417.png)


# Usages:
 - #### `GET *` :
    will print out a list of all target object members and their current values.
 - ### `GET propertyName`:
    will print out the current value of the target object’s member named “propertyname".


# Connector structore:
- `test` Folder: Each usage is unit tested using mocha
- `get.js` file: It's like Data Access Object (DAO) of the connector where it exposes the newly implemented commands
- `getHandler.js` file: It's the handler for each exposed usages

# Unit tests:
- This connector comes with it's own unit tests written in [mocha](https://mochajs.org/), you can run unit tests for each module sperataly using `npm test` command.
