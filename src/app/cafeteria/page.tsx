import Image from "next/image";

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
  let lastError = "식단표 데이터를 불러오지 못했습니다.";

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await requestCafeteriaData();

      if (!response.ok) {
        lastError = `식단표 데이터를 불러오지 못했습니다. (${response.status})`;
      } else {
        const items = (await response.json()) as CafeteriaItem[];

        if (items.length > 0) {
          return { items };
        }

        lastError = "식단표 데이터는 연결되었지만 표시할 항목이 없습니다.";
      }
    } catch (error) {
      lastError =
        error instanceof Error
          ? error.message
          : "식단표 데이터를 불러오는 중 오류가 발생했습니다.";
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
    <main className="min-h-screen bg-[#f8f2e8] px-3 py-4 text-neutral-950 sm:px-4 sm:py-6">
      <div className="mx-auto w-full max-w-[430px]">
        <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-6">
          <p className="text-xs tracking-[0.24em] text-neutral-500 uppercase">
            Cafeteria Weekly Menu
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
            과천청사 주간식단표(전체)
          </h1>
          <p className="mt-4 text-sm leading-7 text-neutral-700">
            정부과천청사 구내식당의 주간식단표를 기본값으로 불러왔습니다.
          </p>

          {current ? (
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#fffaf2]">
              <div className="border-b border-black/10 px-5 py-4">
                <p className="text-sm font-medium text-neutral-700">
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
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-black/10 bg-[#fffaf2] px-5 py-8 text-sm leading-7 text-neutral-600">
              <p>주간식단표를 자동으로 불러오지 못했습니다.</p>
              {error ? <p className="mt-2 text-neutral-500">{error}</p> : null}
              <p className="mt-2">
                서버에서 최대 3회까지 재시도한 뒤에도 불러오지 못한 경우입니다.
              </p>
              <p className="mt-2">
                아래 버튼을 눌러 원본 식당 페이지에서 직접 확인할 수 있습니다.
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.gbmo.go.kr/chungsa/dv/dietView/selectDietCalendarView.do?mi=1277"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-full border border-black bg-black px-5 py-3 text-sm font-medium !text-white"
            >
              다른 식당 조회하기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
