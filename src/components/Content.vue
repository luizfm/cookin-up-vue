<script lang="ts" setup>
import { ref } from 'vue';
import CategoriesCatalog from './CategoriesCatalog.vue';
import MyIngredientList from './MyIngredientsList.vue';
import Recipes from './Recipes.vue';

export type CurrentSection = 'catalog' | 'recipes'

const currentSection = ref<CurrentSection>('catalog')

function navigate(section: CurrentSection) {
    currentSection.value = section
}

</script>

<template>
    <main class="content">
        <MyIngredientList />
    
        <CategoriesCatalog v-if="currentSection === 'catalog'" @navigate="navigate" />
        <Recipes v-else-if="currentSection === 'recipes'" @navigate="navigate" />
    </main>
</template>

<style scope>
    .content {
        padding: 6.5rem 7.5rem;
        border-radius: 3.75rem 3.75rem 0 0;
        background: var(--cream, #FFFAF3);
        color: var(--grey, #444);

        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 5rem;
    }

    @media only screen and (max-width: 1300px) {
        .content {
            padding: 5rem 3.75rem;
            gap: 3.5rem;
        }
    }

    @media only screen and (max-width: 767px) {
        .content {
            padding: 4rem 1.5rem;
            gap: 4rem;
        }
    }
</style>