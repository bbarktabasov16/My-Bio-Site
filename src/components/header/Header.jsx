import "./style.css";

const Header = () => {
  return (
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>
                    Привет, Меня зовут <em>Bekzat</em>
                </strong>
                <br />
                Frontend Developer
            </h1>
            <div className="header__text">
                <p>
                    "Преображай идеи в виртуальные реальности, код — мой меч, а веб —
                    моя арена. Добро пожаловать в мой мир создания интерактивных
                    впечатлений."
                </p>
            </div>
            <a href="#!" className="btn">
                Download CV
            </a>
        </div>
    </header>
  );
};

export default Header;
