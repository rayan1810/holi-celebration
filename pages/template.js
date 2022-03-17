import React from "react";
import { Animated, Easing } from "react-native";
import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Modal,
  Link,
  Box,
  Button,
  AspectRatio,
  ZStack,
  Circle,
  VStack,
  useTheme,
  extendTheme,
  NativeBaseProvider,
  Divider,
} from "native-base";

// Start editing here, save and see your changes.
export default function App() {
  const nbTheme = useTheme();
  const theme = extendTheme({
    colors: {
      primary: nbTheme.colors["violet"],
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Center justifyContent="flex-start" flex={1} bg="primary.50">
        <HStack
          my="8"
          bg="primary.400"
          px="10"
          py="4"
          rounded="8"
          space="8"
          divider={<Divider thickness={2} />}
        >
          <Link
            _text={{ color: "warmGray.100", fontWeight: "bold" }}
            isUnderlined={false}
          >
            Ghar
          </Link>
          <Link
            _text={{ color: "warmGray.100", fontWeight: "bold" }}
            isUnderlined={false}
          >
            bakwas
          </Link>
          <Link
            _text={{ color: "warmGray.100", fontWeight: "bold" }}
            isUnderlined={false}
          >
            aur bakwas
          </Link>
        </HStack>
        <VStack mt="16" space="8" alignItems="center">
          <HStack space="16">
            <VStack space="8" flex="1">
              <Heading color="black" fontSize="60">
                Let’s celebrate this{" "}
                <Heading fontSize="60" color="primary.700">
                  Holi Responsibly
                </Heading>
              </Heading>
              <Text fontSize="lg">
                Disclaimer : This is just a fun template. If you take it
                seriously it’s all upto you. The authors are not responsible for
                your actions
              </Text>
              <Button px="8" rounded="25" alignSelf="flex-start">
                Download
              </Button>
            </VStack>
            <Box flex="1">
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
          <Heading>SPREAD THE LOVE</Heading>
          <Heading>How to enjoy Holi the right way!</Heading>
          <HStack w="100%" justifyContent="space-between">
            <Box rounded="12" alignItems="center" bg="primary.200" p="8">
              <AspectRatio w="200">
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
              <AspectRatio w="200">
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
              <AspectRatio w="200">
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
          </HStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
