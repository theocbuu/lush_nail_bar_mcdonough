
'use strict';


function ajaxFunc(typeP, urlP, dataP){
    console.log(typeP, urlP, dataP)
    return new Promise((resolve, reject)=>{
        $.ajax({
            type:typeP,
            url:urlP,
            contentType: "application/json",                
            data: JSON.stringify({
                dataK:dataP
                // test:'testing'
            }),
            // dataType:'json', //tells jQuery that you want it to parse the returned JSON
            success: function(dataR){      
                return resolve(dataR)
            },
            error: function(){
                console.log('FAILED TO AJAX /' + urlP)                        
            }                    
        })    
    }) 
    
}

