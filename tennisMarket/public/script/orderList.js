async function getData() {
  const data = await fetch('/data').then(res => res.json());

  const STR = data.map(item => `<div>${item.id}  ${item.date}</div>`);

  document.querySelector('#list').innerHTML = STR.join('');
}

getData();
