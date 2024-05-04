import ProductList from "./product/product-list";
import ProfileForm from "./profile-form";

export default function Home() {
  return (
    <main className="container">
      <ProductList />
      <ProfileForm />
    </main>
  );
}
