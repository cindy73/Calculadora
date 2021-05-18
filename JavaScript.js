  //Declaracion de variables
          var n1 = 0;
          var n2 = 0;
          var op;

        //Función que el número queda presionado
        function concatenar(numero){
            if(n1==0 && n1 !== '0.'){
                n1 = numero;
            }else{
                n1 += numero;
            }
            actualizar();
        }

        
        function Coma(){
            if(n1 == 0) {
                n1 = '0.';
            } else if(n1.indexOf('.') == -1) {
                n1 += '.';
            }
            actualizar();
        }

        
        function resultado(){
            n1 = 0;
            n2 = 0;
            actualizar();
        }


        //Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
        function operaciones(valor){
            if (n1 == 0){
                n1 = parseFloat(document.getElementById("valor_numero").value);
            }
            n2 = parseFloat(n1);
            n1= 0;
            op = valor;
        }

        //Función para pulsar igual con su respectiva signo aritmectico 
            

        function igual(){
            n1 = parseFloat(n1);
            switch (op){
                case 1:
                    n1 += n2;
                break;
                case 2:
                    n1 = n2 - n1;
                break;
                case 3:
                    n1 *= n2;
                break;
                case 4:
                    n1 = n2 / n1;
                break;
                case 5:
                    n1 = Math.pow(n2, n1);
                break;
            }
            actualizar();
            n2 = parseFloat(n1);
            n1 = 0;
        }

        function actualizar(){
            document.getElementById("valor_numero").value = n1;
        }