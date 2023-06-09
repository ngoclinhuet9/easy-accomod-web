/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-redeclare */
import { Skeleton, Box, Link, Image } from '@chakra-ui/react'
// import Image from 'next/image'
import { Link as ReactLink } from 'react-router-dom'
// import NextLink from 'next/link'

type SkeletonProps = { isLoading: true }

type NoSkeletonProps = {
  isLoading?: false
  placeId: number
  imageUrl: string
  name: string
  address: string
}

function PlaceBox(props: SkeletonProps): JSX.Element
function PlaceBox(props: NoSkeletonProps): JSX.Element
function PlaceBox({
  name,
  placeId,
  imageUrl,
  address,
  isLoading,
}: {
  isLoading?: boolean
  imageUrl?: string
  name?: string
  placeId?: number
  address?: string
}) {
  return (
    <ReactLink to='/place'>
      <Box w='328px' h='313px'>
        <Link
          as={ReactLink}
          to={`/place/${placeId}`}
          textDecoration='none !important'
          _hover={{ color: 'orange.500' }}>
          <Box maxW='95%'>
            {isLoading ? (
              <Skeleton width='311px' height='207px' />
            ) : (
                <Image src={imageUrl} alt='place' width='1200px' height='800px' />
              )}
          </Box>

          <Box color='gray.500' fontSize='sm'>
            {' '}
            {isLoading ? (
              <Skeleton mt={1} height='12px' width='120px' />
            ) : (
                'Homestay - 1 phòng ngủ'
              )}
          </Box>
          <Box display='flex'>
            <Box as='h4' lineHeight='tight' isTruncated mr={1}>
              {isLoading ? (
                <Skeleton mt={1} height='12px' width='120px' />
              ) : (
                  name
                )}
            </Box>
          </Box>

          <Box
            as='h5'
            fontSize='sm'
            color='black'
            fontWeight='bold'
            isTruncated>
            {isLoading ? (
              <Skeleton mt={1} height='12px' width='120px' />
            ) : (
                address
              )}
          </Box>
        </Link>
      </Box>
    </ReactLink>
  )
}

export default PlaceBox
