import React from 'react'
import t from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Input from 'components/Input'
import Button from 'components/Button'

import { Container } from './styled'

const values = {
  email: '',
  password: ''
}

const schema = Yup.object().shape({
  email: Yup
    .string()
    .email('Insira um e-mail válido.')
    .required('O campo e-mail é obrigatório.'),
  password: Yup
    .string()
    .min(6, 'O campo senha deve possuir no mínimo 6 caracteres.')
    .required('O campo senha é obrigatório.')
})

export default function Form ({ label, handleSubmit }) {
  return (
    <Formik
      initialValues={values}
      validationSchema={schema}
      onSubmit={({ email, password }, { setSubmitting }) => {
        handleSubmit(email, password)
        setSubmitting(false)
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Container>
          <Input
            type='email'
            name='email'
            label='E-mail'
            placeholder='Digite seu e-mail'
            error={errors.email && touched.email && errors.email}
          />

          <Input
            type='password'
            name='password'
            label='Senha'
            placeholder='Digite sua senha'
            error={errors.password && touched.password && errors.password}
            toggle
          />

          <Button
            type='submit'
            variant='primary'
            loading={isSubmitting}
            disabled={isSubmitting}
            fluid
          >
            {label}
          </Button>
        </Container>
      )}
    </Formik>
  )
}

Form.propTypes = {
  label: t.string.isRequired,
  handleSubmit: t.func.isRequired
}
