const API_URL = 'http://localhost:3001/api/';

export function api(url: string, body?: any, method?: string, headers?: HeadersInit) {/////////////

  let options: RequestInit = {};

  if (body) {
    options = {
      method: method ?? 'POST', // Method or default to POST
      cache: 'no-cache', // By default, don't cache when using POST
      headers: {// Default headers
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body) // Default body
    };
  }

  return fetch(API_URL + url, options).then(res => res.json());
}