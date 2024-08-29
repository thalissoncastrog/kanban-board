import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "../../services/authentication/firebaseConfig";

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

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = (data: TypeFormData) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  if (loading) {
    navigate("/");
    return alert("Usuário cadastrado com sucesso!!");
  }

  return (
    <div className="container">
      <header className="header">
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
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
          onClick={handleSubmit(handleRegister, (errors) =>
            console.log(errors)
          )}
          className="button"
        >
          Cadastrar
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
