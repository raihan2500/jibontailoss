import vine from '@vinejs/vine'

export const createStudentValidator = vine.create({
  name: vine.string().trim().minLength(3),
  email: vine.string().email(),
  phone: vine.string().optional(),
  department: vine.string().trim().minLength(2),
  semester: vine.number().min(1).max(8)
})