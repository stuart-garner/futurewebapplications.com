// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home Page documents */
interface HomePageDocumentData {
    /**
     * Slice Zone field in *Home Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomePageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home Page → Slice Zone*
 *
 */
type HomePageDocumentDataSlicesSlice = HeaderSlice | QuoteSlice | SectionSlice;
/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomePageDocumentData>, "home_page", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeaderSlice | QuoteSlice | SectionSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomePageDocument | PageDocument;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceDefaultPrimary {
    /**
     * Title field in *Header → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Sub Text field in *Header → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.sub_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    sub_text: prismicT.KeyTextField;
    /**
     * Description field in *Header → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: header.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Section Image field in *Header → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.section_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    section_image: prismicT.ImageField<never>;
    /**
     * CTA Button Text field in *Header → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.cta_button_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_button_text: prismicT.KeyTextField;
    /**
     * CTA Button Colour field in *Header → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.cta_button_colour
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    cta_button_colour: prismicT.ColorField;
    /**
     * CTA Button Link field in *Header → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.cta_button_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_button_link: prismicT.LinkField;
    /**
     * Image Left field in *Header → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: header.primary.image_left
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    image_left: prismicT.BooleanField;
}
/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeaderSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Header*
 *
 */
type HeaderSliceVariation = HeaderSliceDefault;
/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSlice = prismicT.SharedSlice<"header", HeaderSliceVariation>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
    /**
     * Quote field in *Quote → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: quote.primary.quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    quote: prismicT.KeyTextField;
    /**
     * Description field in *Quote → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: quote.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<QuoteSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismicT.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in Section → Primary
 *
 */
interface SectionSliceDefaultPrimary {
    /**
     * Title field in *Section → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Sub Title field in *Section → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section.primary.sub_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    sub_title: prismicT.KeyTextField;
    /**
     * Description field in *Section → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: section.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Section Image field in *Section → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: section.primary.section_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    section_image: prismicT.ImageField<never>;
    /**
     * CTA Button Colour field in *Section → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: section.primary.cta_button_colour
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    cta_button_colour: prismicT.ColorField;
    /**
     * CTA Button Text field in *Section → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section.primary.cta_button_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_button_text: prismicT.KeyTextField;
    /**
     * CTA Button Link field in *Section → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: section.primary.cta_button_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_button_link: prismicT.LinkField;
    /**
     * Image Left field in *Section → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: section.primary.image_left
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    image_left: prismicT.BooleanField;
}
/**
 * Default variation for Section Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Section`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SectionSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Section*
 *
 */
type SectionSliceVariation = SectionSliceDefault;
/**
 * Section Shared Slice
 *
 * - **API ID**: `section`
 * - **Description**: `Section`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionSlice = prismicT.SharedSlice<"section", SectionSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomePageDocumentData, HomePageDocumentDataSlicesSlice, HomePageDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, HeaderSliceDefaultPrimary, HeaderSliceDefault, HeaderSliceVariation, HeaderSlice, QuoteSliceDefaultPrimary, QuoteSliceDefault, QuoteSliceVariation, QuoteSlice, SectionSliceDefaultPrimary, SectionSliceDefault, SectionSliceVariation, SectionSlice };
    }
}
