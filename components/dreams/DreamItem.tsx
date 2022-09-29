import { IDreamItem } from "../../types/types";
import Card from "../ui/Card";

function DreamItem({ image, title, location }: IDreamItem) {
  return (
    <li className="my-4 mx-0">
      <Card>
        <div className="w-full h-80 overflow-hidden rounded-t-md">
          <img className="w-full object-cover" src={image} alt={title} />
        </div>
        <div className="text-center p-4">
          <h3 className="text-xl text-gray-700 font-sans font-bold pb-3">
            {title}
          </h3>
          <address>{location}</address>
        </div>
        <div className="p-6 text-center">
          <button
            className=" cursor-pointer text-red-900 border border-solid border-red-900 bg-transparent 
          py-2 px-6 rounded hover:bg-gray-200 active:bg-gray-200"
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default DreamItem;
