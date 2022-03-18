import React from "react";
import { Animated, Easing } from "react-native";
import {
  Center,
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
} from "native-base";
import NextLink from "next/link";

// Start editing here, save and see your changes.
export default function App() {
  const [rotationDeg, setRotationDeg] = React.useState("400");
  const [showModal, setShowModal] = React.useState(false);
  const [luckyColor, setLuckyColor] = React.useState("");
  let rotateValueHolder = new Animated.Value(0);
  const getColorMessage = (color) => {
    switch (color) {
      case "info":
        return "It conveys integrity and deep sincerity. It reflects great devotion, wisdom and justice along with fairness and impartiality.";
      case "green":
        return "It symbolizes life, fertility, renewal, and resurrection.";
      case "blue":
        return "It calls to mind feelings of calmness or serenity. It is often described as peaceful, tranquil, secure, and orderly.";
      case "yellow":
        return "It symbolizes happiness and good health. The color is also known to depict knowledge, learning, and peace and joy.";
      case "orange":
        return "It is associated with joy, sunshine, and the tropics, and represents enthusiasm, fascination, happiness, creativity, and determination.";
      case "pink":
        return "It is associated with love, kindness, and femininity.";
      case "violet":
        return "It symbolizes innocence, everlasting love, modesty, spiritual wisdom, faithfulness, mysticism, and remembrance.";
      case "rose":
        return "It symbolizes gratitude, grace, and joy.";
      default:
        return "You are lucky";
    }
  };
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      setShowModal(true);
      setLuckyColor(colorPalette[Math.floor((rotationDeg % 360) / 45)]);
    });
  };

  let rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", rotationDeg + "deg"],
  });

  const isInitialMount = React.useRef(true);
  const colorPalette = [
    "orange",
    "green",
    "pink",
    "yellow",
    "rose",
    "info",
    "blue",
    "violet",
  ];
  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      startImageRotateFunction();
    }
  }, [rotationDeg]);
  return (
    <Center flex={1} bg="muted.900" overflow="hidden" position="relative">
      <Box
        position="absolute"
        bottom="0"
        top="0"
        right="0"
        left="0"
        flex="1"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        zIndex={-1}
      >
        <ZStack justifyContent="center" alignItems="center">
          <Circle bg="#120E0E" size={{ base: "700px", md: "1200px" }} />
          <Circle bg="black" size={{ base: "550px", md: "800px" }} />
        </ZStack>
      </Box>
      <VStack space="8" alignItems="center">
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
          color="warmGray.100"
        >
          FIND YOUR COLOR FOR THIS HOLI
        </Heading>
        <ZStack
          // bg="red.300"
          w="100%"
          justifyContent="center"
          alignItems="center"
          h={["400", "500"]}
        >
          <Box>
            <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
              <AspectRatio ratio={1} w={{ base: "400", md: "650" }}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: "/images/SpinnerBoard.png",
                  }}
                />
              </AspectRatio>
            </Animated.View>
          </Box>
          <AspectRatio
            ratio={1}
            w={{ base: "100", md: "150" }}
            mt={["-8", "-8"]}
          >
            <Image
              resizeMode="contain"
              source={{
                uri: "/images/SpinTop.png",
              }}
            />
          </AspectRatio>
        </ZStack>
        <Button
          onPress={() => {
            setRotationDeg(getRandomNumber(400, 1600).toString());
          }}
          variant="unstyled"
          borderWidth={1}
          borderColor="warmGray.100"
          w="140"
          _text={{ color: "warmGray.100" }}
        >
          SPIN THE WHEEL
        </Button>
      </VStack>
      <Modal isOpen={showModal} onClose={setShowModal}>
        <Modal.Content bg="muted.900">
          <Modal.CloseButton />
          <Modal.Body alignItems="center" px="8" py="6">
            <Box rounded={16} bg={`${luckyColor}.500`} size="32"></Box>
            <Heading my="3" color="muted.100">
              {luckyColor.charAt(0).toUpperCase() + luckyColor.slice(1)} !!!!!
            </Heading>
            <Text mb="4" textAlign="center" fontSize="md" color="muted.100">
              {getColorMessage(luckyColor)}
            </Text>
            <NextLink href={`/template/${luckyColor}`} passHref>
              <Button px="8" colorScheme={luckyColor}>
                Claim Gift
              </Button>
            </NextLink>{" "}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
