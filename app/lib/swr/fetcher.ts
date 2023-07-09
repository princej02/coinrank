export const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> =>
  fetch(...args).then((res) => res.json());


  // const fetcher = <T>(url: string, apiKey: string, ...args: Parameters<typeof fetch>): Promise<T> =>
  // fetch(url, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${apiKey}`
  //   },
  //   ...args
  // }).then((res) => res.json());
