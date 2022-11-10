import {Link, useSearchParams} from 'react-router-dom';

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order);
        setSearchParams(searchParams);
    }
    return(
        <div>
            Filtro: {searchParams.get('filter')}<br />
            Ordem: {searchParams.get('order')}
            <hr />
            <button className='
                pt-0
                pb-0
                m-2
                text-green-700
            '
            onClick={()=>setOrder('asc')}
            >
                Asc
            </button>
            <button className='
                pt-0
                pb-0
                m-2
                text-green-700
            '
            onClick={()=>setOrder('desc')}
            >
                Desc
            </button>
            <hr />
            Página sobre:
            <ul>
                <li><Link to="/sobre/joao">João</Link></li>
                <li><Link to="/sobre/pedro">Pedro</Link></li>
            </ul>
        </div>
    );
}