import React, { useState } from 'react';
import {
    Box,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Avatar,
    Text,
    useBreakpointValue,
    Icon,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Button
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { CiMail } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaChalkboardTeacher, FaGraduationCap, FaBookOpen, FaUser } from 'react-icons/fa';

export default function Header({selectedColor}) {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <>
            <Box bg="white" p={5} color="black">
                <Flex align="center">
                    {/* First Container: Burger Menu, Logo, Search Bar */}
                    <Flex align="center" gap={3}>
                        <IconButton
                            icon={<HamburgerIcon />}
                            aria-label="Menu"
                            bg={selectedColor}
                            _hover={{ bg: '#ff5773' }}
                            _active={{ bg: '#ff5773' }}
                            color="white"
                            p={3}
                            onClick={onOpen}
                        />
                        <Text fontSize="xl" fontWeight="bold">
                            Portal
                        </Text>
                        {!isMobile && ( // Only show on non-mobile view
                            <InputGroup maxW="400px" bg={selectedColor} borderRadius="20px">
                                <Input
                                    type="search"
                                    placeholder="Search"
                                    borderRadius="20px"
                                    border="none"
                                    _placeholder={{ color: 'white' }}
                                />
                                <InputRightElement pointerEvents="none">
                                    <SearchIcon color="white" />
                                </InputRightElement>
                            </InputGroup>
                        )}
                    </Flex>

                    {/* Spacer */}
                    <Box flex="1" />

                    {/* Second Container: Icons */}
                    <Flex align="center" gap={4}>
                        {/* Only show nav menu items on desktop */}
                        {!isMobile && (
                            <Flex align="center" gap={5}>
                                {/* Navigation Menu */}
                                {['Course', 'Instructor', 'Student', 'Pages'].map((item) => (
                                    <Text key={item} color={selectedColor} fontWeight="medium">
                                        {item}
                                    </Text>
                                ))}
                            </Flex>
                        )}
                        {/* Icons */}
                        <Flex align="center" gap={4}>
                            <Icon as={CiMail} w={6} h={6} />
                            <Icon as={IoIosNotificationsOutline} w={6} h={6} />
                            <Avatar name="User" src="https://bit.ly/broken-link" />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>

            {/* Drawer Component */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent className="custom-drawer">
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <Flex direction="column" gap={4} align="flex-start">
                            {/* Navigation Menu with Icons */}
                            <Button variant="link" color={selectedColor} fontWeight="medium" leftIcon={<FaBookOpen />} w="full" justifyContent="flex-start">
                                Course
                            </Button>
                            <Button variant="link" color={selectedColor} fontWeight="medium" leftIcon={<FaChalkboardTeacher />} w="full" justifyContent="flex-start">
                                Instructor
                            </Button>
                            <Button variant="link" color={selectedColor} fontWeight="medium" leftIcon={<FaGraduationCap />} w="full" justifyContent="flex-start">
                                Student
                            </Button>
                            <Button variant="link" color={selectedColor} fontWeight="medium" leftIcon={<FaUser />} w="full" justifyContent="flex-start">
                                Pages
                            </Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
