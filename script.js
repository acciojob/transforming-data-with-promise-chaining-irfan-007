//your JS code here. If required.
const number = document.getElementById("ip");
const submit = document.getElementById("btn");
const output = document.getElementById("output");

const printNumber = async (num) => {
  let promise = await new Promise((res, rej) => {
    setTimeout(() => {
      if (num) res(num);
      res(number.value);
    }, 2000);
  });
  output.innerHTML = "Result: " + promise;
  return number.value;
};

const multNumber = async (num) => {
  let ans = num * 2;
  let promise = await new Promise((res, rej) => {
    setTimeout(() => res(ans), 1000);
  });
  output.innerHTML = "Result: " + promise;
  return ans;
};

const subNumber = async (num) => {
  let ans = num - 3;
  let promise = await new Promise((res, rej) => {
    setTimeout(() => res(ans), 1000);
  });
  output.innerHTML = "Result: " + promise;
  return ans;
};

const divNumber = async (num) => {
  let ans = num / 2;
  let promise = await new Promise((res, rej) => {
    setTimeout(() => res(ans), 1000);
  });
  output.innerHTML = "Result: " + promise;
  return ans;
};

const addNumber = async (num) => {
  let ans = num + 10;
  let promise = await new Promise((res, rej) => {
    setTimeout(() => res(ans), 1000);
  });
  output.innerHTML = "Result: " + promise;
  return ans;
};

const finalNumber = async (num) => {
  // let promise = await new Promise((res, rej) => {
  //   setTimeout(() => res(ans), 1000);
  // });
  output.innerHTML = "Final Result: " + num;
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  printNumber()
    .then(printNumber)
    .then(multNumber)
    .then(subNumber)
    .then(divNumber)
    .then(addNumber)
    .then(finalNumber);
});
