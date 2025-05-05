const Loading = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 pt-32 px-8 min-h-[calc(100vh-80px)] animate-pulse">
      <div className="space-y-6">
        <div className="h-10 w-2/3 bg-slate-300 rounded-md" />
        <div className="h-5 w-full bg-slate-200 rounded-md" />
        <div className="h-5 w-5/6 bg-slate-200 rounded-md" />
      </div>

      <div className="mt-10">
        <div className="h-8 w-1/3 bg-slate-300 rounded-md mb-8" />
        <div className="flex gap-8 flex-wrap">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="w-20 h-20 bg-slate-200 rounded-xl" />
            ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="h-8 w-1/2 bg-slate-300 rounded-md mb-4" />
        <div className="space-y-8">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="bg-slate-200 p-6 rounded-lg">
                <div className="h-5 w-1/4 bg-slate-300 rounded-md mb-2" />
                <div className="h-4 w-1/2 bg-slate-200 rounded-md mb-2" />
                <div className="space-y-2 mt-4">
                  {Array(3)
                    .fill(0)
                    .map((__, i) => (
                      <div
                        key={i}
                        className="h-3 w-5/6 bg-slate-100 rounded-md"
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="h-8 w-1/3 bg-slate-300 rounded-md mb-6" />
        <div className="w-full h-[70vh] bg-slate-200 rounded-md" />
      </div>
    </section>
  );
};

export default Loading;
