import { Link, useNavigate } from "react-router-dom";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/authentication/firebaseConfig";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import "./styles.css";

type TypeFormData = {
  email: string;
  password: string;
};

const schema = object({
  email: string()
    .required("Campo Obrigatório.")
    .min(3, "É necessário pelo menos 3 caracteres."),
  password: string()
    .required("Campo Obrigatório.")
    .min(6, "É necessário pelo menos 6 caracteres."),
});

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (data: TypeFormData) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (loading) {
    return <p>carregando...</p>;
  }

  if (user) {
    navigate("/home");
    return null;
  }

  return (
    <div className="container">
      <header className="header">
        <span>Por favor digite suas informações de login</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@gmail.com"
            {...register("email")}
          />
          <span className="error">{errors?.email?.message}</span>
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="********************"
            {...register("password")}
          />
          <span className="error">{errors?.password?.message}</span>
        </div>

        <button
          className="button"
          onClick={handleSubmit(handleSignIn, (errors) => console.log(errors))}
        >
          Entrar
        </button>
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
