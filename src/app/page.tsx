import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Landmark,
  Scale,
  ShoppingBag,
  UtensilsCrossed,
  BriefcaseMedical,
  type LucideIcon,
} from "lucide-react";

type Service = {
  id: string;
  volume: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  cta: string;
  icon: LucideIcon;
  accent: string;
};

const services: Service[] = [
  {
    id: "law",
    volume: "No.1",
    title: "DAPA LAW : 방위사업법 등 실시간 조회",
    description:
      "국가 법령정보 API를 통해 방위사업 관련 최신 법령을 빠르게 조회할 수 있습니다.",
    tags: ["#방위사업법", "#법령조회", "#업무도구", "#AI검색"],
    href: "https://chatgpt.com/g/g-69c3d57a773c819192629f1968b393a5-dapa-law",
    cta: "링크",
    icon: Scale,
    accent: "from-[#6f1d1b] to-[#bb9457]",
  },
  {
    id: "assembly",
    volume: "No.2",
    title: "대한민국 국회 정보 실시간 조회",
    description:
      "열린국회정보 API를 통해 국회의원 명단, 회의록 등 국회 관련 정보를 빠르게 조회할 수 있습니다.",
    tags: ["#국회정보", "#실시간조회", "#회의록", "#의원명단"],
    href: "https://chatgpt.com/g/g-69db6c0fc1a48191a09f8a99241b82de-daehanmingug-gughoe-silsigan",
    cta: "링크",
    icon: Landmark,
    accent: "from-[#355070] to-[#6d597a]",
  },
  {
    id: "market",
    volume: "No.3",
    title: "DAPA 거래장터",
    description:
      "DAPA 직원 간의 신뢰를 바탕으로 중고거래가 가능한 카카오톡 오픈채팅방입니다.",
    tags: ["#중고거래", "#카카오톡", "#신뢰거래"],
    href: "https://open.kakao.com/o/gcHPS7pi",
    cta: "링크",
    icon: ShoppingBag,
    accent: "from-[#386641] to-[#a7c957]",
  },
  {
    id: "lunch",
    volume: "No.4",
    title: "정부과천청사 구내식당, 오늘의 메뉴",
    description:
      "정부과천청사 구내식당 메뉴를 빠르게 확인할 수 있는 생활 정보 서비스입니다.",
    tags: ["#구내식당", "#점심메뉴", "#과천청사", "#오늘뭐먹지"],
    href: "/cafeteria",
    cta: "링크",
    icon: UtensilsCrossed,
    accent: "from-[#9c6644] to-[#dda15e]",
  },
  {
    id: "welfare",
    volume: "No.5",
    title: "정부과천청사 복지시설 조회",
    description:
      "청사 내 복지시설과 편의 공간을 한 번에 확인할 수 있는 안내형 서비스입니다.",
    tags: ["#쾌적한청사생활", "#복지시설", "#은행", "#약국", "#식당", "#병원", "#대출", "#이발소"],
    href: "https://gbmo.go.kr/chungsa/bl/cvntl/selectCvntlList.do?gbdId=CD004&mi=1144",
    cta: "링크",
    icon: BriefcaseMedical,
    accent: "from-[#003049] to-[#669bbc]",
  },
];

