<template>
  <div>
    <form @submit="handleSubmit">
      <div>
        <label for="employeeId">Employee ID</label>
        <input type="text" id="employeeId" v-model="employeeId" required>
      </div>
      
      <div>
        <label for="employeeName">Employee Name</label>
        <input type="text" id="employeeName" v-model="employeeName" required>
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
      employeeId: '',
      employeeName: ''
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      
      const formData = {
        emp_id: this.employeeId,
        emp_name: this.employeeName
      
      };
      
      this.$emit('details',formData)
      this.employeeId = '';
      this.employeeName = '';
    }
  }
};
</script>

<style scoped>
/* Add custom styling for the form if needed */
</style>
