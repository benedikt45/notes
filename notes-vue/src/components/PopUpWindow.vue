<template>
  <div class="pop-up-wnd">
    <form class="note-form">
      <input placeholder="Введите текст заметки" class="note-form__title"
             v-model="title"
      >
      <textarea placeholder="Введите текст заметки" class="note-form__text"
                v-model="text"
      ></textarea>
      <button type="button" class="note-form__submit"
              @click.prevent="onAdd">Добавить
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "PopUpWindow",
    data() {
      return {
        text: '',
        title: '',
        id: new Date().getTime()
      }
    },
    methods: {
      onAdd() {
        this.$emit('onAdd', {title: this.title, text: this.text, id: this.id})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pop-up-wnd {
    background-color: rgba(66, 69, 73, 0.7);
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
  }

  .note-form {
    align-self: center;
    display: flex;
    flex-direction: column;

    &__title {
      flex: 1 1 20px;
      padding: 10px;
    }

    &__text {
      flex: 1 1 100px;
      width: 300px;
      padding: 10px;
    }

    &__submit {
      border: none;
      background-color: #005cbf;
      cursor: pointer;
      padding: 10px;
      margin-top: 10px;
      color: #FFFFFF;

      &:hover {
        background-color: #23466f;
      }
    }
  }
</style>