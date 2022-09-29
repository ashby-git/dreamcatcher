import { IDreamItem } from "../../types/types";
import DreamItem from "./DreamItem";

type DreamListProps = {
  dreams: IDreamItem[];
};

function DreamList({ dreams }: DreamListProps) {
  return (
    <ul className="list-none m-0 p-0">
      {dreams.map((dream) => (
        <DreamItem
          key={dream.id}
          id={dream.id}
          image={dream.image}
          title={dream.title}
          location={dream.location}
        />
      ))}
    </ul>
  );
}

export default DreamList;
