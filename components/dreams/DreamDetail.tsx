import { IDreamItem } from "../../types/types";

function DreamDetail({ image, title, location, description, id }: IDreamItem) {
  return (
    <section className="text-center">
      <img src={image} alt={title} className="w-full" />
      <h1 className="text-2xl text-gray-700 font-sans font-bold p-3">
        {title}
      </h1>
      <address className="text-lg font-sans pb-6">{location}</address>
      <p className="pb-16">{description}</p>
    </section>
  );
}

export default DreamDetail;
