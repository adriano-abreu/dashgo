import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SingInFormData = {
  email: string;
  password: string;
};
const singInFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('E-mail inválido')
      .matches(
        /^[a-zA-Z0-9._-]+@(gmail|hotmail|outlook|yahoo)\.(com|com\.br)$/,
        'E-mail inválido'
      )
      .required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })
  .required();
export default function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingInFormData>({
    resolver: yupResolver(singInFormSchema),
  });

  const onSubmit: SubmitHandler<SingInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />

          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
