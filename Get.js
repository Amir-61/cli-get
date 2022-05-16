import cli from "commander";
import get from "./getHandlers.js"


const GET = () => {
    return(cli
    .command("GET")
    .argument("<field>", "{field}/*")
    .description(
      "get all properties using * or a {fieldName}."
    )
    .action(get))
}

export default GET
