import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer__container">
      <div class="footer__links">
        <div className="footer__link-wrapper">
          <div class="footer__link-items">
            <img
              src={require("../assets/logo_white.png")}
              alt="logo"
              height="150px"
              width="220px"
            />
            <h2>3Donate</h2>
            <Link className="footer__link--address">
              3Donate는 데이터 기부 플랫폼으로,
              <br /> 데이터를 기부하는 유저는 해당 기부한 곳에 따른 NFT, 토큰이
              지급되는 플랫폼입니다.
            </Link>
            {/* <img
              className="footer__team--logo"
              src={require("../assets/logo_white.png")}
              alt="logo"
              height="150px"
              width="220px"
            /> */}
          </div>
          <div class="footer__link-items">
            <h2>FrontEnd</h2>
            <Link className="footer__link--name">신동주</Link>
            <Link
              className="footer__link--address"
              onClick={() => window.open("https://velog.io/@tls980824")}
            >
              https://velog.io/@tls980824
            </Link>
            <Link
              className="footer__link--address"
              onClick={() => window.open("https://github.com/djshinnn")}
            >
              https://github.com/djshinnn
            </Link>
            <br />
            <Link className="footer__link--name">이민기</Link>
            <Link
              className="footer__link--address"
              onClick={() => window.open("https://velog.io/@moment_log")}
            >
              https://velog.io/@moment_log
            </Link>
            <Link
              className="footer__link--address"
              onClick={() => window.open("https://github.com/mingi3442")}
            >
              https://github.com/mingi3442
            </Link>
          </div>
          <div class="footer__link-items">
            <h2>BackEnd</h2>
            <Link className="footer__link--name">김신학</Link>
            <Link
              className="footer__link--address"
              onClick={() =>
                window.open("https://github.com/Colvet/CodeStates_TIL")
              }
            >
              https://github.com/Colvet/CodeStates_TIL
            </Link>
            <Link
              className="footer__link--address"
              onClick={() => window.open("https://github.com/Colvet")}
            >
              https://github.com/Colvet
            </Link>
          </div>
          <div class="footer__link-items">
            <h2>Blockchain</h2>
            <Link className="footer__link--name">최호철</Link>
            <Link
              className="footer__link--address"
              onClick={() => window.open("https://velog.io/@choihocheol")}
            >
              https://velog.io/@choihocheol
            </Link>
            <Link
              className="footer__link--address"
              onClick={() => window.open("https://github.com/choihocheol")}
            >
              https://github.com/choihocheol
            </Link>
          </div>
        </div>
      </div>
      <section class="footer__social-media">
        <div class="footer__social-media-wrap">
          <div class="footer__footer-logo">
            <Link className="footer__social-logo">3Donate</Link>
          </div>
          <small class="footer__website-rights">3Donate © 2022</small>
          <div class="footer__social-icons">
            <Link
              class="footer__social-icon-link facebook"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="footer__social-icon-link instagram"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link class="footer__social-icon-link youtube" aria-label="Youtube">
              <i class="fab fa-youtube" />
            </Link>
            <Link class="footer__social-icon-link twitter" aria-label="Twitter">
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="footer__social-icon-link twitter"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
