-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `client_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Account_id_key`(`id`),
    UNIQUE INDEX `Account_code_key`(`code`),
    UNIQUE INDEX `Account_client_id_key`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
