import { useRouter } from 'next/router';
import * as S from './styles';

const DescriptionSectionTemplate = () => {
    const router = useRouter();
    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>Participe da primeira OFICINA CASULO!</S.Title>
                <S.Text>
                    A Oficina Casulo é uma semana de oficinas de capacitação
                    técnica gratuita organizada pela PoliJúnior, PoliNegra e
                    PoliPride dedicada à pessoas LGBTQIA+ e pessoas negras* que
                    estudam na Escola Politécnica.
                </S.Text>
                <S.Button
                    onClick={() => {
                        router.push('https://forms.gle/qNg5waZNEzutDYLQ9');
                    }}
                >
                    PARTICIPE!
                </S.Button>
            </S.Container>
        </S.Wrapper>
    );
};
export default DescriptionSectionTemplate;
