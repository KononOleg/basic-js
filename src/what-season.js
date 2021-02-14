const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) 
    return 'Unable to determine the time of year!';

   if (typeof date === 'string') 
      throw new Error();

  if (!date.getTime()) 
      throw new Error();
      
  var season="";
  if(date.getMonth()>4 && date.getMonth()<8)
  {
    season="summer";
  }
  else if(date.getMonth()>7 && date.getMonth()<11)
  {
    season="autumn";
  }
  else if(date.getMonth()>10 || date.getMonth()<2)
  {
    season="winter";
  }
  else if(date.getMonth()>1 && date.getMonth()<5)
  {
    season="spring";
  }
    
    return season;
};
