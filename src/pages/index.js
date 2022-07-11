import Link from 'next/link';
import Wrapper from '../atoms/Wrapper';
import MainTitle from '../atoms/MainTitle';

export default function Home() {
    return (
        <Wrapper gridColumn={1} style={{height: '100vh'}}>
            <MainTitle>
              “This is grain, which any fool can eat, but for which the lord has intended a more divine form of consumption. Let us give praise to our maker and glory to His bounty by learning about beer.”
            </MainTitle>
            <Link href='/beers'>Go to all our beers</Link>
        </Wrapper>
    )
}
