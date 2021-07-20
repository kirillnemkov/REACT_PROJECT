import $api from '../http/axios.config'

export default class UploadsService {
    static async uploadUserImg(payload, id) {
        return $api.post(`/profile/${id}`, payload)
    }
    static async uploadProjectImg(payload, id) {
        return $api.post(`/projects/newPicture/${id}`, payload)
    }
}
