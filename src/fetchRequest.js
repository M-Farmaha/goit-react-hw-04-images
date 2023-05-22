const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34891957-fbaa485884f22f3e8d25bd4d4';
const orientation = 'horizontal';
const safesearch = 'true';
const per_page = 12;

export const fetchRequest = (query, requestPage) => {
  const url = `${BASE_URL}?key=${KEY}&q=${query}&orientation=${orientation}&safesearch=${safesearch}&page=${requestPage}&per_page=${per_page}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response);
  });
};
