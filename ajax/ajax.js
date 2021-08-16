
function ajax(url, resolve, reject) {
  const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
  xhr.open('GET', url, false);
  xhr.onreadystatechange = () => {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    }
  }
  xhr.onerror = () => {
    reject();
  }
  xhr.send(null);
}