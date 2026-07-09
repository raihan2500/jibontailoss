import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import {createStudentValidator} from '#validators/student'

export default class StudentsWebsController {
  async index({ view }: HttpContext){
    const students = await Student.all();
    return view.render('students/index', {students}) 
  }

  async store({request, response}:HttpContext){
    const payload = await request.validateUsing(createStudentValidator);
    await Student.create(payload);
    return response.redirect().toPath('students');
  }

  async edit({params, view}: HttpContext){
    const student = await Student.findOrFail(params.id);
    return view.render('students/edit', {student});
  }

  async update({params, request, response}: HttpContext){
    const student = await Student.findOrFail(params.id);
    const payload = await request.validateUsing(createStudentValidator);
    student.merge(payload);
    await student.save();
    return response.redirect().toPath('/students')
  } 

  async destroy({params, response}:HttpContext){
    const student = await Student.findOrFail(params.id);
    await student.delete();
    return response.redirect().toPath('/students');
  }
}