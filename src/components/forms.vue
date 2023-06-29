<template>
  <div>
    <form @submit.prevent="submitForm">
      
      <div>
        <label>Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" id="phone" v-model="formData.phone" required pattern="[0-9]{10}">
      </div>
      <div>
        <label>Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label>Total:</label>
        <input type="number" id="total" v-model="formData.total" required min="0" max="100">
      </div>
      <button v-if="!isEditing" type="submit">Submit</button>
      <button v-if="isEditing" type="submit">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'forms',
  props: {
    initialData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        email: null,
        total: null,
      },
      isEditing: false
    }
  },
  watch: {
  initialData: {
    handler(newData) {
      if (newData) {
        this.formData = { ...newData };
        this.isEditing = true;
      } else {
        this.isEditing = false;
      }
    },
    immediate: true
  }
},
  methods: {
   submitForm() {
  if (this.isEditing) {
    this.$emit('formUpdated', this.formData);
    this.isEditing = false;
    this.clearForm();
  } else {
    this.$emit('formSubmitted', this.formData);
    this.clearForm();
  }
},
    clearForm() {
      this.formData = {
        name: null,
        phone: null,
        email: null,
        total: null,
      };
    }
  }
};
</script>

<style>
/* Styles */
.forms-container {
  max-width: 400px;
  margin: 16px auto;
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

.forms-container button {
  margin-top: 16px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.forms-container button:hover {
  background-color: #0056b3;
}
</style>
