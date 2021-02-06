import { getGifs } from '../../helpers/getGifs'


describe('Pruebas de getGifs Fech', () => {

    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe( 10 );
    })
    
})