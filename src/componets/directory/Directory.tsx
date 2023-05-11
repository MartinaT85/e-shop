import Category from "../catergory/Category";
import { CategoriesType } from "../../pages/Home";

type DirectoryProps = {
  categories: CategoriesType[]
  
}

function Directory({ categories }: DirectoryProps) {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return <Category key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
}

export default Directory;
