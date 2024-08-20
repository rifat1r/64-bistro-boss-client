import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuimg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../shared/MenuItem/MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuimg} title={"our menu"}></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items */}
      <MenuCategory
        items={desserts}
        title={"Desserts"}
        coverImg={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        coverImg={pizzaImg}
        title={"Pizza"}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        coverImg={saladImg}
        title={"Salad"}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        coverImg={soupImg}
        title={"Soup"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
