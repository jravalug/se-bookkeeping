import { PrismaClient } from '@prisma/client'
import { time, timeEnd } from 'console'
import * as init from './initData'

const prisma = new PrismaClient()

const seedingConfig = async () => {
  try {
    time('Seed')

    console.log('Cleaning tables ❌')
    await prisma.activity.deleteMany()
    console.log('     ... table activity deleted  ✅!')
    await prisma.incomeActivity.deleteMany()
    console.log('     ... table incomeActivity deleted  ✅!')
    await prisma.incomeType.deleteMany()
    console.log('     ... table incomeType deleted  ✅!')
    await prisma.expenseItem.deleteMany()
    console.log('     ... table expenseItem deleted  ✅!')
    await prisma.expenseConcept.deleteMany()
    console.log('     ... table expenseConcept deleted  ✅!')
    await prisma.expenseSubAccount.deleteMany()
    console.log('     ... table expenseSubAccount deleted  ✅!')
    await prisma.paymentType.deleteMany()
    console.log('     ... table paymentType deleted  ✅!')
    await prisma.paymentMethod.deleteMany()
    console.log('     ... table paymentMethod deleted  ✅!')
    await prisma.taxType.deleteMany()
    console.log('     ... table taxType deleted  ✅!')

    console.log('')

    console.log('Seeding tables 🌱')
    await prisma.activity.createMany({
      data: init.activities
    })
    console.log('     ... seeding table activity 👍!')
    await prisma.incomeActivity.createMany({
      data: init.incomeActivity
    })
    console.log('     ... seeding table incomeActivity 👍!')
    await prisma.incomeType.createMany({
      data: init.incomeType
    })
    console.log('     ... seeding table incomeType 👍!')
    init.expenseSubAccount.map(async (subAccount) => {
      await prisma.expenseSubAccount.create({
        data: subAccount
      })
    })
    console.log('     ... seeding expense tables 👍!')
    await prisma.paymentType.createMany({
      data: init.paymentType
    })
    console.log('     ... seeding table paymentType 👍!')
    await prisma.paymentMethod.createMany({
      data: init.paymentMethod
    })
    console.log('     ... seeding table paymentMethod 👍!')
    await prisma.taxType.createMany({
      data: init.taxType
    })
    console.log('     ... seeding table taxType 👍!')

    timeEnd('Seed')
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

seedingConfig()
