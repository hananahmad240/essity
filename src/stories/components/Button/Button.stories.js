import React from 'react';
import Button from './Button';

export default {
    title: 'Example/LandingButton',
    component: Button
}

const Template = (args) => <Button {...args } > </Button>;

export const Login = Template.bind({});
Login.args = {
    color:'red',
    backgroundColor:'black',
    size:'large',
    label:'login button',
    type:'button',
    onClick:()=> console.log('ahnana')
}