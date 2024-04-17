// 调用云函数
export async function callCloudFunction(path, method, data) {
  const res = await window.c1.callContainer({
    path: path,
    method: method,
    header: {
      "X-WX-SERVICE": "mini-nestjs-server"
    },
    data: data
  });
  return res;
}
