<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <div class="field has-addons">
          <b-field grouped>
            <b-field label="Tipo">
              <b-input placeholder="Digite o tipo que procura"></b-input>
            </b-field>
          </b-field>
        </div>
      </div>
      <div class="level-item">
        <b-field grouped>
          <b-field label="Tema">
            <b-input placeholder="Digite o tema que procura"></b-input>
          </b-field>
        </b-field>
      </div>
      <div class="level-item">
        <b-field grouped>
          <b-field label="Data">
            <b-field>
              <b-datepicker editable placeholder="Selecione uma data">
                <button class="button is-primary">
                  <b-icon icon="calendar-today" />
                  <span>Hoje</span>
                </button>
              </b-datepicker>
            </b-field>
          </b-field>
        </b-field>
      </div>
    </div>
    <div class="level-rigth">
      <p class="level-item">
        <button class="button is-primary">Pesquisar</button>
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TalksFilters"
};
</script>
