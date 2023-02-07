export const getFullUrl = (baseUrl: string, query: Record<string, string> = {}) => {
  const urlParams = new URLSearchParams();

  for (let key in query) {
    urlParams.set(key, query[key]);
  }

  const qs = Array.from(urlParams as unknown[]).length !== 0
    ? '?' + urlParams.toString()
    : '';

  return baseUrl + qs;
};
