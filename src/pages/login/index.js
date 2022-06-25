import { Field, Form, Formik } from "formik";

import { auth } from "services";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const onSubmit = (values, { setSubmitting }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(
        ({
          user: {
            stsTokenManager: { accessToken, refreshToken, expirationTime },
          },
        }) => {
          localStorage.setItem("JWT", accessToken);
          localStorage.setItem("rJWT", refreshToken);
          localStorage.setItem("expJWT", expirationTime);

          window.location.reload();
        }
      )
      .catch((error) => alert(error.message));

    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      {() => (
        <Form className="h-screen flex flex-col justify-center items-center gap-y-3 text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-50">
          <div className="flex flex-col">
            <label>ایمیل</label>
            <Field
              type="email"
              name="email"
              className="text-black text-center text-base font-light"
            />
          </div>
          <div className="flex flex-col">
            <label>رمز عبور</label>
            <Field
              type="password"
              name="password"
              className="text-black text-center text-base font-light"
            />
          </div>
          <button
            type="submit"
            className="w-28 mt-4 px-3 py-2 bg-green-400 rounded-full"
          >
            ورود
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
