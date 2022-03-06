import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  desciption: string;
}

export default function ExperienciaItem({
  year,
  title,
  desciption
}: ExperienciaProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{desciption}</p>
      </div>
    </ItemContainer>
  );
}
