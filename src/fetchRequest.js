const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34891957-fbaa485884f22f3e8d25bd4d4';
const image_type = 'all';
const orientation = 'horizontal';
const safesearch = 'true';
let page = 1;
const per_page = 12;

let currentQuery = null;

export const fetchRequest = query => {
  page = 1;
  currentQuery = query;
  const url = `${BASE_URL}?key=${KEY}&q=${query}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&page=${page}&per_page=${per_page}`;

  const res = fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response);
  });

  page += 1;
  return res;
};

export const loadMoreFetchRequest = () => {
  const url = `${BASE_URL}?key=${KEY}&q=${currentQuery}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&page=${page}&per_page=${per_page}`;

  const res = fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response);
  });

  page += 1;
  return res;
};
