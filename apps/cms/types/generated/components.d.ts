import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsBigWords extends Schema.Component {
  collectionName: 'components_sections_big_words';
  info: {
    displayName: 'Big words';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    words: Attribute.Component<'shared.word', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 6;
      }>;
  };
}

export interface SectionsContentAndImageSection extends Schema.Component {
  collectionName: 'components_sections_content_and_image_sections';
  info: {
    displayName: 'Content and image section';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Component<'shared.content-and-image', true> &
      Attribute.Required;
  };
}

export interface SectionsEvents extends Schema.Component {
  collectionName: 'components_sections_events';
  info: {
    displayName: 'Events';
    icon: 'calendar';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    sectionID: Attribute.String;
    cta: Attribute.Component<'shared.cta'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    video: Attribute.Media;
    poster: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
    cta: Attribute.Component<'shared.cta'> & Attribute.Required;
  };
}

export interface SectionsProfiles extends Schema.Component {
  collectionName: 'components_sections_profiles_gallery';
  info: {
    displayName: 'Profiles gallery';
    icon: 'user';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    sectionID: Attribute.String;
    profiles: Attribute.Component<'shared.profile', true>;
  };
}

export interface SectionsTextAndBackground extends Schema.Component {
  collectionName: 'components_sections_text_and_backgrounds';
  info: {
    displayName: 'Text and background';
    icon: 'strikeThrough';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    sectionID: Attribute.String;
    text: Attribute.Text & Attribute.Required;
    background: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsTextAndIcons extends Schema.Component {
  collectionName: 'components_sections_text_and_icons';
  info: {
    displayName: 'Text and icons';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    hasBackground: Attribute.Boolean & Attribute.DefaultTo<false>;
    icon: Attribute.Component<'shared.icon', true>;
  };
}

export interface SectionsVideos extends Schema.Component {
  collectionName: 'components_sections_videos';
  info: {
    displayName: 'Videos';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    sectionID: Attribute.String;
    playlistID: Attribute.Text & Attribute.Required;
    channel: Attribute.Component<'shared.cta'> & Attribute.Required;
  };
}

export interface SharedContentAndImage extends Schema.Component {
  collectionName: 'components_shared_content_and_images';
  info: {
    displayName: 'Content and image';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    cta: Attribute.Component<'shared.cta'>;
  };
}

export interface SharedCta extends Schema.Component {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedIcon extends Schema.Component {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'Meta social';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedProfile extends Schema.Component {
  collectionName: 'components_shared_profiles';
  info: {
    displayName: 'Profile';
    icon: 'user';
  };
  attributes: {
    picture: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    bio: Attribute.Text & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedWord extends Schema.Component {
  collectionName: 'components_shared_words';
  info: {
    displayName: 'Word';
    icon: 'bold';
  };
  attributes: {
    word: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'sections.big-words': SectionsBigWords;
      'sections.content-and-image-section': SectionsContentAndImageSection;
      'sections.events': SectionsEvents;
      'sections.hero': SectionsHero;
      'sections.profiles': SectionsProfiles;
      'sections.text-and-background': SectionsTextAndBackground;
      'sections.text-and-icons': SectionsTextAndIcons;
      'sections.videos': SectionsVideos;
      'shared.content-and-image': SharedContentAndImage;
      'shared.cta': SharedCta;
      'shared.icon': SharedIcon;
      'shared.meta-social': SharedMetaSocial;
      'shared.profile': SharedProfile;
      'shared.seo': SharedSeo;
      'shared.word': SharedWord;
    }
  }
}
