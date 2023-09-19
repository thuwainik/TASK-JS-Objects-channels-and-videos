myarr = [
  {
    name: "",
    time: 5,
  },
  {
    name: "",
    time: 2,
  },
  {
    name: "",
    time: 4,
  },
];
console.log(myarr.reduce((i, j) => i + j.time, 0));
