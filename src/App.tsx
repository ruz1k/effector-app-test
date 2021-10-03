import "./App.css";
import { useList } from "effector-react";
import { useEffect } from "react";
import { $store, fetchUserReposFx, addToList } from "./models";
import { ListRender } from "./components/List";
import { FormDefault } from "./components/DefaultForm";

function App() {
  useEffect(() => {
    const fetchData = async () => await fetchUserReposFx({ name: "ruz1k" });
    fetchData();
  }, []);
  const items = useList(
    $store,
    ({ id, language }: { id: number; language: string }) => {
      const objectProps = { item1: id, item2: language };
      return <ListRender<ListProps> objectProps={objectProps} />;
    }
  );
  return (
    <div className="App">
      <header className="App-header">
        <FormDefault<FormProps> title={"github"} onSubmit={addToList} />
        {items}
      </header>
    </div>
  );
}

export default App;
