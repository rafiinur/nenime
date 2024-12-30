"use server";

export const getTopAnimes = async (query: string) => {
  const response = await fetch(
    `${process.env.JIKAN_API_BASE_URL}/top/anime?${query}`
  );

  const data = await response.json();

  return data;
};
