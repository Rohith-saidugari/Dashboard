import axios from 'axios'

const BASE_URL="http://localhost:8080/api/v1/recruiter"

class ApiService{

    fetchRecruiters(){
        return axios.get(BASE_URL);
    }

}
export default new ApiService();
