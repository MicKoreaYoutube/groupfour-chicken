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
            <img src="https://i.ytimg.com/vi/180SxIGYvjk/maxresdefault.jpg" alt="설명" width={1280} height={720} />
            <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              {siteConfig.name}
            </h1>
            <p className="text-lg text-muted-foreground font-SUITE-Regular">
              {siteConfig.description}
            </p>
          </div>
        </section>
      </div>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-8xl leading-tight tracking-tighter md:text-4xl font-KBO-Dia-Gothic_bold">
              문의
            </h1>
            <div className="flex flex-col gap-4 w-full font-SUITE-Regular">
              <Input placeholder="이름"/>
              <Input placeholder="이메일"/>
              <Input placeholder="전화번호"/>
              <Textarea placeholder="문의 내용" className="h-40 resize-none"/>
            </div>
            <div className="w-full flex place-content-end">
              <Button className="font-TheJamsil5Bold">제출</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
