module.exports = function check(str, bracketsConfig) {
  var openBr = [];
  var closeBr = [];
  var check = 0;
  var i,j = 0;
  var temp = [];
  for(i=0; i<bracketsConfig.length;i++){
    openBr[i] = bracketsConfig[i][0];
    closeBr[i] = bracketsConfig[i][1];
  }
;
  for (i=0; i<str.length;i++){
    for(j=0;j<openBr.length; j++){
      if(str[i]==openBr[j]){
        temp.push(j);
        check++;
      }
      if(str[i]==closeBr[j]){
        if(j==temp.pop()){
          check--;
        }
        else return false;
      }
    }
    if(check<0) return false;
  }
  if(check == 0) return true;
  else return false;
}
