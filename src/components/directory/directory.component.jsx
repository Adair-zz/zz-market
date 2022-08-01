import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/07/12/08/15/grass-7316770__340.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240__340.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/06/12/17/34/waterfall-7258514__340.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womans",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/07/05/02/58/sea-7302187__340.jpg",
    route: "shop/womans",
  },
  {
    id: 5,
    title: "Mans",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/03/30/13/16/betta-7101167__340.jpg",
    route: "shop/mans",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
