import Student from '#models/student'
import  Factory from '@adonisjs/lucid/factories'

export const StudentFactory = Factory.define(Student, ({ faker }) => {
  return {
    name: faker.person.fullName(),
    email: faker.string.uuid() + '@example.com',
    phone: faker.phone.number(),
    department: faker.helpers.arrayElement(['CSE', 'EEE', 'BBA', 'English']),
    semester: faker.number.int({ min: 1, max: 8 }),
  }
}).build()