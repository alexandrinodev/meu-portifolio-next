import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title=" Últimos Projetos" />

      <section>
        <ProjetoItem
          title="# Projeto 01"
          type="- Website"
          slug="/projetos"
          img='"https://oander.site/img/dev17.webp"'
        />
        <ProjetoItem
          title="# Projeto 02"
          type="- Website"
          slug="/projetos"
          img="https://www.projetowebsite.com.br/template/images/criacao/criacao-de-site-padrao.jpg"
        />
        <ProjetoItem
          title="# Projeto 03"
          type="- Website"
          slug="/projetos"
          img="https://valeriodesign.com.br/img/projetos/projeto-07.jpg"
        />
        <ProjetoItem
          title="# Projeto 04"
          type="- Website"
          slug="/projetos"
          img="https://www.projetowebsite.com.br/template/images/index/site-padrao.jpg"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
