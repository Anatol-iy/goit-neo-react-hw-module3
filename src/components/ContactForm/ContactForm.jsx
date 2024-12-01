import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const nameId = useId();
  const phoneId = useId(); 

  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label htmlFor={phoneId}>Number</label>
        <Field type="text" name="number" id={phoneId} />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
