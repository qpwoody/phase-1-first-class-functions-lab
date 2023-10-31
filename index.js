// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  function createFareMultiplier(multiply){
    return function(value){
        return value * multiply

    }
  }
  const fareDoubler = createFareMultiplier(2)
  const fareTripler = createFareMultiplier(3)

  function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
  }
  const firstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  const lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers);

  console.log(firstTwo)
  console.log(lastTwo)
