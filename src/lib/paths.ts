const trim = (path: string) => path.replace(/\/+$/, "") || "/";

export function isCurrentSection(pathname: string, href: string) {
  const current = trim(pathname);
  const target = trim(href);
  return current === target || current.startsWith(`${target}/`);
}
