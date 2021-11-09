import Header from "../../components/Header/Header";
import BackgroundHome from "../../components/BackgroundHome/BackgroundHome";
import ModalLogIn from "../../components/ModalLogIn/ModalLogIn";

export default function HomePage({ setActive }) {
  return (
    <>
      <Header setActive={setActive} />
      <BackgroundHome />
      <ModalLogIn />
    </>
  );
}
