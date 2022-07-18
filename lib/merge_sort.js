function merge(arr, l, m, r) {
  const [leftSubArray, rightSubArray] = [
    arr.slice(l, m + 1),
    arr.slice(m + 1, r + 1),
  ];
  const [leftSize, rightSize] = [m - l + 1, r - m];

  let [i, j, k] = [0, 0, l];

  for (; i < leftSize && j < rightSize; k++) {
    arr[k] =
      leftSubArray[i] <= rightSubArray[j] ? leftSubArray[i] : rightSubArray[j];
    leftSubArray[i] <= rightSubArray[j] ? i++ : j++;
  }
  for (; i < leftSize; i++, k++) {
    arr[k] = leftSubArray[i];
  }
  for (; j < rightSize; j++, k++) {
    arr[k] = rightSubArray[j];
  }
}

function sort(arr, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);

  sort(arr, l, m);
  sort(arr, m + 1, r);
  merge(arr, l, m, r);
}

function MergeSort(arr) {
  const [sArr, tStart] = [[...arr], Date.now()];

  sort(sArr, 0, sArr.length - 1);

  const tEnd = Date.now();

  const processTime = `${tEnd - tStart}ms`;
  return {
    array: sArr,
    processTime: processTime === "0ms" ? "1ms" : processTime,
  };
}
