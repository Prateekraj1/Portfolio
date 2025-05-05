const ContactShimmer = () => {
  return (
    <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 pt-[126px] px-8 min-h-[calc(100vh-80px)] animate-pulse">
      <div className="flex-1 min-w-[50%] flex flex-col gap-6">
        <div className="h-10 w-2/3 bg-slate-300 rounded-md" />
        <div className="h-5 w-1/2 bg-slate-200 rounded-md mt-10" />
        <div className="h-5 w-3/4 bg-slate-200 rounded-md" />
        <div className="h-5 w-2/3 bg-slate-200 rounded-md" />
        <div className="h-5 w-1/2 bg-slate-200 rounded-md" />
      </div>

      {/* Right Column - 3D model placeholder */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] mt-10 lg:mt-0">
        <div className="w-full h-full bg-slate-200 rounded-lg" />
      </div>
    </section>
  );
};

export default ContactShimmer;
