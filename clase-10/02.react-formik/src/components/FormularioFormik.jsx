import { useFormik } from "formik";

const FormularioFormik = () => {

    const valoresInicial = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    const formik = useFormik({
        initialValues: valoresInicial,
        validate: (values) => {
            const errors = {}

            if (!values.nombre) {
                errors.nombre = 'El nombre es obligatorio'
            }
            if (!values.email) {
                errors.email = 'El email es obligatorio'
            }
            if (!values.mensaje) {
                errors.mensaje = 'El mensaje es obligatorio'
            }

            return errors

        },
        onSubmit: (values, { resetForm} ) => {
            console.log(values)
            // petición asincronica
            resetForm()
        }
    });
    //console.log(formik)
    console.log(formik.touched.nombre)
    console.log(formik.errors.nombre)

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
      />
      { 
        formik.errors.nombre && (
        <small className="text-red-500">{formik.errors.nombre}</small>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
         value={formik.values.email}
         onChange={formik.handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
      />

      { 
        formik.errors.email && (
        <small className="text-red-500">{formik.errors.email}</small>
      )}

      <textarea
        name="mensaje"
        placeholder="Mensaje"
         value={formik.values.mensaje}
         onChange={formik.handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 resize-none"
        rows="4"
      ></textarea>

      { 
        formik.errors.mensaje && (
        <small className="text-red-500">{formik.errors.mensaje}</small>
      )}

      <button
        type="submit"
        className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition"
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default FormularioFormik;
