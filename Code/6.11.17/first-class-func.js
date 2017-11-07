function square(x) {
  return x * x
}

function map(arr, action) {
  const newArr = []
  for(let i = 0; i < arr.length; i++)
    newArr[i] = action(arr[i], i, arr)
  return newArr
}

map([1, 2, 3], square) //[1, 4, 9]