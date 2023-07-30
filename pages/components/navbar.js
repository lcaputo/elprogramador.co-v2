/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import PropTypes from "prop-types";

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

// HASTA AQUI

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(
        window.scrollY,
        navigation,
        0,
        navigation.length - 1
      );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // return (
  //   <div className="navContainer">
  //     {navigation.map((header, index) => (
  //       <a
  //         key={index + header.href}
  //         className="navlink"
  //         href={`#${header.href}`}
  //       >
  //         {header.name}
  //       </a>
  //     ))}
  //   </div>
  // );

  return (
    <Disclosure
      as="nav"
      className="p-4 bg-gradient-to-r from-[#353232] via-secondary to-black"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="px-10 md:px-7 lg:px-5 flex-shrink-0 flex items-center w-72">
                  <Image
                    src="/images/logo.webp"
                    alt="Workflow"
                    width={800}
                    height={240}
                  />
                </div>
                <div className="hidden lg:block sm:ml-6 lg:my-auto">
                  <div className="flex space-x-4">
                    {navigation?.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href ? item.href : "#"}
                        className={`text-white hover:text-gray-400 px-1 mx-3 py-1 text-sm font-medium ${
                          activeIndex == index
                            ? "border-b-4 border-primary"
                            : ""
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation?.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href ? item.href : "#"}
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium ${
                      activeIndex === index ? "bg-primary" : ""
                    }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

Example.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      headerRef: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
