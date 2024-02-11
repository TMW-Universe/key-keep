/*
  Warnings:

  - You are about to alter the column `masterPassword` on the `Container` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(16)`.

*/
-- AlterTable
ALTER TABLE `Container` MODIFY `masterPassword` VARCHAR(16) NOT NULL;
