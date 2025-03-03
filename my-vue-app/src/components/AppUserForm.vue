<script setup>
//import { Form } from '@primevue/forms';
import { FormField } from '@primevue/forms';
import  Button  from 'primevue/button';


//import { InputText } from 'primevue/inputtext';
//import { Message } from 'primevue/message';
//import { Textarea } from 'primevue/textarea';

//import { ref } from 'vue';
//const text = ref ('');


</script>

<style scoped>
</style>

<template>
 <div>

    <Form :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-80">
  <FormField v-slot="$field" name="username" initialValue="" :resolver="zodUserNameResolver" class="flex flex-col gap-1">
      <InputText type="text" placeholder="Username" />
      <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
  </FormField>
  <FormField v-slot="$field" name="firstname" initialValue="" :resolver="yupFirstNameResolver" class="flex flex-col gap-1">
      <InputText type="text" placeholder="First Name" />
      <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
  </FormField>
  <FormField v-slot="$field" name="lastname" initialValue="" :resolver="valibotLastNameResolver" class="flex flex-col gap-1">
      <InputText type="text" placeholder="Last Name" />
      <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
  </FormField>
  <FormField v-slot="$field" name="password" initialValue="" :resolver="customPasswordResolver" class="flex flex-col gap-1">
      <Password type="text" placeholder="Password" :feedback="false" toggleMask fluid />
      <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
  </FormField>
  <FormField v-slot="$field" name="details" class="flex flex-col gap-1">
      <Textarea placeholder="Details"></Textarea>
      <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
  </FormField>
  <Button type="submit" severity="secondary" label="Submit"></Button>
</Form>
</div>

<br>

<div>
</div>
</template>

