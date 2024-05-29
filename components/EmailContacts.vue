<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { useEmailStore } from '~/store/email';

const store = useEmailStore();

function addEmail() {
  store.addContact({ name: faker.internet.email(), subscribed: false });
  store.increment();
}
</script>

<template>
<section class="bg-white shadow-xl rounded-box overflow-y-auto">
  <header class="flex flex-row items-center bg-blue-900 p-2 shadow-lg mb-3">
    <h1 class="font-bold text-white">Email</h1>

    <button class="btn btn-square btn-white ml-auto" @click="addEmail">Add</button>
  </header>

  <div v-if="store.count === 0" class="text-center mb-3">Add email contacts</div>
  <div v-else class="max-h-[calc(100vh-468px)]">
    <ul class="divide-y flow-root">
      <!-- Iterating over the list of email contacts in the store -->
      <li v-for="email in store.list" class="p-3 font-semibold">
        {{ email.name }}
        <span v-if="email.subscribed" class="float-right">
          <Icon name="mdi:email-plus-outline" color="green" size="2em" />
        </span>
        <span v-else class="float-right">
          <Icon name="mdi:email-remove-outline" color="red" size="2em" />
        </span>
      </li>
    </ul>
  </div>
</section>
</template>

<style scoped>

</style>