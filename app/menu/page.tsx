import { siteConfig } from "@/config/site"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              메뉴
            </h1>
          </div>
        </section>
      </div>
      <div className="bg-background">
        <section className="container flex flex-col justify-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <img src={siteConfig.image[4]} alt="설명" />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              수원 왕갈비 통닭
            </h1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src={siteConfig.image[5]} alt="설명" />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              수원 볶음면
            </h1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src={siteConfig.image[6]} alt="설명" />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              냉동식품
            </h1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src={siteConfig.image[7]} alt="설명" />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              후라이드
            </h1>
          </div>
        </section>
      </div>
    </>
  )
}
