import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'student_web.index': { paramsTuple?: []; params?: {} }
    'student_web.store': { paramsTuple?: []; params?: {} }
    'student_web.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'student_web.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'student_web.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'student_web.index': { paramsTuple?: []; params?: {} }
    'student_web.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'student_web.index': { paramsTuple?: []; params?: {} }
    'student_web.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'student_web.store': { paramsTuple?: []; params?: {} }
    'student_web.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'student_web.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}