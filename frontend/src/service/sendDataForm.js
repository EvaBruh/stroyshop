export const postData = async (url, data) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: data
  });

  return await result.json()
}