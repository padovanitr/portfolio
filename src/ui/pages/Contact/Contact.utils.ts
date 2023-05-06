export enum ContactTexts {
  Title = 'Get In Touch',
  Description = 'Feel free to contact me by submitting the form below. Whether you have a question, talk about new opportunities or just want to say hi, I’ll try my best to get back to you!',
  NameFieldLabel = 'Full name',
  EmailFieldLabel = 'Email',
  SubjectFieldLabel = 'Subject',
  MessageFieldLabel = 'Message',
  SendButtonLabel = 'Send',
  LinkButtonLabel = 'Say hello',
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
