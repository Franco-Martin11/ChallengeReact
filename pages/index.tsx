import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

import PageLayout from "@/components/PageLayout";
import { HomeLayout } from "@/components";
import CategoryTitle from "@/components/HomeLayout/components/CategoryTitle";
import ItemCard from "@/components/Card/ItemCard";
import HomeGridContainer from "@/components/HomeLayout/components/HomeGridContainer";
import products from "@/constant/products";

export default function Home() {
  return (
    <PageLayout title="Home">
      <HomeLayout>
        {products && (
          <>
            <CategoryTitle categoryTitle="Populer" route="See All" />
            <HomeGridContainer>
              {products.map((elemento, index) => (
                <ItemCard props={elemento} index={index} key={elemento.id} />
              ))}
            </HomeGridContainer>
          </>
        )}
      </HomeLayout>
    </PageLayout>
  );
}
