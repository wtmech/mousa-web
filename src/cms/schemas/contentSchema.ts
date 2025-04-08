/**
 * Content schema for the artist CMS
 * This defines the structure for content that artists can edit
 */

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Release {
  id: string;
  title: string;
  coverImage: string;
  releaseDate: string;
  description: string;
  tracks?: {
    title: string;
    duration: string;
  }[];
}

export interface ArtistContent {
  name: string;
  bio: string;
  profileImage: string;
  bannerImage: string;
  socialLinks: SocialLink[];
  releases: Release[];
  featuredReleaseId?: string;
}

// Default content
export const defaultArtistContent: ArtistContent = {
  name: 'Artist Name',
  bio: 'Write your bio here...',
  profileImage: 'https://via.placeholder.com/300',
  bannerImage: 'https://via.placeholder.com/1200x400',
  socialLinks: [
    { platform: 'Twitter', url: 'https://twitter.com/artist' },
    { platform: 'Instagram', url: 'https://instagram.com/artist' },
    { platform: 'Spotify', url: 'https://open.spotify.com/artist/artist' },
  ],
  releases: [
    {
      id: '1',
      title: 'Album Title',
      coverImage: 'https://via.placeholder.com/500',
      releaseDate: '2023-01-01',
      description: 'Album description goes here...',
      tracks: [
        { title: 'Track 1', duration: '3:45' },
        { title: 'Track 2', duration: '4:20' },
        { title: 'Track 3', duration: '3:15' },
      ],
    },
  ],
};

// Schema validation function
export const validateArtistContent = (content: Partial<ArtistContent>): ArtistContent => {
  return {
    ...defaultArtistContent,
    ...content,
    socialLinks: content.socialLinks || defaultArtistContent.socialLinks,
    releases: content.releases || defaultArtistContent.releases,
  };
};