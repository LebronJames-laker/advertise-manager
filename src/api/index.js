import {get,post} from "./http";

//判断管理员是否登录成功
export const getLoginStatus = (params) => post(`admin/login/status1`,params);

//添加歌手
export const addSinger = (params) => post(`singer/add`,params);


//修改歌手
export const updateSinger = (params) => post(`singer/update`,params);

//删除歌手
export const deleteSinger = (id) => get(`singer/delete?id=${id}`);

//查询所有歌手
export const getAllSingers=()=>get(`singer/findAll`);