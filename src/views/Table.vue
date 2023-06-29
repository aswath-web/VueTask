<template>
  <fragment>
    <div class="tables">
      <center>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stu in students" :key="stu.id">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
    <div class="button-container">
      <button @click="moveToPage()">Next</button>
    </div>
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "Aswath", score: 100 },
        { id: 2, name: "Aahash", score: 90 },
        { id: 3, name: "Adhav", score: 80 },
        { id: 4, name: "Anush", score: 70 },
        { id: 5, name: "Adhira", score: 60 }
      ]
    };
  },
  methods: {
    moveToPage() {
      this.$router.push("/tablecomp");
    }
  }
};
</script>

<style>
table,
th {
  align-self: auto;
  border: 1px solid;
  height: 150%;
  width: 150%;
  text-align: center;
  padding: 15px;
  background-color: #04aa6d;
  color: white;
}
td {
  border: 1px solid;
}

.button-container {
  text-align: center;
  margin-top: 20px;
}
</style> 