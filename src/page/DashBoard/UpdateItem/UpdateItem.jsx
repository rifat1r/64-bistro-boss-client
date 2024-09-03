import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log("from update item ----->", item);
  return (
    <div>
      <SectionTitle
        heading={"Update an Item"}
        subHeading={"Refresh info"}
      ></SectionTitle>
      <div>
        <p>kzfczlk</p>
      </div>
    </div>
  );
};

export default UpdateItem;
