export default function fetchApi(url) {
  return fetch(url).then(response => response.json());
}