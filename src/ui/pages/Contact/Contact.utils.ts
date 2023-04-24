export enum ContactTexts {
  Title = 'Contact',
  Description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum',
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
