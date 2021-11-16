import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Error() {
  return toast.error(`Что-то пошло не так`);
}
