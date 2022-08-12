import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

const Navbar = () => {
    const router = useRouter();
    return (
        <S.Container>
            <S.LogoContainer>
                <S.Logo src="/images/LogoPN.png" />
                <S.Logo src="/images/LogoPP.png" />
                <S.Logo src="/images/LogoPJ.png" />
            </S.LogoContainer>
            <Link href="/x">
                <S.NavText>CRONOGRAMA</S.NavText>
            </Link>
            <S.Button
                onClick={() => {
                    router.push('https://forms.gle/qNg5waZNEzutDYLQ9');
                }}
            >
                INSCREVA-SE
            </S.Button>
        </S.Container>
    );
};
export default Navbar;
