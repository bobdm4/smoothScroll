import React from "react";
import {
  Container,
  Icon,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  FormButton,
  Text,
} from "./SingIinElements";

const SingIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">aloha</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sing in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="pass" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SingIn;
