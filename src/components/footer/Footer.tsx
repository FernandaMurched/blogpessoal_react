import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Fernanda Murched | Copyright {data}
          </p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://github.com/FernandaMurched" target="_blank">
              <GithubLogoIcon size={48} weight="regular" />
            </a>
            <a href="https://www.linkedin.com/in/fernandamurched/" target="_blank">
              <LinkedinLogoIcon size={48} weight="regular" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
