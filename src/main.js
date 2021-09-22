

// import Cliente from './Cliente.js';
// import Impuestos from './impuesto.js';



const inputNombre = document.getElementById("inputNombre");
const inputMontoBrutoAnual = document.getElementById ("inputMontoBrutoAnual");
const inputDeducciones = document.getElementById ("inputDeducciones");
const btn = document.getElementById("btn");
const Calcular = document.getElementById("Calcular");


class Cliente{
   
    static  nombre = "";
    static  impuesto = 0;

    constructor(nombre){

        this.nombre = nombre;

    }

    get Nombre(){
        return this.nombre;
    }

    set Nombre(i){
        this.nombre = i;
    }
    get Impuestos() {
        return this.impuesto.impuesto;
      }

 cacularImp(montoBrutoAnual, deducciones){
     var calculo = (montoBrutoAnual - deducciones * 0.21);
     
     if (!calculo) return ;
     
     this.impuesto = {
        calculo,
     }
    
 }
}


class Impuestos{

    constructor(montoBrutoAnual, deducciones){

        this.monto_bruto_anual= montoBrutoAnual;
        this.deducciones = deducciones;
    }

    get MontoBrutoAnual(){
        return this.monto_bruto_anual;
    }
    set MontoBrutoAnual(i){
        this.monto_bruto_anual = i
    }

    get Deducciones(){
        return this.deducciones;
    }
    set Deducciones(i){
        this.deducciones = i
    }
}


btn.addEventListener("click", () => {

    console.log (

        Number (inputMontoBrutoAnual.value) + Number(inputDeducciones.value)
    );
    Calcular.innerHTML =
    Number (inputMontoBrutoAnual.value) + Number(inputDeducciones.value)


 const inputMontoBrutoAnualNor = Number(inputMontoBrutoAnual.value);
 const inputDeduccionesNor = Number(inputDeducciones.value);
 const inputNombreNor = inputNombre.value;

// intanciar siempre instanciar
 const ClienteFinal = new Cliente(inputNombreNor);
 const ImpuestosFinal = new Impuestos(
     inputMontoBrutoAnualNor,
     inputDeduccionesNor
 );


 ClienteFinal.calcularImp(
    ImpuestosFinal.MontoBrutoAnual,
    ImpuestosFinal.Deducciones
  );

  Calcular.innerHTML = `<h1>El impuesto calculado para ${ClienteFInal.Nombre} es: ${ClienteFinal.Impuestos}</h1>`;

});