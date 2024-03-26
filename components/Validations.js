export const validateEmail = (email) => {
    if (!email) {
      return "Por favor, informe seu e-mail";
    }
    return null;
  };
  
  export const validateName = (name) => {
    if (!name) {
      return "Por favor, informe o seu nome";
    }
    return null;
  };
  
  export const validateCPF = (cpf) => {
    if (!cpf) {
      return "Por favor, preencha com seu CPF";
    } else if (cpf.length != 11) {
      return "O seu CPF deve ter 11 carácteres";
    }
    return null;
  };
  
  export const validatePassword = (password) => {
    if (!password) {
      return "Por favor, crie sua senha";
    } else if (password.length < 6) {
      return "A senha deve ter pelo menos 6 caracteres";
    }
    return null;
  };

  export const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
        return "Por favor, preencha com seu número de telefone";
    } else {
        const regex = /^\d{11}$/;
        if (!regex.test(phoneNumber)) {
            return "Por favor, insira um número de telefone válido";
        }
    }
    return null;
};

export const validateTerms = (termsAccepted) => {
    if (!termsAccepted) {
        return "Por favor, aceite os termos e condições";
    }
    return null;
};
