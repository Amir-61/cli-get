import fs from 'fs';
import chalk from 'chalk'

const get = (field) => {
  let data
  try {
    data = fs.readFileSync("./data.json", "utf8")
  } catch(e) {
    return console.log(chalk.red("File read failed: %e"), e);
  }

  let parsedData = JSON.parse(data)
  if (field === 'commands' || field === '*') {
    console.log(parsedData);
    return parsedData // We use the return value for unit tests
  } else if(parsedData[field]){
    console.log(parsedData[field]);
    return parsedData[field]
  } else {
    return console.error(chalk.red('The property does not exist'))
  }
}
export default get