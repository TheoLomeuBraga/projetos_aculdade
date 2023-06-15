

   //sefor igual a 2 então e sim

Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 15/06/2023
   funcao checar_primo(): inteiro
          var
             possivel_primo_i: inteiro
             e_primo: inteiro
          Inicio
          
          enquanto possivel_primo_i <= possivel_primo faca
                   se  possivel_primo % possivel_primo_i = 0 entao
                             e_primo <- e_primo + 1
                   fimse
                   possivel_primo_i  <- possivel_primo_i + 1
          fimenquanto
          
          se e_primo = 2 entao
             soma_primos_menores_iguais <- soma_primos_menores_iguais + possivel_primo
             retorne 1
          senao
               retorne 0
          fimse
   fimfuncao
Var
// Seção de Declarações das variáveis 
   i: inteiro
   numero_N: inteiro
   
   possivel_primo: inteiro
   e_primo: inteiro
   soma_primos_menores_iguais: inteiro
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("o numero n devera ser ?: ")
   leia(numero_N)
   
   escreval("o numero n e igual a ",numero_N)
   
   i <- 0
   enquanto (i <= numero_N) faca

            possivel_primo <- i
            e_primo :=  checar_primo()
            se e_primo = 1 entao
               escreval(i," eprimo")
            fimse

            i <- i + 1
   fimenquanto
   
   escreval("a soma dos primos menores e iguais e: ",soma_primos_menores_iguais)


Fimalgoritmo