var items = []

new Vue({
  el: '#app',
  data: {

    numeros: [],
    valor: 0,
    algoritimo_selecionado: "",
  },
  methods: {
    add: function () {
      if (this.valor) {
        this.numeros.push(Number(this.valor));
        this.valor = null;
      }
    },
    ordenar: function () {

      function bubbleSort(arr) {
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              // Troca os elementos se estiverem fora de ordem
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
          }
        }

        return arr;
      }

      // Função para organizar um array usando Selection Sort
      function selectionSort(arr) {
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
          let minIndex = i;

          for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
              // Atualiza o índice do menor elemento
              minIndex = j;
            }
          }

          // Troca os elementos
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }

        return arr;
      }

      // Função para organizar um array usando Quick Sort
      function quickSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }

        const pivot = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }

        return quickSort(left).concat(pivot, quickSort(right));
      }

      switch (this.algoritimo_selecionado) {
        case "bubble":
          this.numeros = bubbleSort(this.numeros)
        case "selection":
          this.numeros = selectionSort(this.numeros)
        case "quick":
          this.numeros = quickSort(this.numeros)
      }
    },
    misturar: function () {
      for (let i = this.numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos de posição
        [this.numeros[i], this.numeros[j]] = [this.numeros[j], this.numeros[i]];
      }
      this.numeros.length = this.numeros.length + 1;
      this.numeros.length = this.numeros.length - 1;
      console.log(this.numeros);

    },
  }
});