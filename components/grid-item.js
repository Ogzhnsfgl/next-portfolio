import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
        width="600"
        height="380"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);
export const PostGridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
        width="600"
        height="380"
        priority
      />
      <LinkOverlay href={href}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center" className="grid-item">
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          width="600"
          height="380"
          objectFit="cover"
          objectPosition="center"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20} fontWeight={700}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} min-height="15%">
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item{
      display:flex;
      flex-direction:column;
      height:100%
      max-height:300px;
        overflow:hidden;

    }

      .grid-item-thumbnail {
        border-radius: 12px;
        max-height:100px;
        min-height:100px;
        height:100%;
        overflow:hidden;
      }
      .grid-item-thumbnail img {
        object-fit:cover;
        width:100%
      }
    `}
  />
);
