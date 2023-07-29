import React from 'react';
import NavBar from './navbar';

export default {
  title: 'NavBar',
  component: NavBar,
};

const Template = args => <NavBar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {
  isDarkMode: false,
  location: {
    search: '',
    pathname: '/',
  },
};

export const NavbarDark = Template.bind({});
NavbarDark.args = {
  isDarkMode: true,
  location: {
    search: '',
    pathname: '/team',
  },
};
