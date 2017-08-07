import styles from 'styles';

function AppComponent() {
	var element = document.createElement('h1');
	var textNode = document.createTextNode('Webpack Scaffolding is working');
	element.appendChild(textNode);

	document.body.appendChild(element);
}

AppComponent();