import React from 'react'
import { Box, Text, Container, Grid, Image } from '@chakra-ui/react'
import Copyright from './Copyright'

export default function Footer() {
  return (
    <Box alignSelf='end' py={12}>
      <Box py={12}>
        <Container maxW='calc(1296px + 5.6rem)' px={10}>
          <Grid
            templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}>
            <Box mt={4}>
              <Box display='flex' alignItems='center' mb={5}>
                <Image src='assets/logo2.png' height={14} width={14} />
                <Text fontSize='xl' fontWeight='500' ml={4}>
                  3S PLACE
                </Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Image src='assets/svg/message.svg' />
                <Box ml={8}>
                  <Text fontSize='md' fontWeight='500'>
                    Messenger
                  </Text>
                  <Text fontSize='sm'>http://m.me/3s-place</Text>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' mt={4}>
                <Image src='assets/svg/phone.svg' />
                <Box ml={8}>
                  <Text fontSize='md' fontWeight='500'>
                    Call center
                  </Text>
                  <Text fontSize='sm'>0123456789</Text>
                </Box>
              </Box>
            </Box>
            <Box mt={4}>
              <Box>
                <Text fontSize='md' mb={5} fontWeight='700'>
                  KHÔNG GIAN ƯA THÍCH
                </Text>
                <Text fontSize='md' mt={2}>
                  Căn hộ
                </Text>
                <Text fontSize='md' mt={2}>
                  Biệt thự
                </Text>
                <Text fontSize='md' mt={2}>
                  Nhà riêng
                </Text>
                <Text fontSize='md' mt={2}>
                  Studio
                </Text>
              </Box>
            </Box>
            <Box mt={4}>
              <Box>
                <Text fontSize='md' mb={5} fontWeight='700'>
                  VỀ CHÚNG TÔI
                </Text>
                <Text fontSize='md' mt={2}>
                  Blog
                </Text>
                <Text fontSize='md' mt={2}>
                  Điều khoản hoạt động
                </Text>
                <Text fontSize='md' mt={2}>
                  +84 962605699
                </Text>
                <Text fontSize='md' mt={2}>
                  Thông tin dành cho chủ nhà
                </Text>
                <Text fontSize='md' mt={2}>
                  Cơ hội nghề nghiệp
                </Text>
              </Box>
            </Box>
            <Box mt={4}>
              <Box>
                <Text fontSize='md' mb={5} fontWeight='700'>
                  TẢI ỨNG DỤNG 3S PLACE
                </Text>
                <Box display='flex'>
                  <Box>
                    <Box p={4} border='1px solid rgba(0,0,0,.09)' mr={6}>
                      <Image src='assets/qr-code.png' height={70} width={70} />
                    </Box>
                  </Box>
                  <Box>
                    <Box mb={4}>
                      <Image src='assets/svg/apple-store.svg' />
                    </Box>
                    <Box mb={4}>
                      <Image src='assets/svg/google-play.svg' />
                    </Box>
                    <Box mb={4}>
                      <Image src='assets/svg/huawei.svg' />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Copyright />
    </Box>
  )
}
