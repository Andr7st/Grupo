// Andr7st: Pruebas

var AnchuraPantalla = screen.width;

function cambiarFondo(num){

    if(AnchuraPantalla > 920){

        var fondoPantalla = document.getElementById("fondo");
    
        switch (num) {
            
            case 1:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/4T1VxOG.jpg')"; break;
            case 2:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/VhsC8nK.jpg')"; break;
            case 3:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/N9arnvO.jpg')"; break;
            case 4:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/nipHGuu.jpg')"; break;
            case 5:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/opYroWk.jpg')"; break;
            case 6:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/ubOl44r.jpg')"; break;
            case 7:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/TMiq3ON.png')"; break;
            case 8:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/HWrNqKF.jpg')"; break;
            case 9:  fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/BpdK6zT.jpg')"; break;
            default: fondoPantalla.style.backgroundImage = "url('https://i.imgur.com/Ezb18aI.jpg')"; break;
        }
    }
}

var numeroAleatorio = Math.floor(Math.random() * 10);
cambiarFondo(numeroAleatorio)










/*     if(    navigator.userAgent.match('/Android/i') || navigator.userAgent.match('/webOS/i')
        || navigator.userAgent.match('/iPhone/i')  || navigator.userAgent.match('/iPad/i')
        || navigator.userAgent.match('/iPod/i')    || navigator.userAgent.match('/BlackBerry/i')
        || navigator.userAgent.match('/Windows Phone/i')) {

        alert("Estas viendo desde dispositivo hh")
    } */

  
    
 





/* 

/* https://i.imgur.com/4T1VxOG.jpg teclado
https://i.imgur.com/VhsC8nK.jpg Notebook y cuaderno
https://i.imgur.com/N9arnvO.jpg Celu
https://i.imgur.com/nipHGuu.jpg escritorio + Notebook
https://i.imgur.com/opYroWk.jpg Notebod y cuaderno 2
https://i.imgur.com/ubOl44r.jpg Keyboard
https://i.imgur.com/TMiq3ON.png Code
https://i.imgur.com/HWrNqKF.jpg Girl coding 
https://i.imgur.com/s5FI0Dw.png*/