<template>
<h2>Hello {{ username }} </h2>
<select v-model="selectedDept" @click="fetchdept">
      <option v-for="(item,index) in depts" :key="index" :value="item.id">{{ item.dept_name }}</option>
    </select>
     <div>
      <input type="text" v-model="searchTerm" placeholder="Search" />
      <button @click="searchEmployees">Search</button>
    </div>
    <p v-if="noResultsMessage" class="no-results">{{ noResultsMessage }}</p>
  <div>
    <button @click="openForm">Create</button>
    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Edit</th>
          <th> Delete </th>
        </tr>
      </thead>
      <tbody>
       
        <tr v-for="item in adonisData" :key="item.id">
          <td >{{ item.id }}</td>
          <td>{{ item.emp_name }}</td>
          <td>
            <button @click="editEmployee(item)">Edit</button>
          </td>
           <td>
            <button @click="deleteEmployee(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <template v-if="showForm">
    <EmpForm v-if="showForm" :editData="editData" @submitForm="handleSubmit" @cancelForm="resetForm" />
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import EmpForm from '../components/empform.vue';

export default {
  name: 'Emptable',
  components: {
    EmpForm,
  },
  data() {
    return {
      adonisData: [],
      showForm: false,
      formData: {       //thevai
        id: '',
        emp_name: '',
        
      },
      selectedDept: '',
        depts: null,
      employee: {},
      baseUrl: import.meta.env.VITE_BASE_URL,
      username: '',
      searchTerm: '',
      noResultsMessage:''
    };
  },
  created(){
    this.emitter.on('reload',this.fetchData())
    
  },
  mounted() {
    this.username = localStorage.getItem('username');
    // console.log(this.username)
    this.fetchData();
  },
  methods: {
    fetchdept(){
        axios.get(`${this.baseUrl}join`)
    .then((response) => {
        this.depts=response.data;
        console.log(this.depts,"sh");
      }).catch((err) => {
        console.log(err);
      })
      console.log(this.selectedDept)
      axios.get(`http://127.0.0.1:3333/joinall/${this.selectedDept}`)
    .then((response) => {
        this.adonisData=response.data;
        console.log(response.data);
      }).catch((err) => {
        console.log(err);
      })
    },
    fetchData() {
      axios.get('http://127.0.0.1:3333/model')
        .then(response => {
          this.adonisData = response.data;
        })
        .catch(error => {
          console.error('Error fetching Adonis data:', error);
        });
    },
    openForm() {
        this.showForm = true;
        this.resetForm();
    },
   editEmployee(employee) {
    this.showForm = true;
    this.editData = employee;
    console.log(employee,"check")
    this.formData.id = employee.id;
    this.formData.emp_name = employee.emp_name;
    console.log(this.formData)
    this.emitter.emit("getData",{eventContent :this.formData});
    //console.log(this.formData)
   },
    handleSubmit(formData) {
  console.log('Form data:', formData); // Check if form data is correctly received

  axios.post('http://127.0.0.1:3333/ins', formData)
    .then(response => {
      console.log('Data saved successfully:', response.data);
      this.fetchData();
      this.showForm = false;
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });
},

    searchEmployees() {
  axios
    .get('http://127.0.0.1:3333/search', {
      params: {
        term: this.searchTerm,
      },
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        this.adonisData = []; // Clear the existing data
        this.noResultsMessage = 'No matching employees found.';
      } else {
        this.adonisData = response.data;
        this.noResultsMessage = '';
      }
    })
    .catch((error) => {
      console.error('Error searching employees:', error);
    });
},
deleteEmployee(id) {
  axios
    .delete(`http://127.0.0.1:3333/delete/${id}`)
    .then((response) => {
      console.log('Data deleted successfully:', response.data);
      this.fetchData();
    })
    .catch((error) => {
      console.error('Error deleting data:', error);
    });
    },

  resetForm() {
  this.formData.id = '';
  this.formData.emp_name = '';
},
}
}
</script>

<style scoped>
.no-results {
  color: red;
  /* Add more styles as needed */
}

/* Add custom styling for the view if needed */
</style>
