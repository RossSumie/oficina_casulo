import Navbar from 'template/Home/Navbar';
import useWindowSize from 'hooks/useWindowSize';
import * as S from './styles';

const ScheduleTemplate = () => {
    const size = useWindowSize();

    return (
        <S.Wrapper>
            <Navbar />
            {!!size.width && size.width > 900 ? (
                <S.Container>
                    <S.LineGridContainer>
                        <S.Text> </S.Text>
                        <S.GridItem>
                            <S.Text>22/08</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>23/08</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>24/08</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>25/08</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>EscritórioPiloto</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Gestão e Criação de Negócios</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Gestão e Criação de Negócios</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>DEV WEB</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>DEV WEB</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>Sede da PoliJúnior</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Analytics</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Analytics</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Arquitetônico</S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Arquitetônico</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>EscritórioPiloto</S.Text>
                            <S.Subtext>19h ~ 20h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text> </S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Roda de Conversa</S.Text>
                            <S.Subtext>
                                sobre minorias no mercado de trabalho
                            </S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text> </S.Text>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Roda de Conversa</S.Text>
                            <S.Subtext>
                                sobre minorias no mercado de trabalho
                            </S.Subtext>
                        </S.GridItem>
                    </S.LineGridContainer>
                </S.Container>
            ) : (
                <S.Container>
                    <S.Date>22/08</S.Date>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.TextTitle>LOCAL</S.TextTitle>
                        </S.GridItem>
                        <S.GridItem>
                            <S.TextTitle>PORTFOLIO</S.TextTitle>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>EscritórioPiloto</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Gestão e Criação de Negócios</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>Sede da PoliJúnior</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Analytics</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.Date>23/08</S.Date>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.TextTitle>LOCAL</S.TextTitle>
                        </S.GridItem>
                        <S.GridItem>
                            <S.TextTitle>PORTFOLIO</S.TextTitle>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>EscritórioPiloto</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Gestão e Criação de Negócios</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>Sede da PoliJúnior</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Analytics</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>EcritórioPiloto</S.Text>
                            <S.Subtext>19h ~ 20h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Roda de Conversa</S.Text>
                            <S.Subtext>
                                sobre minorias no mercado de trabalho
                            </S.Subtext>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.Date>24/08</S.Date>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.TextTitle>LOCAL</S.TextTitle>
                        </S.GridItem>
                        <S.GridItem>
                            <S.TextTitle>PORTFOLIO</S.TextTitle>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>EscritórioPiloto</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>DEV WEB</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>Sede da PoliJúnior</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Arquitetônico</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.Date>25/08</S.Date>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.TextTitle>LOCAL</S.TextTitle>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>PORTFOLIO</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>EscritórioPiloto</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>DEV WEB</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>Sede da PoliJúnior</S.Text>
                            <S.Subtext>17h ~ 19h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Arquitetônico</S.Text>
                        </S.GridItem>
                    </S.LineGridContainer>
                    <S.LineGridContainer>
                        <S.GridItem>
                            <S.Text>EscritórioPiloto</S.Text>
                            <S.Subtext>19h ~ 20h</S.Subtext>
                        </S.GridItem>
                        <S.GridItem>
                            <S.Text>Roda de Conversa</S.Text>
                            <S.Subtext>
                                sobre minorias no mercado de trabalho
                            </S.Subtext>
                        </S.GridItem>
                    </S.LineGridContainer>
                </S.Container>
            )}
        </S.Wrapper>
    );
};
export default ScheduleTemplate;
