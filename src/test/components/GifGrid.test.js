
import React  from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import "@testing-library/jest-dom"



import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe("Pruebas en <GifGrid>", () => {

    const category = 'Dragon Ball';

    test('debe de mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        
        const wrapper = shallow( <GifGrid category={category} /> )
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se carga imagenes useFetchGifs', () => {
        
        const gifs = [
            { id: 'ABC',
              url: 'https://localhost/goku.jpg',
              title: 'Goku'
            },
            { id: '1234',
              url: 'https://localhost/goku.jpg',
              title: 'Goku'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( <GifGrid category={category} /> )

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )

    })
    

})