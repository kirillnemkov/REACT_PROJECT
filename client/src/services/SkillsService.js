import $api from "../http/axios.config"

export default class SkillsService {
  static async updateSkills(id, payload) {
    return $api.patch(`/profile/${id}`, payload)
  }

}