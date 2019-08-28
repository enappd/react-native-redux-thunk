import { GET_PAGE_LIST } from '../constants';
export function setPageList(pageList) {
  return {
    type: GET_PAGE_LIST,
    payload: pageList,
  };
}
export function getPageList() {
  return async (dispatch) => {
    try {
      const apiReq = await fetch('http://dummy.restapiexample.com/api/v1/employees', {
        method: 'GET'
      });
      console.log(apiReq);
      await dispatch(setPageList(apiReq));
      
      return apiReq || [];
    } catch (error) {
      console.error(error);
    }
  };
}