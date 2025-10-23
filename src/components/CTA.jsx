import PropTypes from "prop-types"

export default function CTA({ children }) {
  return (
    <section className="flex flex-col gap-5 items-center justify-center h-[20%] w-full items-center bg-light-gray py-12 px-24 text-center">
      {children}
    </section>
  )
}

CTA