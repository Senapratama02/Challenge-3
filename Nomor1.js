class Ship{ 
  constructor (draft,crew){ 
  this.draft = draft; 
  this.crew  = crew; 

  crew = 1.5*draft; 
   
  if(20>crew){ 
      console.log("Banyak nih muatan kapalnya"); 
  } 
  else{ 
      console.log("Lebih banyak muatan orangnya"); 
  } 
} 
} 

var emptyShip = new Ship(10,100);