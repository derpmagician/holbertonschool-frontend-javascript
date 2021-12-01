export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, fail) => {
    resolve({
      status: 200, body: 'Success',
    }),
    fail(new Error('The fake API is not working currently'));
  });
}
