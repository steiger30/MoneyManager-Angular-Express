-- CreateTable
CREATE TABLE "Finance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Finance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
