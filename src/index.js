import styles from 'styles';

function AppComponent() {
	var element = document.createElement('div');

	element.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";
	element.innerHTML = "Webpack Scaffolding is working";

	return element;
}

document.body.appendChild(AppComponent());