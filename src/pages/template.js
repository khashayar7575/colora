import { Container } from "@chakra-ui/react";
import bgHome from "../images/background.png";
import Layout from "../layout/layout";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import templateData from "../data/templateData";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

const TempalteComp = () => {
  const [copied, setCopied] = useState(false);

  const changeTxt = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 700);
  };

  return (
    <Container
      maxW="container.3xl"
      h="auto"
      backgroundImage={bgHome}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Layout>
        <Flex alignItems="center" w="100%" flexDir="column">
          <Heading mt="14"  fontSize={["21px", "33px", "38px", "38px", "38px "]} color="#5C5A5E">
            Template palette
          </Heading>
          <Text mt="2" color="#797979" fontSize={["14px", "17px", "18px", "18px", "19px "]}>
            Template palette for your better choice
          </Text>
          <Flex
            w="100%"
            flexWrap="wrap"
            justifyContent="space-evenly"
            mb="20"
          >
            {templateData.map((t) => {
              return (
                <Flex
                key={t.id}
                  flexDir="column"
                  w="491px"
                  h={["340px","368px","368px","368px","368px"]}
                  rounded="10"
                  overflow="hidden"
                  m={["0","10","10","10","10"]}
                  mt="20"

                >
                  <Image w="full" h="301px" objectFit="cover" src={t.img} />
                  <Flex w="full" h={["20","20","100%","100%","100%"]}>
                    <Flex
                      flex={1}
                      bg={t.one}
                      justifyContent="center"
                      alignItems="flex-end"
                      className="box"
                    >
                      <CopyToClipboard text={t.one}>
                        <Text
                          w="100%"
                          textAlign="center"
                          color="#fff"
                          bg="#3a3a3a80"
                          onClick={changeTxt}
                          className="code"
                          fontSize="13px"
                          p="1"
                        >
                          {copied ? "copied" : t.one}
                        </Text>
                      </CopyToClipboard>
                    </Flex>
                    <Flex
                      flex={1}
                      bg={t.two}
                      justifyContent="center"
                      alignItems="flex-end"
                      className="box"
                    >
                      <CopyToClipboard text={t.two}>
                        <Text
                          w="100%"
                          textAlign="center"
                          color="#fff"
                          bg="#3a3a3a80"
                          onClick={changeTxt}
                          className="code"
                          p="1"
                          fontSize="13px"
                        >
                          {copied ? "copied" : t.two}
                        </Text>
                      </CopyToClipboard>
                    </Flex>
                    <Flex
                      flex={1}
                      bg={t.three}
                      justifyContent="center"
                      alignItems="flex-end"
                      className="box"
                    >
                      <CopyToClipboard text={t.three}>
                        <Text
                          w="100%"
                          textAlign="center"
                          color="#fff"
                          bg="#3a3a3a80"
                          onClick={changeTxt}
                          className="code"
                          p="1"
                          fontSize="13px"
                        >
                          {copied ? "copied" : t.three}
                        </Text>
                      </CopyToClipboard>
                    </Flex>
                    <Flex
                      flex={1}
                      bg={t.four}
                      justifyContent="center"
                      alignItems="flex-end"
                      className="box"
                    >
                      <CopyToClipboard text={t.four}>
                        <Text
                          w="100%"
                          textAlign="center"
                          color="#fff"
                          bg="#3a3a3a80"
                          onClick={changeTxt}
                          className="code"
                          p="1"
                          fontSize="13px"
                        >
                          {copied ? "copied" : t.four}
                        </Text>
                      </CopyToClipboard>
                    </Flex>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Layout>
    </Container>
  );
};

export default TempalteComp;
