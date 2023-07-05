<template>
 <div>
      <input type="text" v-model="searchTerm" placeholder="Search" />
      <button @click="searchEmployees">Search</button>
</div>
<div>
  <form @submit="handleSubmit">
    <div>
      <label for="employeeId">Employee ID</label>
      <input type="text" id="employeeId" v-model="this.employeeId" >
    </div>
    
    <div>
      <label for="employeeName">Employee Name</label>
      <input type="text" id="employeeName" v-model="this.employeeName" required>
    </div>
    
    <button type="submit"> {{ this.edit? 'Update':'Insert' }}</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EmpForm',
  data() {
    return {
      employeeId: '',
      employeeName: '',
      id: '',
      employee: null,
      edit: false,
      baseurl: import.meta.env.VITE_BASE_URL,
      formData: {
        id: '',
        emp_name: ''
      }
    };
  },
  created(){
    this.emitter.on('getData', (evt) =>{
        console.log(evt.eventContent)
        this.id = evt.eventContent.id;
        this.fetchEmployee(this.id);
    })
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if(this.edit){
        this.formData = {
        id : this.employeeId,
        emp_name: this.employeeName
      };
        this.updateEmployee(this.id);
      }else{
      this.formData = {
        id : this.employeeId,
        emp_name: this.employeeName
      };
      
      this.$emit('submitForm',this.formData);
      this.employeeId = '';
      this.employeeName = '';
      }
    },
    fetchEmployee(id) {
        console.log(id)
  axios
    .get(`${this.baseurl}selectid/${id}`, this.formData)
    .then((response) => {
      //console.log('Data updated successfully:', response.data);
      //this.fetchData();
      this.edit = true;
      this.employee = response.data
      this.employeeId = this.employee.id;
      this.employeeName = this.employee.emp_name;
      console.log(this.employee);
      
    })
  },
  updateEmployee(id) {
        console.log(this.formData)
        
  axios
    .put(`${this.baseurl}update/${id}`, this.formData)
    .then((response) => {
      //console.log('Data updated successfully:', response.data);
      //this.fetchData();
  
      console.log(response);
      this.emitter.emit("reload","trigger");
      
      
    })
    
  },
  }
};
</script>

<style scoped>
/* Add custom styling for the form if needed */
</style>
