<template>
<div class="container">
  <input type="text" v-model="search" placeholder="Search for whiskys" class="search">

    <ul>
      <li v-for="whisky of filteredWhiskys" v-bind:key="whisky['.key']">
        <div v-if="!whisky.edit">
          <form class="saved" :class="{selectedWhisky:whisky.selected}" @click="$set(whisky, 'selected', !whisky.selected)">
        <h1>{{ whisky.name }}</h1>
        <h2>Age: {{ whisky.age }}</h2>
        <h2>{{ whisky.kind }}</h2>
        <h2>{{ whisky.alc }}%</h2>
        <h2>Price: {{ whisky.price }}kr</h2>
        <p>Smell: {{ whisky.smell }}</p>
        <p>Taste: {{ whisky.description }}</p>
        <p>Description: {{ whisky.smell }}</p>
        <button @click="startEdit(whisky['.key'])">Edit</button>
        </form>
        </div>

        <div v-else>
  <form class="editWhisky">
      <div class="full-name form-group">
        <input type="text" placeholder="Name" v-model="whisky.name"><br>
        <input type="text" placeholder="Age" v-model="whisky.age">
        <input type="text" placeholder="Type" v-model="whisky.kind">
        <input type="text" placeholder="Alc %" v-model="whisky.alc">
        <input type="text" placeholder="Price" v-model="whisky.price">
        <textarea rows="4" cols="50" placeholder="Smell" v-model="whisky.smell"></textarea>
        <textarea rows="4" cols="50" placeholder="Taste" v-model="whisky.taste"></textarea>
        <textarea rows="4" cols="50" placeholder="Description" v-model="whisky.description"></textarea>
        <button @click="saveEdit(whisky)">Save</button>
          <button @click="cancelEdit(whisky['.key'])">Cancel</button>
        <button @click="removeWhisky(whisky['.key'])">Remove</button>
      </div>
    </form>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  import { whiskyRef } from './firebase'

export default {
  data () {
    return {
      newWhisky: false, selected: [], search: ''
    }
  },
  firebase: {
    whiskys: whiskyRef
  },
  computed: {
    filteredWhiskys (){
      return this.whiskys.filter((whiskys) =>{
        return whiskys.name.toLowerCase().includes(this.search.toLowerCase())
        || whiskys.age.toLowerCase().includes(this.search.toLowerCase())
        || whiskys.kind.toLowerCase().includes(this.search.toLowerCase())

      });
    },
  },
  methods: {
    removeWhisky(key) {
      whiskyRef.child(key).remove();
    },
    startEdit(key) {
      whiskyRef.child(key).update({ edit: true })
    },
    cancelEdit(key){
      whiskyRef.child(key).update({ edit: false})
    },
    saveEdit(whisky){
      const key = whisky['.key']
      whiskyRef.child(key).set({ name: whisky.name, age: whisky.age, kind: whisky.kind, alc: whisky.alc, price: whisky.price, smell: whisky.smell, taste: whisky.taste, description: whisky.description, edit: false})
    }
  }
}
</script>
<style scoped>
ul {

      list-style-type: none;
  padding: 0;
    height: 100px;
}

li {
  display: inline-block;
  padding:10px;
  margin:0px;
}

p {
  color: #000;
}

.container {
  margin:auto;
  width:70%;
      margin-top:170px;
}

.search {

}

.saved {
  margin:auto;
    background: #999;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 3px 60px #000;
    transition: 0.2s;
    overflow: auto;
      height: 150px;
      width: 350px;
  }

  .saved:hover {
    filter: brightness(130%);
    transform: scale(1.05);
    transition: 0.2s;
  }

  .selectedWhisky {
    height: 400px;
  }

  .editWhisky {
  margin:auto;
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 3px 60px #000;
    max-width: 350px;
    max-height: 400px;
    transition: 0.2s;
    overflow: auto;
  }

  .editWhisky:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
</style>
