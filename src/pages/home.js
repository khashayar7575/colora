import { Container } from "@chakra-ui/react";
import HeaderContent from "../components/headerContent/headerContent";
import NavHeader from "../components/navHeader/naveHeader";
import bgHome from "../images/home.png";

const Home = () => {
  return (
    <Container
    h="100vh"
      maxW="container.3xl"
      backgroundImage={bgHome}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <NavHeader />
      <HeaderContent />
    </Container>
  );
};

export default Home;
