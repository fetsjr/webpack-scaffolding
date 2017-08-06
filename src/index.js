import {styles} from './scss/styles.scss';

function MaterialComponent() {
	var element = document.createElement('button');


	element.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";
	element.innerHTML = "Matarial Design Button";

	return element;
}

function BootstrapComponent() {
	var element = document.createElement('div');


	element.className = "alert alert-success";
	element.setAttribute("role", "alert");
	element.innerHTML = "Bootstrap 4 Alert";

	return element;
}

document.body.appendChild(MaterialComponent());
document.body.appendChild(BootstrapComponent());