import React from 'react';

const sectionClasses = "bg-background text-foreground py-12";
const containerClasses = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center";
const headingClasses = "text-3xl font-extrabold text-primary";
const paragraphClasses = "mt-4 text-lg text-muted-foreground";
const wrapperClasses = "bg-white p-6 rounded-lg shadow-lg"; // Wrapper box styles
const gridClasses = "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"; // Grid layout for responsive design
const caseStudyClasses = "flex flex-col items-center text-center";
const imageClasses = "rounded-lg shadow-lg w-full h-auto";

const CaseStudies = () => {
  return (
    <div className={sectionClasses}>
      <div className={containerClasses}>
        <h2 className={headingClasses}>Latest Case Studies</h2>
        <p className={paragraphClasses}>
          Explore our most recent case studies showcasing innovative research and successful projects in diagnostics and laboratory technology.
        </p>
      </div>
      <div className={wrapperClasses}>
        <div className={gridClasses}>
          <div className={caseStudyClasses}>
            <CaseStudyImage
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-6.jpg"
              alt="Microscopic view of cells"
            />
            <h3 className="text-xl font-semibold mt-4">Advanced Microscopy Techniques</h3>
            <p className="text-muted-foreground mt-2">
              Our latest research in microscopy has led to groundbreaking techniques that enhance cell imaging and provide unprecedented detail.
            </p>
          </div>
          <div className={caseStudyClasses}>
            <CaseStudyImage
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-1.jpg"
              alt="Scientist working in a lab"
            />
            <h3 className="text-xl font-semibold mt-4">Innovative Laboratory Practices</h3>
            <p className="text-muted-foreground mt-2">
              Discover how our lab is implementing new practices to improve efficiency and accuracy in diagnostic testing and research.
            </p>
          </div>
          <div className={caseStudyClasses}>
            <CaseStudyImage
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-2.jpg"
              alt="Close-up of a microscope"
            />
            <h3 className="text-xl font-semibold mt-4">Microscope Technology Evolution</h3>
            <p className="text-muted-foreground mt-2">
              A deep dive into the evolution of microscope technology and its impact on research and diagnostics in modern labs.
            </p>
          </div>
          <div className={caseStudyClasses}>
            <CaseStudyImage
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-3.jpg"
              alt="Pipette and test tubes"
            />
            <h3 className="text-xl font-semibold mt-4">Precision in Sample Handling</h3>
            <p className="text-muted-foreground mt-2">
              Learn about our techniques for ensuring precision in sample handling and preparation, crucial for accurate diagnostic results.
            </p>
          </div>
          <div className={caseStudyClasses}>
            <CaseStudyImage
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-4.jpg"
              alt="Scientist using a microscope"
            />
            <h3 className="text-xl font-semibold mt-4">Breakthroughs in Diagnostic Research</h3>
            <p className="text-muted-foreground mt-2">
              This case study highlights recent breakthroughs in diagnostic research, showcasing the latest advancements in our field.
            </p>
          </div>
          <div className={caseStudyClasses}>
            <CaseStudyImage
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-5.jpg"
              alt="Scientist handling a vial"
            />
            <h3 className="text-xl font-semibold mt-4">Revolutionizing Sample Analysis</h3>
            <p className="text-muted-foreground mt-2">
              Explore how our new methods in sample analysis are revolutionizing laboratory practices and improving diagnostic accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudyImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className={imageClasses} />;
};

export default CaseStudies;
