export function ButtonPress(e) {
  return e.target.classList.add("active");
}

export function ButtonRelease(e) {
  return e.target.classList.remove("active");
}
