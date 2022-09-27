type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="bg-white rounded-md shadow-md">{children}</div>;
}

export default Card;
