import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="rodape">
      <a className="rodape__marca" href="#topo">
        <Logo className="rodape__logo" />
        <span className="t3">Estante — {new Date().getFullYear()}</span>
      </a>
      <a className="lnk" href="#topo">
        voltar ao topo ↑
      </a>
    </footer>
  );
}
