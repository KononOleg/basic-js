const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {

  if(!array)
  return false;

  var res='';
  for(var i=0;i<array.length;i++)
  {
    if(typeof array[i]==="string")
    {
      array[i]=array[i].trim();
        res+=array[i][0];
    }
  }
  res=res.toUpperCase();
  return res.split('').sort().join('');
};
