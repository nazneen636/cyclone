import { Link, useLocation } from "react-router";
import Container from "./Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-gray-100 py-4! px-4!">
      <Container>
        <nav className=" rounded" aria-label="breadcrumb">
          <ol className="flex items-center text-sm text-gray-600 space-x-2">
            {/* Home icon */}
            <li>
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-primary-200 "
              >
                <div className="flex items-center gap-x-2 ">
                  <div className="mt-[6px]!">
                    <AiOutlineHome size={18} />
                  </div>
                  <span className="text-gray-600 body-small-700 mt-2! mr-2!">
                    {" "}
                    Home{" "}
                  </span>
                </div>
              </Link>
            </li>

            {pathnames.map((segment, index) => {
              const pathTo = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;

              // Capitalize and replace dashes
              const label = segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());

              return (
                <li key={index}>
                  <div className="flex items-center gap-x-1">
                    <span className="text-gray-600 text-xl! mt-1.5!">
                      <MdKeyboardArrowRight />
                    </span>
                    {isLast ? (
                      <span className="text-gray-600 body-small-700 mt-[4px]! ">
                        {label}
                      </span>
                    ) : (
                      <Link
                        to={pathTo}
                        className="text-gray-600 body-small-700"
                      >
                        {label}
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
};

export default Breadcrumb;
