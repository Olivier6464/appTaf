function uuidv4() {
  //pattern gived 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  return 'xxxx-yxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}