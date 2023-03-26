import Cookie from "universal-cookie";

export default function GetCookie(name) {
  const cookies = new Cookie();
  cookies.get(name);
}
