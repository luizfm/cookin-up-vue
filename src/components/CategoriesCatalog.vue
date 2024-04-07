<script setup lang="ts">
    import CategoryCard from './CategoryCard.vue'
    import type ICategory from '@/interfaces/ICategory';
    import { getCategories  } from '@/service/categories/get-categories'
    import { onMounted, ref } from 'vue';
    import type { CurrentSection } from '@/components/Content.vue'

    const categories = ref<ICategory[]>([])

    const emit = defineEmits(['navigate'])

    function navigate(section: CurrentSection) {
        emit("navigate", section)
    }
    
    onMounted(async () => {
        categories.value = await getCategories()
    })
</script>

<template>
    <section class="select-ingredients">
        <h1 class="header ingredients-title">
            Ingredientes
        </h1>

        <p class="paragraph-lg instructions">Selecione abaixo os ingredientes que você quer usar nesta receita:</p>

        <ul class="categories">
            <li v-for="category in categories" :key="category.nome">
                <CategoryCard :category="category" />
            </li>
        </ul>

        <p class="paragraph tip">
            *Atenção: consideramos que você tem em casa sal, pimenta e água.
        </p>
        <button class="search-button" type="button" @click="navigate('recipes')">Buscar receitas!</button>

    </section>
</template>

<style scoped>
    .select-ingredients {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ingredients-title {
        color: var(--green-medium);
        display: block;
        margin-bottom: 1.5rem;
    }

    .instructions {
        margin-bottom: 2rem;
    }

    .categories {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .tip {
        align-self: flex-start;
        margin-bottom: 3.5rem;
    }

    .search-button {
        border: 0;
        border-radius: 32px;
        padding: 12px 48px;
        background-color: var(--coral);
        color: var(--white);
        font-weight: 700;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);

        &:hover {
            background-color: var(--ocre);
        }
    }

    @media only screen and (max-width: 767px) {
        .tip {
            margin-bottom: 2.5rem;
        }
    }
</style>