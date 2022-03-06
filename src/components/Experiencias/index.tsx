import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="05 Anos" />

      <section>
        <ExperienciaItem
          year="2022"
          title="Dev Font-end"
          desciption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure"
        />
        <ExperienciaItem
          year="2022"
          title="Dev Font-end"
          desciption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure"
        />
        <ExperienciaItem
          year="2022"
          title="Dev Font-end"
          desciption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure"
        />
        <ExperienciaItem
          year="2022"
          title="Dev Font-end"
          desciption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
