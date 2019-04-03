function respuesta(){    
    
    document.getElementById('divi').innerHTML = '';
    var caja1 = document.getElementById('caja1');
    caja1.style.borderColor = '#000000';
    var a = caja1.value;
    if(isNaN(a)){
        alert('Error de datos!!!');
        
    }else {
        //alert('numero');
        caja1.style.borderColor = '#fe0000';
        if(a > 100){
            var btn = document.createElement('input');
            btn.type = 'button';
            btn.value = 'boton';
            document.getElementById('divi').appendChild(btn);
        }else if(a < 100){
            var txt = document.createElement('input');
            txt.type = 'text';
            txt.value = 'hello world!!!';
            document.getElementById('divi').appendChild(txt);
        }
    }
    
}