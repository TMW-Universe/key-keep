/*
  Warnings:

  - Added the required column `accountId` to the `Password` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Password` ADD COLUMN `accountId` VARCHAR(36) NOT NULL;

-- AddForeignKey
ALTER TABLE `Password` ADD CONSTRAINT `Password_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
