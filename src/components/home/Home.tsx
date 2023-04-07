/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-shadow */
import {
    Box,
    Container,
    Grid,
    Link,
    Text,
    useToast,
    Image,
  } from '@chakra-ui/react'
  import Slider from 'react-slick'
  import Search from '../filter/Search'
  import TopDestinationBox from './TopDestinationBox'
  import ServiceBox from './ServiceBox'
  import HomeSectionHeader from './HomeSectionHeader'
  import PlaceBox from './PlaceBox'
  
  type PlacesByCity = {
    accepted: boolean
    id: number
    city: string
    address: string
    detail: string
    image: string
    name: string
    place_type: string
    user_id: number
  }[]
  
  const Home = () => {
    const toast = useToast()
    const a = {
      sm: 2,
      md: 2,
      lg: 2,
      xl: 2,
    }
  
    // const {
    //   isLoading,
    //   isError,
    //   latestData: { data } = {} as any,
    // }: {
    //   isLoading: boolean
    //   isError: boolean
    //   latestData: { data: PlacesByCity }
    // } = usePlacesByCityData({
    //   city: 'hanoi',
    //   page: 0,
    // })
  
    // if (isError) {
    //   toast({
    //     title: 'Đã có lỗi xảy ra',
    //     description:
    //       'Lỗi khi tải dữ liệu, vui lòng kiểm tra lại đường truyền mạng!',
    //     status: 'error',
    //     duration: 3000,
    //     isClosable: true,
    //     position: 'top',
    //   })
    // }
  
    return (
      <Container maxW='calc(1296px + 5.6rem)' px={10}>
        <Box mt={12}>
          <Box>
            <Box
              display={{
                md: 'block',
                lg: 'none',
                xl: 'none',
              }}>
              <Image src='assets/banner1.jpg' />
            </Box>
            <Box
              display={{
                sm: 'none',
                md: 'none',
                lg: 'block',
                // xl: 'none',
              }}>
              <Image src='assets/banner.jpg' />
            </Box>
            <Box>
              <Search data={null} />
            </Box>
            <Box>
              <Box mt={8} marginBottom='8px'>
                <Text fontSize='3xl' fontWeight='bold'>
                  Chào mừng đến với 3S!
                </Text>
                <Text>
                  Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa
                  trên 3S
                </Text>
                <Text>
                  {' '}
                  <Link href='/login'>Đăng nhập</Link> hoặc{' '}
                  <Link href='/signup'>Đăng ký</Link> để trải nghiệm !
                </Text>
              </Box>
              <Box
                width={[
                  '100%', // 0-30em
                  '100%', // 30em-48em
                  '100%', // 48em-62em
                  '80%', // 62em+
                ]}>
                <Slider speed={500} slidesToShow={4} slidesToScroll={1}>
                  <ServiceBox
                    title='Homestay'
                    description='Căn hộ dịch vụ & Biệt thự'
                    imageUrl='assets/services/homestay.jpg'
                  />
                  <ServiceBox
                    title='Vé tham quan'
                    description='Mua vé thật dễ dàng'
                    imageUrl='assets/services/ticket.jpg'
                    comingSoon
                  />
                  <ServiceBox
                    title='Thuê xe ô tô'
                    description='Giá chỉ từ 1,299,000đ'
                    imageUrl='assets/services/oto.jpg'
                    comingSoon
                  />
                  <ServiceBox
                    title='Đưa đón sân bay'
                    description='Xe sang chỉ từ 199.000đ'
                    imageUrl='assets/services/plane.png'
                    comingSoon
                  />
                </Slider>
              </Box>
            </Box>
            <Box
              mt={12}
              sx={{
                '.slick-next, .slick-prev': {
                  width: '56px',
                  height: '56px',
                  boxShadow: '0 0 7px -4px #000',
                  zIndex: 1,
                  borderRadius: '56px',
                  background: 'white',
                  transition: 'all .3s ease-in-out',
                  ':hover': {
                    outline: 'none',
                    boxShadow: '0 0 5px 0 rgba(246,94,57,.5)',
                    ':before': {
                      color: 'orange.500',
                    },
                  },
                },
                '.slick-prev': {
                  left: '-22px',
                  ':before': {
                    color: 'black',
                    content: '"\\003c"',
                    position: 'absolute',
                    top: '28%',
                    left: '34%',
                  },
                },
                '.slick-next': {
                  right: '-27px',
                  ':before': {
                    color: 'black',
                    content: '"\\003e"',
                    position: 'absolute',
                    top: '28%',
                    left: '42%',
                  },
                },
                '.slick-slide': {
                  paddingRight: '2',
                },
              }}>
              <HomeSectionHeader
                name='Địa điểm nổi bật'
                description='Cùng 3S bắt đầu chuyến hành trình chinh phục thế giới của bạn'
              />
              <Box
                display={{
                  base: 'block',
                  sm: 'block',
                  md: 'none',
                  lg: 'none',
                }}>
                <Slider infinite speed={500} slidesToShow={2} slidesToScroll={5}>
                  <TopDestinationBox name='Hà Nội' url='hanoi' imageUrl='assets/top-destinations/hanoi.png' />
                  <TopDestinationBox
                    name='TP.Hồ Chí Minh'
                    url='hcm'
                    imageUrl='assets/top-destinations/hcm.png'
                  />
                  <TopDestinationBox
                    name='Vũng Tàu'
                    url='vungtau'
                    imageUrl='assets/top-destinations/vungtau.png'
                  />
                  <TopDestinationBox name='Đà Lạt' url='dalat' imageUrl='assets/top-destinations/dalat.png' />
                  <TopDestinationBox
                    name='Đà Nẵng'
                    url='danang'
                    imageUrl='assets/top-destinations/danang.png'
                  />
                  <TopDestinationBox
                    name='Nha Trang'
                    url='nhatrang'
                    imageUrl='assets/top-destinations/nhatrang.png'
                  />
                  <TopDestinationBox
                    name='Quảng Ninh'
                    url='quangninh'
                    imageUrl='assets/top-destinations/quangninh.png'
                  />
                  <TopDestinationBox name='Hội An' url='hoian' imageUrl='assets/top-destinations/hoian.png' />
                </Slider>
              </Box>
              <Box
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'none' }}>
                <Slider infinite speed={500} slidesToShow={3} slidesToScroll={5}>
                  <TopDestinationBox name='Hà Nội' url='hanoi' imageUrl='assets/top-destinations/hanoi.png' />
                  <TopDestinationBox
                    name='TP.Hồ Chí Minh'
                    url='hcm'
                    imageUrl='assets/top-destinations/hcm.png'
                  />
                  <TopDestinationBox
                    name='Vũng Tàu'
                    url='vungtau'
                    imageUrl='assets/top-destinations/vungtau.png'
                  />
                  <TopDestinationBox name='Đà Lạt' url='dalat' imageUrl='assets/top-destinations/dalat.png' />
                  <TopDestinationBox
                    name='Đà Nẵng'
                    url='danang'
                    imageUrl='assets/top-destinations/danang.png'
                  />
                  <TopDestinationBox
                    name='Nha Trang'
                    url='nhatrang'
                    imageUrl='assets/top-destinations/nhatrang.png'
                  />
                  <TopDestinationBox
                    name='Quảng Ninh'
                    url='quangninh'
                    imageUrl='assets/top-destinations/quangninh.png'
                  />
                  <TopDestinationBox name='Hội An' url='hoian' imageUrl='assets/top-destinations/hoian.png' />
                </Slider>
              </Box>
              <Box
                display={{
                  base: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'block',
                  xl: 'none',
                }}>
                <Slider infinite speed={500} slidesToShow={4} slidesToScroll={5}>
                  <TopDestinationBox name='Hà Nội' url='hanoi' imageUrl='assets/top-destinations/hanoi.png' />
                  <TopDestinationBox
                    name='TP.Hồ Chí Minh'
                    url='hcm'
                    imageUrl='assets/top-destinations/hcm.png'
                  />
                  <TopDestinationBox
                    name='Vũng Tàu'
                    url='vungtau'
                    imageUrl='assets/top-destinations/vungtau.png'
                  />
                  <TopDestinationBox name='Đà Lạt' url='dalat' imageUrl='assets/top-destinations/dalat.png' />
                  <TopDestinationBox
                    name='Đà Nẵng'
                    url='danang'
                    imageUrl='assets/top-destinations/danang.png'
                  />
                  <TopDestinationBox
                    name='Nha Trang'
                    url='nhatrang'
                    imageUrl='assets/top-destinations/nhatrang.png'
                  />
                  <TopDestinationBox
                    name='Quảng Ninh'
                    url='quangninh'
                    imageUrl='assets/top-destinations/quangninh.png'
                  />
                  <TopDestinationBox name='Hội An' url='hoian' imageUrl='assets/top-destinations/hoian.png' />
                </Slider>
              </Box>
              <Box
                display={{
                  base: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'none',
                  xl: 'block',
                }}>
                <Slider infinite speed={500} slidesToShow={5} slidesToScroll={5}>
                  <TopDestinationBox name='Hà Nội' url='hanoi' imageUrl='assets/top-destinations/hanoi.png' />
                  <TopDestinationBox
                    name='TP.Hồ Chí Minh'
                    url='hcm'
                    imageUrl='assets/top-destinations/hcm.png'
                  />
                  <TopDestinationBox
                    name='Vũng Tàu'
                    url='vungtau'
                    imageUrl='assets/top-destinations/vungtau.png'
                  />
                  <TopDestinationBox name='Đà Lạt' url='dalat' imageUrl='assets/top-destinations/dalat.png' />
                  <TopDestinationBox
                    name='Đà Nẵng'
                    url='danang'
                    imageUrl='assets/top-destinations/danang.png'
                  />
                  <TopDestinationBox
                    name='Nha Trang'
                    url='nhatrang'
                    imageUrl='assets/top-destinations/nhatrang.png'
                  />
                  <TopDestinationBox
                    name='Quảng Ninh'
                    url='quangninh'
                    imageUrl='assets/top-destinations/quangninh.png'
                  />
                  <TopDestinationBox name='Hội An' url='hoian' imageUrl='assets/top-destinations/hoian.png' />
                </Slider>
              </Box>
            </Box>
            <Box mt={12}>
              <HomeSectionHeader
                name='Ưu đãi độc quyền'
                description='Chỉ có tại 3S, hấp dẫn và hữu hạn, book ngay!'
              />
  
              <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                <Box
                  sx={{
                    img: {
                      borderRadius: 'lg',
                    },
                  }}>
                  <Image src='assets/promotion/1.png' height='402' width='917' />
                </Box>
                <Box
                  sx={{
                    img: {
                      borderRadius: 'lg',
                    },
                  }}>
                  <Image src='assets/promotion/2.png' height='402' width='917' />
                </Box>
                <Box
                  sx={{
                    img: {
                      borderRadius: 'lg',
                    },
                  }}>
                  <Image src='assets/promotion/3.png' height='402' width='917' />
                </Box>
              </Grid>
            </Box>
            <Box
              mt={12}
              sx={{
                '.slick-next, .slick-prev': {
                  width: '56px',
                  height: '56px',
                  boxShadow: '0 0 7px -4px #000',
                  zIndex: 1,
                  borderRadius: '56px',
                  background: 'white',
                  transition: 'all .3s ease-in-out',
                  ':hover': {
                    outline: 'none',
                    boxShadow: '0 0 5px 0 rgba(246,94,57,.5)',
                    ':before': {
                      color: 'orange.500',
                    },
                  },
                },
                '.slick-prev': {
                  left: '-26px',
                  top: '36%',
                  ':before': {
                    color: 'black',
                    content: '"\\003c"',
                    position: 'absolute',
                    top: '28%',
                    left: '34%',
                  },
                },
                '.slick-next': {
                  right: '-26px',
                  top: '36%',
                  ':before': {
                    color: 'black',
                    content: '"\\003e"',
                    position: 'absolute',
                    top: '28%',
                    left: '42%',
                  },
                },
                '.slick-slide': {
                  paddingRight: '2',
                },
              }}>
              <HomeSectionHeader
                name='Vòng vòng phố thị Hà Nội'
                description='Top chỗ ở sạch đep, giá tốt tại Hà Nội cho chuyến du lịch và công tác của bạn.'
              />
  
              {/* <Slider infinite speed={500} slidesToShow={4} slidesToScroll={4}>
                {data?.length &&
                  data.map((place) => (
                    <PlaceBox
                      key={place.id}
                      placeId={place.id}
                      imageUrl={place.image}
                      name={place.name}
                      address={place.address}
                    />
                  ))}
                {isLoading &&
                  Array.from({ length: 4 }).map((_: any, index: number) => (
                    <PlaceBox key={index} isLoading />
                  ))}
              </Slider> */}
            </Box>
          </Box>
        </Box>
      </Container>
    )
  }
  
  export default Home
  