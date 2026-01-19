import { ProductDetail } from "../../../pages/buyer/ProductDetail";

export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetail id={params.id} />;
}

