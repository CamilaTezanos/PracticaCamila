function hello(hola, hi, hello) 
{
    hola = parseInt(prompt("numero1"));
    hi = parseInt(prompt("numero2"));
    hello = parseInt(prompt("numero3"));

    camilita = Math.max(hola, hi, hello);
    return camilita;
}
hello();
document.write("el mayor es " + camilita);