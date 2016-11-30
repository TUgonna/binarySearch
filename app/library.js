module.exports={
  toTwenty: function(){
   var result=[];
    
    for (var i=1; i<=20; i++){
      result.push(i)
    }

    return result;

  },

  toForty: function(){
   var result=[];
    
    for (var i=2; i<=40; i=i+2){
      result.push(i)
    }

    return result;

  },

  toOneThousand: function(){
   var result=[];
    
    for (var i=10; i<=1000; i=i+10){
      result.push(i)
    }

    return result;

  },


    search: function(d){
    var min = 0;
    var max = this.length - 1;
    var guess;
    var count=0;

    while(min <= max) {
        guess = Math.round((max + min) / 2);

        if (this[guess] === d) {
            return {index:guess, count:count};
        }
        else if (this[guess] < d) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }
        
        count+=1;

    }

    return -1;
  }
  
};

