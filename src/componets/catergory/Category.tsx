import "./category.styles.scss";

type CategoryProps = {
  imageUrl: string,
  title: string,
}



function Category({ imageUrl, title }: CategoryProps) {
  return (
    <div className="category-container" data-test='category-container'>
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default Category;
