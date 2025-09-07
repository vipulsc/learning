async function callApi() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  data = await data.json();
  console.log(data);
}
callApi();

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

function CALL() {
  return new Promise((resolve, reject) => {
    let data = fetch("https://jsonplaceholder.typicode.com/todos/1");
    resolve(data);
    return data;
  });
}
CALL()
  .then((msg) => {
    return msg.json();
  })
  .then((msg) => {
    console.log(msg);
  });