function HeroQuickButton({ service }: { service: Service }) {
  const inactive = !service.href;
  const Icon = service.icon;

  if (inactive) {
    return (
      <div className="group flex flex-col gap-4 rounded-[1.5rem] border border-black/10 bg-white/80 px-5 py-5 text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.65rem] tracking-[0.24em] uppercase">
              {service.volume}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em] text-neutral-700">
              {service.title}
            </h3>
          </div>
        </div>
        <span className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium sm:w-auto">
          {service.cta}
        </span>
      </div>
    );
  }

  return (
    <div className="group flex flex-col gap-4 rounded-[1.5rem] border border-black/10 bg-white/82 px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-[0.65rem] tracking-[0.24em] text-neutral-500 uppercase">
            {service.volume}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em]">
            {service.title}
          </h3>
        </div>
      </div>

      <Link
        href={service.href!}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-black bg-black px-4 py-2 text-sm font-medium !text-white transition-colors duration-200 hover:bg-neutral-800 sm:w-auto"
      >
        {service.cta}
        <ExternalLink className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="rounded-[2rem] border border-black/10 bg-[#fffaf2]/88 px-5 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-[0_22px_48px_rgba(0,0,0,0.08)] sm:px-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div
            className={`grid h-14 w-14 shrink-0 place-items-center rounded-[1.2rem] bg-gradient-to-br ${service.accent} text-white`}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.68rem] tracking-[0.28em] text-neutral-500 uppercase">
              {service.volume}
            </p>
            <h3 className="mt-2 text-[1.65rem] font-semibold leading-[1.28] tracking-[-0.04em] text-neutral-950 sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-700">
              {service.description}
            </p>
          </div>
        </div>

        {service.href ? (
          <Link
            href={service.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-black bg-black px-5 py-3 text-sm font-medium !text-white transition-colors duration-200 hover:bg-neutral-800 md:w-auto"
          >
            {service.cta}
            <ExternalLink className="h-4 w-4" />
          </Link>
        ) : (
          <span className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-black/10 bg-black/5 px-5 py-3 text-sm font-medium text-neutral-500 md:w-auto">
            {service.cta}
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-dashed border-black/10 pt-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 bg-white px-3 py-1 text-[0.78rem] font-medium text-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(205,180,219,0.14),transparent_26%),linear-gradient(180deg,#f8f2e8_0%,#f4efe6_46%,#efe6d8_100%)] text-neutral-950">
      <div className="mx-auto max-w-7xl px-3 py-5 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30 rounded-full border border-black/10 bg-[#fffaf2]/85 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur md:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-black/10 bg-white">
                <Image
                  src="/header-logo.png"
                  alt="LET'S DAPA logo"
                  fill
                  className="object-cover"
                  sizes="44px"
                  priority
                />
              </div>
              <div>
                <p className="text-[0.72rem] tracking-[0.25em] text-neutral-500 uppercase">
                  One-page Service
                </p>
                <h1 className="text-lg font-semibold tracking-[-0.04em]">
                  LET&apos;S DAPA
                </h1>
              </div>
            </div>
            <nav className="hidden items-center gap-12 text-sm font-medium text-neutral-600 md:flex">
              <a href="#services">서비스 종류</a>
              <a href="#shortcut">사용방법</a>
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#fffaf2]/85 px-5 py-9 shadow-[0_30px_80px_rgba(50,42,33,0.08)] backdrop-blur sm:px-6 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_center,rgba(187,148,87,0.16),transparent_58%)] lg:block" />
          <div className="pointer-events-none absolute -top-20 right-10 h-44 w-44 rounded-full bg-[#bb9457]/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-8 h-36 w-36 rounded-full bg-[#6d597a]/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase">
                방위사업청 직원을 위해
              </div>
              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-neutral-950 md:text-7xl">
                LET&apos;S DAPA
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-neutral-700 md:text-lg">
                5가지 서비스를 통해 오늘도 화이팅!
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black bg-black px-6 py-3 text-sm font-medium !text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-neutral-800"
                >
                  서비스 보기
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-[1.5rem] border border-black/10 bg-white/80 px-5 py-4">
                  <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                    서비스
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em]">
                    05
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-black/10 bg-white/80 px-5 py-4">
                  <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                    형태
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.04em]">
                    버튼형
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {services.map((service) => (
                <HeroQuickButton key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mt-14 rounded-[2.3rem] border border-black/10 bg-[#fffaf2]/80 px-5 py-8 sm:px-6 md:px-8 md:py-10"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.28em] text-neutral-500 uppercase">
                서비스
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                DAPA 5가지 유용한 기능
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-neutral-600">
              LET&apos;S DAPA의 5가지 서비스, 한 번 보실래요?
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section
          id="shortcut"
          className="mt-14 rounded-[2.2rem] border border-black/10 bg-[#f7f0e6] px-5 py-8 sm:px-6 md:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs tracking-[0.28em] text-neutral-500 uppercase">
                사용방법
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.35] tracking-[-0.05em]">
                홈 화면에 추가시,
                <br />
                앱처럼 바로 열 수 있습니다.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-700">
                자주 쓰는 경우 홈 화면에 추가해두면 더 빠르게 접근할 수 있습니다.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
                <p className="text-sm font-bold tracking-[0.18em] text-[#1a7f37] uppercase">
                  ANDROID(갤럭시)
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  우측 상단 브라우저 메뉴 클릭,
                  <br />
                  `홈 화면에 추가` 선택
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
                <p className="text-sm font-bold tracking-[0.18em] text-[#2563eb] uppercase">
                  IPHONE(아이폰)
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  Safari 공유 메뉴 클릭,
                  <br />
                  `홈 화면에 추가` 선택
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10">
          <div className="flex flex-col gap-3 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[-0.03em]">
                LET&apos;S DAPA
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                직원의 업무 효율을 위한 One-Page 서비스
              </p>
            </div>
            <p className="text-xs tracking-[0.22em] text-neutral-500 uppercase">
              Fast access for five essential services
            </p>
          </div>
          <p className="mt-6 border-t border-dashed border-black/10 pt-4 text-xs leading-6 text-neutral-500">
            All rights reserved • © 2026 JYH, DAPA.
          </p>
        </footer>
      </div>
    </main>
  );
}
