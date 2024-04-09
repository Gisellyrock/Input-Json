export const modelModal = {
  fields: [
    {
      nome: 'nome',
      descricao: 'Nome da Cidade',
      width: 6,
      tipo: 'texto',
      rules: {
        // max: '',
        // maxLength: 3,
        // min: '',
        minLength: 15,
        // required: true,
        // pattern: '',
      },
    },
    {
      nome: 'teste',
      descricao: 'Teste Nome',
      width: 6,
      tipo: 'texto',
      rules: {
        // max: '',
        // maxLength: 3,
        // min: '',
        minLength: 15,
        // required: true,
        // pattern: '',
      },
    },
    {
      nome: 'teste2',
      descricao: 'Teste Nome 2',
      width: 6,
      tipo: 'texto',
      rules: {
        // max: '',
        // maxLength: 3,
        // min: '',
        minLength: 15,
        // required: true,
        // pattern: '',
      },
    },
    {
      nome: 'UF',
      descricao: 'Estado/UF',
      width: 3,
      tipo: 'select',
      rules: {
        required: true,
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
      nome: 'codigo_ibge',
      descricao: 'Código IBGE',
      width: 3,
      tipo: 'texto',
      rules: {
        minLength: 150,
      },
    },
    {
      nome: 'e_brasileiro',
      descricao: 'É Brasileiro',
      width: 3,
      tipo: 'checkbox',
      rules: {},
    },
    {
      nome: 'e_solteiro',
      descricao: 'É Solteiro',
      width: 3,
      tipo: 'checkbox',
      rules: {},
    },
  ],
  _fields: [
    {
      nome: 'email',
      descricao: 'Email',
      width: 6,
      tipo: 'texto',
      rules: {
        // Regras de validação para o email
      },
    },
    {
      nome: 'telefone',
      descricao: 'Telefone',
      width: 6,
      tipo: 'texto',
      rules: {
        // Regras de validação para o telefone
      },
    },
    {
      nome: 'endereco',
      descricao: 'Endereco',
      width: 6,
      tipo: 'texto',
      rules: {
        // Regras de validação para o logradouro
      },
    },
  ],
};
