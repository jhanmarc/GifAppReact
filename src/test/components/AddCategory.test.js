
import React from 'react';
import "@testing-library/jest-dom"

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>);

    })

    test('Debe de mostrar correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value= 'Hola mundo cruel';
        input.simulate('change',{ target: { value } });
        expect(wrapper.find('p').text().trim() ).toBe( value )
    })
    

    test('NO debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled(); // no se llamo la funcion
        // expect( setCategories ).toHaveBeenCalled(); // que si llamo la funcion
    })


    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value= 'Hola mundo cruel';

        const input = wrapper.find('input');
        input.simulate('change',{ target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled();
        // expect( setCategories ).toHaveBeenCalledTimes(2);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function) );


        expect( input.prop('value') ).toBe('')

    })
    
    

    
    
})