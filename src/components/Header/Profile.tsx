import { Flex, Avatar, Box, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adriano de Abreu</Text>
          <Text color="gray.300" fontSize="sm">
            adriano@example.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Adriano Abreu"
        src="https://lh3.googleusercontent.com/-2P3lpuAuH_o/AAAAAAAAAAI/AAAAAAAAAAA/APmPUbHqkeiigJunMtoHY_j57Pph5cUkhw/photo.jpg?sz=46"
      />
    </Flex>
  );
}
