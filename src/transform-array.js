const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) 
  throw new Error();
 
  var resArray=[];
  
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]=="--discard-next")
    {
        i++;
    }
    else if(arr[i]=="--discard-prev")
    {
      resArray.splice(i-1,1);
    }
    else if(arr[i]=="--double-next")
    {
      resArray.push(arr[i]);
    }
    else if(arr[i]=="--double-prev")
    {
      resArray.push(arr[i-1]);
    }
    else 
    {
      resArray.push(arr[i]);
    }
  }

  return resArray;
};
