<template>
  <div class="note-card">
    <div class="note-card__title">{{note.title}}</div>
    <div class="note-card__text">
      {{note.text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "NoteCard",
    props: ["id"],
    computed: {
      note() {
        const findNote = this.$store.getters.getNoteById(this.id)
        if (findNote && this.id != 'noCard') {
          return findNote
        }
        else {
          return {
            title: 'Нет записей',
            text: ''
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .note-card {
    flex: 1 0 300px;

    &__title {
      padding: 20px;
      font-size: 26px;
      font-weight: bold;
      color: #005cbf;
    }

    &__text {
      padding: 0 20px 20px;
      font-size: 16px;
      line-height: 1.2;
    }
  }
</style>