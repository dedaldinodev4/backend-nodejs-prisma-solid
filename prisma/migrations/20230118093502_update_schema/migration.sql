-- CreateTable
CREATE TABLE "_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_categories" (
    "id" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "products_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "_products_bar_code_key" ON "_products"("bar_code");

-- AddForeignKey
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
