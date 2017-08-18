
function main(){
    var some_cities = ['Tokyo', 'London', 'Mexico City', 'Havana', 'Montreal'];
    $("#city").autocomplete({source:some_cities});
};



$(document).ready(function(){
	main();

});
