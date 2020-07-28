 (function displaFullName(firstName, lastName){
     return firstName  + ' ' + lastName;
    })
    ('Chiaka', 'Williams');
      
    

        var calc = createCalculator();
    function createCalculator(){
        return{
        add : (20 + 20),
        subtract : (2 - 2),
        multiply : (2 * 2),
        divide : (12 / 2)
        }
    }
    createCalculator()