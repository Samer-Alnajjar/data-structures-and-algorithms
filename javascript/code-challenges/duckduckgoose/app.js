function DuckDuckGoose(arr, num) {
  if(num === 1) return arr[arr.length - 1];
  let i = 0;  
  let temp = num
     while(arr.length !== 1) {
         if(i === (num - 1)) {
            arr.splice(i, 1);
            num += temp - 1 ; // 4
            if(num > arr.length) {
              while(num > arr.length) {
              num =  num - arr.length;
              }
              i = -1;
            }
         }
        i++;
     }
     return arr[0];
  }
  
  
      DuckDuckGoose([1,2,3,4,5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20], 3);