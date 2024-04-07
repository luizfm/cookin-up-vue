import type IRecipe from "@/interfaces/IRecipe";

export async function getRecipes() {
  const response = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
  );

  const recipes: IRecipe[] = await response.json();

  return recipes;
}
