import $api from "../http/axios.config"

export default class ProjectService {
  static async getOneProjects(id) {
    return $api.get(`/projects/${id}`)
  }

  static async getAllProjects() {
    return $api.get('/projects')
  }

  static async editProject(payload) {
    return $api.put(`/projects/${payload.id}`, payload)
  }

  static async deleteProject(id) {
    return $api.delete(`/projects/${id}`)
  }

  static async createProject(payload) {
    return $api.post(`/projects/newProject`, payload)
  }
}