import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Landmark,
  Scale,
  ShoppingBag,
  UtensilsCrossed,
  BriefcaseMedical,
  type LucideIcon,
} from "lucide-react";

type ServiceLink = {
  label: string;
  href: string;
};

type Service = {
  id: string;
  volume: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  cta?: string;
  links?: ServiceLink[];
  icon: LucideIcon;
  accent: string;
};

const services: Service[] = [
  {
    id: "law",
    volume: "No.1",
    title: "DAPA LAW",
    description:
      "국가 법령정보 API를 통해 방위사업 관련 최신 법령을 빠르게 조회할 수 있습니다.",
    tags: ["#방위사업법", "#법령조회", "#업무도구", "#AI검색"],
    href: "https://chatgpt.com/g/g-69df91392e008191815400be2ce49858-dapa-law",
    cta: "링크",
    icon: Scale,
    accent: "from-[#6f1d1b] to-[#bb9457]",
  },
  {
    id: "assembly",
    volume: "No.2",
    title: "지금, 실시간 국회",
    description:
      "대한민국 국회정보 API를 통해 의원 명단, 회의록 등 국회 관련 정보를 빠르게 조회할 수 있습니다.",
    tags: ["#국회정보", "#실시간조회", "#회의록", "#의원명단"],
    href: "https://chatgpt.com/g/g-69db6c0fc1a48191a09f8a99241b82de-daehanmingug-gughoe-silsigan",
    cta: "링크",
    icon: Landmark,
    accent: "from-[#355070] to-[#6d597a]",
  },
  {
    id: "lunch",
    volume: "No.3",
    title: "점심 뭐먹지?",
    description:
      "청사 구내식당 메뉴를 알려드리며, 점심메뉴 고민하는 청사 직원들을 위한 점심메뉴추천(점메추) 드립니다.",
    tags: ["#구내식당", "#점메추", "#과천청사", "#점심메뉴"],
    links: [
      { label: "구내식당", href: "/cafeteria" },
      { label: "오늘 점메추", href: "https://lets-dapa-lunch.vercel.app/" },
    ],
    icon: UtensilsCrossed,
    accent: "from-[#9c6644] to-[#dda15e]",
  },
  {
    id: "market",
    volume: "No.4",
    title: "DAPA 거래장터(카톡)",
    description:
      "DAPA 직원 간의 신뢰를 바탕으로 중고거래가 가능한 카카오톡 오픈채팅방입니다.",
    tags: ["#중고거래", "#카카오톡", "#직원커뮤니티", "#신뢰거래"],
    href: "https://open.kakao.com/o/gcHPS7pi",
    cta: "링크",
    icon: ShoppingBag,
    accent: "from-[#386641] to-[#a7c957]",
  },
  {
    id: "welfare",
    volume: "No.5",
    title: "청사 복지시설 총집합",
    description:
      "청사 내 복지시설과 편의 공간 정보를 한 번에 확인할 수 있는 안내 서비스입니다.",
    tags: ["#복지시설", "#은행", "#약국", "#식당", "#병원", "#이발소"],
    href: "https://gbmo.go.kr/chungsa/bl/cvntl/selectCvntlList.do?gbdId=CD004&mi=1144",
    cta: "링크",
    icon: BriefcaseMedical,
    accent: "from-[#003049] to-[#669bbc]",
  },
];

