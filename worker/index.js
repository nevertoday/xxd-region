// 本站 2026-11-19 先在 region.xiaoxiaodong.ai 上线，同一天改用 appleid.xiaoxiaodong.ai。
// 旧网址的每个请求都 301 到新网址的同一页（路径和查询参数不变），已经分享出去的链接照样能打开；其余请求交给静态资源。
const OLD = "region.xiaoxiaodong.ai";
const NEW = "appleid.xiaoxiaodong.ai";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === OLD) {
      url.hostname = NEW;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
