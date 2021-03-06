import http from './http';

// 登录
export const login = (data) => {
  return http.post('/admin/login', data);
};

// 登出
export const logout = () => {
  return http.post('/admin/logout');
};

// 某天用户注册量
export const getUserCount = (date) => {
  return http.get('/users/counts/' + date);
};

// 获取用户总注册量
export const getAllUserCounts = () => {
  return http.get('/users/counts');
};

// 获取用户列表
export const getUserLists = (data) => {
  return http.get('/users/lists?' + data);
};

// 获取商品种类
export const getCategory = () => {
  return http.get('/category');
};

// 添加商品种类
export const addCategory = (data) => {
  return http.post('/category', data);
};

// 添加商品
export const addProducts = (data) => {
  return http.post('/products', data);
};

// 获取商品总量
export const getProductsAllCounts = () => {
  return http.get('/products/counts');
};

// 获取商品列表
export const getProductsList = (data) => {
  return http.get('/products/lists?' + data);
};
