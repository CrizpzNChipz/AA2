document.write("<br>");
let a = 1;
let add = 2;

while (a < 4109) {
  document.write(a);
  if (a !== 4108) {
    document.write(", ");
  }
  a += add;
  add = add * 2 - 1;
}