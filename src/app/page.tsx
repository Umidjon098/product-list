import { Suspense } from "react";
import ProductList from "./product/product-list";
import ProfileForm from "./profile-form";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="container">
        <ProductList />
        <ProfileForm />
      </main>
    </Suspense>
  );
}
