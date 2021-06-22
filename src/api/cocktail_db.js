export const ROOT_API = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomCocktail = async () => {
  const response = await fetch(`${ROOT_API}/random.php`);
  const json = await response.json();

  return json.drinks[0];
};
