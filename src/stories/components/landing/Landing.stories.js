import React from 'react';
import Landing from './Landing';
import * as NavbarStories from '../Navbar/Navbar.stories';


export default {
    title: 'Example/Landing',
    component: Landing,
}

const Template = () => <Landing> </Landing>;

// export const landingPage = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...NavbarStories.LoggedIn.args

};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...NavbarStories.LoggedOut.args,
};