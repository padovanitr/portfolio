import { Form, FormikProvider, useFormik } from 'formik'
import { Grid } from '@mui/material'
import {
  ContentContainer,
  FormWrapper,
  StyledButton,
  StyledContainer,
  StyledDescription,
  StyledTextField,
  StyledTextarea,
  StyledTitle,
} from './Contact.style'
import { ContactFieldsNames, ContactTexts, intialContactFormValues } from './Contact.utils'

export default function Contact() {
  const formik = useFormik({
    initialValues: intialContactFormValues,
    onSubmit: () => {},
    enableReinitialize: true,
    validateOnMount: true,
  })

  return (
    <StyledContainer id="contact">
      <ContentContainer>
        <StyledTitle variant="h2">{ContactTexts.Title}</StyledTitle>
        <StyledDescription>{ContactTexts.Description}</StyledDescription>
      </ContentContainer>
      <FormWrapper>
        <FormikProvider value={formik}>
          <Form>
            <Grid container flexDirection="column" gap={2} mt={2} sx={{ maxWidth: '500px' }}>
              <StyledTextField
                name={ContactFieldsNames.NameField}
                label={ContactTexts.NameFieldLabel}
              />
              <StyledTextField
                name={ContactFieldsNames.EmailField}
                label={ContactTexts.EmailFieldLabel}
              />
              <StyledTextField
                name={ContactFieldsNames.SubjectField}
                label={ContactTexts.SubjectFieldLabel}
              />
              <StyledTextarea
                name={ContactFieldsNames.MessageField}
                label={ContactTexts.MessageFieldLabel}
                multiline
                minRows={12.5}
                maxRows={12.5}
              />
              <StyledButton type="submit" variant="contained">
                Send
              </StyledButton>
            </Grid>
          </Form>
        </FormikProvider>
      </FormWrapper>
    </StyledContainer>
  )
}
