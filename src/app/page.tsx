"use client";

import {
    Columns,
    Column,
    Container,
    Hero,
    Section,
    Text,
    Title, Link, Image, Card, CardImage, CardContent
} from '@trilogy-ds/react';

export default function Page() {
    return (
        <>
            <Section>
                <Hero backgroundColor={'MAIN'}>
                    <Container>
                        <Title level={2} inverted>Direction Digital</Title>
                        <Text inverted>Test technique d&apos;intégration avec Trilogy</Text>
                    </Container>
                </Hero>
            </Section>
            <Section>
                <Container>
                    <Columns verticalAlign={"ALIGNED_CENTER"}>
                        <Column>
                            <Title level={1}>Integration responsive</Title>
                            <Text>Le but sera d’intégrer une page typique de notre périmètre, en utilisant Trilogy en React, tout en partant d’une maquette <Link blank href="https://www.figma.com/design/HkCMBbeZjWXqmlYdkcO59G/Test-integration?node-id=0-1&t=CNt4mofwjJhJ6W4b-1">Figma</Link></Text>
                             <Text>L'accès à la documentation Trilogy, c'est <Link blank href="https://design.bouyguestelecom.fr/getting-started">par ici</Link>.</Text>
                        </Column>
                        <Column>
                            <Image alt={"version mobile"} src="/screen-mobile.png" height={500} align={"ALIGNED_CENTER"} />
                        </Column>
                        <Column>
                            <Image alt={"version responsive"} src="/screen-desktop.png" align={"ALIGNED_CENTER"} />
                        </Column>
                    </Columns>
                </Container>
            </Section>
            <Section backgroundColor={"INFO"}>
                <Container>
                    <Title level={2} inverted>Quelques consignes</Title>
                    <Columns>
                        <Column>
                            <Card fullheight>
                                <CardImage alt={""} src="/consigne-2.png" />
                                <CardContent>
                                    <Title level={4}>Préparation et mise à disposition du code</Title>
                                    <Text level={1}>Créer un fork de <Link blank href="https://github.com/jvenerosy/bt-digital-test-technique">ce repo</Link> et pousser le sur un github public</Text>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column>
                            <Card fullheight>
                                <CardImage alt={""} src="/consigne-1.png" />
                                <CardContent>
                                    <Title level={4}>Header/Footer</Title>
                                    <Text level={1}>Pas besoin d’intégrer le header et le footer sur la page</Text>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column>
                            <Card fullheight>
                                <CardImage alt={""} src="/consigne-3.png" />
                                <CardContent>
                                    <Title level={4}>Questions ?</Title>
                                    <Text level={1}>N’hésitez pas à poser des questions en cas de blocages ou consignes pas/mal comprises, c’est aussi une qualité recherchée 😊</Text>
                                </CardContent>
                            </Card>
                        </Column>
                    </Columns>
                </Container>
            </Section>
            <Section>
                <Container className={"has-text-centered"}>
                    <Title level={1}>Merci...</Title>
                    <Text>...et bon courage</Text>
                </Container>
            </Section>
        </>
    );
}
