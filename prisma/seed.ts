import { PrismaClient } from '@prisma/client'
import { time, timeEnd } from 'console'
import { activities } from './datas/activityData'
import { expenseSubAccount } from './datas/expenseData'
import { incomeActivity, incomeType } from './datas/incomeData'

const prisma = new PrismaClient()

const seedingConfig = async () => {
  try {
    time('Seed')

    // Seeding activity data
    await prisma.activity.deleteMany()
    console.log('Deleted records in activity table')

    await prisma.activity.createMany({
      // data: JSON.parse(
      //   await readFile(resolve('prisma/datas/activityData.json'), { encoding: 'utf8' })
      // )
      data: activities
    })
    console.log('Seeding activity data done!')

    // Seeding income data
    await prisma.incomeActivity.deleteMany()
    console.log('Deleted records in incomeActivity table')

    await prisma.incomeActivity.createMany({
      data: incomeActivity
    })
    console.log('Seeding incomeActivity data done!')

    await prisma.incomeType.deleteMany()
    console.log('Deleted records in incomeType table')

    await prisma.incomeType.createMany({
      data: incomeType
    })
    console.log('Seeding incomeType data done!')

    // Seeding expense data
    await prisma.expenseItem.deleteMany()
    console.log('Deleted records in expenseItem table')
    await prisma.expenseConcept.deleteMany()
    console.log('Deleted records in expenseConcept table')
    await prisma.expenseSubAccount.deleteMany()
    console.log('Deleted records in expenseSubAccount table')

    expenseSubAccount.map(async (subAccount) => {
      await prisma.expenseSubAccount.create({
        data: subAccount
      })
    })

    timeEnd('Seed')
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

seedingConfig()
