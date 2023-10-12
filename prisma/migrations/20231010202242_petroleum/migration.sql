-- CreateTable
CREATE TABLE "petroleum" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" TEXT NOT NULL,
    "petroleum_product" TEXT NOT NULL,
    "sale" REAL NOT NULL,
    "country" TEXT NOT NULL
);
