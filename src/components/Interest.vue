<template>
  <div class="interest">
    <h1>{{ name }}</h1>
    <p>
      {{ description }}
    </p>
    <a>
        Innerhalb geschlossener Räume möglich: {{ inside }}
        <br>
    </a>
    <a>
        Ist diese Tätigkeit alleine möglich: {{ allone }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Interest',
  props: {
    name: String,
    description: String,
    inside: String,
    allone: String
  }
}
</script>

<style scoped>
* {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}
.interest {
    border-width: 1;
    border-color: #444444;
    border-style: dashed;
    width: auto;
    border-radius: 2rem;
}
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
  font-size: larger;
}
p {
    max-width: 70%;
    
}
</style>
