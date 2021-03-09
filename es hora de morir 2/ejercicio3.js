let primerouno = prompt("primer numero");
parseInt(primerouno)
let segundodos = prompt("segundo numero");
parseInt(segundodos)
let tercerotres = prompt("tercer numero");
parseInt(tercerotres)
if((primerouno == segundodos) && (segundodos == tercerotres))
{
    document.writeln("son iguales todos");
}
else if (primerouno > segundodos && primerouno > tercerotres)
{
    document.writeln (primerouno + "Es el mayor" );
}
else if (segundodos > primerouno && segundodos > primerouno)
{
    document.writeln (segundodos + "es el mayor");
}

else if (tercerotres > segundodos && tercerotres> primerouno)
{
    document.writeln(tercerotres + "Es el mayor");
}