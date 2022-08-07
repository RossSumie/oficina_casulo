import useWindowSize from 'hooks/useWindowSize';
import * as S from './styles';

const WorksopSectionTemplate = () => {
    const size = useWindowSize();
    return (
        <>
            {!!size.width && size.width > 900 ? (
                <S.Container>
                    <S.LineContainer>
                        <S.IconContainer>
                            <S.Icon src="/images/Group 5.png" />
                            <S.TextContainer>
                                <S.Title>ARQUITETÔNICO</S.Title>
                                <S.Text>
                                    Um workshop básico de capacitação em layout
                                    arquitetônico para uma casa térrea usando
                                    Revit.
                                </S.Text>
                            </S.TextContainer>
                        </S.IconContainer>
                        <S.IconContainer>
                            <S.Icon src="/images/Group 6.png" />
                            <S.TextContainer>
                                <S.Title>ANALYTICS</S.Title>
                                <S.Text>
                                    Um workshop de conceitos básicos de python,
                                    técnicas para análise exploratória de bases
                                    de dados, com identificação de correlações e
                                    delimitação de perfis.
                                </S.Text>
                            </S.TextContainer>
                        </S.IconContainer>
                    </S.LineContainer>
                    <S.LineContainer>
                        <S.IconContainer>
                            <S.Icon src="/images/Group 7.png" />
                            <S.TextContainer>
                                <S.Title>PLANO DE NEGÓCIOS</S.Title>
                                <S.Text>
                                    Um workshop que capacita o participante em
                                    dar um direcionamento para novos negócios,
                                    entendendo próximos passos, custos, nicho de
                                    atuação etc.
                                </S.Text>
                            </S.TextContainer>
                        </S.IconContainer>
                        <S.IconContainer>
                            <S.Icon src="/images/Group 8.png" />
                            <S.TextContainer>
                                <S.Title>DEV WEB</S.Title>
                                <S.Text>
                                    Um workshop básico de capacitação em
                                    front-end dev para plataformas web
                                    utilizando HTML, CSS e JS. Vamos criar um
                                    website!
                                </S.Text>
                            </S.TextContainer>
                        </S.IconContainer>
                    </S.LineContainer>
                </S.Container>
            ) : (
                <S.Container>
                    <S.IconContainer>
                        <S.Icon src="/images/Group 5.png" />
                        <S.TextContainer>
                            <S.Title>ARQUITETÔNICO</S.Title>
                            <S.Text>
                                Um workshop básico de capacitação em layout
                                arquitetônico para uma casa térrea usando Revit.
                            </S.Text>
                        </S.TextContainer>
                    </S.IconContainer>
                    <S.IconContainer>
                        <S.Icon src="/images/Group 6.png" />
                        <S.TextContainer>
                            <S.Title>ANALYTICS</S.Title>
                            <S.Text>
                                Um workshop de conceitos básicos de python,
                                técnicas para análise exploratória de bases de
                                dados, com identificação de correlações e
                                delimitação de perfis.
                            </S.Text>
                        </S.TextContainer>
                    </S.IconContainer>
                    <S.IconContainer>
                        <S.Icon src="/images/Group 7.png" />
                        <S.TextContainer>
                            <S.Title>PLANO DE NEGÓCIOS</S.Title>
                            <S.Text>
                                Um workshop que capacita o participante em dar
                                um direcionamento para novos negócios,
                                entendendo próximos passos, custos, nicho de
                                atuação etc.
                            </S.Text>
                        </S.TextContainer>
                    </S.IconContainer>
                    <S.IconContainer>
                        <S.Icon src="/images/Group 8.png" />
                        <S.TextContainer>
                            <S.Title>DEV WEB</S.Title>
                            <S.Text>
                                Um workshop básico de capacitação em front-end
                                dev para plataformas web utilizando HTML, CSS e
                                JS. Vamos criar um website!
                            </S.Text>
                        </S.TextContainer>
                    </S.IconContainer>
                </S.Container>
            )}
        </>
    );
};
export default WorksopSectionTemplate;
