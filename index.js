const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "thisIsQuiteInsecureToSave";
const someOtherPlaintextPassword = "compareWithThis";

async function main() {
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

  console.log(`Hashed string: ${hash}`);

  //positive example
  const positiveResult = await bcrypt.compare(myPlaintextPassword, hash);

  console.log(`positiveResult: ` + positiveResult);

  //negative example
  const negativeResult = await bcrypt.compare(someOtherPlaintextPassword, hash);

  console.log(`negativeResult: ` + negativeResult);
}

main().catch(err => {
  console.log(err);
});
