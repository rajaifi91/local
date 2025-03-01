<template>
    <div class="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">User Registration</h2>
  
      <form @submit.prevent="handleSubmit">
        <!-- Name Input -->
        <div class="mb-4">
          <label class="block mb-1">Name:</label>
          <input v-model="form.name" type="text" placeholder="Enter your name"
                 class="w-full p-2 border rounded" required />
        </div>
  
        <!-- Email Input -->
        <div class="mb-4">
          <label class="block mb-1">Email:</label>
          <input v-model="form.email" type="email" placeholder="Enter your email"
                 class="w-full p-2 border rounded" required />
        </div>
  
        <!-- Gender Radio Buttons -->
        <div class="mb-4">
          <label class="block mb-1">Gender:</label>
          <label><input type="radio" value="Male" v-model="form.gender" /> Male</label>
          <label><input type="radio" value="Female" v-model="form.gender" /> Female</label>
        </div>
  
        <!-- Country Dropdown -->
        <div class="mb-4">
          <label class="block mb-1">Country:</label>
          <select v-model="form.country" class="w-full p-2 border rounded">
            <option disabled value="">Select your country</option>
            <option>USA</option>
            <option>India</option>
            <option>UK</option>
          </select>
        </div>
  
        <!-- Terms Checkbox -->
        <div class="mb-4">
          <label>
            <input type="checkbox" v-model="form.terms" /> I agree to the terms and conditions
          </label>
        </div>
  
        <!-- Submit Button -->
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
  
      <!-- Display Form Data -->
      <div v-if="submitted" class="mt-6 p-4 border rounded bg-green-100">
        <h3 class="text-xl font-bold">Form Data:</h3>
        <p><strong>Name:</strong> {{ form.name }}</p>
        <p><strong>Email:</strong> {{ form.email }}</p>
        <p><strong>Gender:</strong> {{ form.gender }}</p>
        <p><strong>Country:</strong> {{ form.country }}</p>
        <p><strong>Terms Accepted:</strong> {{ form.terms ? 'Yes' : 'No' }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  const form = reactive({
    name: '',
    email: '',
    gender: '',
    country: '',
    terms: false,
  });
  
  const submitted = ref(false);
  
  const handleSubmit = () => {
    if (form.name && form.email && form.gender && form.country && form.terms) {
      submitted.value = true;
      console.log('Form Submitted:', form);
    } else {
      alert('Please fill in all fields and agree to the terms.');
    }
  };
  </script>
  
  <style scoped>
  input[type="text"], input[type="email"], select {
    outline: none;
  }
  </style>