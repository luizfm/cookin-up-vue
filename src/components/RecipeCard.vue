<script setup lang="ts">
import Tag from '@/components/Tag.vue'

    defineProps({
        imgSrc: { type: String, required: true },
        recipeTitle: { type: String, required: true },
        ingredients: { type: Array, required: true },
    })

</script>
 
<template>
    <article class="card">
        <header class="card-header">
            <img :src="imgSrc" alt="" class="recipe-image" />
        </header>
        <div class="card-body">
            <p class="recipe-title">{{ recipeTitle }}</p>

            <div class="ingredients-list">
                <Tag 
                    v-for="ingredient in ingredients as string[]" 
                    :key="ingredient" 
                    :text="ingredient" 
                />
            </div>
        </div>
    </article>
</template>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
        width: 280px;
        background-color: var(--white);
        height: 100%;

        .card-header {
            height: 150px;
            width: 100%;
            border-radius: 16px 16px 0 0;
            overflow: hidden;
            
            .recipe-image {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }

    .card-body {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        align-items: center;
        justify-content: center;
        padding: 32px 0;

        .ingredients-list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0 16px;
        }
    }
</style>