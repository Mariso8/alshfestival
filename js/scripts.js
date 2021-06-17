
// Ready
document.addEventListener('DOMContentLoaded', init, false);

function init(){
	// Remove splash screen
	setTimeout(cerrar_slash_screen, 500);

	// Controlar el menu hamburguesa
	var menu_open = document.getElementById("menu_open");
	if(menu_open){
		menu_open.addEventListener("click", abrir_menu);
	}

	var menu_close = document.getElementById("menu_close");
	if(menu_close){
		menu_close.addEventListener("click", cerrar_menu);
	}

	// Control login
	var enlace_perfil = document.getElementById("enlace_perfil");
	if(enlace_perfil){
		enlace_perfil.addEventListener("click", abrir_login);
	}

	// Control cookies
	var enlace_cookies = document.getElementById("enlace_cookies");
	if(enlace_cookies){
		enlace_cookies.addEventListener("click", cerrar_cookies);
	}

	// Control cookies
	var enlace_perfil_mobile = document.getElementById("enlace_perfil_mobile");
	if(enlace_perfil_mobile){
		enlace_perfil_mobile.addEventListener("click", abrir_login_mobile);
	}

	// Control tabs muro chat
	var tabs_muro = document.getElementsByClassName("tab_muro");
	if(tabs_muro.length > 1){
		for(var i = 0; i < tabs_muro.length; i++){
			tabs_muro[i].addEventListener("click", abrir_muro);
		}
	}
	var tabs_chat = document.getElementsByClassName("tab_chat");
	if(tabs_chat.length > 1){
		for(var i = 0; i < tabs_chat.length; i++){
			tabs_chat[i].addEventListener("click", abrir_chat);
		}
	}

	// Filtros
		// Control filtros
		var enlace_filtros = document.getElementById("enlace_filtros");
		if(enlace_filtros){
			enlace_filtros.addEventListener("click", toggle_filtros);
		}
		// Aplicar
		var aplicar_filtro = document.getElementById("aplicar_filtro");
		if(aplicar_filtro){
			aplicar_filtro.addEventListener("click", aplicar_filtros);
		}
		// Limpiar
		var limpiar_filtro = document.getElementById("limpiar_filtro");
		if(limpiar_filtro){
			limpiar_filtro.addEventListener("click", limpiar_filtros);
		}
};

function cerrar_slash_screen(){
	document.getElementById("splash_screen").classList.add('closed');
	document.getElementsByTagName('body')[0].classList.remove('fixed');
}
function abrir_menu(){
	document.getElementById("menu_mobile").classList.remove('closed');
}
function cerrar_menu(){
	document.getElementById("menu_mobile").classList.add('closed');
}
function abrir_login(){
	document.getElementById("login_modal").classList.add('open');
}
function cerrar_cookies(){
	document.getElementById("cookies_modal").classList.add('closed');
}
function abrir_login_mobile(){
	cerrar_menu();
	abrir_login();
}
function abrir_muro(){
	document.getElementById("muro").classList.remove('tab_hidden');
	document.getElementById("chat").classList.add('tab_hidden');
}
function abrir_chat(){
	document.getElementById("chat").classList.remove('tab_hidden');
	document.getElementById("muro").classList.add('tab_hidden');
}

// Filtros
function toggle_filtros(){
	document.getElementById("filtros_artistas_holder").classList.toggle('closed');
}
function aplicar_filtros(){
	// Artistas
	var artistas = document.getElementsByClassName("artista");

	// Filtros de nacionalidad
		var filtro_nacionalidad = document.getElementsByClassName("nacionalidad");
		for(var i = 0; i < filtro_nacionalidad.length; i++){
			// Filtro seleccionado
			if(filtro_nacionalidad[i].checked){
				// Aplicar filtro seleccionado
				for(var j = 0; j < artistas.length; j++){
					if(artistas[j].dataset.nacionalidad == filtro_nacionalidad[i].value){
						artistas[j].classList.remove('oculto-1');
					}else{
						artistas[j].classList.add('oculto-1');
					}
				}
			}
		}
	// Filtros de genero
		var filtro_genero = document.getElementsByClassName("genero");
		for(var i = 0; i < filtro_genero.length; i++){
			// Filtro seleccionado
			if(filtro_genero[i].checked){
				// Aplicar filtro seleccionado
				for(var j = 0; j < artistas.length; j++){
					if(artistas[j].dataset.genero == filtro_genero[i].value){
						artistas[j].classList.remove('oculto-2');
					}else{
						artistas[j].classList.add('oculto-2');
					}
				}
			}
		}
	// Filtros de dia
		var filtro_dia = document.getElementsByClassName("dia");
		for(var i = 0; i < filtro_dia.length; i++){
			// Filtro seleccionado
			if(filtro_dia[i].checked){
				// Aplicar filtro seleccionado
				for(var j = 0; j < artistas.length; j++){
					if(artistas[j].dataset.dia == filtro_dia[i].value){
						artistas[j].classList.remove('oculto-3');
					}else{
						artistas[j].classList.add('oculto-3');
					}
				}
			}
		}
	// Filtros de escenario
		var filtro_escenario = document.getElementsByClassName("escenario");
		for(var i = 0; i < filtro_escenario.length; i++){
			// Filtro seleccionado
			if(filtro_escenario[i].checked){
				// Aplicar filtro seleccionado
				for(var j = 0; j < artistas.length; j++){
					if(artistas[j].dataset.escenario == filtro_escenario[i].value){
						artistas[j].classList.remove('oculto-4');
					}else{
						artistas[j].classList.add('oculto-4');
					}
				}
			}
		}

}
function limpiar_filtros(){
	// Todos los filtros
	var filtros_todos = document.getElementsByClassName("radio_filtro");

	// Desseleccionamos todos los filtros
	for(var i = 0; i < filtros_todos.length; i++){
		filtros_todos[i].checked = false;
	}

	// Artistas
	var artistas = document.getElementsByClassName("artista");
	// Mostramos todos los artistas
	for(var i = 0; i < artistas.length; i++){
		artistas[i].classList.remove('oculto-1');
		artistas[i].classList.remove('oculto-2');
		artistas[i].classList.remove('oculto-3');
		artistas[i].classList.remove('oculto-4');
	}
}
