import { Html, Body, Container, Text } from '@react-email/components';

export default function EmailTemplate() {
  return (
    <Html>
      <Body>
        <Container>
          <Text>Welcome in Events Manager App!</Text>
        </Container>
      </Body>
    </Html>
  );
}
