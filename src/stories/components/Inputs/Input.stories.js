import React from 'react';
import Input from './Input';

export default {
    title: "Example/Input",
    component: Input
}

const Template = (args) => <Input {...args } > </Input>

export const Email = Template.bind({});
export const Password = Template.bind({});

Password.args = {
    type: 'password',
    placeholder: 'enter the password',
    size: "medium",
    name: 'password',
}

Email.args = {
    type: 'email',
    placeholder: 'enter the emial',
    size: "medium",
    name: 'email'
}