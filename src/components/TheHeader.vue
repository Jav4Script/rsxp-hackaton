<template>
  <b-navbar wrapper-class="container">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }"
        >Conecta Aprendiz</b-navbar-item
      >
    </template>

    <template slot="start">
      <router-link class="navbar-item" :to="{ name: 'occupations' }"
        >Profissões</router-link
      >
      <router-link class="navbar-item" :to="{ name: 'talks' }"
        >Palestras</router-link
      >
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons"></div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped></style>
