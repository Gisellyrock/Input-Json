export const modelModal = {
  fields: [
    {
      nome: 'nome',
      descricao: 'Nome',
      tipo: 'text',
      sizes: {
        minWidth: '100px',
        width: 6,
        maxWidth: '150px',
      },
      rules: {
        minLength: {
          value: 15,
          message: 'O campo deve ter no mínimo 15 dígitos',
        },
        required: {
          value: true,
          message: 'Campo Obrigatório',
        },
      },
    },
    {
      nome: 'cpf',
      descricao: 'CPF',
      sizes: {
        width: 3,
        minWidth: '100px',
        maxWidth: '150px',
      },
      tipo: 'text',
      rules: {
        pattern: {
          value: /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/,
          message: 'Formato de CPF inválido',
        },
      },
    },
    {
      nome: 'cnpj',
      descricao: 'CNPJ',
      sizes: {
        width: 3,
        minWidth: '100px',
        maxWidth: '150px',
      },
      tipo: 'text',
      rules: {
        pattern: {
          value: /^[0-9]{14}$/,
          message: 'Formato de CNPJ inválido',
        },
      },
    },
  ],
  _fields: [
    {
      nome: 'email',
      descricao: 'Email',
      sizes: {
        width: 6,
        minWidth: '200px',
        maxWidth: '500px',
      },
      tipo: 'text',
      rules: {
        pattern: {
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\\.\w{2,3})+$/,
          message: 'Formato de email inválido',
        },
      },
    },
    {
      nome: 'telefone',
      descricao: 'Telefone',
      sizes: {
        width: 6,
        minWidth: '100px',
        maxWidth: '200px',
      },
      tipo: 'text',
      rules: {},
    },
    {
      nome: 'endereco',
      descricao: 'Endereco',
      sizes: {
        width: 6,
        minWidth: '100px',
        maxWidth: '200px',
      },
      tipo: 'text',
      rules: {
        required: {
          value: true,
          message: 'Campo Obrigatório',
        },
      },
    },
    {
      nome: 'UF',
      descricao: 'Estado/UF',
      sizes: {
        width: 3,
        minWidth: '100px',
        maxWidth: '200px',
      },
      tipo: 'select',
      rules: {
        required: {
          value: true,
          message: 'Campo Obrigatório',
        },
      },
      opcoes: [
        {
          label: 'SP',
          value: 'sp',
        },
        {
          label: 'BH',
          value: 'bh',
        },
      ],
    },
    {
      nome: 'cep',
      descricao: 'CEP',
      sizes: {
        width: 3,
        minWidth: '100px',
        maxWidth: '200px',
      },
      tipo: 'text',
      rules: {
        minLength: {
          value: 9,
          message: 'min length is 9',
        },
      },
    },
    {
      nome: 'codigo_ibge',
      descricao: 'Código IBGE',
      sizes: {
        width: 3,
        minWidth: '100px',
        maxWidth: '200px',
      },
      tipo: 'text',
    },
    {
      nome: 'e_brasileiro',
      descricao: 'É Brasileiro',
      sizes: {
        width: 3,
      },
      tipo: 'checkbox',
      rules: {},
    },
    {
      nome: 'e_solteiro',
      descricao: 'É Solteiro',
      sizes: {
        width: 3,
      },
      tipo: 'checkbox',
      rules: {},
    },
  ],
};