function LinkButtons({
  service,
  mobileFull = false,
}: {
  service: Service;
  mobileFull?: boolean;
}) {
  if (service.links?.length) {
    return (
      <div
        className={`flex flex-wrap gap-2 sm:flex-row ${
          mobileFull ? "w-full sm:w-auto" : ""
        }`}
      >
        {service.links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className={`inline-flex min-w-0 items-center justify-center gap-2 rounded-md border border-[#fcd535] bg-[#fcd535] px-3 py-2 text-sm font-semibold !text-[#181a20] transition-colors duration-200 hover:bg-[#f0b90b] sm:px-4 ${
              mobileFull ? "flex-1 sm:w-auto sm:flex-none" : ""
            }`}
          >
            {item.label}
            <ExternalLink className="h-4 w-4" />
          </Link>
        ))}
      </div>
    );
  }

  if (service.href && service.cta) {
    return (
      <Link
        href={service.href}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-flex items-center justify-center gap-2 rounded-md border border-[#fcd535] bg-[#fcd535] px-4 py-2 text-sm font-semibold !text-[#181a20] transition-colors duration-200 hover:bg-[#f0b90b] ${
          mobileFull ? "w-full sm:w-auto" : ""
        }`}
      >
        {service.cta}
        <ExternalLink className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <span className="inline-flex items-center justify-center rounded-md border border-[#2b3139] bg-[#1e2329] px-4 py-2 text-sm font-medium text-[#707a8a]">
      준비중
    </span>
  );
}

function HeroShortcutChip({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <a
      href={`#${service.id}`}
      className="flex min-w-0 items-center gap-3 rounded-xl border border-[#2b3139] bg-[#1e2329] px-3 py-4 transition-colors duration-200 hover:border-[#fcd535]"
    >
      <div
        className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#fcd535] text-[#181a20]"
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-[0.62rem] tracking-[0.22em] text-[#707a8a] uppercase">
          {service.volume}
        </p>
        <p className="mt-1 text-sm leading-5 font-semibold tracking-[-0.02em] text-white break-keep">
          {service.title}
        </p>
      </div>
    </a>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  if (service.links?.length) {
    return (
      <details
        id={service.id}
        className="group rounded-xl border border-[#2b3139] bg-[#1e2329] px-4 py-5 transition-colors duration-200 open:border-[#fcd535] open:bg-[#1e2329] sm:px-6 sm:py-6"
      >
        <summary className="flex cursor-pointer list-none flex-col gap-5 [&::-webkit-details-marker]:hidden">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#fcd535] text-[#181a20] sm:h-14 sm:w-14"
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] tracking-[0.28em] text-[#707a8a] uppercase">
                  {service.volume}
                </p>
                <h3 className="mt-2 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.03em] text-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#eaecef] sm:leading-7">
                  {service.description}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 self-start rounded-md border border-[#2b3139] bg-[#0b0e11] px-4 py-2 text-sm font-medium text-[#eaecef] transition-colors duration-200 group-open:border-[#fcd535] group-open:text-[#fcd535]">
              링크 펼치기
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-[#2b3139] pt-5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#2b3139] bg-[#0b0e11] px-3 py-1 text-[0.78rem] font-medium text-[#929aa5]"
              >
                {tag}
              </span>
            ))}
          </div>
        </summary>

        <div className="border-t border-[#2b3139] pt-5">
          <LinkButtons service={service} mobileFull />
        </div>
      </details>
    );
  }

  return (
    <article
      id={service.id}
      className="rounded-xl border border-[#2b3139] bg-[#1e2329] px-4 py-5 transition-colors duration-200 hover:border-[#fcd535] sm:px-6 sm:py-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div
            className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#fcd535] text-[#181a20] sm:h-14 sm:w-14"
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.68rem] tracking-[0.28em] text-[#707a8a] uppercase">
              {service.volume}
            </p>
            <h3 className="mt-2 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.03em] text-white sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#eaecef] sm:leading-7">
              {service.description}
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <LinkButtons service={service} mobileFull />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-[#2b3139] pt-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[#2b3139] bg-[#0b0e11] px-3 py-1 text-[0.78rem] font-medium text-[#929aa5]"
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
    <main className="min-h-screen bg-[#0b0e11] px-3 py-4 text-[#eaecef] md:px-6 md:py-6">
      <div className="mx-auto w-full max-w-[430px]">
        <header className="sticky top-3 z-30 rounded-xl border border-[#2b3139] bg-[#0b0e11]/96 px-4 py-3 backdrop-blur md:top-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#2b3139] bg-[#1e2329]">
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
                <p className="text-[0.72rem] tracking-[0.25em] text-[#707a8a] uppercase">
                  One-page Service
                </p>
                <h1 className="text-lg font-semibold tracking-[-0.04em] text-[#fcd535]">
                  LET&apos;S DAPA
                </h1>
              </div>
            </div>
            <nav className="hidden items-center gap-12 text-sm font-medium text-[#929aa5]">
              <a href="#services">서비스 종류</a>
              <a href="#shortcut">사용방법</a>
            </nav>
          </div>
        </header>

        <section className="relative mt-3 overflow-hidden rounded-xl border border-[#2b3139] bg-[#0b0e11] px-5 py-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#2b3139]" />

          <div className="relative z-10 grid gap-8">
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-md border border-[#2b3139] bg-[#1e2329] px-3 py-1 text-xs font-semibold tracking-[0.22em] text-[#929aa5] uppercase">
                방사청 직원을 위해
              </div>
              <h2 className="mt-4 text-[2.9rem] font-bold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl">
                LET&apos;S DAPA
              </h2>
              <p className="mt-4 text-base leading-7 text-[#eaecef]">
                모바일에서 바로 열고, 바로 누를 수 있게 5가지 서비스를 간단하게 모았습니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#fcd535] bg-[#fcd535] px-6 py-3 text-sm font-semibold !text-[#181a20] transition-colors duration-200 hover:bg-[#f0b90b]"
                >
                  서비스 보기
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="min-w-[7.25rem] rounded-xl border border-[#2b3139] bg-[#1e2329] px-4 py-4">
                  <p className="text-xs tracking-[0.2em] text-[#707a8a] uppercase">
                    서비스
                  </p>
                  <p className="font-number mt-2 text-2xl font-bold tracking-[-0.04em] text-[#fcd535]">
                    05
                  </p>
                </div>
                <div className="min-w-[7.25rem] rounded-xl border border-[#2b3139] bg-[#1e2329] px-4 py-4">
                  <p className="text-xs tracking-[0.2em] text-[#707a8a] uppercase">
                    형태
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                    모바일형
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <HeroShortcutChip key={service.id} service={service} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mt-10 rounded-xl border border-[#2b3139] bg-[#0b0e11] px-4 py-7"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.28em] text-[#707a8a] uppercase">
                Services
              </p>
              <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-[#fcd535]">
                서비스가 궁금하다면?
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#929aa5]">
              자주 쓰는 순서대로 눌러보고, 필요한 서비스만 바로 열면 됩니다.
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
          className="mt-10 rounded-xl border border-[#2b3139] bg-[#1e2329] px-4 py-7"
        >
          <div className="grid gap-6">
            <div>
              <p className="text-xs tracking-[0.28em] text-[#707a8a] uppercase">
                사용방법
              </p>
              <h2 className="mt-3 text-[2rem] font-semibold leading-[1.2] tracking-[-0.05em] text-white">
                홈 화면 추가시,
                <br />
                앱처럼 바로 확인 가능
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#eaecef]">
                자주 쓰는 경우, 홈 화면 추가로 바로 확인 가능
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[#2b3139] bg-[#0b0e11] p-5">
                <p className="text-sm font-bold tracking-[0.18em] text-[#1a7f37] uppercase">
                  ANDROID(갤럭시)
                </p>
                <p className="mt-3 text-sm leading-7 text-[#eaecef]">
                  우측 상단 브라우저 메뉴 클릭,
                  <br />
                  `홈 화면에 추가` 선택
                </p>
              </div>
              <div className="rounded-xl border border-[#2b3139] bg-[#0b0e11] p-5">
                <p className="text-sm font-bold tracking-[0.18em] text-[#f6465d] uppercase">
                  IPHONE(아이폰)
                </p>
                <p className="mt-3 text-sm leading-7 text-[#eaecef]">
                  Safari 공유 메뉴 클릭,
                  <br />
                  `홈 화면에 추가` 선택
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 rounded-t-xl bg-[#fafafa] px-4 py-10 text-[#181a20]">
          <div className="flex flex-col gap-3 border-t border-[#eaecef] pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[-0.03em] text-[#181a20]">
                LET&apos;S DAPA
              </p>
              <p className="mt-1 text-sm text-[#707a8a]">
                직원의 업무 효율을 위한 One-Page 서비스
              </p>
            </div>
            <p className="text-xs tracking-[0.22em] text-[#707a8a] uppercase">
              5가지 유용한 서비스를 통해 업무 효율성 UP
            </p>
          </div>
          <p className="mt-6 border-t border-[#eaecef] pt-4 text-xs leading-6 text-[#707a8a]">
            All rights reserved • © 2026 JYH, DAPA.
          </p>
        </footer>
      </div>
    </main>
  );
}
