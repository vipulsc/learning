let a = new Promise((resolve) => {
  console.log("HELLO");
  resolve("Done");
});
console.log(a);

function abc() {
  const a = new Promise((resolve, reject ) => {
    setTimeout(() => {
      console.log("I AM TIMEOUT");
      resolve("Perfect");
      //   reject("Not Working");
    }, 2000);
  });
  return a;
}

abc()
  .then((msg) => {
    console.log("Done");
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
  try {
    console.log("WORKING");
  } catch (err) {
    console.error("Caught inside timeout:", err.message);
  }
}, 1000);

function promisified() {
  return new Promise((resolve, reject) => {
    console.log("I AM WORKING");
    resolve("done");
    reject("not done");
  });
}

async function run() {
  try {
    const a = await promisified();
    console.log(a);
  } catch (err) {
    console.log(err);
    // console.log("i am here");
  }
}

run();
