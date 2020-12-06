function mapList(list, maper) {
    var arr = Array.isArray(list) ? list : typeof list === 'number' ? Array.from({ length: list }) : Array.from(list);
    return arr.map(maper);
}