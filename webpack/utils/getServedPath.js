const url = require('url');

const envPublicUrl = process.env.PUBLIC_URL;
const getPublicUrl =
  // 環境変数かpackage.jsonでpublic urlを決める。
  appPackageJson => envPublicUrl || require(appPackageJson).homepage;

const ensureSlash = (path, needsSlash) => {
  const hasSlash = path.endsWith('/');

  if (hasSlash && !needsSlash) return path.substr(path, path.length - 1);
  else if (!hasSlash && needsSlash) return `${path}/`;
  else return path;
};

module.exports = function getServedPath(appPackageJson) {
  // production buildのときに使うurlを取得する。
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');

  return ensureSlash(servedUrl, true);
};
