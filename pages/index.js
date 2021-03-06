import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
  Icon,
  List,
  ListItem,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoMedium,
  IoMail,
} from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I'm software developer from Turkey.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Oğuzhan Sofuoğlu
            </Heading>
            <p> Software Developer ( JavaScript | React | .NET )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/oguzhan-pp.jpg"
              alt="ProfilePic"
            />
          </Box>
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Who am I?
          </Heading>
          <Paragraph>
            Oğuzhan graduated from the Civil Engineering department of Yıldız
            Technical University in 2018. After that, He worked in various
            companies and positions in this field for almost 3 years and
            successfully complete all responsibilities Then he decided to follow
            his passion that software development especially the front-end side.
            Therefore, he still working to improve Front-End Skills such as
            Javascript, React, CSS. Keywords to describe him are
            deep-researcher, curious and positive energy-bomb. He will always
            try to reach his dreams.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <BioSection>
            <BioYear>2021 to Present</BioYear>
            Working on software development
          </BioSection>
          <Divider my={1} />
          <BioSection>
            <BioYear>2021</BioYear>
            Patika.dev & Çiçeksepeti React Bootcamp Student
          </BioSection>
          <Divider my={1} />
          <BioSection>
            <BioYear>2021</BioYear>
            BilgeAdam Boost Fullstack Bootcamp Student
          </BioSection>
          <Divider my={1} />
          <BioSection>
            <BioYear>2018-2021</BioYear>
            Worked as civil engineer at various companies
          </BioSection>
          <Divider my={1} />
          <BioSection>
            <BioYear>2018</BioYear>
            Graduate from Yıldız Technical University Civil Engineering
          </BioSection>
          <Divider my={1} />
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Rize, Turkey
          </BioSection>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            <Link href="#"> Music, </Link>
            <Link href="#"> Cycling, </Link>
            <Link href="#"> Cinema, </Link>
            Swimming and Art (especially visual art)
          </Paragraph>
        </Section>
        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Social Media & Contact
          </Heading>
          <SimpleGrid columns={{ sm: 2 }} gap={1}>
            <GridItem>
              <Link href="https://www.github.com/ogzhnsfgl" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Ogzhnsfgl
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href="mailto://o.sofuoglu@yahoo.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  o.sofuoglu@yahoo.com
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                href="https://www.linkedin.com/in/oguzhan-sofuoglu/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Oguzhan Sofuoglu
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href="https://o-sofuoglu.medium.com/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoMedium} />}
                >
                  Oguzhan Sofuoglu
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href="https://www.twitter.com/ogzhnn_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @Ogzhnsfgl
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href="https://www.instagram.com/ogzhnsfgl" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @Ogzhnsfgl
                </Button>
              </Link>
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
