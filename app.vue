<template>
  <main class="container mx-auto bg-inherit h-screen p-5 flex flex-col">
    <!-- Contact Setting Section -->
    <section class="bg-blue-50 shadow-md mb-2 grow">
      <h2 class="bg-blue-950 text-white text-xl font-bold p-4 shadow-xl">
        Contact settings
      </h2>

      <section class="grid grid-cols-3 gap-4 p-5">
        <EmailContacts />
        <SmsContacts />
        <PhoneContacts />
      </section>
    </section>

    <!-- Notification Setting Section -->
    <section class="bg-blue-50 shadow-md">
      <h2 class="bg-blue-950 text-white text-xl font-bold p-4 shadow-xl">
        Notification settings
      </h2>

      <section class="grid grid-cols-1 p-5">
        <CommentsNotification />
      </section>
    </section>
  </main>
</template>
<script setup lang="ts">
</script>