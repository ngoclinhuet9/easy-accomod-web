/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Box,
  Flex,
  Spacer,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Text,
} from '@chakra-ui/react'
import axios from 'axios'
import { auth } from 'firebase-config'
import useRedux from 'hooks/useRedux'
import actions from 'store'

import { HamburgerIcon, ChevronDownIcon, EmailIcon } from '@chakra-ui/icon'
import Logo from 'assets/logo2.png'
import Notifi from './Notifi'

export default function Header() {
  const toast = useToast()
  const history = useHistory()
  const { dispatch } = useRedux()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [name, setName] = useState('')

  useEffect(() => {
    // auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    try {
      axios.get('/profile').then((result) => {
        const { data } = result.data
        setName(data.name)
        if (data.status !== 'APPROVED') {
          signOut()
          toast({
            title: 'Có sự cố xảy ra',
            description: 'Tài khoản đang chờ phê duyệt',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
          })
        }
      })
    } catch (error) {
      if (error.response?.status === 403) {
        signOut()
        toast({
          title: 'Có sự cố xảy ra',
          description: 'Bạn không đủ quyền để truy cập trang này',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      }
    }
    // }
    // else {
    //   history.push('/login')
    //   toast({
    //     title: 'Có sự cố xảy ra',
    //     description: 'Bạn cần đăng nhập tài khoản admin để tiếp tục',
    //     status: 'error',
    //     duration: 3000,
    //     isClosable: true,
    //     position: 'top',
    //   })
    // }
    // })
  }, [])

  const signOut = async () => {
    await auth.signOut()
    setName('')
    dispatch(
      actions.signOut()
    )
    localStorage.clear()
    history.push('/login')
  }

  return (
    <div>
      <Box
        display={{
          md: 'block',
          lg: 'none',
          xl: 'none',
        }}
        mt={2}
        pb={2}
        borderBottom='1px solid #E2E8F0'
        alignItems='center'>
        <Flex
          d='flex'
          paddingRight='2.5rem'
          paddingLeft='2.5rem'
          alignItems='center'>
          <Box />
          <Spacer />
          <Button onClick={onOpen}>
            <HamburgerIcon />
          </Button>
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
            <DrawerBody>
              <Button variant='ghost'>
                <Link to='/login'>Đăng nhập</Link>
              </Button>
              <Button variant='ghost'>
                <Link to='/signup'>Đăng ký</Link>
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Box
        height='85px'
        w='100%'
        mb={5}
        pb={3}
        display={{ sm: 'none', md: 'none', lg: 'block' }}
        borderBottom='1px solid rgb(226 232 240)'>
        <Flex
          d='flex'
          w='75%'
          height='100%'
          m='0 auto'
          backgroundColor='blue'
          alignItems='center'>
          <Box width='100%'>
            <Link to='/'>
              <Image display='inline' src={Logo} width='60px' height='60px' />
              <Text display='inline' fontSize='xl' fontWeight='500' ml={4} position='absolute' left='240px' top='29px'>
                    3S PLACE
              </Text>
            </Link>
          </Box>
          <Spacer />
          {name !== '' ? (
            <>
              <Menu>
                <MenuButton
                  px={8}
                  py={2}
                  transition="all 0.2s"
                  borderRadius="md">
                  <EmailIcon />
                </MenuButton>
                <MenuList w='350px'>
                  <Notifi role='owner' />
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {name}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Button onClick={signOut} variant='link'>
                      Đăng xuất
                    </Button>
                  </MenuItem>
                </MenuList>
              </Menu>

            </>
          ) : (
              <Flex d='flex' alignItems='center'>
                <Button variant='ghost'>
                  <Link to='/login'>Đăng nhập</Link>
                </Button>
                <Button variant='ghost'>
                  <Link to='/signup'>Đăng ký</Link>
                </Button>
              </Flex>
            )}
        </Flex>
      </Box>
    </div>
  )
}
