import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import Icon from "../Icon";
import LogoFooter from "../../assets/logo-footer.png";
import Bullets from "../../assets/bullets.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-12 bg-dark-blue-jokr'>
      <Wrapper>
        <div className='flex flex-col justify-between md:flex-row gap-9'>
          <div className='flex items-center justify-center gap-2 '>
            <div>
              <img
                className='w-24 img-fluid'
                src={LogoFooter}
                alt='logo footer'
              />
            </div>
            <div>
              <p className='text-base text-grey-jokr'>JOKR Perú SAC</p>
              <p className='text-base text-grey-jokr'>
                {" "}
                Av. Hipólito Unanue 251
              </p>
              <p className='text-base text-grey-jokr'>Miraflores - Lima</p>
            </div>
          </div>
          <div className='text-center '>
            <img className='w-142' src={Bullets} alt='Bullets' />
          </div>
        </div>

        <div className='p-3 text-center md:mt-20 md:text-left'>
          <Link
            className='text-lg underline cursor-pointer text-grey-jokr'
            to={"/campanas-promocionales"}
          >
            Campañas promocionales
          </Link>
        </div>
        <div className='p-3 text-center md:text-left'>
          <Link
            className='text-lg underline cursor-pointer text-grey-jokr'
            to={"/terminos-y-condiciones"}
          >
            Términos y condiciones
          </Link>
        </div>
        <div className='p-3 text-center md:text-left'>
          <Link
            className='text-lg underline cursor-pointer text-grey-jokr'
            to={"/politicas-de-privacidad"}
          >
            Política de privacidad
          </Link>
        </div>

        <div className='flex items-center justify-center gap-3 p-3 md:justify-start'>
          <Link
            rel='noopener noreferrer'
            to='https://www.facebook.com/jokrperu'
            target='_blank'
          >
            <Icon nameIcon={"facebook"} />
          </Link>
          <Link
            rel='noopener noreferrer'
            to='https://www.instagram.com/jokrperu/'
            target='_blank'
          >
            <Icon nameIcon={"instagram"} />
          </Link>
          <Link
            rel='noopener noreferrer'
            to='https://www.linkedin.com/company/jokr/'
            target='_blank'
          >
            <Icon nameIcon={"linked-in"} />
          </Link>
        </div>

        <div className='flex flex-col items-center justify-between gap-12 p-3 text-center md:text-left md:flex-row md:gap-0'>
          <p className='text-lg cursor-pointer text-grey-jokr'>@jokrperu</p>
          <p className='text-xs cursor-pointer text-grey-jokr'>
            © {currentYear} by JOKR SAC
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
