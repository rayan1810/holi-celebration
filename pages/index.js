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
} from "native-base";

// Start editing here, save and see your changes.
export default function App() {
  const [rotationDeg, setRotationDeg] = React.useState("400");
  const [showModal, setShowModal] = React.useState(false);
  const [luckyColor, setLuckyColor] = React.useState("");
  let rotateValueHolder = new Animated.Value(0);
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const startImageRotateFunction = () => {
    console.log(rotationDeg);
    // setRotationDeg(getRandomNumber(400, 1600).toString());
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
      console.log(Math.floor((rotationDeg % 360) / 45));
      console.log(colorPalette[Math.floor((rotationDeg % 360) / 45)]);
    }
  }, [rotationDeg]);
  return (
    <Center flex={1} bg="muted.900" position="relative">
      {/* <AspectRatio h="100%" w="100%"> */}
      {/* <Image
        h="100%"
        w="100%"
        resizeMode="cover"
        source={{
          uri: "https://images.unsplash.com/photo-1478088702756-f16754aaf0c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
      /> */}
      {/* </AspectRatio> */}
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
          <Circle bg="#120E0E" size="1200px" />
          <Circle bg="black" size="600px" />
        </ZStack>
      </Box>
      <VStack space="8" alignItems="center">
        <Heading fontSize="40px" color="warmGray.100">
          FIND YOUR COLOR FOR THIS HOLI
        </Heading>
        <ZStack justifyContent="center" alignItems="center" size="500">
          <Box>
            <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
              <AspectRatio ratio={1} w="650">
                <Image
                  resizeMode="cover"
                  source={{
                    uri: "/images/SpinnerBoard.png",
                  }}
                />
              </AspectRatio>
            </Animated.View>
          </Box>
          <AspectRatio ratio={1} w="150" mt="-8">
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
        <Modal.Content>
          <Modal.CloseButton />
          {/* <Modal.Header>Your Color for this Holi is </Modal.Header> */}
          <Modal.Body bg="muted.900" px="8" py="6">
            <Text color="warmGray.100" fontSize="lg" mr="6">
              Yay! Your Color for this Holi is...
            </Text>
            <HStack
              my="8"
              space="8"
              alignItems={"center"}
              justifyContent="center"
            >
              <Box rounded={16} bg={`${luckyColor}.500`} size="20"></Box>
              <Heading color="muted.100">
                {luckyColor.charAt(0).toUpperCase() + luckyColor.slice(1)} 🎉
              </Heading>
            </HStack>
            <Text color="muted.100">
              Checkout what we have for you as a Gift <Link>here</Link>
            </Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
