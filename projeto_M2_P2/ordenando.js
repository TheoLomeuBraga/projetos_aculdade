var items = []

new Vue({
    el: '#app',
    data: {
      selectedAlgorithm: null,
      inputNumber: null,
      simulationResult: null,

      numeros: [],
      valor: 0
    },
    methods: {
      add: function() {
        console.log(this.valor)
        if (this.valor) {
          this.numeros.push(Number(this.valor));
          this.valor = null;
        }
      },
      simulateAlgorithm: function() {
        // ... (lógica de simulação)
      }
    }
  });