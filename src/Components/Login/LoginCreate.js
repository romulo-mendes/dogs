import React from "react";
import { USER_POST } from "../../api";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";

const LoginCreate = () => {
	const username = useForm();
	const password = useForm("password");
	const email = useForm("email");

	async function handleSubmit(e) {
		e.preventDefault();
		const { url, options } = USER_POST({
			username: username.value,
			email: email.value,
			password: password.value,
		});
		const response = await fetch();
	}

	return (
		<section className="animeLeft">
			<h1 className="title">Cadastre-se</h1>
			<form onSubmit={handleSubmit}>
				<Input label="Usuário" type="text" name="username" {...username} />
				<Input label="Email" type="email" name="email" {...email} />
				<Input label="Senha" type="password" name="password" {...password} />
				<Button>Cadastrar</Button>
			</form>
		</section>
	);
};

export default LoginCreate;
