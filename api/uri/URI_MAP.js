const BASE_URL = "http://rentrite.herokuapp.com/";


const URI_MAP = {
  ome: {
    register: `${BASE_URL}accounts/register/`,
    login: `${BASE_URL}accounts/login/`,
    allblogs: `${BASE_URL}blogs/`,
    contactus: `${BASE_URL}info/contact/`,
    apartment: `${BASE_URL}apartment/`,
    // apartmentpictures: `${BASE_URL}apartment/`,
    // deletepage: `${BASE_URL}page/delete-page`,
    // getprofile: `${BASE_URL}profiles/get-profile`,
    // createfeedback: `${BASE_URL}feedback/create-feedback`,
    // upvote: `${BASE_URL}feedback/upvote`,
    // downvote: `${BASE_URL}feedback/downvote`,
    // forgotpassword: `${BASE_URL}auth/forgot-password`,
    // resetpassword: `${BASE_URL}auth/reset-password`,
  },
};

export default URI_MAP;