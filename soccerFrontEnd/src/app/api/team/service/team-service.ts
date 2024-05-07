import axios from 'axios';

export const getAllByTeamNameKey = ['getAllByTeamName'];
export const getAllByTeamName = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`,
    { params: { q: 'team' } },
  );

  return data;
};

export const getPlayerOrderByKey = ['getPlayerOrderBy'];
export const getPlayerOrderBy = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`,
    { params: { q: 'teamId', oq: 'POSITION' } },
  );

  return data;
};

export const getPlayerByTeamIdKey = ['getPlayerByTeamId'];
export const getPlayerByTeamId = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`,
    { params: { q: 'teamId' } },
  );

  return data;
};

export const getTeamByNoPositionKey = ['getTeamByNoPosition'];
export const getTeamByNoPosition = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`,
    { params: { q: 'teamId', oq: 'stadiumId' } },
  );

  return data;
};

export const getTeamByDateKey = ['getTeamByDate'];
export const getTeamByDate = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`,
    { params: { q: 'height' } },
  );

  return data;
};

export const getTeamByHeightKey = ['getTeamByHeight'];
export const getTeamByHeight = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`,
    { params: { q: 'teamId', oq: 'POSITION' } },
  );

  return data;
};
