<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { usePhoneStore } from '~/store/phone';

const store = usePhoneStore();

function addPhone() {
  store.addContact({ name: faker.string.numeric(10), subscribed: false });
  store.increment();
}
</script>

<template>
<section class="bg-white shadow-xl rounded-box overflow-y-auto">
  <header class="flex flex-row items-center bg-blue-900 p-2 shadow-lg mb-3">
    <h1 class="font-bold text-white">Phone</h1>

    <button class="btn btn-square btn-white ml-auto" @click="addPhone">Add</button>
  </header>

  <div v-if="store.count === 0" class="text-center mb-3">Add phone contacts</div>
  <div v-else class="max-h-[calc(100vh-468px)]">
    <ul class="divide-y flow-root">
      <li v-for="phone in store.list" class="p-3 font-semibold">
        {{phone.name}}
        <span v-if="phone.subscribed" class="float-right">
          <Icon name="mdi:cellphone-check" color="green" size="2em" />
        </span>
        <span v-else class="float-right">
          <Icon name="mdi:cellphone-remove" color="red" size="2em" />
        </span>
      </li>
    </ul>
  </div>
</section>
</template>

<style scoped>

</style>