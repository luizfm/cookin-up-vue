<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
    },
    readOnly: {
        type: Boolean,
    }
})

const emits = defineEmits(['onClick'])

const handleOnClick = () => {
    emits("onClick", props.text)
}

</script>

<template>
    <button 
    :class="{
        tag: true,
        checked: props.checked,
        'read-only': props.readOnly
    }" 
    @click="handleOnClick"
    :aria-pressed="checked"
    >
        {{  text }}
    </button>
</template>

<style scoped>
    .tag {
        display: inline-block;
        border-radius: 0.5rem;
        min-width: 4.25rem;
        padding: 0.5rem;
        text-align: center;
        transition: 0.2s;
        color: var(--grey);
        background-color: var(--grey-light);
        font-weight: 400;
        cursor: pointer;
    }

    .checked {
        color: var(--cream);
        background-color: var(--coral);
        font-weight: 700;
    }

    .read-only {
        cursor: auto;
    }
</style>