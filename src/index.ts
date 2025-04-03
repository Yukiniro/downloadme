/**
 * @desc create a tag to download
 */
function createLink(): HTMLAnchorElement {
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style.display = 'none'
  return a
}

/**
 * @desc download media
 * @param {string | File | Blob} source - the source of media
 * @param {object} options - the optional data
 * @param {string} [options.name] - the name of downloaded media
 */
export function download(
  source: string | File | Blob,
  options: { name?: string },
): void {
  const { name } = options
  const a = createLink()
  let url: string
  let useURL = false
  if (typeof source === 'string') {
    url = source
  }
  else {
    url = URL.createObjectURL(source)
    useURL = true
  }

  a.href = url
  a.download = name
  a.click()

  if (useURL) {
    URL.revokeObjectURL(url)
  }
}
