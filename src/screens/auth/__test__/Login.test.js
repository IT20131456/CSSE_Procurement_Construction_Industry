import React from 'react';
import Login from '../LoginTest';
import {fireEvent, render} from '@testing-library/react-native';

describe('Login Screen', () => {
    it('should go to Home page on Login Page', () => {

        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');
        
        const page = render(<Login navigation={navigation}/>);

        const loginButton = page.getByTestId('loginButton');

        fireEvent.press(loginButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Home");
    });

    it('should go to Home page on Regiter Page', () => {

        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');
        
        const page = render(<Login navigation={navigation}/>);

        const registerButton = page.getByTestId('registerButton');

        fireEvent.press(registerButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Register");
    })
})
