import $api from '../http/axios.config'

export default class ProjectService {
    static async getOneProjects(id) {
        return $api.get(`/projects/${id}`)
    }

    static async getLikeProjects(id, user) {
        return $api.patch(`/projects/${id}`, user)
    }

    static async postCommentForProject(id, user, input) {
        return $api.post(`/projects/${id}/comment`, { user, input })
    }

    static async getCommentForProject(id, user, input) {
        return $api.get(`/projects/comment/${id}`, { user, input })
    }
    static async updateViewsProject({projectId, userId}) {
        return $api.patch(`/projects/views/${projectId}`, {userId})
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
