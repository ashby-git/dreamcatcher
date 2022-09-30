import NewDreamForm from "../components/dreams/NewDreamForm";
import { IDreamItem } from "../types/types";

function NewDreamPage() {
  function addDreamHandler(dreamData: IDreamItem) {
    console.log(dreamData);
  }
  return (
    <div>
      <NewDreamForm onAddDream={addDreamHandler} />
    </div>
  );
}

export default NewDreamPage;
