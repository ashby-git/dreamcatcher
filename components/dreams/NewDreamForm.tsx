import { useRef } from "react";
import { IDreamItem } from "../../types/types";

import Card from "../ui/Card";

interface NewDreamFormProps {
  onAddDream: (dreamData: IDreamItem) => void;
}

function NewDreamForm({ onAddDream }: NewDreamFormProps) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredLocation = locationInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;

    const dreamData = {
      title: enteredTitle,
      image: enteredImage,
      location: enteredLocation,
      description: enteredDescription,
    };

    onAddDream(dreamData);
  }

  return (
    <Card>
      <form className="p-4" onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="title" className="block font-bold mb-2">
            Dream Title
          </label>
          <input
            type="text"
            required
            id="title"
            className="block rounded-md border border-solid border-gray-400 p-1 w-full"
            ref={titleInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="image" className="block font-bold mb-2">
            Dream Image
          </label>
          <input
            type="url"
            required
            id="image"
            className="block rounded-md border border-solid border-gray-400 p-1 w-full"
            ref={imageInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="block font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            required
            id="address"
            className="block rounded-md border border-solid border-gray-400 p-1 w-full"
            ref={locationInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            required
            rows={5}
            className="block rounded-md border border-solid border-gray-400 p-1 w-full"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="mt-4 text-right">
          <button
            className="cursor-pointer bg-red-900 text-white py-2 px-6 border border-solid 
          border-red-900 rounded-md font-bold hover:bg-red-700 hover:border-red-700 
          active:bg-red-700 active:border-red-700"
          >
            Add Dream
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewDreamForm;
