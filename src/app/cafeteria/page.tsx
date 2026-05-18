import Image from "next/image";
import Link from "next/link";

type CafeteriaItem = {
  dietSeq: number;
  dietDate: number;
  dietTy: string;
  fileStreCours: string;
  orignlFileNm: string;
  altrtvText?: string;
};

type CafeteriaResult = {
  error?: string;
  items: CafeteriaItem[];
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const CAFETERIA_API_URL =
  "https://www.gbmo.go.kr/chungsa/dv/dietView/selectDietView.do";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function requestCafeteriaData() {
  return fetch(CAFETERIA_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json, text/javascript, */*; q=0.01",
      "X-Requested-With": "XMLHttpRequest",
      Referer:
        "https://www.gbmo.go.kr/chungsa/dv/dietView/selectDietCalendarView.do?mi=1277",
      Origin: "https://www.gbmo.go.kr",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
    },
    body: JSON.stringify({
      sysId: "chungsa",
      gbd: "CD004",
      rc: "1043",
    }),
    cache: "no-store",
  });
}

async function getCafeteriaData(): Promise<CafeteriaResult> {
  let lastError = "?앸떒???곗씠?곕? 遺덈윭?ㅼ? 紐삵뻽?듬땲??";

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await requestCafeteriaData();

      if (!response.ok) {
        lastError = `?앸떒???곗씠?곕? 遺덈윭?ㅼ? 紐삵뻽?듬땲?? (${response.status})`;
      } else {
        const items = (await response.json()) as CafeteriaItem[];

        if (items.length > 0) {
          return { items };
        }

        lastError = "?앸떒???곗씠?곕뒗 ?곌껐?섏뿀吏留??쒖떆????ぉ???놁뒿?덈떎.";
      }
    } catch (error) {
      lastError =
        error instanceof Error
          ? error.message
          : "?앸떒???곗씠?곕? 遺덈윭?ㅻ뒗 以??ㅻ쪟媛 諛쒖깮?덉뒿?덈떎.";
    }

    if (attempt < 3) {
      await sleep(700);
    }
  }

  return { items: [], error: lastError };
}

export default async function CafeteriaPage() {
  const { items, error } = await getCafeteriaData();
  const current = items[0];

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-3 py-4 text-[#0c0a09] sm:px-4 sm:py-6">
      <div className="mx-auto w-full max-w-[430px]">
        <div className="mb-3">
          <Link
            href="/"
            replace
            className="inline-flex min-h-11 items-center rounded-full border border-[#d6d3d1] bg-white px-4 py-2 text-sm font-medium text-[#292524]"
          >
            LET&apos;S DAPA濡??뚯븘媛湲?
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-[#e7e5e4] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] sm:p-6">
          <div className="orb-sky pointer-events-none absolute -top-10 right-[-2rem] h-36 w-36 rounded-full blur-xl" />
          <div className="orb-peach pointer-events-none absolute bottom-[-2rem] left-[-1rem] h-32 w-32 rounded-full blur-xl" />

          <p className="relative z-10 text-xs tracking-[0.24em] text-[#777169] uppercase">
            Cafeteria Weekly Menu
          </p>
          <h1 className="relative z-10 mt-3 text-3xl leading-[1.08] tracking-[-0.04em] text-[#0c0a09]">
            怨쇱쿇泥?궗 二쇨컙?앸떒???꾩껜)
          </h1>
          <p className="relative z-10 mt-4 text-sm leading-7 text-[#4e4e4e]">
            ?뺣?怨쇱쿇泥?궗 援щ궡?앸떦??二쇨컍?앸떒?쒕? 湲곕낯媛믪쑝濡?遺덈윭?붿뒿?덈떎.
          </p>

          {current ? (
            <div className="relative z-10 mt-8 overflow-hidden rounded-2xl border border-[#e7e5e4] bg-[#fafafa]">
              <div className="border-b border-[#e7e5e4] px-5 py-4">
                <p className="text-sm font-medium text-[#292524]">
                  {current.orignlFileNm}
                </p>
              </div>
              <Image
                src={`https://www.gbmo.go.kr${current.fileStreCours}`}
                alt={current.altrtvText || current.orignlFileNm}
                width={1400}
                height={2000}
                sizes="(max-width: 1024px) 100vw, 960px"
                className="h-auto w-full"
                priority
              />
            </div>
          ) : (
            <div className="relative z-10 mt-8 rounded-2xl border border-[#e7e5e4] bg-[#fafafa] px-5 py-8 text-sm leading-7 text-[#4e4e4e]">
              <p>二쇨컍?앸떒?쒕? ?먮룞?쇰줈 遺덈윭?ㅼ? 紐삵뻽?듬땲??</p>
              {error ? <p className="mt-2 text-[#777169]">{error}</p> : null}
              <p className="mt-2">
                ?쒕쾭?먯꽌 理쒕? 3?뚭퉴吏 ?ъ떆?꾪븳 ?ㅼ뿉??遺덈윭?ㅼ? 紐삵븳 寃쎌슦?낅땲??
              </p>
              <p className="mt-2">
                ?꾨옒 踰꾪듉???뚮윭 ?먮낯 ?앸떦 ?섏씠吏?먯꽌 吏곸젒 ?뺤씤?????덉뒿?덈떎.
              </p>
            </div>
          )}

          <div className="relative z-10 mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.gbmo.go.kr/chungsa/dv/dietView/selectDietCalendarView.do?mi=1277"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-full border border-[#292524] bg-[#292524] px-5 py-3 text-sm font-medium !text-white transition-colors duration-200 hover:bg-[#0c0a09]"
            >
              ?ㅻⅨ ?앸떦 議고쉶?섍린
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
