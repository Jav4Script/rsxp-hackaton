<template>
  <div class="occupation-job-market">
    <h2 class="title">Mercado de Trabalho</h2>

    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Média Salarial</p>
          <p class="title">R$ 5.450,00</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Vagas em Aberto</p>
          <p class="title">5400</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Início de Carreira</p>
          <p class="title">R$ 2.500,00</p>
        </div>
      </div>
    </nav>

    <apexchart
      width="100%"
      height="350px"
      type="line"
      :options="chart.options"
      :series="chart.series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "OccupationJobMarket",
  data() {
    const chart = {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          title: {
            text: "Anos"
          }
        },
        yaxis: {
          title: {
            text: "Salário"
          }
        }
      },
      series: [
        {
          name: "Salário",
          data: [2500, 3000, 3500, 4000, 4500, 5000, 6000, 8000]
        }
      ]
    };

    return {
      chart
    };
  }
};
</script>

<style scoped>
.occupation-job-market {
  margin-top: 1.5rem;
}
</style>
