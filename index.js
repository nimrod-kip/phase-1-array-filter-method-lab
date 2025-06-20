const drivers =['Bobby','Sammy','sally','Annette','Sarah','Bobby']
function findMatching(drivers, name) {
 return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
 
}
// console.log(findMatching(drivers, 'Bobby')) 

function fuzzyMatch(drivers, letters){

    return drivers.filter(driver =>
        driver.toLowerCase().startsWith(letters.toLowerCase())
      );
    }


    function matchName(drivers, name) {
        return drivers.filter(driver => driver.name === name);
      }
    
