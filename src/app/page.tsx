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
};

const services: Service[] = [
  {
    id: "law",
    volume: "No.1",
    title: "DAPA LAW",
    description:
      "국가법령정보 API를 기반으로 방위사업 관련 법령과 조문을 빠르게 조회할 수 있는 서비스입니다.",
    tags: ["#방위사업법", "#법령조회", "#업무도구", "#AI검색"],
    href: "https://chatgpt.com/g/g-69df91392e008191815400be2ce49858-dapa-law",
    cta: "바로가기",
    icon: Scale,
  },
  {
    id: "assembly",
    volume: "No.2",
    title: "지금, 실시간 국회",
    description:
      "대한민국 국회 정보를 기반으로 의원, 회의록, 의안 등 주요 국회 데이터를 빠르게 탐색하는 서비스입니다.",
    tags: ["#국회정보", "#실시간조회", "#회의록", "#의원명단"],
    href: "https://chatgpt.com/g/g-69db6c0fc1a48191a09f8a99241b82de-daehanmingug-gughoe-silsigan",
    cta: "바로가기",
    icon: Landmark,
  },
  {
    id: "lunch",
    volume: "No.3",
    title: "점심 메뉴 추천",
    description:
      "청사 구내식당 메뉴를 확인하고 오늘의 점심 선택을 빠르게 도와주는 모바일 중심 서비스입니다.",
    tags: ["#구내식당", "#오늘메뉴", "#과천청사", "#점심추천"],
    links: [
      { label: "구내식당", href: "/cafeteria" },
      { label: "오늘 메뉴", href: "https://lets-dapa-lunch.vercel.app/" },
    ],
    icon: UtensilsCrossed,
  },
  {
    id: "market",
    volume: "No.4",
    title: "DAPA 거래장터",
    description:
      "직원 간 중고거래와 생활 공유를 위해 연결된 카카오톡 오픈채팅 진입 채널입니다.",
    tags: ["#중고거래", "#카카오톡", "#직원커뮤니티", "#생활공유"],
    href: "https://open.kakao.com/o/gcHPS7pi",
    cta: "바로가기",
    icon: ShoppingBag,
  },
  {
    id: "welfare",
    volume: "No.5",
    title: "과천청사 복지시설",
    description:
      "청사 내외 복지시설과 편의공간 정보를 한 번에 확인할 수 있도록 연결한 안내 서비스입니다.",
    tags: ["#복지시설", "#은행", "#카페", "#식당", "#병원", "#편의점"],
    href: "https://gbmo.go.kr/chungsa/bl/cvntl/selectCvntlList.do?gbdId=CD004&mi=1144",
    cta: "바로가기",
    icon: BriefcaseMedical,
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
            className={`inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-[#292524] bg-[#292524] px-3 py-2 text-sm font-medium !text-white transition-colors duration-200 hover:bg-[#0c0a09] sm:px-4 ${
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
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#292524] bg-[#292524] px-4 py-2 text-sm font-medium !text-white transition-colors duration-200 hover:bg-[#0c0a09] ${
          mobileFull ? "w-full sm:w-auto" : ""
        }`}
      >
        {service.cta}
        <ExternalLink className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <span className="inline-flex items-center justify-center rounded-full border border-[#d6d3d1] bg-transparent px-4 py-2 text-sm font-medium text-[#777169]">
      준비 중
    </span>
  );
}

