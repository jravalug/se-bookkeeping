import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const incomeActivities = await prisma.incomeActivity.createMany({
    data: [{ name: 'VENTAS' }, { name: 'SERVICIOS' }]
  })

  console.log(incomeActivities)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
