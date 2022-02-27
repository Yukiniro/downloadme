/**
* @description 创建用以下载的标签
* @returns 
*/
function createLink() {
  let a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  return a;
}

export function download(source, options = { name: '' }) {
  const { name } = options;
  const a = createLink();
  let url;
  let useURL = false;
  if (typeof source === 'string') {
    url = source;
  } else {
    url = URL.createObjectURL(source);
    useURL = true;
  }

  a.href = url;
  a.download = name;
  a.click();

  if (useURL) {
    URL.revokeObjectURL(url);
  }
}