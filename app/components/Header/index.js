import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import header from './messages';

class Header extends React.PureComponent {
  state = {
    activeItem: 'home',
    color: 'blue',
    items: [
        { name: 'home', color: 'blue', mess: { ...header.home } },
        { name: 'userList', color: 'green', mess: { ...header.userList } },
        { name: 'map', color: 'yellow', mess: { ...header.map } },
    ],
    dropDown: [
      'fr',
      'en',
      'ru',
    ],
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { color } = this.state;

    return (
      <Menu inverted>
        {this.state.items.map((item) => (
          <Menu.Item
            key={item.name}
            name={item.name}
            active={activeItem === item.name}
            onClick={this.handleItemClick}
            color={color}
          >
            <FormattedMessage {...item.mess} /></Menu.Item>
        ))}

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              {this.state.dropDown.map((item) => (
                <Dropdown.Item>{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
