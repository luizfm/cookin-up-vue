<script setup lang="ts">
import type ICategory from '@/interfaces/ICategory'
import { ref, type PropType, computed } from 'vue';
import Tag from '@/components/Tag.vue';
import { useIngredientsStore } from '@/store/store'

defineProps({
    category: {
        type: Object as PropType<ICategory>,
        required: true,
    }
})

const ingredients = useIngredientsStore()

function onClick(text: string) {
    ingredients.handleIngredient(text)
}
    
</script>

<template>
    <article class="category">
        <header class="category-header">
            <img :src="`/imagens/icones/categorias_ingredientes/${category.imagem}`" alt="" class="category-image" />
        
            <h2 class="category-name">{{ category.nome }}</h2>
        </header>

        <ul class="category-ingredients">
            <li v-for="ig in category.ingredientes" :key="ig">
                <Tag 
                    :text="ig" 
                    :checked="ingredients.ingredientsList.includes(ig)"
                    @on-click="onClick"
                />
            </li>
        </ul>
    </article>
</template>

<style scoped>
    .category {
        width: 19.5rem;
        padding: 1rem;
        border-radius: 1rem;
        background: var(--white);
        box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .category-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .category-image {
        width: 3.5rem;
    }

    .category-name {
        text-align: center;
        color: var(--green-medium);
    }

    .category-ingredients {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
</style>