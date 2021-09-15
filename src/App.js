import logo from "./logo.svg";
import "./App.css";
import { createStore, createEvent, createEffect } from "effector";
import { useList, useStore } from "effector-react";
import { useEffect } from "react";

const fetchUserReposFx = createEffect(async ({ name }) => {
  const url = `https://api.github.com/users/${name}/repos`;
  const req = await fetch(url);
  return req.json();
});
const event = createEvent();
const $store = createStore([])
  .on(fetchUserReposFx?.doneData, (_, repo) => repo)
  .on(event, (item, id) =>
    id === "5"
      ? item?.map((item) => {
          return {
            ...item,
            id: item?.id + 5,
          };
        })
      : item
  );
function App() {
  const store2 = useStore($store);
  useEffect(() => fetchUserReposFx({ name: "ruz1k" }), []);
  const items = useList($store, (item) => (
    <p>
      {item?.id}
      {item?.language}
    </p>
  ));
  console.log(store2);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {items}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => event("5")}>lol</button>
        <input onChange={(e) => event(e?.target?.value)} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
