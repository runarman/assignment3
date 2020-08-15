function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var distance = feetToMile(14000);
console.log(distance)


function woodCalculator(chair, table, bed){
    var woodforEach = chair*1 + table*3 + bed*5;
    return woodforEach;
}
var totalWood = woodCalculator(14, 5, 12);
console.log(totalWood)


function brickCalculator(floor){
    var bricksPerFeet = 1000;
     
     if(floor<=10){
         return 15*bricksPerFeet;
     }
     else if (floor>10 && floor<21){
         return 12*bricksPerFeet;
     }
     else{
        return 10*bricksPerFeet;
     }
 }
 var totalBricks = brickCalculator(22);
 console.log(totalBricks)


 function tinyFriend(names){
    var min = names[0].length;

    for(var i = 0; i < names.length; i++){
        var smallest = names[i].length;
        if(smallest < min){
            min = smallest;
            return min;
        }
    }
}
var names = ["rajib", "sohel", "tomal", "joy", "rony","samuel"];
var shortest = tinyFriend(names);
console.log(shortest);