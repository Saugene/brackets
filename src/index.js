module.exports = function check(str, bracketsConfig) {
   if (str.length % 2 != 0) return false;
   let l = [], k = 0;
   for (let i = 0; i < bracketsConfig.length; i++) {
      l[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
      k++; 
   }

   while (true) {
      for (let i = 0; i < k*k; i++) {
         for (let j = 0; j < k*k; j++) {
            str = remove(str, l[j]);
            if (str == "") return true;
         }
      }
      break;
   }
   return false;
}

function remove(str, l) {
   while (true) {
      let p = str;
      str = str.replace(l, "")
      if (p == str || str == "") return str;
   }
}
