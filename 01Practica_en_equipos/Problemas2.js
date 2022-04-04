function ejercicio3(horas,salario)
{
    if(horas<=40)
    {
        dinero = horas*salario;
    }
    else
    {
        dinero = salario*40;
        horas-=40;
        if(horas<=8)
        {
            dinero+=horas*salario*2;
        }
        else
        {
            dinero+=salario*16;
            horas-=8;
            dinero+=salario*horas*3
        }
    }
    document.getElementById('dinero').value = dinero;
}