import { useState, type KeyboardEvent } from "react";

function Login() {
  const [enter, setEnter] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const handleKeydown = (e: KeyboardEvent) => {
    e.key == "Enter" && username && setEnter(true);
  };
  return enter ? (
    <>Login</>
  ) : (
    <div className="login-container">
      <h1 className="main-title">Type Racer</h1>
      <p className="app-description">Application to measure typing speed</p>
      <input
        className="login-input-username"
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeydown}
        required
      />
    </div>
  );
}

export default Login;
