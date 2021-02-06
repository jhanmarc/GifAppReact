
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


describe('Prueba en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );
        const { data, loading } = result.current;

        // console.log(data, loading);
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('Debe de retornar un arreglo de imagenes y loading false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    })
    
    
})