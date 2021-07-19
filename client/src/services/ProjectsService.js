import $api from "../http/axios.config"

export default class ProjectService {
  static async getAllProjects() {
    return $api.get('/projects')
  }

  static async editProject(payload) {
    return $api.post(`/projects/${payload.id}`, payload)
  }

  static async deleteProject(id) {
    return $api.post(`/projects/${id}`)
  }

  static async createProject(payload) {
    return $api.post(`/projects//newProject`, payload)
  }
}
