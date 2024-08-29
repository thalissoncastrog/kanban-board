import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "../../services/authentication/firebaseConfig";

import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import {
  FooterFormContainer,
  InputContainer,
  LinkContainer,
  AuthContainer,
} from "../Login/styles";

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

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({
    resolver: yupResolver(schema),
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (data: TypeFormData) => {
    await createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <AuthContainer>
      <header className="header">
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form onSubmit={handleSubmit(handleRegister)} noValidate>
        <InputContainer>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="exemplo@gmail.com"
            {...register("email")}
          />
          <span className="error">{errors?.email?.message}</span>
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="********************"
            {...register("password")}
          />
          <span className="error">{errors?.password?.message}</span>
        </InputContainer>

        {error && <span>Usuário já existe</span>}
        {!error && user && (
          <span style={{ color: "green" }}>Usuário Cadastrado com sucesso</span>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Cadastrar"}
        </button>

        <FooterFormContainer>
          <p>Você já tem uma conta?</p>
          <LinkContainer to="/">Acesse sua conta aqui</LinkContainer>
        </FooterFormContainer>
      </form>
    </AuthContainer>
  );
}
