import axios from "axios"

export const getDistinctPositionKey = ['getDistinctPosition']
export const getDistinctPosition = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}

export const getDistinctByPositionIfnullKey = ['getDistinctByPositionIfnull']
export const getDistinctByPositionIfnull = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}

export const getPlayersNameFromRegionKey = ['getPlayersNameFromRegion']
export const getPlayersNameFromRegion = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                aq: "region",
                oq: "position"
            }
        });

    return data
}

export const getPlayersByNameAndHeightAndTeamIdKey = ['getPlayersByNameAndHeightAndTeamId']
export const getPlayersByNameAndHeightAndTeamId = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "playerName"
            }
        });

    return data
}

export const getPlayersByConditionKey = ['getPlayersByCondition']
export const getPlayersByCondition = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}

export const getPlayersByPositionAndRegionKey = ['getPlayersByPositionAndRegion']
export const getPlayersByPositionAndRegion = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}

export const getPlayersByHeightAndWeightKey = ['getPlayersByHeightAndWeight']
export const getPlayersByHeightAndWeight = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}

export const getPlayersLimitKey = ['getPlayersLimit']
export const getPlayersLimit = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}

export const getPlayersByPositionInfoKey = ['getPlayersByPositionInfo']
export const getPlayersByPositionInfo = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}

export const getTallestPlayersKey = ['getTallestPlayers']
export const getTallestPlayers = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}

export const getShorterThanTeamAvgKey = ['getShorterThanTeamAvg']
export const getShorterThanTeamAvg = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
            params: {
                q: "player",
                oq: "position"
            }
        });

    return data
}