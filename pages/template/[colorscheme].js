import React from "react";
import {
  Center,
  Image,
  HStack,
  Text,
  Heading,
  Link,
  Box,
  Button,
  AspectRatio,
  ZStack,
  Circle,
  VStack,
  theme as nbTheme,
  extendTheme,
  NativeBaseProvider,
  Divider,
  Stack,
} from "native-base";

// Start editing here, save and see your changes.
export default function App({ primaryColor }) {
  const theme = extendTheme({
    colors: {
      primary: nbTheme.colors[primaryColor],
    },
  });
  return (
    <NativeBaseProvider isSSR theme={theme}>
      <Center
        justifyContent="flex-start"
        w="100%"
        flex={1}
        bg="primary.50"
        overflow="hidden"
        px={{ base: "8", lg: "0" }}
      >
        <HStack
          my="8"
          bg="primary.400"
          px="10"
          py="4"
          rounded="8"
          space={{ base: "3", lg: "8" }}
          divider={<Divider thickness={2} />}
        >
          <Link
            _text={{ color: "white", fontWeight: "bold" }}
            isUnderlined={false}
          >
            Ghar
          </Link>
          <Link
            _text={{ color: "white", fontWeight: "bold" }}
            isUnderlined={false}
          >
            bakwas
          </Link>
          <Link
            _text={{ color: "white", fontWeight: "bold" }}
            isUnderlined={false}
          >
            aur bakwas
          </Link>
        </HStack>
        <VStack
          mt={{ base: "16", lg: "32" }}
          space="8"
          alignItems="center"
          // px={{ base: "8", lg: "0" }}
        >
          <HStack w="100%" space={{ base: "0", lg: "16" }}>
            <VStack space="8" flex="1" flexWrap="wrap">
              <Heading color="black" fontSize="60">
                Let’s celebrate this{" "}
                <Heading fontSize="60" color="primary.700">
                  Holi Responsibly
                </Heading>
              </Heading>
              <Text fontSize="lg" flexWrap="wrap">
                Disclaimer : This is just a fun template. If you take it
                seriously it’s all upto you. The authors are not responsible for
                your actions
              </Text>
              <Link
                href="https://drive.google.com/file/d/1-2c1eGK8lmenwDXOYyMOz8rey0mrB3gN/view?usp=sharing"
                isExternal
              >
                <Button
                  size="lg"
                  px="8"
                  py="3"
                  rounded="25"
                  alignSelf="flex-start"
                  _text={{ color: "white" }}
                >
                  Download
                </Button>
              </Link>
            </VStack>
            <Box display={{ base: "none", lg: "flex" }} mb="-8" flex="1">
              <ZStack flex="1" justifyContent="flex-end">
                <Circle size="450" bg="primary.500" />
                <AspectRatio mb="-12" w="480">
                  <Image
                    resizeMode="contain"
                    source={{
                      uri: "/images/holi-two-girls.png",
                    }}
                  />
                </AspectRatio>
              </ZStack>
            </Box>
          </HStack>
          <Heading color="primary.700" mt="24">
            SPREAD THE LOVE
          </Heading>
          <Heading textAlign="center" size="xl">
            How to enjoy Holi the right way!
          </Heading>
          <Stack
            direction={{ base: "column", lg: "row" }}
            space="8"
            w="100%"
            justifyContent="space-between"
          >
            <Box rounded="12" alignItems="center" bg="primary.200" p="8">
              <AspectRatio w="250">
                <Image
                  resizeMode="contain"
                  source={{
                    uri: "/images/sickleave.png",
                  }}
                />
              </AspectRatio>
              <Text bold fontSize="lg" mt="4">
                Apply for sick leave
              </Text>
            </Box>
            <Box rounded="12" alignItems="center" bg="primary.200" p="8">
              <AspectRatio w="250">
                <Image
                  resizeMode="contain"
                  source={{
                    uri: "/images/legal.png",
                  }}
                />
              </AspectRatio>
              <Text bold fontSize="lg" mt="4">
                Legally enjoy 🌿
              </Text>
            </Box>
            <Box rounded="12" alignItems="center" bg="primary.200" p="8">
              <AspectRatio w="250">
                <Image
                  resizeMode="contain"
                  source={{
                    uri: "/images/byebyediet.png",
                  }}
                />
              </AspectRatio>
              <Text bold fontSize="lg" mt="4">
                Forget diet goals
              </Text>
            </Box>
          </Stack>
          <Stack
            direction={{ base: "column", lg: "row" }}
            w="100%"
            bg="white"
            px="16"
            py="8"
            my="16"
            rounded="16"
            alignItems="center"
            justifyContent="center"
          >
            <Heading size="xl" flex="3">
              Tell us what do you think about whatever this is XD
            </Heading>
            <Center mt={{ base: "8", lg: "0" }} flex="2">
              <Link
                href="https://xoslotzayku.typeform.com/to/IZbl1rOS"
                isExternal
              >
                <Button
                  size="lg"
                  px="8"
                  py="3"
                  rounded="25"
                  _text={{ color: "white" }}
                >
                  batao bhai!
                </Button>
              </Link>
            </Center>
          </Stack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { primaryColor: context.params.colorscheme }, // will be passed to the page component as props
  };
}
