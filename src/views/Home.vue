<template>
  <div>
    <section class="hero is-bold is-medium section-hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 hero-title">
            Comece sua carreira em tecnologia como um Aprendiz
          </h1>

          <h2 class="subtitle is-3 hero-subtitle">
            Como fazer isso no ensino médio
          </h2>

          <b-button
            @click.prevent.stop="goTalks()"
            class="hero-button"
            type="is-primary"
            inverted
            outlined
          >
            Descubra Como
          </b-button>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns space-top-3">
        <div class="column is-one-quarter">
          <div class="column has-text-centered">
            <b-icon icon="information-outline" size="is-large"></b-icon>
            <h1 class="title is-3 is-spaced">
              Descubra o Mercado
            </h1>

            <h2 class="subtitle is-5">
              Dividimos o mercado em quatro áreas gerais para facilitar seu
              entendimento. Saiba mais sobre cada uma
            </h2>
          </div>
        </div>

        <div class="column has-text-centered info-div">
          <b-icon icon="magnify" size="is-large"></b-icon>
          <h1 class="title is-3 is-spaced">Explore cada uma das Áreas</h1>

          <h2 class="subtitle is-5">
            Entenda qual área combina com você e quais atividades podem ser
            exercidas dentro dela. Identifique e se imagine atuando
          </h2>
        </div>

        <div class="column has-text-centered">
          <b-icon icon="target" size="is-large"></b-icon>
          <h1 class="title is-3 is-spaced">Escolha o Caminho</h1>

          <h2 class="subtitle is-5">
            Agora você tem uma ideia sobre a área que mais te agrada. Aprofunde
            seu conhecimento sobre cada uma das profissões
          </h2>
        </div>

        <div class="column has-text-centered">
          <b-icon icon="guitar-pick" size="is-large"></b-icon>
          <h1 class="title is-3 is-spaced">Aprenda o Necessário</h1>

          <h2 class="subtitle is-5">
            Vamos oferecer todo o conteúdo técnico necessário para você
            conseguir uma colocação como jovem aprendiz e começar sua jornada no
            mercado de trabalho
          </h2>
        </div>
      </div>

      <div class="space-top-3">
        <section class="hero is-primary is-bold">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Descubra sua Profissão na Tecnologia da Informação
              </h1>

              <b-button class="botoes-hero" type="is-primary" inverted outlined>
                Fazer o Teste
              </b-button>
            </div>
          </div>
        </section>
      </div>

      <div class="columns space-top-3 missao-div">
        <div class="column is-half">
          <h1 class="title is-spaced is-centered is-2 has-text-centered">
            Missão
          </h1>

          <p class="missao-paragraph">
            A Conecta Aprendiz tem o intuito de conectar empresas e jovens
            adolescentes através do direcionamento de carreiras. Conhecer os
            sonhos, anseios e expectativas em relação ao futuro, criando uma
            conexão direta entre os profissionais e jovens aprendizes. Em nossa
            plataforma, os membros tem a oportunidade de aprender, ensinar, ter
            uma comunicação direta e ampliar o conhecimento, auxiliando
            diretamente na tomada de decisões. Dessa forma, acreditamos que a
            aproximação, transmissão de ideias, testes vocacionais focados no
            âmbito humano e tutorias de profissionais que atuam na área de
            tecnologia são o caminho para desenvolver o mercado de trabalho dos
            próximos anos.
          </p>
        </div>

        <div class="column is-half">
          <picture class="image picture-image">
            <img src="@/assets/hackaton.jpg" alt="" />
          </picture>
        </div>
      </div>

      <div class="space-top-3">
        <section class="hero is-primary is-bold">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Conheça as Possibilidades do Mercado
              </h1>

              <b-button
                @click.stop.prevent="goOccupations"
                class="botoes-hero"
                type="is-primary"
                inverted
                outlined
              >
                Ver Profissões
              </b-button>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="space-top-3">
      <b-carousel
        autoplay
        animated="fade"
        :pause-info="pauseInfo"
        :interval="interval"
      >
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <div class="hero-body is-primary has-text-centered">
            <div>
              <h1 class="title is-3">{{ carousel.title }}</h1>
              <h2 class="subtitle">{{ carousel.subtitle }}</h2>
            </div>
          </div>
        </b-carousel-item>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    const carousels = [
      {
        title:
          '"Tecnologia é qualquer coisa que não estava por aí quando você nasceu"',
        subtitle: "Alan Kay – Cientista da Computação"
      },
      {
        title:
          "“A tecnologia tornou possível a existência de grandes populações. Grandes populações agora tornam a tecnologia indispensável”",
        subtitle: "Joseph Krutch – Escritor"
      },
      {
        title:
          '"Não deixe o barulho da opinião dos outros abafar sua voz interior. E mais importante, tenha a coragem de seguir seu coração e sua intuição. Eles de alguma forma já sabem o que você realmente quer se tornar. Tudo o mais é secundário."',
        subtitle: "Steve Jobs - Fundador da Apple"
      }
    ];

    return {
      carousels,
      interval: 10000,
      pauseInfo: false
    };
  },
  methods: {
    goOccupations() {
      this.$router.push({ name: "occupations" });
    },
    goTalks() {
      this.$router.push({ name: "talks" });
    }
  }
};
</script>

<style lang="scss" scoped>
.section-hero {
  background-color: #f27500;
  background-image: url(../assets/photo-hero-2.jpg);
  background-size: 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 1600px) {
    background-position-y: -13rem;
  }
}

.hero-button {
  margin-right: 0.5rem;
}

.space-top-3 {
  margin-top: 3rem;
}

.hero-title {
  color: #ffffff;
}

.hero-subtitle {
  color: #ffffff;
}

.info-div {
  align-items: center;
}

.missao-div {
  align-items: center;
}

.missao-paragraph {
  font-size: 18px !important;
  line-height: 1.5rem;
  word-wrap: break-word;
  text-align: justify;
}

.picture-image {
  box-shadow: 0px 0px 10px #000;
}
</style>
