import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import styles from "../app/page.module.css";

// Import the Andromeda Protocol JavaScript library
import { AndromedaClient } from "@andromedaprotocol/andromeda.js";

const totalPages = 10; // Assuming there are 10 pages in the book

const Book1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bidAmount, setBidAmount] = useState(0);

  const handleBid = async (page) => {
    try {
      // Connect to Andromeda Protocol
      const andromeda = new AndromedaClient();

      // Example configuration, replace with your actual contract address and private key
      const config = {
        contractAddress: "YOUR_CONTRACT_ADDRESS",
        mnemonic: "YOUR_PRIVATE_KEY",
      };

      // Initialize the Andromeda client with the configuration
      await andromeda.init(config);

      // Mint NFT for the current page
      const tokenId = page.toString();
      const ownerAddress = "OWNER_ADDRESS"; // Address of the NFT owner
      const result = await andromeda.mint(tokenId, ownerAddress);

      console.log("NFT minted for page", page, result);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={styles.container}>
      <Box p={8} boxShadow="lg" rounded="md" bg="white">
        <p className={styles.pageNumber}>Page {currentPage}</p>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Your Bid:</FormLabel>
            <Input
              type="number"
              min="0"
              step="0.01"
              value={bidAmount}
              onChange={(e) => setBidAmount(parseFloat(e.target.value))}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={() => handleBid(currentPage)}>
            Place Bid
          </Button>
        </VStack>
      </Box>
      <Box mt={4}>
        {currentPage !== totalPages && (
          <Button colorScheme="blue" onClick={nextPage}>
            Next Page
          </Button>
        )}
        {currentPage !== 1 && (
          <Button colorScheme="blue" onClick={prevPage} ml={2}>
            Previous Page
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Book1;
