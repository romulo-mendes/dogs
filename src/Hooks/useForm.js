import React from "react";

const types = {
	email: {
		regex:
			// eslint-disable-next-line no-useless-escape
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		message: "Preencha um email válido",
	},
	password: {
		regex: /^(?=.*[0-9])([a-zA-Z0-9]{6,})$/,
		message: "A senha precisa ter 6 caracteres",
	},
};

const useForm = (type) => {
	const [value, setValue] = React.useState("");
	const [error, setError] = React.useState(null);

	function validate(value) {
		if (type === false) return true;
		if (value.length === 0) {
			setError("Preencha um valor");
			return false;
		} else if (types[type] && !types[type].regex.test(value)) {
			setError(types[type].message);
			return false;
		} else {
			setError(null);
			return true;
		}
	}

	function onChange({ target }) {
		if (error) validate(target.value);
		setValue(target.value);
	}

	return {
		value,
		setValue,
		onChange,
		error,
		validate: () => validate(value),
		onBlur: () => validate(value),
	};
};

export default useForm;