function HeroShortcutChip({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <a
      href={`#${service.id}`}
      className="flex min-w-0 items-center gap-3 rounded-2xl border border-[#e7e5e4] bg-white px-3 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:border-[#d6d3d1]"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f0efed] text-[#292524]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-[0.62rem] tracking-[0.22em] text-[#777169] uppercase">
          {service.volume}
        </p>
        <p className="mt-1 text-sm leading-5 font-medium tracking-[0.16px] text-[#0c0a09] break-keep">
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
        className="group rounded-2xl border border-[#e7e5e4] bg-white px-4 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-colors duration-200 open:border-[#d6d3d1] sm:px-6 sm:py-6"
      >
        <summary className="flex cursor-pointer list-none flex-col gap-5 [&::-webkit-details-marker]:hidden">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f0efed] text-[#292524] sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] tracking-[0.28em] text-[#777169] uppercase">
                  {service.volume}
                </p>
                <h3 className="mt-2 text-[1.6rem] leading-[1.12] tracking-[-0.04em] text-[#0c0a09] sm:text-[2rem]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4e4e4e] sm:leading-7">
                  {service.description}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#d6d3d1] bg-transparent px-4 py-2 text-sm font-medium text-[#292524]">
              링크 펼치기
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-[#e7e5e4] pt-5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e7e5e4] bg-[#f0efed] px-3 py-1 text-[0.78rem] font-medium text-[#292524]"
              >
                {tag}
              </span>
            ))}
          </div>
        </summary>

        <div className="border-t border-[#e7e5e4] pt-5">
          <LinkButtons service={service} mobileFull />
        </div>
      </details>
    );
  }

  return (
    <article
      id={service.id}
      className="rounded-2xl border border-[#e7e5e4] bg-white px-4 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:border-[#d6d3d1] sm:px-6 sm:py-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f0efed] text-[#292524] sm:h-14 sm:w-14">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.68rem] tracking-[0.28em] text-[#777169] uppercase">
              {service.volume}
            </p>
            <h3 className="mt-2 text-[1.6rem] leading-[1.12] tracking-[-0.04em] text-[#0c0a09] sm:text-[2rem]">
              {service.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4e4e4e] sm:leading-7">
              {service.description}
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <LinkButtons service={service} mobileFull />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-[#e7e5e4] pt-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#e7e5e4] bg-[#f0efed] px-3 py-1 text-[0.78rem] font-medium text-[#292524]"
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
    <main className="min-h-screen bg-[#f5f5f5] px-3 py-4 text-[#0c0a09] md:px-6 md:py-6">
      <div className="mx-auto w-full max-w-[430px]">
        <header className="sticky top-3 z-30 rounded-2xl border border-[#e7e5e4] bg-[#f5f5f5]/92 px-4 py-3 backdrop-blur md:top-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#e7e5e4] bg-white">
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
                <p className="text-[0.72rem] tracking-[0.25em] text-[#777169] uppercase">
                  One-page Service
                </p>
                <h1 className="text-lg font-medium tracking-[0.16px] text-[#0c0a09]">
                  LET&apos;S DAPA
                </h1>
              </div>
            </div>
            <nav className="hidden items-center gap-12 text-sm font-medium text-[#4e4e4e]">
              <a href="#services">서비스 종류</a>
              <a href="#shortcut">사용 방법</a>
            </nav>
          </div>
        </header>

        <section className="relative mt-3 overflow-hidden rounded-[24px] border border-[#e7e5e4] bg-[#fafafa] px-5 py-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="orb-mint pointer-events-none absolute -top-14 right-[-3rem] h-44 w-44 rounded-full blur-xl" />
          <div className="orb-lavender pointer-events-none absolute bottom-[-2rem] left-[-2rem] h-40 w-40 rounded-full blur-xl" />

          <div className="relative z-10 grid gap-8">
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e5e4] bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-[#777169] uppercase">
                방위사업청 직원을 위해
              </div>
              <h2 className="mt-4 text-[2.8rem] leading-[0.95] tracking-[-0.06em] text-[#0c0a09] sm:text-6xl">
                LET&apos;S DAPA
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4e4e4e]">
                모바일에서 바로 열고, 바로 찾을 수 있게 5가지 서비스를 한 화면에 정리했습니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#292524] bg-[#292524] px-6 py-3 text-sm font-medium !text-white transition-colors duration-200 hover:bg-[#0c0a09]"
                >
                  서비스 보기
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="min-w-[7.25rem] rounded-2xl border border-[#e7e5e4] bg-white px-4 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <p className="text-xs tracking-[0.2em] text-[#777169] uppercase">
                    서비스
                  </p>
                  <p className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#0c0a09]">
                    05
                  </p>
                </div>
                <div className="min-w-[7.25rem] rounded-2xl border border-[#e7e5e4] bg-white px-4 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <p className="text-xs tracking-[0.2em] text-[#777169] uppercase">
                    형태
                  </p>
                  <p className="mt-2 text-xl font-medium tracking-[-0.03em] text-[#292524]">
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
          className="relative mt-10 overflow-hidden rounded-[24px] border border-[#e7e5e4] bg-[#fafafa] px-4 py-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
        >
          <div className="orb-peach pointer-events-none absolute right-[-2rem] top-[-2rem] h-32 w-32 rounded-full blur-xl" />
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.28em] text-[#777169] uppercase">
                Services
              </p>
              <h2 className="mt-3 text-[2rem] leading-[1.12] tracking-[-0.04em] text-[#0c0a09]">
                서비스가 궁금하다면?
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#4e4e4e]">
              자주 찾는 순서대로 둘러보고, 필요한 서비스만 바로 열면 됩니다.
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
          className="relative mt-10 overflow-hidden rounded-[24px] border border-[#e7e5e4] bg-white px-4 py-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
        >
          <div className="orb-sky pointer-events-none absolute left-[-1.5rem] top-[-1.5rem] h-28 w-28 rounded-full blur-xl" />
          <div className="orb-rose pointer-events-none absolute bottom-[-1rem] right-[-1rem] h-28 w-28 rounded-full blur-xl" />
          <div className="grid gap-6">
            <div>
              <p className="text-xs tracking-[0.28em] text-[#777169] uppercase">
                사용방법
              </p>
              <h2 className="mt-3 text-[2rem] leading-[1.16] tracking-[-0.04em] text-[#0c0a09]">
                홈 화면에 추가하고
                <br />
                앱처럼 바로 확인 가능
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#4e4e4e]">
                자주 여는 경우, 홈 화면에 추가해 두면 더 빠르게 접근할 수 있습니다.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#e7e5e4] bg-[#fafafa] p-5">
                <p className="text-sm font-semibold tracking-[0.18em] text-[#292524] uppercase">
                  ANDROID
                </p>
                <p className="mt-3 text-sm leading-7 text-[#4e4e4e]">
                  우측 상단 브라우저 메뉴를 누르고,
                  <br />
                  `홈 화면에 추가`를 선택하세요.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e7e5e4] bg-[#fafafa] p-5">
                <p className="text-sm font-semibold tracking-[0.18em] text-[#292524] uppercase">
                  IPHONE
                </p>
                <p className="mt-3 text-sm leading-7 text-[#4e4e4e]">
                  Safari 공유 메뉴를 누르고,
                  <br />
                  `홈 화면에 추가`를 선택하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 rounded-t-[24px] bg-[#f5f5f5] px-4 py-10 text-[#0c0a09]">
          <div className="flex flex-col gap-3 border-t border-[#e7e5e4] pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium tracking-[0.16px] text-[#0c0a09]">
                LET&apos;S DAPA
              </p>
              <p className="mt-1 text-sm text-[#4e4e4e]">
                직원 업무 효율을 위한 원페이지 서비스
              </p>
            </div>
            <p className="text-xs tracking-[0.22em] text-[#777169] uppercase">
              5가지 실용형 서비스를 통해 업무 효율성 UP
            </p>
          </div>
          <p className="mt-6 border-t border-[#e7e5e4] pt-4 text-xs leading-6 text-[#777169]">
            All rights reserved © 2026 JYH, DAPA.
          </p>
        </footer>
      </div>
    </main>
  );
}
