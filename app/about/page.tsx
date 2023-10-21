import { siteConfig } from "@/config/site"

export default function Page() {
  return (
    <>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <img src="https://i.ytimg.com/vi/180SxIGYvjk/maxresdefault.jpg" alt="설명" width={1280} height={720} />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold mb-4">
              {siteConfig.name}
            </h1>
            <h2 className="text-2xl leading-tight tracking-tighter md:text-3xl font-TheJamsil5Bold">
                왜 수원 왕갈비 통닭인가?
            </h2>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              왕갈비를 재울 때 사용하는 간장 소스를 그대로 치킨 소스로 사용합니다
            </p>
            <h2 className="text-2xl leading-tight tracking-tighter md:text-3xl font-TheJamsil5Bold">
                특장점1
            </h2>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              저렴한 순살이 아닌 비싼 닭다리살을 사용합니다
            </p>
            <h2 className="text-2xl leading-tight tracking-tighter md:text-3xl font-TheJamsil5Bold">
                특장점2
            </h2>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              조선시대부터 갈비로 유명한 수원의 갈비양념을 양념 통닭에 응용했습니다
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
