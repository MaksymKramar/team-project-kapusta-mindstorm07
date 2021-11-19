import Header from "../../components/Header/Header";
import BackgroundHome from "../../components/BackgroundHome/BackgroundHome";
import ModalLogIn from "../../components/ModalLogIn/ModalLogIn";
import BackgroundUser from "../../components/BackgroundUser/BackgroundUser";

export default function LogInPage({ setActive }) {
  return (
    <>
      <Header setActive={setActive} />
      <BackgroundHome />
      <ModalLogIn />
    </>
  );
}
