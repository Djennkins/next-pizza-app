import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
            </Container>
            <TopBar />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    {/* Filtration*/}
                    <div className="w-[250px]">
                        <Filters></Filters>
                    </div>
                    {/* List Of Products*/}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16"></div>
                    </div>
                </div>
            </Container>
        </>
    );
}
