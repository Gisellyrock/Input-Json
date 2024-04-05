import { FormProvider, useForm } from 'react-hook-form';
import { RHFCustomCheckbox } from './form/rhf/RHFCustomCheckbox';
import { RHFCustomInput } from './form/rhf/RHFCustomInput';
import { RHFSelect } from './form/rhf/RHFSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
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
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-[50%]  h-[450px] left-1/2 rounded-md shadow-md top-1/2 -translate-x-1/2 -translate-y-1/2 fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-white">
        <div className="bg-yellow-400 rounded-t-md px-4 py-2">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faFileLines}
              className="mr-2 text-xl"
              color="black"
            />
            <h2 className="text-xl font-semibold mt-2">Modal Teste</h2>
          </div>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid gap-3 grid-cols-12 w-full h-full p-8">
              {modelModal.fields.map((input) => {
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
            </div>
            {/* <button
              className="bg-black text-white w-[300px] h-[55px]"
              type="submit"
            >
              Submit
            </button> */}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Modal;
