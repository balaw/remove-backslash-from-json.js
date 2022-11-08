
// /remove back slash
var data = {"\\id\\":"\\23232\\","\\pass\\":"\\1434\\"};
console.log(data);
var b=JSON.stringify(data);
str = b.replace(/\\/g, '');
console.log(str);
