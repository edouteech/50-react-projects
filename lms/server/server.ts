import {app} from "./app"
require("dotenv").config();

app.listen(process.env.PORT, () => {
console.log(`server is running on port ${process.env.PORT }`);
})