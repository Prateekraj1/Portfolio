const ResumeViewer = () => (
  <div className='py-10 flex flex-col'>
    <h3 className='font-semibold sm:text-3xl text-xl font-poppins'>My Resume</h3>
    <div className='mt-16'>
      <iframe
        src="./Prateek_Raj_SDE.pdf"
        className="w-full h-[90vh]"
        title="Resume"
      />
    </div>
  </div>
);
export default ResumeViewer;
