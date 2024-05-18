import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box as="header" textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Food Lab
          </Heading>
          <Text fontSize="xl">Innovating the Future of Food</Text>
        </Box>

        {/* Hero Section */}
        <Box as="section" textAlign="center">
          <Image src="https://images.unsplash.com/photo-1475906089153-644d9452ce87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb29kJTIwaW5ub3ZhdGlvbnxlbnwwfHx8fDE3MTYwMjEyNDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food Innovation" borderRadius="md" mb={4} />
          <Text fontSize="lg" mb={4}>
            At Food Lab, we are dedicated to creating sustainable and delicious food solutions for the future. Join us on our journey to revolutionize the food industry.
          </Text>
          <Button colorScheme="teal" size="lg">
            Learn More
          </Button>
        </Box>

        {/* About Section */}
        <Box as="section" py={10}>
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            About Us
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={4}>
            Food Lab is a cutting-edge research facility focused on developing innovative food products that are both nutritious and environmentally friendly. Our team of experts is passionate about making a positive impact on the world through food science.
          </Text>
          <HStack spacing={4} justify="center">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="https://images.unsplash.com/34/rcaNUh3pQ9GD8w7Iy8qE__DSC0940.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzE2MDIxMjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food Research" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Research
              </Heading>
              <Text>Our research team is constantly exploring new ways to improve food quality and sustainability.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzE2MDIxMjQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food Development" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Development
              </Heading>
              <Text>We develop innovative food products that meet the needs of a growing population.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="https://images.unsplash.com/photo-1584473457406-6240486418e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb29kJTIwc3VzdGFpbmFiaWxpdHl8ZW58MHx8fHwxNzE2MDIxMjUwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food Sustainability" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Sustainability
              </Heading>
              <Text>Our commitment to sustainability ensures that our products are environmentally friendly.</Text>
            </Box>
          </HStack>
        </Box>

        {/* Footer Section */}
        <Box as="footer" py={10} textAlign="center">
          <HStack spacing={4} justify="center" mb={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
          <Text>&copy; {new Date().getFullYear()} Food Lab. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
