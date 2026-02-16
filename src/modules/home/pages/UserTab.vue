<script setup lang="ts"></script>

<template>
  <div class="max-w-2xl">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">User Profile</h1>
      <p class="text-gray-600">Manage your personal account settings and preferences.</p>
    </header>

    <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
      <div class="flex items-center gap-6 mb-8">
        <div
          class="h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold"
        >
          JD
        </div>
        <div>
          <h2 class="text-xl font-bold text-gray-900">John Doe</h2>
          <p class="text-gray-500">Systems Operator</p>
        </div>
      </div>

      <div class="space-y-4 border-t pt-6">
        <div class="flex justify-between py-2 border-b border-gray-50">
          <span class="text-gray-500">Email</span>
          <span class="font-medium">john.doe@tenant.com</span>
        </div>
        <div class="flex justify-between py-2 border-b border-gray-50">
          <span class="text-gray-500">Role</span>
          <span class="font-medium">Administrator</span>
        </div>
      </div>
    </div>
  </div>
</template>
