import Sections from "@containers/Sections";
import SectionItem from "@components/SectionItem";

const sections = ["Photography", "Illustration", "Filmmaking"];

const WithItems =
  (WrapperForItems) =>
  (WrappedItems) =>
  (sections) =>
  ({ location, sectionName, isDark }) =>
    (
      <WrapperForItems section={sectionName}>
        {sections.map((item) => (
          <WrappedItems
            key={item}
            section={item}
            isDark={isDark}
            isSelected={location.includes(item.toLowerCase())}
          />
        ))}
      </WrapperForItems>
    );

const SectionsWithItems = WithItems(Sections)(SectionItem)(sections);

export default SectionsWithItems;
