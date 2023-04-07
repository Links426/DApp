<template>
    <div class="py-12px px-12px button"><slot name="content"></slot></div>
</template>
<script setup lang="ts"></script>

<style scoped>
.button {
    /* background-color: rgba(255, 255, 255, 0.2); */
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    border-radius: 12px;
    transition: all 0.3s;
}
.button:hover {
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.4);
}
</style>
