import "./App.css";
import { useList } from "effector-react";
import { useEffect } from "react";
import { $store, fetchUserReposFx, addToList } from "./models";
import {ListRender} from "./components/List";
import { FormDefault } from "./components/DefaultForm";

function App() {
  useEffect(() => {
    const fetchData = async () => await fetchUserReposFx({ name: "ruz1k" });
    fetchData();
  }, []);
  const items = useList($store, ({ id, language }: any) => (
    <ListRender<ListProps> item1={id} item2={language} />
  ));
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FormDefault<FormProps> title={'github' as any} onSubmit={addToList} />
        {items}
      </header>
    </div>
  );
}

export default App;
