import client from "./client";

export type RankingEntry = {
  id: number;
  username: string;
  score: number;
};

export async function classement(gameId: number): Promise<RankingEntry[]> {
  const { data } = await client.get<RankingEntry[]>(
    `/games/${gameId}/rankingfive`,
  );
  const arr = Array.isArray(data) ? data : [];

  return arr.sort((a, b) => b.score - a.score);
}
