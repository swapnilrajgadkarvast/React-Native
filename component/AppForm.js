import { Formik } from "formik";

const AppForm = ({ children, initialValues, onSubmit, validationSchemas }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchemas}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
