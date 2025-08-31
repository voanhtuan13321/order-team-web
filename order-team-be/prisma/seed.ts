import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Inserts seed data into the database.
 *
 * Inserts the following roles:
 *
 * - Admin
 * - User
 *
 * The `skipDuplicates` option is used to prevent duplicate data from being inserted.
 */
async function main() {
  await prisma.roles.createMany({
    data: [{ role_name: 'Admin' }, { role_name: 'User' }],
    skipDuplicates: true,
  });

  console.log('Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
