//4.1
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr.pop() + sum(arr);
}
//4.2
function numItem(arr) {
  if (arr.length === 1) return 1;
  arr.pop();
  return 1 + numItem(arr);
 }
//4.3 -- don't get this
 function maxNum(arr) {
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  arr.pop();
  let max = maxNum(arr);
  return arr[0] > max ? arr[0] : max;
 }
