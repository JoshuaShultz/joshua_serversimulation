module.exports = {
    add: function(x, y) {
        return x + y;
    },
    sub: function (x, y) {
    return x - y;
},
bmi: function (w, h){
    var result ="";
    var bmi = w / (h * h) * 10000;
    //console.log(bmi);
if (bmi < 18.5) {
result = "undervægtig";
}
else if (bmi < 24.9){
    result = "normalvægtig";
}
else if(bmi < 29.9){
    result = "noget" ;
}
else if(bmi < 39.9){
    result = "overvægtig";
}
else{
    result = "Svær fedme" ;
}
    return result + "(bmi " + bmi.toFixed(2) + ")";
}}
