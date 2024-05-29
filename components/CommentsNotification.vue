<script setup lang="ts">
import { useCommentStore } from '~/store/comment';
import type { SubscriptionMethod } from '~/types';

const store = useCommentStore();
async function handleSubscription(method: SubscriptionMethod, event: Event) {
 if ((event.target as HTMLInputElement).checked) {
   await store.subscribe(method);
 } else {
   await store.unsubscribe(method);
 }

  if (method === 'email') {
    (event.target as HTMLInputElement).checked = store.isEmailSubscribed;
  } else if (method === 'sms') {
    (event.target as HTMLInputElement).checked = store.isSmsSubscribed;
  } else if (method === 'phone') {
    (event.target as HTMLInputElement).checked = store.isPhoneSubscribed;
  }
}
</script>

<template>
<div class="card bg-base-100 p-3 shadow-xl">
  <div class="grid grid-cols-2 gap-2">
    <section>
      <h4 class="card-title">Comments</h4>

      <p>Receive notifications when someone comments on your documents or mentions you.</p>
    </section>

    <section>
      <div class="flex flex-col">
        <div class="form-control w-52 ml-auto">
          <label class="cursor-pointer label">
            <span class="label-text">Email</span>

            <input type="checkbox" class="toggle toggle-success" @click="handleSubscription('email', $event)" />
          </label>
        </div>

        <div class="form-control w-52 ml-auto">
          <label class="cursor-pointer label">
            <span class="label-text">SMS</span>

            <input type="checkbox" class="toggle toggle-success" @click="handleSubscription('sms', $event)" />
          </label>
        </div>

        <div class="form-control w-52 ml-auto">
          <label class="cursor-pointer label">
            <span class="label-text">Phone</span>

            <input type="checkbox" class="toggle toggle-success" @click="handleSubscription('phone', $event)" />
          </label>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<style scoped>

</style>