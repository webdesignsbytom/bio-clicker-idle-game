-- CreateTable
CREATE TABLE "GameProfile" (
    "id" SERIAL NOT NULL,
    "ppc" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "GameProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameProfile_userId_key" ON "GameProfile"("userId");

-- AddForeignKey
ALTER TABLE "GameProfile" ADD CONSTRAINT "GameProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
