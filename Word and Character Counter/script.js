let text = document.getElementById("text");

text.addEventListener("input", function () {
  let v = this.value;
  let len = (text.innerHTML = v.length);
  char = document.getElementById("char");
  char.innerHTML = len;

  v = v.trim();
  let word = v.split(" ");
  let cleanlist = word.filter(function (elm) {
    return elm != "";
  });
  let lenword = cleanlist.length;
  wor = document.getElementById("word");
  wor.innerHTML = lenword;
});
