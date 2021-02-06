import React from 'react'
import { shallow } from "enzyme/build"
import { GifGridItem } from "../../components/GifGridItem"



describe('Prueba en <GifGridItem>', () => {

    const title = 'Saitama';
    const url = 'http://localhost/saitama.png';
    const wrapper = shallow( <GifGridItem  title={ title } url={ url } /> )
    

    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de tener un párrafo en el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('Debe tener un image igual url y alt de los props', () => {
        // const img = wrapper.find('img').at();
        const img = wrapper.find('img');
        // console.log( img.props().src )
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })

    test('Debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // const classNam = (div.prop('className')).split(' ')[2];
        // // console.log(classNam)

        // expect( classNam ).toBe('animate__fadeIn')

        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe(true);
    })
    
    
    

})