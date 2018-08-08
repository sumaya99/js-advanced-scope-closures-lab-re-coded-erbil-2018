function produceDrivingRange(range){
  return function(start, end){
    console.log(range);
    let start = parseInt(start);
    let end = parseInt(end);
    let distance = math.abs(end-start);
    let dif = range - distance;
  }
  if( dif > 0){
      return `within range by ${dif}`
    } else {
      return `${Math.abs(dif)} blocks out of range`
    }
  
  
}

produceDrivingRange(10)
let eightBlockRange = produceDrivingRange(8)
eightBlockRange(10, 10)

function produceTipCalculator(fare){
return function(tip){
let value = fare * tip 
return value; 
}
}

let tenPercentTip = produceTipCalculator(10)
tenPercentTip(.10)


  function createDriver(){
      let driverId = 0
    return class{
      constructor(name){
        this.name = name
        this.id = ++driverId;
      }
      
    }
  }
  
  const Driver = createDriver();
  let bob = new Driver ("bob")
  
  console.log(bob)