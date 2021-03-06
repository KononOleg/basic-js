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
      if((i-1)>=0 && arr[i-2]!=="--discard-next")
      resArray.pop();
    }
    else if(arr[i]=="--double-next")
    {
     if(i<(arr.length-1))
      resArray.push(arr[i+1]);
    }
    else if(arr[i]=="--double-prev")
    {
      if((i-1)>=0 && arr[i - 2] !== '--discard-next')
      resArray.push(arr[i-1]);
    }
    else 
    {
      resArray.push(arr[i]);
    }
  }

  return resArray;
};
