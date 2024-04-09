import { FormProvider, useForm } from 'react-hook-form';
import { RHFCustomCheckbox } from './form/rhf/RHFCustomCheckbox';
import { RHFCustomInput } from './form/rhf/RHFCustomInput';
import { RHFSelect } from './form/rhf/RHFSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileLines,
  faTimes,
  faSave,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { modelModal } from '@/app/_mock/modelModal';
import { cn } from '@/utils/cn';

const options = [
  {
    value: 'ac',
    label: 'AC',
  },
  {
    value: 'ba',
    label: 'BA',
  },
];

const teste = [
  {
    value: 'teste',
    label: 'teste',
  },
  {
    value: 'teste',
    label: 'teste',
  },
];

const Modal = ({ isOpen = true, closeModal, fields }) => {
  const methods = useForm();

  const onSubmit = (formData) => {
    console.log('Dados do formulário:', formData);
    methods.reset();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-[50%]  h-[390px] left-1/2 rounded-md shadow-md top-1/2 -translate-x-1/2 -translate-y-1/2 fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-white">
        <div className="bg-blue-400 rounded-t-md px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faFileLines}
              className="mr-2 text-xl"
              color="black"
            />
            <h2 className="text-xl font-semibold mt-2">Modal Teste</h2>
          </div>
          <button className="text-black cursor-pointer" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid gap-3 grid-cols-12 w-full h-full p-8">
              {[...modelModal.fields, ...modelModal._fields].map((input) => {
                if (input.tipo === 'select') {
                  return (
                    <RHFSelect
                      key={input.nome}
                      label={input.descricao}
                      rules={input.rules}
                      name={input.nome}
                      options={input.opcoes}
                      className={`col-span-${input.width}`}
                    />
                  );
                }

                if (input.tipo === 'texto') {
                  return (
                    <RHFCustomInput
                      key={input.nome}
                      label={input.descricao}
                      rules={input.rules}
                      name={input.nome}
                      className={`col-span-${input.width}`}
                    />
                  );
                }

                if (input.tipo === 'checkbox') {
                  return (
                    <RHFCustomCheckbox
                      key={input.nome}
                      rules={input.rules}
                      label={input.descricao}
                      name={input.nome}
                      className={`col-span-${input.width}`}
                    />
                  );
                }

                return (
                  <RHFCustomInput
                    key={input.nome}
                    label={input.descricao}
                    rules={input.rules}
                    name={input.nome}
                    className={`col-span-${input.width}`}
                  />
                );
              })}
              {/* <RHFCustomInput
                label="Código IBGE"
                name="codigo_ibge"
                className="col-span-4"
              />

              <RHFSelect
                label="Teste"
                name="select"
                options={teste}
                className="col-span-6"
              />
              <RHFSelect
                label="Teste"
                name="select"
                options={teste}
                className="col-span-6"
              />
              <RHFCustomInput
                label="Código IBGE"
                name="codigo_ibge"
                className="col-span-4"
              />
              <RHFSelect
                label="Teste"
                name="select"
                options={teste}
                className="col-span-3"
              />
              <RHFSelect
                label="Teste"
                name="select"
                options={teste}
                className="col-span-3"
              />
              <RHFSelect
                label="Estado/UF"
                name="uf"
                options={options}
                className="col-span-2"
              />

              <RHFCustomCheckbox
                name="checkbox"
                label="Checkbox"
                className="col-span-3"
              /> */}
              <hr className="col-span-12 mx-auto w-3/4" />
              <div className="col-span-12 flex justify-end items-center">
                <button
                  className="bg-black text-white flex items-center justify-center w-full md:w-[100px] h-[45px] rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={methods.handleSubmit(onSubmit)}
                >
                  <FontAwesomeIcon icon={faSave} className="mr-2" />
                  Salvar
                </button>
                <div className="w-5"></div>
                <button
                  className="bg-gray-300 text-gray-700 flex items-center justify-center w-full md:w-[100px] h-[45px] rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={closeModal}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Sair
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Modal;
