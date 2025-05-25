
console.log("==========1. Function with no arguments and no return value========")

function name(){
    console.log("Hello I am Rutuja Kirkade");
}
name();
function detail(){
    console.log("Become a Full stack Developer");
}
detail();

console.log("==============Funtion with argument but no return type=========  ");

function personalDetails(firstName,lastName,collageName){
    var first=firstName;
    var last=lastName;
    var collage=collageName;
    console.log("My First Name is",firstName);
    console.log("My Last Name is",lastName); 
    console.log("My Collage Name is ",collageName);    
          
}
personalDetails('Rutuja','Kirkade','Indira'); 


console.log("=============Function with argument and return type=========== ");
function addThreevalues(n1,n2,n3){
    var addition=n1+n2+n3;    
    // console.log("multiplication of two Number",multi); 
    return addition;   
    }
     var cal = addThreevalues(10.23,600,40);     
     console.log("Addition Of Three number:",cal);
     var hello =addThreevalues(" Hello"," Good"," Morning");
     console.log("Adding three parameter:",hello);

     function bankDetails(bank,acc,city,pincode){
        var bdetails =bank+acc+city+pincode;
        return bdetails;

     }
      var bd=  bankDetails(" Bank name:CITI Bank","Acc number: 344534231","City: Pune","  Pincode:410411" );
      console.log("bankDetails",bd);
     
      var bd1= bankDetails(" Bank name:Axis Bank"," Acc Number: 423568390", " City:yeola", "  Pincode412345");
      console.log("bankDetails",bd1);
     
      var bd2 = bankDetails(" Bank name:Yes Bank", "  Acc Number:56473829", " City: pimpri","  Pincode:435456");
      console.log("bankDetails",bd2);


