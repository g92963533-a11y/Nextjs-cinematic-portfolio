import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { LuMoveUpRight } from "react-icons/lu";

export default function GithubRepositories({ repositories }) {
  return (
    <section className="repositories section-wrap" aria-labelledby="repositories-title">
      <div className="section-kicker"><span>03</span><span>PUBLIC REPOSITORIES</span><i /></div>
      <div className="section-heading">
        <h2 id="repositories-title">All {repositories.length}<br /><em>repositories.</em></h2>
        <p>Every public repository returned by GitHub on November 21, 2026. Missing descriptions and language labels are left blank in GitHub, not filled with guesses.</p>
      </div>
      <div className="repository-grid">
        {repositories.map((repository) => (
          <article className="repository-card" key={repository.name}>
            <div className="repository-card-top"><FaGithub aria-hidden="true" size={16} /><a href={repository.url} target="_blank" rel="noreferrer" aria-label={`Open ${repository.name} on GitHub`}><LuMoveUpRight aria-hidden="true" size={15} /></a></div>
            <h3>{repository.name}</h3>
            <p>{repository.description || "No public description provided."}</p>
            <div className="repository-meta">
              <span>{repository.language || "Language not specified"}</span>
              {repository.stars > 0 && <span><FaStar aria-hidden="true" size={10} /> {repository.stars}</span>}
              {repository.forks > 0 && <span><FaCodeBranch aria-hidden="true" size={10} /> {repository.forks}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
