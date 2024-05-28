<template>
  <main class="container mx-auto bg-inherit h-screen p-5">
    <!-- Contact Setting Section -->
    <section class="bg-blue-50 shadow-md h-1/2 mb-2">
      <h2 class="bg-blue-950 text-white text-xl font-bold p-4 mb-5 shadow-xl">
        Contact settings
      </h2>

      <section class="grid grid-cols-3 gap-4 p-5">
        <!-- Email Contacts Component -->
        <div>EmailContacts</div>
        <!-- SMS Contacts Component -->
        <div>SmsContacts</div>
        <!-- Phone Contacts Component -->
        <div>PhoneContacts</div>
      </section>
    </section>

    <!-- Notification Setting Section -->
    <section class="bg-blue-50 shadow-md h1/2">
      <h2 class="bg-blue-950 text-white text-xl font-bold p-4 mb-5 shadow-xl">
        Notification settings
      </h2>

      <section class="grid grid-cols-1 p-5">
        <!-- Comments Notification Component -->
        CommentsNotification
      </section>
    </section>
  </main>
</template>
<script setup lang="ts">
</script>