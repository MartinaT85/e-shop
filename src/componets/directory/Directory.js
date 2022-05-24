import Category from "../catergory/Category";

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return <Category key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
}

export default Directory;
