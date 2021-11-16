import GoogleLogin from "react-google-login";
import axios from "axios";
import styles from "./GoogleAuth.module.css";
import sprite from "../../images/sprite.svg";

export default function GoogleAuth() {
  const responseSuccesGoogle = (responce) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/gogleLogin",
      data: { tokenId: responce.tokenId },
    }).then((responce) => {
      console.log("Google login succes", responce);
    });
  };

  const responseErrorGoogle = (responce) => {};

  return (
    <GoogleLogin
      clientId="125319262266-ftpkcht7ld5qpcba88vc9jpja3ct363b.apps.googleusercontent.com"
      render={(renderProps) => (
        <button
          className={styles.modalLink}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <svg className={styles.logoGoogle} width="18px" height="18px">
            <use href={sprite + "#icon-google-symbol-1"} />
          </svg>
          <span className={styles.textGoogle}>Google</span>
        </button>
      )}
      buttonText="Google"
      onSuccess={responseSuccesGoogle}
      onFailure={responseErrorGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
