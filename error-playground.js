const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("invalid argument");
};
try {
  console.log(sum(1));
} catch (error) {
  console.log("error occured");
  // console.log(error);
}

console.log("this worked");
