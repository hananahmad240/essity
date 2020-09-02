import React from 'react';

import Navbar from './Navbar';

export default {
    title: 'Example/Navbar',
    component: Navbar,
};

const Template = (args) => < Navbar {...args }
/>;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    onLogin: () => console.log('on login')
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    user: {},
    onLogout: () => console.log('on logout')

};