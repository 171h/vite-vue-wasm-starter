<script setup lang="ts">
import init2, { add } from '#/calc/pkg'
import init, { use_counter } from '#/hello/pkg'
import { onMounted, ref } from 'vue'

const val = ref<bigint>(0n)

onMounted(() => {
  init().then(() => {
    const counterBtn = use_counter()
    const card = document.querySelector('.card')
    card?.appendChild(counterBtn)
  })

  init2().then(() => {
    val.value = add(123n, 456n)
  })
})
</script>

<template>
  <div>
    <div class="flex">
      <a href="https://vitejs.dev" target="_blank">
        <img src="@/app/public/vite.svg" class="logo w-50px vanilla" alt="Vite logo">
      </a>
      <a href="https://vue.org" target="_blank">
        <img src="@/app/public/vue.svg" class="logo w-50px vanilla" alt="Vue logo">
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="@/app/public/typescript.svg" class="logo w-50px vanilla" alt="TypeScript logo">
      </a>
      <a href="https://rustwasm.github.io/" target="_blank">
        <img src="@/app/public/rust-wasm.png" class="logo w-50px vanilla" alt="Rust Wasm">
      </a>
    </div>
    <h1>Vite + TypeScript + Rust</h1>
    <div class="card" />
    <p class="read-the-docs">
      Click the logos above to learn more about Vite, Typescript, and WebAssembly
    </p>

    <div>
      {{ val }}
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
