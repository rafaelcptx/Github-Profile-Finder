import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [avatar_url, setAvatarUrl] = useState(
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
  );
  const [login, setLogin] = useState("");
  const [location, setLocation] = useState("");
  const [followers, setFollowers] = useState("");
  const [public_repos, setPublicRepos] = useState("");
  const [bio, setBio] = useState("");

  function handleSearch() {
    fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
      headers: {
        Accept: "application.vnd.github.v3+json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const {
          name,
          avatar_url,
          login,
          location,
          followers,
          public_repos,
          bio,
        } = data;

        setLogin(login);
        setName(name);
        setAvatarUrl(avatar_url);
        setLocation(location);
        setFollowers(followers);
        setPublicRepos(public_repos);
        setBio(bio);

        if (avatar_url === undefined) {
          setAvatarUrl(
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
          );
        }
      });
  }

  return (
    <>
      <div className="container">
        <h1>GitHub Profile Finder</h1>
        <p>Use a barra de pesquisa abaixo para pesquisar um perfil.</p>
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
          type="text"
          placeholder="username..."
        />
        <br></br>
        <button onClick={handleSearch}>Buscar</button>
      </div>

      <div className="block">
        <div className="card">
          <div className="header">
            <div className="img">
              <img src={avatar_url} alt="Foto do perfil" />
            </div>
            <p>
              <span>Nome:</span> {name}
            </p>
            <p>
              <span>User:</span> {login}
            </p>
            <p>
              <span>Localização:</span> {location}
            </p>
          </div>
          <div className="divBio">
            <p>
              <span>Biografia:</span> {bio}
            </p>
          </div>
          <div className="content">
            <p>
              <span>Repositórios públicos:</span> {public_repos}
            </p>
            <p>
              <span>Seguidores:</span> {followers}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
