import { useRouter } from "next/router";
import NewDreamForm from "../components/dreams/NewDreamForm";
import { IDreamItem } from "../types/types";

function NewDreamPage() {
  const router = useRouter();

  async function addDreamHandler(enteredDreamData: IDreamItem) {
    const response = await fetch("/api/new-dream", {
      method: "POST",
      body: JSON.stringify(enteredDreamData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  }
  return (
    <div>
      <NewDreamForm onAddDream={addDreamHandler} />
    </div>
  );
}

export default NewDreamPage;
