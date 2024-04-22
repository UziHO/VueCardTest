<template>
  <div class="hello">
    <h1>Uzi es genial</h1>
    <p>
      A rapear
    </p>
    <div class="form-group email mb-xs-4 mb-md-5">
        <label for="username">{{ emailOrCID }}</label>
        <input
          data-flow="signup"
          type="text"
          id="user"
          v-model="userIdentifier"
          @input="handleInput"
          :class="{'input-error': errorExists}"
          :maxlength="idMaxlength"
          v-abn-input="email"
          inputmode="email"
          autocomplete="username"
        />
      </div>
      <div class="form-group email mb-xs-4 mb-md-5">
        <label for="username">secondary</label>
        <input
        data-flow="signup"
        type="text"
       
        v-model="userIdentifier"
        @input="handleInput"
        :class="{'input-error': errorExists}"
        :maxlength="idMaxlength"
        v-abn-input="email"
        inputmode="email"
        autocomplete="username"
        />
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      userIdentifier: '',
      errorExists: false,
      idMaxlength: 100, // Definir el valor máximo permitido
      emailOrCID: 'Email o CID' // Definir el texto de i18n aquí
    };
  },
  methods: {
    handleInput() {
      // Aquí puedes realizar cualquier validación o manipulación necesaria con userIdentifier
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
