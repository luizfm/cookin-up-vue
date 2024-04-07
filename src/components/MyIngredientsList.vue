<script setup lang="ts">
import { computed } from 'vue';
import Tag from './Tag.vue';
import { useIngredientsStore } from '@/store/store'

const ingredients = useIngredientsStore()
const list = ingredients.ingredientsList
const isListEmpty = computed(() => list.length === 0)
console.log({ingredients})
</script>

<template>
    <section>
            <span class="subtitle-lg my-list-text">Sua lista:</span>

            <div v-if="isListEmpty" class="empty-list">
                <img src="@assets/images/icons/lista-vazia.svg" alt="Uma lupa sobre documentos empilhados" />
                <p class="paragraph">Sua lista está vazia. Selecione ingredientes para começar.</p>
            </div>
            <ul v-else class="my-ingredients-list">
                <li v-for="ingredient in list" :key="ingredient">
                    <Tag :text="ingredient" checked read-only />
                </li>
            </ul>
        </section>
</template>

<style scoped>
    .empty-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.25rem;
        color: var(--coral);
        text-align: center;
    }

    .my-list-text {
        color: var(--coral, #f0633c);
        display: block;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .my-ingredients-list {
        display: flex;
        justify-content: center;
        gap: 1rem 1.5rem;
        flex-wrap: wrap;
    }
</style>