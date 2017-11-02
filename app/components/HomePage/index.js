import React from 'react';

import { FormattedMessage } from 'react-intl';
import { Button, Container, Header } from 'semantic-ui-react';

import messages from './messages';
import './style.scss';

function HomePage() {
  return (
    <Container>
      <FormattedMessage {...messages.header} />

      <Header as="h1">Hello world!</Header>
      <Button
        content="Discover docs"
        href="http://react.semantic-ui.com"
        icon="github"
        labelPosition="left"
      />
      <FormattedMessage {...messages.header} />
    </Container>
  );
}

export default HomePage;
