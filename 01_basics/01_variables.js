const accountId = 154;
let accountEmail= "adbc@gmail.com";
var accountPassword="1124";
accountCity= "delhi";

// accountId = 2;      //not allowed
accountEmail = "hdf@gmaiol.com";

accountPassword="4545";
accountCity="bangalore";
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);

/*
    prefer not to use var because issue of block scope
    and functional scope
*/