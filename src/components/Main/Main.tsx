import * as S from './Main.styles'

const Main = ({ title = 'React Avancado', description = 'Hello there!' }) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.Wrapper>
)

export default Main
