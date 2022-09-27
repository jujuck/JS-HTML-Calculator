let value1 = "";
let value2 = "";
let operator = "";
let step1 = true;

const addValue = (num) => {
  if (step1) {
    value1 = value1 + num;
    console.log(value1);
  } else {
    value2 = value2 + num;
    console.log(value2);
  }
};

const addOperator = (operand) => {
  operator = operand;
  console.log(operator);
  step1 = false;
}