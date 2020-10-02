// Stop watch 
count = 0; var clearTime; 
var seconds = 0, minutes = 0, 
hours = 0; var clearState; 
var secs, mins, gethours ;
    function startWatch( ) {
        if ( seconds === 60 ) 
        { seconds = 0; minutes = minutes + 1; } 
        mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' ); 
        if ( minutes === 60 ) { minutes = 0; hours = hours + 1; } 
        gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); 
    secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); 
     var time= document .getElementById("time");
      time.innerHTML = 'Time: ' + gethours + mins + secs; 
        seconds++; 
    clearTime = setTimeout( "startWatch( )", 1000 ); } 

    function startTime( ) {
    if ( seconds === 0 && minutes === 0 && hours === 0 ) { 
        var runtime = document.getElementById( "runtime" ); 
        runtime.style.display = "none"; 
    
       
    }
    }
        
        startWatch(); 
 
          var start = document .getElementById("start"); 
            start.addEventListener( 'click', startTime ); 
            
            function stopTime( ) { 
                
                    if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { 
                    
                        var runtime = document .getElementById( "runtime" );
                        
                        runtime.style.display = "block"; var time = gethours + mins + secs; runtime.innerHTML = 'Time: ' + time; 
                        
                        seconds = 0; minutes = 0; hours = 0; secs = '0' + seconds; mins = '0' + minutes + ': '; gethours = '0' + hours + ': '; 
                        
                        var time = document.getElementById ("time"); 
                        var stopTime = gethours + mins + secs; time.innerHTML = stopTime; 
                        
                            clearTimeout( clearTime ); }
                        }
                            var stop = document.getElementById ("stop");
                           stop.addEventListener( 'click', stopTime);
                               
                                 
