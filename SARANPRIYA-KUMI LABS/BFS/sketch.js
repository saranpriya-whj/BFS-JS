
  var queue = [];
  var visited = [];
  var x;
  var r = 9;
  var c = 3;
  
  var pathArray = {
    "row":[
  [0,0,1,0,1,0,1,0],

  [0,0,0,1,0,0,0,1],

  [1,0,1,0,0,0,1,0],

  [0,1,0,1,0,1,0,1],

  [1,0,1,0,1,0,0,0],

  [0,1,0,1,0,1,0,0],

  [1,0,1,0,1,0,0,0],

  [0,1,0,1,0,0,0,1],

  [1,0,1,0,1,0,1,0],

  [0,1,0,1,0,1,0,1],
    ]
    
}

pathFinder();



function pathFinder(){
 
     queue.push(r+","+c);
    
  while(queue.length>0){
    
     if((r-1)<=9&&(c-1)<=7  &&pathArray.row[r-1][c-1]===1){
       if(( (r-1)+","+(c-1))in visited){

       }
      else{
        queue.push((r-1)+","+(c-1));
         //left top diagonal
        console.log("left top diagonal")
        console.log("r - "+r,"c-"+c)
      }
    
      
     };
     
     if((r-1)<=9&&(c+1)<=7  && pathArray.row[r-1][c+1]===1){
       //right top diagonal
   
       if(((r-1)+","+(c+1)) in visited){

       }
      else{
        queue.push((r-1)+","+(c+1));
        console.log("right top diagonal")
        console.log("r - "+r,"c-"+c)
      }
    
      
    }

 
   
       if((r+1)<=9 && (c-1)<=7 && pathArray.row[r+1][c-1]===1 ){
 
      
        if(((r+1)+","+(c-1))in visited){

          }

        else{queue.push((r+1)+","+(c-1))
  
        //bottom left diag
        console.log("bottom left diag");
        console.log("r"+r,"c"+c)
         };
  }

if((r+1)<=9&&(c+1)<=7  && pathArray.row[r+1][c+1]===1){
      
  if(((r+1)+","+(c+1))in visited){

      }
  else{
      queue.push((r+1)+","+(c+1))

        //bottom right diag
      console.log("bottom right diag");
      console.log("r"+r,"c"+c)
      }; 

    }
    console.log(" QUEUE- "   );
    console.log(queue);
  // Removing element from queue
    var n = queue.shift()
    if(queue.length>0){
      r = queue[0].split(",")[0];
      
      c = queue[0].split(",")[1];
    }
    
    
    
    

   
   // Adding Visited Nodes
    if  (n in visited){
     
   }
    else{
      visited.push(n);
    }
    console.log("  VISITED NODE    " );
    console.log(visited); 

    console.log( " Number of Nodes visited")
    console.log(visited.length);
   
   
  }
  
  
  
     
   
 
    

 
  
  
    }

    
  
