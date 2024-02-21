export const requestInterceptor = (config: any) => {
  return config;
};

export const requestErrorInterceptor = (error: any) => Promise.reject(error);
export const responseInterceptor = (response: any) => response;
export const responseErrorInterceptor = (error: any) => Promise.reject(error);
