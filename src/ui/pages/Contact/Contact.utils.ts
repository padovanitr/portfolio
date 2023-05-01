export enum ContactTexts {
  Title = 'Contact',
  Description = 'Feel free to contact me by submitting the form below. Whether you have a question, talk about new opportunities or just want to say hi, I’ll try my best to get back to you!',
  NameFieldLabel = 'Full name',
  EmailFieldLabel = 'Email',
  SubjectFieldLabel = 'Subject',
  MessageFieldLabel = 'Message',
  SendButtonLabel = 'Send',
}

export enum ContactFieldsNames {
  NameField = 'name',
  EmailField = 'email',
  SubjectField = 'subject',
  MessageField = 'message',
}

export const intialContactFormValues = {
  [ContactFieldsNames.NameField]: '',
  [ContactFieldsNames.EmailField]: '',
  [ContactFieldsNames.SubjectField]: '',
  [ContactFieldsNames.MessageField]: '',
}
