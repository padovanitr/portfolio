import { Form, FormikProvider, useFormik } from 'formik'
import { Grid } from '@mui/material'
import ContactBg from '../../../assets/img/contactBg.webp'
import {
  ContentContainer,
  FormWrapper,
  StyledButton,
  StyledContainer,
  StyledDescription,
  StyledForm,
  StyledImage,
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
          <StyledForm>
            <Grid container flexDirection="column" gap={2} sx={{ maxWidth: '500px' }}>
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
                {ContactTexts.SendButtonLabel}
              </StyledButton>
            </Grid>
          </StyledForm>
        </FormikProvider>
        <StyledImage src={ContactBg} />
      </FormWrapper>
    </StyledContainer>
  )
}
