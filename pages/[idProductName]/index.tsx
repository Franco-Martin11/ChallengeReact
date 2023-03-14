import products from "@/constant/products";
import { CardDetail, NavbarDetail, PageLayout } from "@/components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
 interface PropsParams {
  id: string;
  productName: string[];
}

export const getServerSideProps: GetServerSideProps<PropsParams> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const idProductName: string[] | any =
    typeof context?.params?.idProductName === "string"
      ? context.params.idProductName.split("-")
      : undefined;
  const [id, ...productName] = idProductName;

  return {
    props: {
      id,
      productName,
    },
  };
};

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
