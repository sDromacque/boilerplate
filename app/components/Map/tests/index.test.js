import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Map from '../index';
import messages from '../messages';

describe('<Map />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <Map />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
