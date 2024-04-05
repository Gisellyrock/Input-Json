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
      nome: 'UF',
      descricao: 'Estado/UF',
      width: 4,
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
      width: 2,
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
  ],
};
