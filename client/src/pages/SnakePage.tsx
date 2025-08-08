import SnakeBoard from "../components/Snake/SnakeBoard";
import "../components/Home/MiniGamesBlock.css";
import "../styles/snakePage.css";
import { useEffect, useState } from "react";
import { classement, type RankingEntry } from "../services/classement";

function SnakePage() {
  const PLACE_ICONS = ["🏆", "🥇", "🥈", "🥉", "🧸"];
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  useEffect(() => {
    classement(1)
      .then(setRanking)
      .catch(() => setRanking([])); // 1 = ID du jeu Snake
  }, []);
  return (
    <>
      <section className="home-section-snake">
        <div className="mini-games-container-snake">
          <div className="block-title">
            <span className="line" />
            <h2>Snake</h2>
            <span className="line" />
          </div>
          <div className="mini-games-content-snake">
            <article className="texte-snake">
              Gobe les p’tits points roses pour le fun… mais évite de croquer ta
              propre queue ! Tous les 5 ‘pommes’, tu passes en mode turbo 🐍!
            </article>
            <article>
              <SnakeBoard />
            </article>
            <article className="game-ranking-block-snake">
              <strong>Classement</strong>
              <ul>
                {ranking.length ? (
                  ranking.map((e, i) => (
                    <li key={e.id}>
                      {PLACE_ICONS[i] ?? `${i + 1}.`} {e.username} – {e.score}{" "}
                      pts
                    </li>
                  ))
                ) : (
                  <li>Aucun score enregistré</li>
                )}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default SnakePage;