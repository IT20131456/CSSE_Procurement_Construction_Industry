import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import NewOrder from '../NewOrderTest';

describe('New Order Screen', () => {
    it('should go to Home screen on New Order screen', () => {

        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');
        
        const page = render(<NewOrder navigation={navigation}/>);

        const addOrderButton = page.getByTestId('addOrderButton');

        fireEvent.press(addOrderButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Home");
    });
})
