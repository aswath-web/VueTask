<template>
  <div class="container">
    <forms @formSubmitted="handleFormSubmitted" v-if="!isEditing" />
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Total</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in arr" :key="index">
          <td :title="item.name">{{ $filters.truncateName(item.name, 10) }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.total }}</td>
          <td>
            <button @click="editRow(index)" class="button">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>

    <forms v-if="isEditing" :initialData="editingData" @formUpdated="updateForm" />
  </div>
</template>

<script>
import forms from '@/components/forms.vue';

export default {
  components: {
    forms
  },
  data() {
    return {
      arr: [],
      isEditing: false,
      editingData: null,
      editingIndex: null
    }
  },
  methods: {
    handleFormSubmitted(formData) {
      this.arr.push(formData);
    },
    editRow(index) {
      this.isEditing = true;
      this.editingData = { ...this.arr[index] };
      this.editingIndex = index;
    },
    updateForm(formData) {
      this.arr.splice(this.editingIndex, 1, formData);
      this.isEditing = false;
      this.editingData = null;
      this.editingIndex = null;
    },
  }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.data-table th {
  background-color: #f2f2f2;
}

.edit-button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #0056b3;
}

.forms-container {
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.forms-container label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.forms-container input[type="text"],
.forms-container input[type="email"],
.forms-container input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.forms-container button[type="submit"] {
  margin-top: 16px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.forms-container button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
