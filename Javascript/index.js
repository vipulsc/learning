//normal
console.log("START");
setTimeout(() => {
  console.log("I AM TIMEOUT");
}, 1000);
console.log("END");

//callback hell
setTimeout(() => {
  console.log("CALLBACK HELL 1");
  setTimeout(() => {
    console.log("CALLBACK HELL 2");
  }, 2000);
}, 1000);

//Promise--solution for callback hell
function check(msg, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      //   reject("Something went wrong");
      resolve();
    }, ms);
  });
}

//chaining
check("i am 1", 1000)
  .then(() => {
    return check("i am 2", 2000);
  })
  .then(() => {
    console.log("i am finish");
  });

// async-await (more nicer and just a syntactical sugar)
async function checkcheck() {
  try {
    await check("i am the first", 1000);
    await check("i am the second", 3000);
  } catch (err) {
    console.log(err);
  }
}

checkcheck();
