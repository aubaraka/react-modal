import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import ModalProps from "../types";

export function Modal({ title, content, level }: ModalProps) {
  const colours = {
    info: "bg-green-500",
    warning: "bg-amber-500",
    error: "bg-red-500",
  } satisfies Record<ModalProps["level"], string>;

  const ModalBgVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delayChildren: 0.1 } },
  };

  const ModalBoxVariants: Variants = {
    hidden: { opacity: 0, y: "60vh" },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="absolute top-0 flex h-screen w-full items-center justify-center overflow-clip bg-[#000000AA]"
      /*  initial="show"
      animate="show"
      exit="hidden"
      variants={ModalBgVariants} */
    >
      <motion.div
        className="relative rounded bg-white shadow w-96"
        // variants={ModalBoxVariants}
      >
        <div
          className={clsx(
            "flex w-full rounded-t px-5 font-bold py-5 items-center justify-between text-3xl text-white",
            colours[level]
          )}
        >
          <div>{title}</div>
          <button>
            <FaWindowClose />
          </button>
        </div>
        <div className="px-5 py-5 text-xl">
          <div>{content}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
