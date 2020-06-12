<template>
  <div class="notes" id="app">
    <div class="header">
      <div class="header__title">Мои заметки</div>
      <div class="header__add" @click="addNow = true">Добавить заметку</div>
    </div>
    <div class="main">
      <ul class="note-list">
        <li class="note-list__item" v-for="(note, idx) in notes" :key="note.id">
          <router-link :to='"/note/" + note.id'>
            <div class="note-item">
              <div class="note-item__title">{{note.title}}</div>
              <div class="note-item__remove" @click="onDelete(idx)">X</div>
            </div>
          </router-link>
        </li>
      </ul>
      <router-view/>
    </div>
    <PopUpWindow v-if="addNow" @onAdd="addNote"/>
  </div>
</template>

<script>
  import PopUpWindow from "./components/PopUpWindow";

  export default {
    components: {
      PopUpWindow
    },
    mounted() {
      // if (this.$store.state.notes.length === 0) {
      //   this.$router.push('/note/noCard')
      // }
    },
    data() {
      return {
        addNow: false
      }
    },
    methods: {
      onDelete(idx) {
        this.$store.dispatch('delNote', idx)
        // this.$router.push('/')
        // if (this.$store.state.notes.length === 0) {
        //   this.$router.push('/note/noCard')
        // }
      },
      addNote(note) {
        this.$store.dispatch('addNote', note)
        this.addNow = false
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes;
      }
    }
  }
</script>

<style lang="scss">
  @import "node_modules/reset-css/sass/reset";

  a {
    color: black;
    text-decoration: none;
  }

  .notes {
    min-height: 100vh;
  }

  .header {
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    display: flex;
    align-items: center;
    height: 50px;

    &__title {
      font-weight: bold;
      font-size: 26px;
      margin-right: auto;
      padding-left: 20px;
    }

    &__add {
      background-color: #005cbf;
      color: #FFFFFF;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      cursor: pointer;
      margin-right: 20px;

      &:hover {
        background-color: #23466f;
      }
    }
  }

  .main {
    display: flex;
    flex-direction: row;
  }

  .note-list {
    display: flex;
    flex-direction: column;
    background-color: #4a4a4a;
    padding: 10px;

    border-right: 3px solid black;
    min-height: 100vh;
    flex: 0 0 300px;

    &__item {
      background-color: #fff;
      margin-top: 5px;
      margin-bottom: 5px;
      font-weight: bold;
      cursor: pointer;
      position: relative;
    }
  }

  .note-item {
    display: flex;
    align-items: center;
    height: 50px;
    transition: background-color 0.5s;

    &:hover {
      background-color: #005cbf;
    }

    &:hover > &__title {
      color: #ffffff;
    }

    &__title {
      margin-right: auto;
      padding: 0 20px;
    }

    &__remove {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      background-color: #ff0000;

      &:hover {
        background-color: #c61616;
      }
    }
  }
</style>
