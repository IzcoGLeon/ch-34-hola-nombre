getReferenceTitle = () => {
  return document.getElementById('name');
}

getName = () => {
  let name = prompt('Cual es tu nuevo nombre?');
  changeName(name);

}

changeName = (name) => {
  const reference = getReferenceTitle();
  reference.innerHTML = `Hola ${name}`;
}