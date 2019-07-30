var n1 = parseInt(prompt("Digite o primeiro valor: "));
var n2 = parseInt(prompt("Digite o segundo valor: "));
var resultado = (n1 % n2);		

if (n2>n1) {
	resultado = (n2 % n1);
}
if (resultado===0) {
	document.write("Os números são Múltiplos.")
}
else if (resultado<0) {
	document.write("Os números NÃO são Múltiplos")
} 
else {
	document.write("Os números NÃO são Múltiplos")
}
