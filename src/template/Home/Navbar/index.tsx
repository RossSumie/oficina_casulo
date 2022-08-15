import Link from 'next/link';
import { useRouter } from 'next/router';
import useWindowSize from 'hooks/useWindowSize';
import { Drawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';

import * as S from './styles';

const Navbar = () => {
    const router = useRouter();
    const size = useWindowSize();
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    return (
        <>
            {!!size.width && size.width < 900 ? (
                <S.Container>
                    <IconButton onClick={toggleDrawer}>
                        <MenuIcon fontSize="large" htmlColor="#FFFFFF" />
                    </IconButton>
                    <Drawer anchor="top" open={drawer}>
                        <S.DrawerHeader>
                            <IconButton onClick={toggleDrawer}>
                                <ExitIcon
                                    fontSize="large"
                                    htmlColor="#1D1D1B"
                                />
                            </IconButton>
                        </S.DrawerHeader>
                        <S.DrawerWrapper>
                            <Link href="/cronograma">
                                <S.NavText>CRONOGRAMA</S.NavText>
                            </Link>
                            <Link href="/">
                                <S.NavText>HOME</S.NavText>
                            </Link>
                        </S.DrawerWrapper>
                    </Drawer>
                    <S.LogoContainer>
                        <S.Logo src="/images/LogoPN.png" />
                        <S.Logo src="/images/LogoPP.png" />
                        <S.Logo src="/images/LogoPJ.png" />
                    </S.LogoContainer>
                    <S.Button
                        onClick={() => {
                            router.push('https://forms.gle/qNg5waZNEzutDYLQ9');
                        }}
                    >
                        INSCREVA-SE
                    </S.Button>
                </S.Container>
            ) : (
                <S.Container>
                    <S.LogoContainer>
                        <S.Logo src="/images/LogoPN.png" />
                        <S.Logo src="/images/LogoPP.png" />
                        <S.Logo src="/images/LogoPJ.png" />
                    </S.LogoContainer>
                    <S.ItemContainer>
                        <Link href="/cronograma">
                            <S.NavText>CRONOGRAMA</S.NavText>
                        </Link>
                        <Link href="/">
                            <S.NavText>HOME</S.NavText>
                        </Link>
                    </S.ItemContainer>
                    <S.Button
                        onClick={() => {
                            router.push('https://forms.gle/qNg5waZNEzutDYLQ9');
                        }}
                    >
                        INSCREVA-SE
                    </S.Button>
                </S.Container>
            )}
        </>
    );
};
export default Navbar;
