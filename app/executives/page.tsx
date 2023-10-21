import Image from "next/image"

import "@/public/eunchae.png"
import { siteConfig } from "@/config/site"

export default function Page() {
  return (
    <>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-center gap-2">
            <img src="https://pds.joongang.co.kr/news/component/joongang_sunday/201903/13/24608ee9-f705-4ebc-804a-ff47e78c5abe.jpg" alt="설명" width={1120} height={746} />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              임원
            </h1>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              임원 소개 페이지 입니다.
            </p>
          </div>
        </section>
      </div>
      <div className="bg-background">
        <section className="container flex flex-row justify-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <img src={siteConfig.image[0]} alt="설명" />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              고은채
            </h1>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              PPT제작
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src={siteConfig.image[1]} alt="설명" />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              신채린
            </h1>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              잠 자는 사람
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src={siteConfig.image[2]} alt="설명" />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              이준영
            </h1>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              CEO
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src={siteConfig.image[3]} alt="설명" />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              조승훈
            </h1>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              디자인
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
