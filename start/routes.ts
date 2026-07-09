import router from "@adonisjs/core/services/router";
const StudentWebController = () => import('#controllers/students_webs_controller')

router.get('/students', [StudentWebController, 'index'])

router.post('/students', [StudentWebController, 'store'])

router.get('/students/:id/edit', [StudentWebController, 'edit'])

router.post('/students/:id/update', [StudentWebController, 'update'])

router.post('/students/:id/delete', [StudentWebController, 'destroy'])