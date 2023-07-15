import CompanyLogo from "../assets/company-logo.jsx";
import TwIcon from "../assets/twitter-icon.jsx";
import YtIcon from "../assets/youtube-icon.jsx";
import FbIcon from "../assets/fb-icon.jsx";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <CompanyLogo />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">sosial media</span>
          <div className="grid grid-flow-col gap-4">
            <a href="#" style={{ color: "#FFF" }}>
              <TwIcon />
            </a>
            <a href="#" style={{ color: "#FFF" }}>
              <YtIcon />
            </a>
            <a href="#" style={{ color: "#FFF" }}>
              <FbIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
