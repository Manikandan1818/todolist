import ItemsList from "./ItemsList";

const Content = ({ items, handleChange, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemsList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </>
  );
};

export default Content;
