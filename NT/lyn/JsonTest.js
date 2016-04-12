var text1 = '{ "employees" : [' +
'{ "firstName":"John", "lastName":"Doe" },' +
'{ "firstName":"Anna", "lastName":"Smith" } ]}';

var text2 = '{ "employees" : [' +
'{ "firstName":"Peter", "lastName":"Jones" } ]}';

var obj1 = JSON.parse(text1);

obj1.employees[1].firstName = 'sldkfjsdl';
var testme = JSON.stringify(obj1);
console.log(obj1.employees[1].firstName);



//Couldn't seem to get reviver to work.
/** var obj2 = JSON.parse(text2, function (key, val) {sssssss
    console.log(key);
});
console.log(obj2.employees[0].firstName); **/

//1st one produces "Anna" in the console.
//2nd was supposed to be able to change "Peter" to another name. d