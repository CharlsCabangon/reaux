import Heading from './Heading';

export default function Banner({ img }) {
  return (
    <section className="relative flex h-screen w-full justify-center">
      <div className="relative h-full w-full">
        <img
          src={img.image}
          alt={img.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000]/60"></div>
      </div>
      <div className="absolute bottom-28 z-10 w-2/3 text-center text-off-white">
        <Heading heading={img.title} />
        <p className="mb-3 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta enim dicta
          atque iste, illo, et delectus, quibusdam quos suscipit sequi quasi eum. Cupiditate dolore
          recusandae consequatur natus exercitationem beatae ipsa architecto earum repellendus!
          Suscipit.
        </p>
        <a href="" className="font-roboto underline">
          Read more
        </a>
      </div>
    </section>
  );
}
