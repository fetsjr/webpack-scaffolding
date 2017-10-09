import styles from 'styles';

// function AppComponent() {
// 	var element = document.createElement('h1');
// 	var textNode = document.createTextNode('Webpack Scaffolding is working');
// 	element.appendChild(textNode);

// 	document.body.appendChild(element);
// }

// AppComponent();

var app;

const config = {};

var AppComponent = () => {
  app = document.createElement('div');
  app.id = "app";
  app.className = "";
  let h1 = document.createElement('h1');
  let textNode = document.createTextNode('Webpack Scaffolding is working');
  h1.appendChild(textNode);
  app.appendChild(h1);
  document.body.className = "";
  document.body.appendChild(app);
}

AppComponent();