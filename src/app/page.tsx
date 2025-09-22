import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  }); // Trará todos os produtos da tabela productTable, com as suas variantes e categorias

  const categories = await db.query.categoryTable.findMany({});

  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });

  return (
    <>
      <Header />

      <div className="space-y-6 px-5">
        <Image
          src="/banner-01.png"
          alt="Leve uma vida com estilo"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <ProductList products={products} title="Mais Vendidos" />

        <CategorySelector categories={categories} />

        <Image
          src="/banner-02.png"
          alt="Seja autêntico"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <div>
          <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
