function fruitNut(fruit){
    fruit = fruit.toLowerCase();

    if(fruit === 'grapefruit'){
        console.log(`                  
        __     /,)
   _,-""\`'""-./,
   \ "-.  .  /,  ;
 /"\`.\ |;-\/\/ :::::|
|.  \_ \`.\ X/.:::: |
|:.:. \_\/_//;:::: |
|:..   ../  |/.  \|
;::. :   "\ /.  .\;
 \:::. ..|."|\ .\/
  \`:::.: \` ./,,'
..:::::"-:.__..-"-._
   \`-._____,---'`)
        console.log('')
        console.log('Calories 60g')     
        console.log('Carbohydrates 15g')     
        console.log('Proteins 1g')     
        console.log('Sugars 11g')     
        console.log('Sodium 0g')     
        console.log('Calcium 50mg')     
        console.log('Fibers 2g')     
        console.log('Contains mostly vitamin A & vitamin C')     
        return ""
    }   else if(fruit === 'apple'){
        console.log(`         
            .:'
        __ :'__
     .'\`__\`-'__.
    :__________.-'
    :_________:
     :_________\`-;
     \`.__.-.__.'`)    
        console.log('')
        console.log('Calories 52g')
        console.log('Carbohydrates 14g')     
        console.log('Proteins .3g')     
        console.log('Sugars 10g')     
        console.log('Sodium 0g')     
        console.log('Calcium 0g')     
        console.log('Fibers 2g')
        console.log('Contains mostly vitamin C')    
        return ''     
    }  else if(fruit === 'orange'){
        console.log(
            `                                                                      
                                                                                        
            ████                                                    
          ████░░░░                                                  
        ████░░████░░                                                
        ████░░██████░░                                              
      ████░░██████████░░                                            
      ████░░████████████░░                                          
      ████░░██████████████░░                                        
      ████░░██████████████░░░░                                      
      ████░░░░░░░░░░░░░░░░░░░░░░                                    
      ████░░████████████░░██░░██░░                                  
      ████░░██████████░░████░░████░░                                
        ████░░██████░░██████░░██████░░                              
        ████░░████░░████████░░████████░░                            
          ████░░░░██████████░░██████████░░                          
            ████░░██████████░░██████████░░██                        
              ████░░░░░░████░░████░░░░░░████                        
                ████████░░░░░░░░░░████████                          
                  ██████████████████████                            
                        ██████████            `
        )
        console.log('')
        console.log('Calories 60g')
        console.log('Carbohydrates 11g')     
        console.log('Proteins 1g')     
        console.log('Sugars 12g')     
        console.log('Sodium 0g')     
        console.log('Calcium og')     
        console.log('Fibers 2g')
        console.log('Contains mostly vitamin C')    
        return ''     
    }
}

module.exports = fruitNut;