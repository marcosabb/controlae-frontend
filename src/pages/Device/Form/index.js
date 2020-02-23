import React, { useState } from 'react'
import t from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { initialValues, fields } from './values'

import Input from 'components/Input'
import Select from 'components/Select'
import Button from 'components/Button'

import { Container, Details, Control, Label, Fields } from './styled'

const schema = Yup.object().shape({
  type: Yup.string().required('O campo tipo é obrigatório.'),
  brand: Yup
    .string()
    .min(2, 'O campo marca deve ter no mínimo 2 caracteres.')
    .required('O campo marca é obrigatório.')
})

const types = [
  { label: 'Televisão', value: 'Televisão' },
  { label: 'Ar condicionado', value: 'Ar condicionado' },
  { label: 'Ventilador', value: 'Ventilador' }
]

export default function Form ({ label, defaultValues, handleSubmit }) {
  const [type, setType] = useState(
    defaultValues
      ? defaultValues?.type?.value
      : null
  )

  return (
    <Formik
      initialValues={defaultValues || initialValues}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit({
          ...values,
          control:
            values[type]
              ? values[type].control
              : values.control
        })

        setSubmitting(false)
      }}
      enableReinitialize
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Container>
          <Details>
            <Field
              name='type'
              label='Tipo'
              placeholder='Selecione o tipo'
              options={types}
              disabled={!!defaultValues?.type}
              error={errors.type && touched.type && errors.type}
              handleChange={(value) => setType(value)}
              component={Select}
            />

            <Input
              type='text'
              name='brand'
              label='Marca'
              placeholder='Digite uma marca'
              disabled={!!defaultValues?.type}
              error={errors.brand && touched.brand && errors.brand}
            />
          </Details>

          {fields[type] && (
            <Control>
              <Label>Controle</Label>
              <Fields>
                {fields[type].map(({ name, label }) => (
                  <Input
                    key={name}
                    type='text'
                    name={
                      defaultValues
                        ? `control.${name}`
                        : `${type}.control.${name}`
                    }
                    label={label}
                    placeholder='Código'
                  />
                ))}
              </Fields>
            </Control>
          )}

          <Button
            type='submit'
            variant='primary'
            disabled={isSubmitting || (defaultValues ? false : !values[type])}
            loading={isSubmitting}
          >
            {label}
          </Button>
        </Container>
      )}
    </Formik>
  )
}

Form.defaultProps = {
  initialValues: null
}

Form.propTypes = {
  label: t.string.isRequired,
  defaultValues: t.shape(),
  handleSubmit: t.func.isRequired
}
