import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextAndLink`.
 */
export type TextAndLinkProps = SliceComponentProps<Content.TextAndLinkSlice>;

/**
 * Component for "TextAndLink" Slices.
 */
const TextAndLink = ({ slice }: TextAndLinkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_and_link (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TextAndLink;
