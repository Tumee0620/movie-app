import { CarouselComponent } from "@/components/CarouselComponent";
import { Navigation } from "@/components/Navigation";
import { MdNavigateNext } from "react-icons/md";

import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";

import { Cardcontainer } from "@/components/Card";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <CarouselComponent></CarouselComponent>
      <div className="flex justify-between px-[80px] pt-[52px]">
        <p className="font-medium font-[24px]">Upcoming</p>
        <button className="flex items-center gap-2">
          <p>See more</p>
          <MdNavigateNext className="size-6" />
        </button>
      </div>
      <div className="flex space-x-12  ">
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/6415/2808/0ffbeccc1a7cdd3a5199e0755d66e253?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fCQufcR3am1qiooLQaqM9Q41NfwFPOLbPAZzQ3vVA3ubkL8vXYVlOARoxW3mVGAKW10Or4rEsgbn1We-Uv7tTuXNoCKZySv1bpIdwl683L-HGFQCh2aolanzjTygbJRG8oxQTaOW~juemQwUKxKlVfDrku7eyKv7kCfb8GjtOtzOXMjPUGfQ1cPuDBT-lQ66x3KsLKXsEsvNyS04Nl-XgtKjiFq3J8vWz--Y7SKpB16xhs5medKqDLyR2gKclKWDTQHp2j3nb5xDgNcjumvVKF8BAMHiDyS~EKQBNdHZif7FuEWg4eIGY97oHzVI0GbCsUbWHh0mcj~FV-FZhmU~fQ__"
          }
          moviename={"Dear Santa"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/4b08/7764/bc03cf6c5fe844d5ce89f9658466dfef?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VxBf6a0UyNNWI2Ef8E9MKlxZyc7jcRh-qGeLDOkVM5XhV1f~sVYxwSFoidjGrQXETt45YTjmIScYqZSvyuzwmi4qgBT5YAPnS9NSSjWBqWpSONfypvg3GL6l6SDn2mxOqJ1hlrtm6BSm8Dxh8Is5UH3D96O91AeEBtziVQkE8UXZxn51XGJbKR8haCM1Y9G~649PPFyWcnVO4BZHnDC31L8sm8a11VDPZDoo4LaP5cLeHgWkb4MO3DeHYsIqG-xMZ4B9yy5ffhL86UEuULXd5okztHFp1lEGdKTrARjAVR-4~5O5RGFjsm1Hr7G9ACqNPXJZD9dtt8ixIK8w0D7Zlw__"
          }
          moviename={"How To Train Your Dragon Live Action"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/7aa1/1575/96c5c5026e3cccbd4a9ca91b9d63dc7a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TVUi4evCaWv5DXCkFcCXhK5a7XqGLRmAZ46uJH1yM-Fvt~EQO~x3pvBs-s1NXOhAYDjpUlbOSlxEvu0qGD57d4VrRTCnAduwbs0mxFf0XrFpCnOA5Yt0Z3zOCtbnrr4uPJc9aI~O75AITvlCwxdGsFkTgJfdO9nna51yGU-NKXwsjijsbuumFxUJmGULzs5dUbvEW-zBHN2ndMv~eM2QSY0CidjLVlvxQ2il8o8ppwYjVcrskJdifcewBLBgDJTkSID-kb~gxp2lj1Kt75UebcktxFj6yKftUrfgywB1-slsmVEV0J1DftM00LXqF9Y2T1EGuq8XFxug-QkftbReyg__"
          }
          moviename={"Alien Romulus"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/a2ea/3dd2/e396dc1c5e4ace3bda976b474aaef0b3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LmSRrZdSQ4fvHueiig5LxUblDy9QDnu6n0E9qjEYU4SB1cC4ZxO0nfnzoSC5nPJkfjMlrHY1SdUB6~Eb0heV1S31tD~18qCRsatCoxrbEFMGCmeTXRvtoU~S6ICXR6bplFR45mNqSKQDvUNEkIHEYMF~h0ryW9VulLl9XoZxBQy~z113TYtY9aYz7ATv~xiwah4fux~v7jAZbGzBF1Xv9uEx4IrN-zV0HD8lS9mA704MwbTY3V7eOie9kKJzEErMVaI5n6zP~b1GkYhAH7kolvToDYZINF6Z2~iL~M7YVfB8V2vVuqkM7nqXzqKRjMCFjUc0u0sIfhOMwehMnwwh-w__"
          }
          moviename={"From the Ashes"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/4225/7c9e/0fafe04642928fbdc70a93ae0f01002d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cbb2m1HJmmL7XhKZeu0jrrb-Vzvg8huUbr6E6Abr6tD8f7srS6WVZMaBJyOs1XPkOFTFu-G6O21HG4dUFsnqeqvu-046LbBZcBPe54gSKZMRLhFz40LI0RYs5ZBxMZ~MLIbSoLj-u1c~vymdOCj6RQz-UXndfwRAnHB1r5fDhUDX4MPuvVK5yk5fj2i1iYl-g19Qa4q6aof6xsuLjVKfJyK3-ruSMev5YhAH1z26Z--4wtBHMaJm98J3AjnmXG3srTeVUMimrobyQ4pFtg8L9IQUijLSoFovNwLAfz6Q5DtAz~Ml~V5aY64jdFgOFLv-c0-M8WWT8iuQXYnE3Q8Znw__"
          }
          moviename={"Space Dogg"}
        ></Cardcontainer>
      </div>
      <div className="flex space-x-12 ">
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/d9b1/c0d7/d14a24b806271aee27997170978ff626?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MJLPlmjH-ZH2cPWHRlzeF2mkO-FENUHpt5JvN3K29xAFT8Ww5PaT1vkoH2~s7S1o9PdBVL7WIUD3SVXoWqYeNXaULj7DL~zKZAGEY7J9sQy9SpBkU-6KfwoKqKgBqd9WpjV3zP884SLjBR1uk7JFbKaS9dM6aLJa8ihx17PmQiYtynIfu6zgOSnQ1NpnzO5Sy~nhXUWqsq4HGtOHSuUOHBpazHidklA7dNz1FmnNU~o2HrjAmxvXFObmJdfJR4Yle0Ke7t749UQLDp5w~vl~ZnXL9KeJgrenXu5w~TZtYTJj024q0GblLRoHG4yYg65BGWHoz0KVQFVsrh-KctQZIA__"
          }
          moviename={"The Order "}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/9e65/3e1b/e01fc9c4092dfdecd24369e2487d8635?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W2zT-Cq57KFy0vpF5PUJ--WXF8LCLBEqBnQ8PUkVItEjV0W2RFX368cnDVg4nYlHFRKdgTAyX8jwfodIznV0XtAlkL9nrD-jSCOILZFYSbpv4pmd6zZGmjya2hXR21GMBq3ZF39oRTbDo1J7YFUNADw~Wb~TL8SBslDL7FG3Zjfuub2ASjtKbDhQe0gx5idbG9KjtBRJi4NPTZ7a4aGV8YLcwrXqWJSlulSl35dT0iBxmIzvE6syvE95yD3vqEyYX9V8RGtli0zX92gtlPN~7JKxwLgh2qEPC-ESXomLc~pyPTHM0DW5To8DX6TmdIuz~CObhMgjLzncegNSzBeEVw__"
          }
          moviename={"Y2K"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/b356/27f6/7090bf8bfd9ce9490b6575d8d0114025?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JhRdxrMQ8UXJBqrfPkBs5wRrOK~GbcdwRWvpbW3mH1qzcV1dHl6IdvIJsVurUJEM0Y5G1d2MDqM~B5dcOuSPx9aPwcjYuEUpcW~5flXYdSkvbDLq8vGEOtH5PKEsZ7W3V7My6MZIIxn84Z5JljiqkMN9NDv4JSFFh5Q1~Ld7RtGR0ViB-Ml8o2v6afq2W0St5lwybR3W4CI93MBuPqGjIirCfvUoFF~EPRARZhfgfCI40svObKDRjHIQ20JAxOsbhYq0TyeTuS2L7H07h3KeaGEq-VxdA2IImbQsISuhKvqjt-m0rUknDmrhlpqJ57mODEPqSEqMCOOkKYbo4Omq5A__"
          }
          moviename={"Solo Leveling: ReAwakening"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/3272/77d4/dd6fe464242bf3ceb00cbf7c51bd7f42?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qQrGMobH~gVpKUJMWrAO2IVuhXlHJSlGXyXIgxtHflEcwC2aATPKeglP7jgxCzDdw-MOD66OFKOd1qJRKlzVQpW5v2gcCcYaCSKSztYeSfLQjxL-14O8kBYJGsZ58E4K6Fd3k4L1v81thwoCLgP9UaccZg2vARvcSYyetLS5hVmJAS9yPZun4w1wOGtgbkm-kDlPo6GVGg9oWCKtczCiJ0xdPRsxbTMLeRWZodHCEyTfMmiIa7hpNpIxcXihtvW3y7-FfT7~SzXlEXi-JefqtDZ4qn9u5~VDjZ6v9fWvaWAXsdmUVxQdqpYuhYJMfuM8y561-vH~3qnYMbrEcfl0Gw__"
          }
          moviename={"Get Away"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/1a78/359a/45da022f45cbd49977b6b63d7ecfb7c8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hngxFLglxhjir1xLXb2OvqA6i~gjzaI760BFiOjFM6YsKvuvgLrth42FCmhEWtP~bWQjM6cW3QrLLP-wnJeV-R~p6shS5--AxeeT-~gxccu3LD1j46jpvYKXsc8v1Z1kZwuCeWc0DzrEf~GPlbPzHT6zvYb0bfp2-2nWoVLYGL8x-p8OHdGk7Lu30S3pQDX12-Y59KuFZFexa2YNb1ODsnXmS3UjXnNcmDpBYIAXNXZIXvfuLXlMJEoETtGXaDb8HjTRS2j5atE12qFYNbyzDx4-mq8E630OQrpXcwCW1SaUXVA3SaZUCh8qjhJbRekOX5MmnOZ3LRoPU6OiS1a5BA__"
          }
          moviename={"Sonic the Hedgehog 3"}
        ></Cardcontainer>
      </div>
      <div className="flex justify-between px-[80px] pt-[52px]">
        <p className="font-medium font-[24px]">Popular</p>
        <button className="flex items-center gap-2">
          <p>See more</p>
          <MdNavigateNext className="size-6" />
        </button>
      </div>
      <div className="flex space-x-12">
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/a5d5/80e9/c9924c8d3c5e8e941a5ba1d2e52d8b4b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ifkyYyebGBi-hy8kWfBQFVGFW8r6Q-RpJ6Av6de~xWAuV95H0K6l4RsAf2boQm1vTpddKOQyAmf42sEeIRYqK6wPgy8wRAvRps4OYMfJhuVycq6U~SRdQ2g8rQG9XG~zud~~RTJRDFiN3z-~9C0PVMXLAYXMxTYpoy~4lWhrvwzDjmCE5ikwvFcb2iwuBEz-8tXHGRpfF1BG7gbMOuzyMkmhNgqhQioovwx68VWT4amJ49GhCM4QMPFKXw04BLjYQTV8nqJMtFRh5WbwGlCxGpytYjjJ-ijLX7H~kv~M-O0evGJ8cfyaVilwMu0qGjV9iJw0VIOSUINOSQC2wCk-2w__"
          }
          moviename={"The Shawshank Redemption"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/18d4/e152/3a9723ae5397841adf7fbaed84bd30b2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ihsXK73oWg3kgHH1XbVwZMjWyzIUWRxhUTes06eV-lDuKj95sJjNL4VopYY0S542yufGYWxt-8uEHROvM74mGfSarvaJcKX3bzBTp4Muud1Lrzga0tyubfTdbqCe2WZJix-EtDmA~Xh2lVTTr2FLUctRZCXqTu2faKrTFMNw~qNhtGjVX61gt2Hgd7j~Ov3lKoKyigTX3n4bra8vRSc-QoWubEYHP~ihK8yQaldsd2MYNIipjUQ8NzRePW-oMAfLu~ALwA5ES2CJxT7CgTsSFd1ielht63gGwCklAjnR3HcDHwYTK5CnZGNdyIidejbSExvd-3hD3B2VXuPFb56Idg__"
          }
          moviename={"The Godfather"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/0308/38bb/e73cef80ea7c5a4d051f85ec9f54ff54?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WM485SLGeFhHkqCWOwRldFfsUS8EeBBKYyewHPcJaNbuBJhJPRHm4yoAtrz0cK81zrhty-VtkWVzrpml9kzqFNcCPK5wpYR56Upf5HCYVHqoS7i88FG1R5ui-l1HxSeNEoPuh0ckHcpvQjsND-HWtUKJWyRFlPg30yopcTFZ7vGeyEAE6d5SlbIxupM0ZfH7cJaXM76Ks6OMZienysEwA~-brdFlv8gX04bGOyCtkhQaO29kAsLBk8Pv4R35Gi7Cvq5kKFUFKn~sRvEd~sN5zSNDWKe4xH7uppLzI-hJ2Zhn6TiYBbIR-wzDoOQQHwAtAkHR2lcwitxkPWsOlrAbIg__"
          }
          moviename={"The Dark Knight"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/e5f6/3d6a/89bab25bc0763dfbbbf7c3bee6852e83?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NREdCBVi8bKRda-JYWdH2bZ~Oo5yzDSVl~2ZdxlJWhisa8j7Q6vdISjtNzGemvIhuI8STushGNRJLYIktcEAOy3ilcD0bMlzAGzLBTBrmYS-iBqZiXu7RSvkvk5OVtC5cyzDTTSGMWBSQhtZTQ3qnFUZzRfaL5IbHTiBYtctEu2iTBNtAa~jgnSgbDxt~-tKGGDM81jCZmLnjQewXo5KeGQJkFoPdRXDOXuV5iXu4LuLGeS2O12lT-CU5h-IoVLztFYsNMSVAT-ZaZ~TJP6zke3XPn0hQoLRr-m9LHUpLF8PGCuPciWmYdmu3QqoC-hWSDsdQMFUGUT85NopMPC1Nw__"
          }
          moviename={"12 Angry Men"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/3dda/7d0f/d43f8bf0d05709315bdef844728edcdd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mRIgcuVZxUNEeXP0z94~rg2AicZ0e0BcwpbFUBxOkwAFipfxak3UbsvlH6VlE3dmoGI7jQuXT7uwCf1h3bt3ad6yP6gRtrdh5VwwiZCpDOGpe~KgNGnzRFXxSRp0EKNSgR0wbC~FN2lSODUIxhhsqCMLDcti8Ars9tKFVx~bfn0QBjrO2xzTElxNyOSAeS-Xm~Qs8JsQGRRp-B-3ziz96NWxQ2MU1ymF5UtpOser3pR~GjaIN7ENPeM-4waVOiAaP5cSGfxgM-r3ffXGtYxop3CfZIutbOSvR-fC~83iLuc68HPV1q0rYGi7ycsy6DTGFcg0xpPCWi70kSf7nbZt7w__"
          }
          moviename={"The Lord of the Rings: The  Return of the King"}
        ></Cardcontainer>
      </div>
      <div className="flex space-x-12 ">
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/c7c0/24b2/b3afd710377fb0b9f108ff36fba45e4c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LZLUa--3c2~L2FTXpfdISncaKmi0V4TVGaoJle8RiuznPrTRPu8sQZ5osFxUZVWHByZ8Zm3m4FSPM~8UGg-wtJEZYYucGhgFCS8N9aNf5YpBz1A1yrnmdPFVspcVdFXBrZL0mtulOTpwZTVR1D2g-5nzoXF1vM4DcHxT2P8lea70-WnDu6DRXdAyxMt1FlcCncWwbgA0bTQzi-ifqeobZEo7i8FBhum9UlhCLhfoUhGx0iwk1jkREXFA~-CDcK7RY~oDsGtgmEdlG5-1AnaJ~k8nM~0OysLoxMjhEZAJ-XS0Z5nDYGzT8U5j-ZA5aRv8A-ktPcrMozMCUy1-YM~pqA__"
          }
          moviename={"Internstellar"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/3acb/3a09/851aa126ab35026523f2e2e190b23fe7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NRXs1v8zuH9OAcuL~6UJZaL7rB8gKWmdF66aAPEAC6hjac1qKw5RmS61llIcfDgXwwQf97CH4LaItLAKePHSSYE3qi5NZUhVOt9QyF1XYjpKgpIXmeL0pVH9HU5eI9WTia2U9PBRcqvukMW8bK7OtyAe-97QQFzzNyaJFPnpCKB~1IAhiKDkz81Jo0xp2wT5QDiRGA0RLpzxCfUcfxsZRuzjo04dFt48Zjv5vXRzj1plsY6siwnYkLJnUqoQN30HLXSpqJCDITHuv3NNHH5~VnybdfIPX10mjr5r9tO~KuNCnumkL7-Gu3254-vWkJdP0hklG5UwXnS7nEjDEUDkTQ__"
          }
          moviename={"Se7en"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/2956/d72d/5d02f54d89cfd16de886a197c7726cdd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J64ZSM2cS3FVnY9GYY1gzo7bt7J8LBJSUTENRZIle54rnMD9hVHqPlhfSvFL67TGSF1kubokAI7vcRupSmpyd0gDDYrizaBsrBY8lU660AH34F2RbKyuJ1gljl7CZNdW8s49QQ1xMM16idU2sd1DDp3z3kJGR~aqjety-pY3H~~QyGGn7fD7OplkoAxUP79-Vdic~XtxERdhDWpop~cEzk-I82K-eumGNSHDKlVvGAY44ShkNULpmfO18P0Sxcw0qXlpqfDDjGDqzHh9vyBiyV21uIPjyJhUsoV9Y4KJ3x4VBEolXJTxXj9aji~1IeytQVg6A8y1AAEJfKgCLeXDIQ__"
          }
          moviename={"It’s a Wonderful life"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/58b7/6625/d56cec413aaa9f82fa807c4236d4e1eb?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=heP-WjLpZKT2LL2apLA28i48hwdNxj6sWKIKsq-oOHIBD--FdMuLWMymwZHYonZF8AS5brQQfFPIXA4VTCk7dw4oI9KoqiIlsAzNwaYqgqBiOjqnmyd7s0PBZMwjBDzY35h6jWUZ4l2XbZqIzBP1KYgQYryd7TkLZq1YVD4NACIdgKyV7skltLEVsgn6kwGsjkBNPIf325It2CcCZaKBaSDVSvT-P3MDyZpdeUe2kKtZorAykEuK2lH92JzloQ5L25BQn3c8MqFq0dsvDocfUEOhxy4UmLF4jL4uFbiN-h5qiuAOwg7E8Pqu2fweuV-R3OVUiBHI-M8fUuAHNcNuEg__"
          }
          moviename={"Seven samurai"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/0b32/61eb/4bb822b1588e21cad535fbaad83aa44f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ffkn03NHkp1LblLKZyw5hLPAQgkWITF2W3TVjuvTkuqUSG9a7M6-~10qsy-SnMYqjm72COj5Xi7TEAOtcvUjoGN3bLxWfss6Mcka0uKR1ZGrjLw~j2GyafwYQR~dD9ucAt8W-zX2yaKIddB4R3ARbHWwKNUg647ZqXoW9FxhBbnGDW90ErT80I7yBXuRBXLYChVhkB24avkjdgVl9ZnPT7n31Xt9uqMS0o7sG3-GNGcsZ8G4d5yUckZ7qXxhDW-MOjjw-xeF6mIMY2AC~hurzg3swHmFjLR6LiXuY47eNhbeCGGD8g7BcupS6dghpLMSryV~a4H0pTY-BP0iHl9TNw__"
          }
          moviename={"The Silence of the Lambs"}
        ></Cardcontainer>
      </div>
      <div className="flex justify-between px-[80px] pt-[52px]">
        <p className="font-medium font-[24px]">Top Rated</p>
        <button className="flex items-center gap-2">
          <p>See more</p>
          <MdNavigateNext className="size-6" />
        </button>
      </div>
      <div className="flex space-x-12">
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/cf17/af98/7703b40890cd1344aa613664135f2e57?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sq79PyKTf~-s0lyl4OmepvCR4rSYEFt6OKpcUwgjEiNQFHQNiNvfemnZZgmjdKRvQISQR~TQOWIMP3BpRxB5n2GRC2cu8BIowQmBX8gsy9G6xcosm43y8hcbrW4aJ22JY~CXQ4y4WoMgQoNGsfg-ETlqOOA5YMYwwZWtkqv96ZlN9VT5ecJyGr65ViPmWvHpY2hO7stqbnTOGBr9WdJe~B8DkptebiWl1GFnLgBPm~FC3ZLQKg12HHeVkwUzWZ-v0ABxEWJXuuSG3n0ovtyNoEcRlzXmMiQ68in4Fr-E1dT80O6twmh0QLJrH2IpnVPo3xqgUT0RiKf8tedydZCphQ__"
          }
          moviename={"Pulp Fiction"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/6c1e/36de/9221fa86d0b4e1a635830dc0332c811e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bsMfpH6Op4NtR7tvqfTWt1dYywmOfcPbyVb51C3mH6iO2~ddrAfVOWmmZ3oew7ow637AyRAxFAdw-YqTG-AfSbYfMhTwXln8Wmw5EZEXQgQoqupg1D9H0RaSVq98BlMq1N14erHu58kL7I~JhyVgqSNZzh22ui7Vqyf4GCtY34HIfkWxKnfm~z4XhJRoMMy8CF4~ybRtuRtMUQlccMmtcZydnI9Pk3241mcdPVEbPC~-bMYtCwL54xAkdy2GdHFfWayzqwKPwvZb7konq5iww5X5WLO2FU3kFye884niW4ZLSFbT07HVt~owcHG6pbGYFxNum~xfUWPaUmhSLHxS-w__"
          }
          moviename={"The Lord of the Rings: Fellowship of the Kings"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/706b/eb6b/0ee523250991ecb1d87699f60c1073d9?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K7H4m10BVbGfAvW9g6~RoEe3Vje~A3xmVdcpZTt2x04n2KLtXqQNm1DPy7NC7am2DFl5JsOoMdqzWSZk2dqYHX--XTa-X5oRrpg-RZjJGeBESJ9uCD0-iu-r8bvpeYnSeNBjhEQdsgm3H6fXLMQOoYwOXtODtaCc~d7ZqfqTpcU98tO2u95Fa1oekJnH22Bh3HbCV9V~rhCVwb3yktpovFsqikw2IaRKnuMYBVpXnDJQzOAIjlEd8hdPnUJr5m1wgbF32wiPvTitWkpvzSPl5QxI53oMeIM32tw6N4kCUgqKMhmD0pvTMhGdPkQn5XvBn9G8ubK3FZAawX1b7NBt~A__"
          }
          moviename={"The Good, the Bad and the Ugly"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/df80/0d0a/908ecd9eb3fe52f587a5e1d0d29006ac?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLocyiG3ATObjwNSDhJxkmlbmMFbKhg~JkER9lrVgTQ5zyLfStbLtbrzh6EyIe1YHtj9MhsDHGOIypC5j2jp4avCgGdD8bwM0VtkDfC-rgJ~NZj33-FTzgTwk0TdJXJ3a4kNzdzspt2210c7yQJ02za3ofn1RvFNzW1CAbxc~ZTF32WG6nJBgw0sO8988GaGuBjcVbFFvRYSPkN1jw9aKIx8eM94MACEDfiPRD5wS6ZNXYy13TT8E-0jETH2iU2gE1izbpE98c9OXpei4mGqv7yd6vOEVQxzrTZ5KDWMz4r2WkC5G4Bkb1hBvfVoJz5mhfPtJKFDedROO7kPyaEQsA__"
          }
          moviename={"Forrest Gump"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/d866/cb3c/ba3f0c5f843cce238d40df0684d88488?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RvoW-0lA62ZJV2NnVP9hjGbwpkKoHkgGeOFjqYADvut~lo-5PBdU3kf1MwQhzr5Ot6jbyrpoBluADF5x7ID47kdc3tcR~jO7EONNYbSN0KVIdcSsmgVogU2cdHc-1P7VNoDtfu-1FZIrtduKNzUepolNkE2KzrDWUiydJNpToNjNtjoAqs5ARR0vcISnphrwHv3uC4wMr12MoZpqWCMCFkY4fFtW23iVn1M~~w-cpkVxTRU6XKompEKbeRwMWAuHvvSXmecvH6Xkj~tosYOe4FLQRBJLgIC3qp5~AfjtszQ9lgF~mnq7Gw32boOZsszB1LzstolV4MqiScp8uXSoow__"
          }
          moviename={"Fight Club"}
        ></Cardcontainer>
      </div>
      <div className="flex space-x-12">
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/10f8/b0b2/fb5855ff72d7afbffcb7e63d2a0ed956?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tg5ZU88gmKyeIdFD4ZDAHx6AsaEf2G7EyIy8Oqgd3TlPz99jWy3CFRaJrLRq2ZSSawXNbJgvDxkUXLZ4SAmN7TeLXCkjkYaC7BPgk4CKaefrd51MNHVwuFMCMpgHnVbFPEBx6zUqu0xnjeMtnjFF~JCUX637W5GviStvG4hOfK8QMxjCM4fT-7OBD46FGNfy2-7wwnqBHMCdTH5NXmy2NF2~dBOrGupZZ7SKGu~L60AGGYrIBD8xx346jXqj-XpUnrNFHJhUfeIH8uuNWjtRbbaL4WD42E2s9CyPrPkioLxtt1nsVhbIMP6HM65HGmdGcGqobtQqLUDMXBm99Yuv7A__"
          }
          moviename={"Saving Private Ryan"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/2e25/409a/4c2ed4d2de131a5a578da7c6661daca9?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a11POMaguydqpriDE4eRkMbhhC0dSqLuglwAFlZ4MSBoYl0ou~IdB9Hjd82nbbXxUIHi5ZKIzp9oy7ZiNib9FKW9wrai~LQCnVcN6HjpWsuM7C2i-ooJFAR3KVYV3nFfhWKoj4l3NONm02huIN6708TGCJnv1gyq8nJkLuwEOnWzigVyuY8UZ91uKU4hlVEM4tH4qLWpPM141x3UXM5DG5VqaLqrKTAzBXI1d1erkhesOsQJSvDowU2BDRq1UIx8bNJM7v7zX3cG95BV5xxtrno4hyOG2psDydbpeV-VoX7EeGeTm4fM6XqMvfj2zToXPtjk9W~41HXVDb01c9WG4Q__"
          }
          moviename={"City of God"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/3c89/618f/d6e7943c1ccbd074c826b6305cd89425?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l6v~xQPKmYyWvRqNRUKrpaffvqzvHaVqYI2keod5I3D07sk3IgF7pUu26Qfw4-MV~X07x27qG9W9NGwJ21dyvVxZIX9UYiBUQg6WA6jNbNwktZFBMMx2zh7Z9q~wLkaA0VNIZR~lTlZqolyG007A4WaGt9x4oCN3DfILWJBaZ6YEKD8LZ7OAqxuN17cNOnJR9UihJStyx6-tjkc~07hCHpgALlj3nwfyK9XuenOmovlhZS9Lqq7NhD7rnD6y~VBlVvXk5XuzrT4jxmcHKqKVjnxyDmz5WbD2E0Naqqx1klILpslRDiAFZwlUM5xxUtvZDzyTazGnMpz-0srerxQwBg__"
          }
          moviename={"The Green Mile"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/efcd/4e59/ee05b883c3fe14fee45058479e958594?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kw-c14LZHzmT6wfbNDOrH3UHhQC~xjuUT~jfaQrfbERkRUr8TtbJjYkYLdC42~bBVAf5S8III1Ofb8Esx~wWZOOyFibtw~NExm-pIjcVCgg1tytPVQ1w-u9BA3Liij2qae1-l2V2Pvf0KAFAPsIB51ykgPYwqwLXjqK9wUuTDznmZPOFQBx3rJjFp5eaKHT5Y2U2pvvzW22VR~ih8D6dgrILj11Pi3jVxhm1mCYMiyPRyYogI36f5IYNdK3qEE~T4TYn9-mFZFcSwic2oMUtyKKSaXX25VivM5OPABk3VE~B2A9tkPNQIqT7C~zTOyY-ZQrtNCa3hI9~C9Mm6fU9Rw__"
          }
          moviename={"Life is Beautiful"}
        ></Cardcontainer>
        <Cardcontainer
          image={
            "https://s3-alpha-sig.figma.com/img/9b5c/2b39/321996ea21e05ed372aa26ac4e0d889d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AvnEZ9rkXGN5qWO8EP~~fDPcL6h5i0Wilfdh5wLuUhoKxaA2u4sN2~XkDsziRdan0vy-LvRIC0XL6OZi4A7WSMc5QgREFI9NOqpQZ5Jl3qm9RSSj9KFIslP0Ahg7QisiTs2R8KoaOANW~kXnwwCfCvGBqUtRrjOsEsk~u8sxlcn5Hl6oby41X~jln1qSDT0iZPhvpA7vltIHOBsA1taE8d5z9zHKu2bmQLmN4caNeVLAoX1Bey2x7BAd3lo7lUWnUnu5meaRlIC2~7ZfqGBQwk7xG7QCsO-Erph7tNAnQH3LcE-bAHpobikryiciqOf3cclwaG~0NmR~t9PiOldsJw__"
          }
          moviename={"Terminator 2: Judgement Day"}
        ></Cardcontainer>
      </div>
      <Footer></Footer>
    </div>
  );
}
