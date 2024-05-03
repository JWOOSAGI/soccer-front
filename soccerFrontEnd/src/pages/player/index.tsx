import PlayerList from 'app/player/module/player-list';
import { NextPage } from 'next';
import Home from 'templates/Home';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'



const PlayerPage: NextPage = ({ data }: any) => { //NextPage의 타입이 PlayerPage라는 뜻. : 때문에
    return <PlayerList />
}

export async function getServerSideProps() {


    const queryClient = new QueryClient()
    const result = await fetch('https://api.github.com/repos/TanStack/query')
    .then((res) => {res.json()})

    return {
        props: { data: result},
    };

}

export default PlayerPage;
