import { PageLayout } from "@/components";
import ItemCard from "@/components/Card/ItemCard";
import products from "@/constant/products";
import NavbarDetail from "./components/Navbar/NavbarDetail";
import { PropsParams } from "./models/idProduct.models";
import CardDetail from "./components/CardDetail/CardDetail";

export async function getServerSideProps(context): Promise<{
  props: PropsParams;
}> {
  const idProductName = context.params.idProductName.split("-");
  const [id, ...productName] = idProductName;

  return {
    props: {
      id,
      productName,
    },
  };
}

const ProductDetail = ({ id, productName }: PropsParams) => {
  const productFormat = productName.join(" ");
  const dataProperty = products?.find((element) => element.id === Number(id));

  return (
    <PageLayout title={`Detail: ${productFormat}`}>
      <NavbarDetail />
      <CardDetail data={dataProperty} />
    </PageLayout>
  );
};
export default ProductDetail;
