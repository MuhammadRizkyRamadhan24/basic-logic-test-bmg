let n = 50;
let arr = [];
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push("Frontend Backend");
  } else if (i % 5 === 0) {
    arr.push("Backend");
  } else if (i % 3 === 0) {
    arr.push("Frontend");
  } else {
    arr.push(i);
  }
}

console.log(arr.join(","));
