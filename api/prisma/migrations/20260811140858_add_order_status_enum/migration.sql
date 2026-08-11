/*
  Warnings:

  - You are about to drop the column `completed` on the `ServiceOrder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ServiceOrder` DROP COLUMN `completed`,
    ADD COLUMN `status` ENUM('open', 'in_progress', 'done') NOT NULL DEFAULT 'open';
