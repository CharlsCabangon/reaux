import Tilt from 'react-parallax-tilt';

export default function DecorCard({ img, link, isGlare }) {
  return (
    <div className="align-center flex w-[24rem] flex-col justify-center text-center">
      <Tilt
        tiltEnable={false}
        glareEnable={isGlare}
        glarePosition="all"
        glareMaxOpacity={0.3}
        glareBorderRadius="0.75rem"
      >
        <div className="relative h-[33rem] cursor-pointer overflow-hidden rounded-xl bg-gray shadow-md">
          <img
            src={img.image}
            alt={img.alt}
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
          />
        </div>
      </Tilt>

      <h3 className="mb-1 mt-3 font-sourceSerif text-3xl">{img.title}</h3>
      <a href="" className="font-roboto underline">
        {link}
      </a>
    </div>
  );
}
