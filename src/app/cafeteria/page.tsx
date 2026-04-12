type CafeteriaItem = {
  dietSeq: number;
  dietDate: number;
  dietTy: string;
  fileStreCours: string;
  orignlFileNm: string;
  altrtvText?: string;
};

async function getCafeteriaData() {
  const response = await fetch(
    "https://www.gbmo.go.kr/chungsa/dv/dietView/selectDietView.do",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({
        sysId: "chungsa",
        gbd: "CD004",
        rc: "1043",
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch cafeteria data: ${response.status}`);
  }

  return (await response.json()) as CafeteriaItem[];
}

export default async function CafeteriaPage() {
  const items = await getCafeteriaData();
  const current = items[0];

  return (
    <main className="min-h-screen bg-[#f8f2e8] px-6 py-12 text-neutral-950">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
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
              <img
                src={`https://www.gbmo.go.kr${current.fileStreCours}`}
                alt={current.altrtvText || current.orignlFileNm}
                className="h-auto w-full"
              />
            </div>
          ) : (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-black/10 bg-[#fffaf2] px-5 py-8 text-sm text-neutral-600">
              현재 표시할 식단표가 없습니다.
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
