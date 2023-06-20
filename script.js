
let div = document.getElementById("browser-info");


let name = navigator.userAgent;
let ver = navigator.appVersion;

console.log(name);
console.log(ver);

let res = `You are using ${name} version ${ver}`;

div.innerText = res;