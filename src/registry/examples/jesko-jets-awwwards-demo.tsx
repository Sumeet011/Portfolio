import { IframeEmbed } from "@/components/embed"

export default function JeskoJetsAwwwardsDemo() {
  return (
    <div className="w-full">
      <IframeEmbed
        src="https://jesko-jets-awwwards.vercel.app/"
        title="Jesko Jets website"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  )
}
