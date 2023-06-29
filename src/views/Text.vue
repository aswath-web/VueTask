<template>
  <div class="container">
    <div class="text-area-container">
      <textarea v-model="text"></textarea>
    </div>
    <div class="button-container">
      <button @click="countVowelsAndWords">Count</button>
    </div>
    <div class="result-container">
      <p>Number of vowels: {{ vowelCount }}</p>
      <p>Number of words: {{ wordCount }}</p>
    </div>
    <div class="button-container">
      <button @click="moveToPage()">Next</button>
    </div>
    <div class="button-container">
      <button @click="moveTotask()">Task2</button>
    </div>
  </div>
</template>

<script>
export default{
    data() {
    return {
      text: '',
      vowelCount: 0,
      wordCount: 0
    };
  },methods: {
  countVowelsAndWords() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    this.text.toLowerCase().split('').forEach(char => {
      if (vowels.includes(char)) {
        count++;
      }
    });
    this.vowelCount = count;
    const words = this.text.trim().split(/\s+/);
    this.wordCount = words.length;
  },
  moveToPage() {
    this.$router.push("/table");
  },
  moveTotask() {
    this.$router.push("/taskdisplay");
  }
}

}
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.text-area-container {
  margin-top: 20px;
  width: 400px;
}

textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.button-container {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.result-container {
  margin-top: 20px;
  text-align: center;
}

.result-item {
  margin: 5px 0;
  font-size: 16px;
  color: #333;
}

button:hover {
  background-color: #45a049;
}

button:active {
  background-color: #3e8e41;
}

button:focus {
  outline: none;
}

::placeholder {
  color: #999;
}

.container {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

textarea {
  background-color: #fff;
  border: 1px solid #ddd;
}

button {
  background-color: #4CAF50;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.result-item {
  color: #555;
}

</style>
