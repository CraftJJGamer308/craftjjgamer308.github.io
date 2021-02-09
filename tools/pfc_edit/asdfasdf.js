var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

var ans=permute([1,2,3,4,5,6,7]);
var i;

for(i=0;i<ans.length;i++){
    if(ans[i][5]==4&&ans[i][3]==7&&ans[i][1]==6&&ans[i][0]+ans[i][1]+ans[i][2]-ans[i][3]-ans[i][4]+ans[i][5]-ans[i][6]==0){
        console.log(ans[i]);
    }
}