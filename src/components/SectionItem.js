import Link from "next/link";
import PropTypes from "prop-types";
import classnames from "classnames";
import { styleVars } from "@utils/vars";

export default function SectionItem({ isSelected, section, isDark }) {
  const SectionStyles = classnames("link", {
    isSelected,
    isDark,
  });

  return (
    <>
      <li>
        <Link href={`/${section.toLowerCase()}`}>
          <a className={SectionStyles}>{section}</a>
        </Link>
      </li>
      <style jsx>{`
        .link {
          font-size: 1.4rem;
          color: ${styleVars.color5};
          text-decoration: none;
        }

        .isDark {
          color: ${styleVars.color8};
        }

        .link.isSelected {
          text-decoration: underline;
          color: ${styleVars.color3};
        }
      `}</style>
    </>
  );
}

SectionItem.propTypes = {
  isSelected: PropTypes.bool,
  section: PropTypes.string,
  isDark: PropTypes.bool,
};

SectionItem.defaultProps = {
  isSelected: false,
  section: "Photography",
  isDark: false,
};
