import React from 'react';
import Form from './Form';


export default {
    title:'Example/LoginForm',
    component:Form
}

const Template = (args)=> <Form {...args}></Form>

export const LoginForm = Template.bind({});
export const LoginFormError = Template.bind({});

LoginFormError.args={
    error:'Please enter the valid input'
}

