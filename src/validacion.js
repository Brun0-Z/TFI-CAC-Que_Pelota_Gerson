const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('Ingrese sus datos')
    return {
        Nombre: "Ingrese su nombre",
        Apellido:"Ingrese su apellido",
        Email:"Ingrese su email",
        Telefono:"Ingrese su telefono",
        Asunto:"Ingrese su Asunto",
        Mensaje:"Ingrese su mensaje",

    }
  }
}).mount('#app')