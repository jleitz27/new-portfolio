
/* We're using this code to fake a real login to save time */
export async function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'johndoe@gmail.com' && password === 'testing123') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}