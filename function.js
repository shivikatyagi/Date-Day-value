//required function
function Date_value(D1){
    var D2 = {};
    var i;
    for(var key in D1) {
        //getting day from date : we will get 0 for sunday , 1 for monday and so on....
      var parts =key.split('-');
      var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
      i=mydate.getDay();
      //creating a dictionary that contains days as key and value as sum of the values of that day.
      if(i in D2)
      D2[i] += D1[key];
      else
      D2[i] = D1[key];
  }
  //for the day that does not exist in input- making its value as mean of previos day and next day.
  let k=2;
  while(k<=6){
      var j=k;
      if(!(j in D2)){
        //j=6 means the day saturday does not exist in dictionary , hence its value will be the mean value of friday and sunday.
          if(j==6){
              D2[k]=(D2[k-1]+D2[0])/2;
          }
          // for any day other than saturday
          else{
               while(!((j+1) in D2)){
                  if(!(j+1 in D2))
                  j=j+1;
              }
              var d= (D2[j+1]-D2[k-1])/(j-k+2);
              while(k<=j){
                  D2[k]=D2[k-1]+d;
                  k++;
              }
          }
      }
      k=k+1;
  }
  //creating the third and final dictionary that contains required output.
  var D3 = {};
  var x;
  for(var key in D2){
      if(key==0){
          x=D2[key];
          key = "Sun";
          D3[key]=x;
      }
      else if(key==1){
          x=D2[key];
          key = "Mon";
          D3[key]=x;
      }
      else if(key==2){
          x=D2[key];
          key = "Tue";
          D3[key]=x;
      }
      else if(key==3){
          x=D2[key];
          key = "Wed"
          D3[key]=x;
      }
      else if(key==4){
          x=D2[key];
          key = "Thu"
          D3[key]=x;
      }
      else if(key==5){
          x=D2[key];
          key = "Fri"
          D3[key]=x;
      }
      
      else if(key==6){
          x=D2[key];
          key = "Sat"
          D3[key]=x;
      }
  }
  return D3;
}

//Adding test cases
console.log("first test case :")
var D1 = {
    "2020-01-01": 4,
    "2020-01-02": 4,
    "2020-01-03": 6,
    "2020-01-04": 8,
    "2020-01-05": 2,
    "2020-01-06": -6,
    "2020-01-07": 2,
    "2020-01-08": -2,
    
  };
let D2= Date_value(D1);
for(var key in D2){
    console.log(key +" : "+ D2[key]);
}
console.log("second test case :")
var D3= {
    "2020-01-01": 6,
    "2020-01-04": 12,
    "2020-01-05": 14,
    "2020-01-06": 2,
    "2020-01-07": 4
  };
let D4= Date_value(D3);
for(var key in D4){
    console.log(key +" : "+ D4[key]);
}