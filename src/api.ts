const BASE_URL = 'https://fakestoreapi.com';

async function getAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
}

export {getAllProducts};
