"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    //this.impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(val) {
      this.nombre = val;
    }
  }, {
    key: "getImpuestos",
    get: function get() {
      return this.impuesto.impuesto;
    }
  }, {
    key: "cacularImp",
    value: function cacularImp(montoBrutoAnual, deducciones) {
      var impuesto = montoBrutoAnual - deducciones * 0.21;
      if (!impuesto) return;
      this.impuesto = {
        impuesto: impuesto
      }; //  return this.impuesto;
    }
  }]);

  return Cliente;
}();

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);

    this.monto_bruto_anual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMontoBrutoAnual",
    get: function get() {
      return this.monto_bruto_anual;
    }
  }, {
    key: "setMontoBrutoAnual",
    set: function set(val) {
      this.monto_bruto_anual = val;
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(val) {
      this.deducciones = val;
    }
  }]);

  return Impuestos;
}();

var inputNombre = document.getElementById("inputNombre");
var inputMontoBrutoAnual = document.getElementById("inputMontoBrutoAnual");
var inputDeducciones = document.getElementById("inputDeducciones");
var btn = document.getElementById("btn");
var Calcular = document.getElementById("Calcular");
btn.addEventListener("click", function () {
  // console.log (
  //     Number (inputMontoBrutoAnual.value) + Number(inputDeducciones.value)
  // );
  // Calcular.innerHTML =
  // Number (inputMontoBrutoAnual.value) + Number(inputDeducciones.value)
  var inputMontoBrutoAnualNor = Number(inputMontoBrutoAnual.value);
  var inputDeduccionesNor = Number(inputDeducciones.value);
  var inputNombreNor = inputNombre.value; // intanciar

  var ClienteFinal = new Cliente(inputNombreNor);
  var ImpuestosFinal = new Impuestos(inputMontoBrutoAnualNor, inputDeduccionesNor);
  ClienteFinal.cacularImp(ImpuestosFinal.getMontoBrutoAnual, ImpuestosFinal.getDeducciones);
  Calcular.innerHTML = "<h1>El impuesto calculado para ".concat(ClienteFinal.getNombre, " es: ").concat(ClienteFinal.getImpuestos, "</h1>");

  console.log("Calculo realizado");
});