<template>
  <div>
    <button @click="openForm">Create</button>
    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in adonisData" :key="item.id">
          <td>{{ item.emp_id }}</td>
          <td>{{ item.emp_name }}</td>
        </tr>
      </tbody>
    </table>
    <Adonisform v-if="showForm" @submitForm="handleSubmit" @cancelForm="resetForm" @details="empdetails"/>
  </div>
</template>

<script>
import axios from 'axios';
import Adonisform from '../components/Adonisform.vue';

export default {
  name: 'Axios',
  components: {
    Adonisform,
  },
  data() {
    return {
      adonisData: [],
      showForm: false,
      formData: {
        employeeId: '',
        employeeName: '',
      },
      employee:{}
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://127.0.0.1:3333/model')
        .then(response => {
          this.adonisData = response.data;
        })
        .catch(error => {
          console.error('Error fetching Adonis data:', error);
        }); 
    },empdetails(data){
      this.employee={...data}
       axios.post('http://127.0.0.1:3333/ins', this.employee)
       .then((response)=>
       console.log(response))
      




    },

    openForm() {
      this.showForm = true;
    },
    handleSubmit(formData) {
      axios.post('http://127.0.0.1:3333/ins', formData)
        .then(response => {
          console.log('Data saved successfully:', response.data);
          this.fetchData();
          this.resetForm();
          this.showForm = false; 
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
    },
    resetForm() {
      this.formData.employeeId = '';
      this.formData.employeeName = '';
    },
  },
};
</script>

<style scoped>
/* Add custom styling for the view if needed */
</style>
