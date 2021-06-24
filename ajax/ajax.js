
function ajax(url, resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.onreadystatechange = () => {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    }
  }
  xhr.onerror = () => {
    reject();
  }
  xhr.send();
}