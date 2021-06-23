export const ROOT_API = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomCocktail = async () => {
  const response = await fetch(`${ROOT_API}/random.php`);
  const json = await response.json();

  return json.drinks[0];
};

export const getCategoryDrinks = async (category) => {
  const normalise = category.toLowerCase().replace(/ /g, "_");
  const response = await fetch(`${ROOT_API}/filter.php?c=${normalise}`);
  const json = await response.json();

  return json;
};
