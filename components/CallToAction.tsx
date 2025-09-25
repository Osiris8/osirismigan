export default function CallToAction() {
  return (
    <div className="container max-w-2xl mx-auto p-6" id="education">
      <div className="card w-full bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <h2 className="card-title">
            Ready to Bring Your Tech Project to Life?
          </h2>
          <div className="flex justify-between items-center">
            <p className="w-96 pr-12">Let’s turn your ideas into reality.</p>
            <div className="justify-end card-actions">
              <a
                href="mailto:miganosiris8@gmail.com"
                className="btn btn-primary"
                type="button"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
