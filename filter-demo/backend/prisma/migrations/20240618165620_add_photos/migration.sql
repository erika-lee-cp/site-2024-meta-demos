-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "caption" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Photo_id_key" ON "Photo"("id");
