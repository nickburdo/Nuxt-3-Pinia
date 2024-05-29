<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { useSmsStore } from '~/store/sms';

const store = useSmsStore();

function addSms() {
  store.addContact({ name: faker.string.numeric(10), subscribed: false });
  store.increment();
}
</script>

<template>
<section class="bg-white shadow-xl rounded-box overflow-y-auto">
  <header class="flex flex-row items-center bg-blue-900 p-2 shadow-lg mb-3">
    <h1 class="font-bold text-white">SMS</h1>

    <button class="btn btn-square btn-white ml-auto" @click="addSms">Add</button>
  </header>

  <div v-if="store.count === 0" class="text-center mb-3">Add SMS contacts</div>
  <div v-else class="max-h-[calc(100vh-468px)]">
    <ul class="divide-y flow-root">
      <li v-for="sms in store.list" class="p-3 font-semibold">
        {{ sms.name }}
        <span v-if="sms.subscribed" class="float-right">
          <Icon name="ic:outline-sms" color="green" size="2em" />
        </span>
        <span v-else class="float-right">
          <Icon name="ic:outline-sms-failed" color="red" size="2em" />
        </span>
      </li>
    </ul>
  </div>
</section>
</template>

<style scoped>

</style>