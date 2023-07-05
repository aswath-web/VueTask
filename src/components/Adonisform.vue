<template>
  <div>
    <form @submit="handleSubmit">
      <div>
        <label for="employeeId">Employee ID</label>
        <input type="text" id="employeeId" v-model="formData.emp_id" required>
      </div>
      
      <div>
        <label for="employeeName">Employee Name</label>
        <input type="text" id="employeeName" v-model="formData.emp_name" required>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormComponent',
  data() {
    return {
      formData: {
        emp_id: '',
        emp_name: ''
      }
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      
      this.$emit('details', this.formData);
      this.formData = {
        emp_id: '',
        emp_name: ''
      };
    }
  }
};
</script>

<style scoped>
/* Add custom styling for the form if needed */
</style>
