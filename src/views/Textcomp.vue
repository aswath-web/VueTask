<template>
<div>
    <textarea v-model="text"></textarea>
    <p>Number of vowels: {{ countVowels }}</p>
    <p>Number of words: {{ countWords }}</p>
    <p>Number of sentence: {{ countSentence }}</p>    
</div>    
</template>
<script>
export default{
    data() {
    return {
      text: ''
    };
  },
  computed:{ 
    countVowels() {
      // Count vowels
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      let count = 0;
      for (const char of this.text.toLowerCase()) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      return count;
    },
     countWords() {
       // Count words
       if(this.text == ""){ return 0;}
       else{
       const words = this.text.trim().split(/\s+/);
       let wordCount = words.length;
       return wordCount;
       }
     },
     countSentence(){
         const sentence = this.text.trim().split(/[?!.;]/);
       let sentenceCount = sentence.length-1;
      return sentenceCount;
     }
    },
    
  
}
</script>
<style >

</style>

        
