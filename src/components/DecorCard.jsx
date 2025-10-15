export default function DecorCard({ img, title, link }) {

  return (
    <div className="w-[25rem] h-[35rem] flex flex-col align-center justify-center text-center">
      <div className="bg-gray w-full h-full relative overflow-hidden rounded-xl">
        <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover rounded-xl"/>
      </div>
      <h3 className="text-3xl font-sourceSerif">{title}</h3>
      <a href="" className="underline">{link}</a>
    </div>
  )
}