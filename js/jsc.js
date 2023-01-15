document.getElementById('contacto').onclick=function(){
    console.log("capturamos el evento click")
	document.getElementById('cont-form').style.display='flex';
	
}
	

let form =document.getElementById('formulario-contacto');
const btnEnvio=document.getElementById('enviarCorreo');

btnEnvio.addEventListener('click', function(e){
	e.preventDefault();
	const nombres = document.getElementById('nombres').value;
	const correo =document.getElementById('correo').value;
	const mensaje =document.getElementById('mensaje').value;
	window.location.href=`mailto:gladisbrites83@gmail.com?subjet=envioDesdeFormulario&body=Nombre%3A${nombres}%0ACorreo%3A${correo}%0AMensaje%3A${mensaje}`;
	form.reset();
	if (document.getElementById('cont-form').style.display='flex') 
		document.getElementById('cont-form').style.display='none';

});




 
