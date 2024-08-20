import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-7 my-10">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500  bg-opacity-60 items-center  pb-20  pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            modi possimus maxime hic eum beatae alias ex repudiandae, facilis
            nisi obcaecati tenetur veritatis blanditiis delectus doloribus iure
            consequatur culpa excepturi fugit distinctio harum, vel asperiores
            error repellendus. Eveniet architecto laboriosam totam adipisci
            ullam, ducimus recusandae voluptas distinctio obcaecati quidem
            laudantium?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
