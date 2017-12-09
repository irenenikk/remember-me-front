export default (attr1, attr2) => {
  return attr1.replace(/[^a-zA-Z0-9]/g,'') + attr2.replace(/[^a-zA-Z0-9]/g,'')
}
