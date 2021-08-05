"use strict "

let user = {
    name : "Sasha",
    age  : "20",
    phone : "1231233333213122222222222",
    sone : {
        name : "dgdfga",
        age  : "25",
        phone : "1a222321dxxad2222222",
    }
}
for (const key in user) {
    console.log ( key + " / " + user[key] )
}
