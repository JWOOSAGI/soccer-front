import PlayerList from "app/player/module/player-list";
import { NextPage } from "next";

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'



const PlayerPage: NextPage = ({ data }: { data: any }) => { //구조물에 할당 (덕 패턴)
    return <PlayerList />;
}

export async function getServerSideProps() {

    const queryClient = new QueryClient() //서버 문법을 따름.
    const result = await fetch('https://api.github.com/repos/TanStack/query')

    // 자바에 다녀온 data를 화면에 props로 받음. 
    return {
        props: { data: result }
    };

}//비동기 SSR, 자바와 통신 도중 화면을 렌더링한다.

export default PlayerPage;