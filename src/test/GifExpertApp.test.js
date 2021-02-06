import React from 'react';

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en <GifExpertApp>', ()=> {

    const categorias = [ 'One Punch', 'Dragon Ball' ];

    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifExpertApp  /> );
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', () => {
        
        const wrapper = shallow( <GifExpertApp defaultCategories={ categorias } /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categorias.length );


    })
    
    
})