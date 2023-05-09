const biodata = require("./biodata");

const name = "Syeich Khalil Annbiya";
const placeOfBirth = "Karawang";
const dateOfBirth = "30 Juni 2001";
const address = "Karawang, Jawa Barat";

console.log(`Nama : ${biodata.name(name)}`);
console.log(`Tempat Lahir : ${biodata.placeOfBirth(placeOfBirth)}`);
console.log(`Tanggal Lahir : ${biodata.dateOfBirth(dateOfBirth)}`);
console.log(`Alamat : ${biodata.address(address)}`);
