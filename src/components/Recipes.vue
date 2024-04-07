<script lang="ts" setup>
    import RecipeCard from '@/components/RecipeCard.vue'
    import { computed, onMounted, ref } from 'vue';
    import { getRecipes } from '@/service/recipes/get-recipes'
    import type IRecipe from '@/interfaces/IRecipe.ts'
    import { useIngredientsStore } from '@/store/store';
    import type { CurrentSection } from './Content.vue';

    const emits = defineEmits(['navigate'])

    const ingredients = useIngredientsStore()
    const recipes = ref<IRecipe[]>([])
    const recipesLength = computed(() => recipes.value.length)

    function navigate(section: CurrentSection) {
        emits('navigate', section)
    }

    onMounted(async () => {
        const recipesList = await getRecipes()
        console.log({recipesList, ingredients: ingredients.ingredientsList})
        recipes.value = recipesList.filter((
            recipe => recipe.ingredientes.every(
                ingredient => ingredients.ingredientsList.includes(ingredient)
                )
            ))
    })
</script>

<template>
    <section class="recipes-section">
        <h1 class="header section-title">Receitas</h1>

        <p class="paragraph-lg results">Resultados encontrados: {{ recipesLength }} </p>

        <div v-if="!recipesLength" class="empty-results-container">
            <p class="paragraph">Ops, não encontramos resultados para a sua combinação. Vamos tentar de novo?</p>

            <img  src="@/assets/images/sem-receitas.png" alt="" />
        </div>
        <div v-else>
            <p class="paragraph-lg results-text">Veja as opções de receitas que encontramos com os ingredientes que você tem por ai!</p>
            <ul  class="recipes-list">
                <li v-for="recipe in recipes" :key="recipe.nome">
                    <recipeCard 
                        :img-src="`/imagens/receitas/${recipe.imagem}`" 
                        :recipe-title="recipe.nome" 
                        :ingredients="recipe.ingredientes"
                    />
                </li>
            </ul>
        </div>
        

        <button type="button" title="Editar lista" class="back-button" @click="navigate('catalog')">Editar lista</button>
    </section>
</template>

<style scoped>
    .recipes-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .section-title {
        color: var(--green-medium);
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .results {
        color: var(--green-medium);
        text-align: center;
        margin-bottom: 1rem;
    }

    .results-text {
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .empty-results-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 1rem;
        padding-bottom: 1rem;
    }

    .recipes-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 4rem;
    }

    .back-button {
        border: 0;
        border-radius: 32px;
        padding: 12px 48px;
        background-color: var(--coral);
        color: var(--white);
        font-weight: 700;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        margin: 0 auto;
        display: block;
        box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);

        &:hover {
            background-color: var(--ocre);
        }
    }
</style>