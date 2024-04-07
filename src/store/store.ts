import { defineStore } from "pinia";

export const useIngredientsStore = defineStore("ingredients", {
  state: () => {
    return {
      ingredientsList: [] as string[],
    };
  },
  actions: {
    handleIngredient(ingredient: string) {
      console.log("nao?");
      const ingredientIndex = this.ingredientsList.findIndex(
        (item) => item === ingredient
      );

      if (ingredientIndex >= 0) {
        console.log(ingredientIndex, this.ingredientsList);
        this.ingredientsList.splice(ingredientIndex, 1);
        return;
      }

      this.ingredientsList.push(ingredient);
    },
  },
});
