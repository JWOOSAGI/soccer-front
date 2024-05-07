import axios from 'axios';

export const teamFieldKey = ['teamField'];
export const teamField = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`
);
  return data;
};

export const manyInfoKey = ['manyInfo'];
export const manyInfo = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`
);
  return data;
};

export const withNoHomeGroundKey = ['withNoHomeGround'];
export const withNoHomeGround = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`
);
  return data;
};