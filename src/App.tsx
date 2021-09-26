import logo from "./logo.svg";
import "./App.css";
import { useStore, useList } from "effector-react";
import { useEffect } from "react";
import { $store, fetchUserReposFx, addToList } from "./models";
import List from "./components/List";
import DefaultForm from "./components/DefaultForm";

function App() {
  const store2 = useStore($store);
  useEffect(() => {
    const fetchData = async () => await fetchUserReposFx({ name: "ruz1k" });
    fetchData();
  }, []);
  const items = useList($store, ({ id, language }: any) => (
    <List item1={id} item2={language} />
  ));
  console.log($store);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {items}
        {/* <DefaultForm<FormProps> title="git" onSubmit={addToList} /> */}
      </header>
    </div>
  );
}

export default App;
