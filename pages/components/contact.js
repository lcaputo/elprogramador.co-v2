import Title from "./title";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ navRef }) => {
  return (
    <section ref={navRef} id="contacto">
      <div className="container px-5 pt-20 pb-28 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <div className="text-center col-span-2 pt-10">
            <Title text="Contacto" />
            <p className="text-blue-400 text-justify md:text-center mt-10">
              Contactame y te ayudaré a crear tu idea.
              <br />
              Disponibile para trabajos freelance.
            </p>
          </div>
        </div>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Requerido";
            }
            if (!values.message) {
              errors.message = "Requerido";
            }
            if (!values.email) {
              errors.email = "Requerido";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Correo inválido";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              fetch("/api/mail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
              })
                .then((res) => res.json())
                .then((data) => {
                  toast.success('Mensaje enviado con exito!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                })
                .catch((error) => {
                  toast.error('Error!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-200"
                      >
                        Nombre completo
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      <ErrorMessage name="name" component="div" />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-200"
                      >
                        Correo electrónico
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-200"
                      >
                        Mensaje
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      />
                      <ErrorMessage name="message" component="div" />
                    </div>
                  </div>

                  <div className="p-2 mt-8 w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-32 h-12 flex mx-auto text-white border-0 py-2 justify-center focus:outline-none rounded text-lg max-w-20 ${
                        isSubmitting ? "bg-gray-700" : "bg-primary"
                      }`}
                    >
                      {isSubmitting ? (
                          <svg
                            role="status"
                            className="inline w-6 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                      ) : (
                        "Enviar"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </section>
  );
};
export default Contact;
