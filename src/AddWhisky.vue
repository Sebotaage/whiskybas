<template>
	    <div v-if="!newWhisky" class="add-whisky">
      <button class="bigbtn" id="newWhisky" @click="newWhisky = !newWhisky">New Whisky</button>
    </div>
  <div v-else  class="add-whisky">
        <form class="createNew">
      <div class="full-name form-group">
        <input type="text" placeholder="Name" v-model="name"><br>
        <input type="text" placeholder="Age" v-model="age">
        <input type="text" placeholder="Type" v-model="kind">
        <input type="text" placeholder="Alc %" v-model="alc">
        <input type="text" placeholder="Price" v-model="price">
        <textarea rows="4" cols="50" placeholder="Smell" v-model="smell"></textarea>
        <textarea rows="4" cols="50" placeholder="Taste" v-model="taste"></textarea>
        <textarea rows="4" cols="50" placeholder="Description" v-model="description"></textarea>
      </div>

    </form>
        <button class="addbtn bigbtn adc" @click="submitName()">Add</button>
        <button class="addbtn bigbtn adc" @click="newWhisky = !newWhisky">Cancel</button>

  </div>
</template>

<script>
	 import { whiskyRef } from './firebase';

export default {
  data () {
    return {
      name: '', age: '', kind: '', alc: '',
      price: '', smell: '', taste: '', description: '',
      newWhisky: false
    }
  },
  firebase: {
    whiskys: whiskyRef
  },
  methods: {
    submitName() {
      whiskyRef.push({ name: this.name, age: this.age, kind: this.kind, alc: this.alc, price: this.price, smell: this.smell, taste: this.taste, description: this.description, edit: false });
            this.newWhisky = false;
            this.name = '', this.age = '', this.kind = '', this.alc = '', this.price = '', this.smell = '', this.taste = '', this.description = '';
            alert("Whisky added!");
    }
}
}
</script>

