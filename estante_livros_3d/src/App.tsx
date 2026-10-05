import { useCallback, useEffect, useMemo, useState } from 'react';
import { CollectionsPanel, type VistaPainel } from './components/CollectionsPanel';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LivroSection } from './components/LivroSection';
import { casaBusca, NeonShelf, normalizar } from './components/NeonShelf';
import { SiteNav } from './components/SiteNav';
import { VideoScroll } from './components/VideoScroll';
import { fontesProntas } from './lib/capas';
import { LibraryProvider, useLibrary } from './state/library';

/**
 * Página: nav → hero → livro 3D → estante neon → vídeo em scroll → rodapé.
 * O painel de Coleções abre a partir do nav. Ver design/wireframe.txt.
 */
export function App() {
  return (
    <LibraryProvider>
      <Site />
    </LibraryProvider>
  );
}

type Pedido = { id: string; nonce: number };

function Site() {
  const lib = useLibrary();
  const fontes = useFontesProntas();
  const [painelAberto, setPainelAberto] = useState(false);
  const [vista, setVista] = useState<VistaPainel>({ tipo: 'lista' });
  const [sessao3d, setSessao3d] = useState<string | null>(() => lib.sessoes[0]?.id ?? null);
  const [pedido, setPedido] = useState<Pedido | null>(null);
  const [destaque, setDestaque] = useState<Pedido | null>(null);
  const [busca, setBusca] = useState('');
  const [livroAberto, setLivroAberto] = useState(false);
  const [livroEmVista, setLivroEmVista] = useState(false);
  const descendo = useDescendo();
  const secaoAtiva = useSecaoAtiva(['topo', 'livro', 'estante', 'video']);

  const resultados = useMemo(() => {
    const q = normalizar(busca.trim());
    if (!q) return null;
    const naEstante = new Set(lib.sessoes.flatMap((s) => s.livros));
    return lib.livros.filter((l) => naEstante.has(l.id) && casaBusca(l, q)).length;
  }, [busca, lib.livros, lib.sessoes]);

  const abrirPainel = useCallback((v: VistaPainel = { tipo: 'lista' }) => {
    setVista(v);
    setPainelAberto(true);
  }, []);
  const fecharPainel = useCallback(() => setPainelAberto(false), []);

  const rolarPara = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const abrirEm3D = (livroId: string, sessaoId: string) => {
    setSessao3d(sessaoId);
    setPedido({ id: livroId, nonce: Date.now() });
    rolarPara('livro');
  };

  return (
    <div className="site dark">
      <SiteNav
        oculto={(descendo && !painelAberto) || (livroAberto && livroEmVista)}
        secaoAtiva={secaoAtiva}
        busca={busca}
        resultados={resultados}
        onBusca={setBusca}
        onBuscaEnter={() => {
          const el = document.querySelector('.livro.is-encontrado');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
          else rolarPara('estante');
        }}
        painelAberto={painelAberto}
        totalSessoes={lib.sessoes.length}
        onColecoes={() => (painelAberto ? fecharPainel() : abrirPainel())}
      />

      <main>
        <Hero />
        <LivroSection
          pronto={fontes}
          sessaoId={sessao3d}
          onSessao={setSessao3d}
          pedido={pedido}
          livroAberto={livroAberto}
          onLivroAberto={setLivroAberto}
          onEmVista={setLivroEmVista}
          onVerNaEstante={(id) => setDestaque({ id, nonce: Date.now() })}
          onEditarSessao={(id) => abrirPainel({ tipo: 'sessao', id })}
        />
        <NeonShelf
          busca={busca}
          destaque={destaque}
          onAbrir3D={abrirEm3D}
          onEditarSessao={(id, foco) => abrirPainel({ tipo: 'sessao', id, foco })}
          onNovaSessao={() => abrirPainel({ tipo: 'sessao', id: lib.criarSessao(), foco: 'nome' })}
        />
        <VideoScroll onCta={() => abrirPainel()} />
      </main>

      <Footer />

      <CollectionsPanel
        aberto={painelAberto}
        vista={vista}
        onVista={setVista}
        onFechar={fecharPainel}
        onMostrar3D={(id) => {
          setSessao3d(id);
          fecharPainel();
          window.setTimeout(() => rolarPara('livro'), 60);
        }}
      />
    </div>
  );
}

function useFontesProntas(): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    let vivo = true;
    fontesProntas.then(() => vivo && setOk(true));
    return () => {
      vivo = false;
    };
  }, []);
  return ok;
}

/** true enquanto o usuário rola para baixo (esconde o nav). */
function useDescendo(): boolean {
  const [descendo, setDescendo] = useState(false);
  useEffect(() => {
    let ultimo = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const d = y - ultimo;
      if (y < 160) setDescendo(false);
      else if (d > 8) setDescendo(true);
      else if (d < -8) setDescendo(false);
      if (Math.abs(d) > 8) ultimo = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return descendo;
}

/** Seção sob o meio da tela, para marcar o link ativo do nav. */
function useSecaoAtiva(ids: string[]): string | null {
  const [ativa, setAtiva] = useState<string | null>(null);
  const chave = ids.join(',');
  useEffect(() => {
    const els = chave
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => Boolean(e));
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setAtiva(e.target.id);
      },
      { rootMargin: '-48% 0px -48% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [chave]);
  return ativa;
}
