/**
 * @desc create a tag to download
 * @returns {HTMLAnchorElement}
 */
function createLink() {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    return a;
}
/**
 * @desc download media
 * @param {string | File | Blob} source - the source of media
 * @param {Object} options - the optional data
 * @param {string} [options.name] - the name of downloaded media
 */
function download(source, options) {
    var name = options.name;
    var a = createLink();
    var url;
    var useURL = false;
    if (typeof source === "string") {
        url = source;
    }
    else {
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

export { download };
