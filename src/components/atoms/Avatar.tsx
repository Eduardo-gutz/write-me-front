interface AvatarProps {
  src?: string
  name: string
}

const Avatar = ({ name, src }: AvatarProps) => {

  const getAvatarLetters = () => {
    const names = name.toUpperCase().split(' ')

    if(names.length > 1) {
      return `${names[0][0]}${names[1][0]}`
    }

    return names[0].slice(0, 2)
  }
  return (
    <div className="w-full h-full bg-slate-300 rounded-full flex justify-center items-center">
      {src ?
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full rounded-full" src={src} alt={name} />
        </>
        :
        <p className="text-2xl font-extrabold text-neutral-700">{ getAvatarLetters() }</p>
      }
    </div>
  )
}

export default Avatar