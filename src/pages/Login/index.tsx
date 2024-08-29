import { useNavigate } from "react-router-dom";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/authentication/firebaseConfig";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import {
  FooterFormContainer,
  InputContainer,
  LinkContainer,
  AuthContainer,
} from "./styles";

type TypeFormData = {
  email: string;
  password: string;
};

const schema = object({
  email: string()
    .required("Campo Obrigatório.")
    .email("Por favor, insira um endereço de e-mail válido.")
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

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = async (data: TypeFormData) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  if (error) {
    console.log(error);
  }

  if (user) {
    navigate("/home");
    return null;
  }

  return (
    <AuthContainer>
      <header>
        <span>Por favor digite suas informações de login</span>
      </header>

      <form onSubmit={handleSubmit(handleSignIn)} noValidate>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@gmail.com"
            {...register("email")}
          />
          <span>{errors?.email?.message}</span>
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="********************"
            {...register("password")}
          />
          <span>{errors?.password?.message}</span>
        </InputContainer>

        {error && <span>Usuário ou senha incorreta!</span>}

        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </button>

        <FooterFormContainer>
          <p>Você não tem uma conta?</p>
          <LinkContainer to="/register">Crie a sua conta aqui</LinkContainer>
        </FooterFormContainer>
      </form>
    </AuthContainer>
  );
}
