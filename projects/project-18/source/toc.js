const list = document.getElementById("toc");
let counter = 1;
for (const heading of document.querySelectorAll("h2")) {
  if (!heading.id) {
    let id;
    do {
      id = `section-${counter++}`;
    } while (document.getElementById(id));
    heading.id = id;
  }
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${encodeURIComponent(heading.id)}`;
  link.textContent = heading.textContent;
  item.appendChild(link);
  list.appendChild(item);
}
