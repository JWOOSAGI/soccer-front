import PlayerList from 'app/api/player/module/player-list';
import { NextPage } from 'next';
import Home from 'templates/Home';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import { getDistinctPosition, getDistinctPositionKey } from 'app/api/player/service/player-service';
import { useEffect } from 'react';



const PlayerPage: NextPage = ({ data }: any) => { //NextPage의 타입이 PlayerPage라는 뜻. : 때문에

    useEffect(() => {
        console.log('MY-INFO : PlayerPage SSR data is ');
        console.log(JSON.stringify(data));
    }, []);
    return <PlayerList />
}

export async function getServerSideProps() {


    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(getDistinctPositionKey, getDistinctPosition)
    const data = queryClient.getQueryData(getDistinctPositionKey)
    console.log('MY-INFO : PlayerPage SSR data is ');
    console.log(JSON.stringify(data));


    return {
        props: { data },
    };


}

export default PlayerPage;

