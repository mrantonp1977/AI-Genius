import Image from "next/image";

interface EmptyProps {
  label: string;
}


export const Empty = ({
  label,
} : EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-52 w-52">
        <Image 
          alt="Empty"
          fill
          src="/logo.png"
        />
      </div>
      <p className="text-muted-foreground text-sm text-center pt-5">
        {label}
      </p>
    </div>
  )
}