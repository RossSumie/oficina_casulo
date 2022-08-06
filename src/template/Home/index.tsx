import DescriptionSectionTemplate from './DescrptionSection';
import ImageSectionTemplate from './ImageSection';
import Navbar from './Navbar';
import * as S from './styles';
import WorksopSectionTemplate from './WorkshopSection';

const HomeTemplate = () => (
    <S.Wrapper>
        <Navbar />
        <S.Container>
            <S.TextContainer>
                <DescriptionSectionTemplate />
                <WorksopSectionTemplate />
            </S.TextContainer>
            <ImageSectionTemplate />
        </S.Container>
    </S.Wrapper>
);
export default HomeTemplate;
