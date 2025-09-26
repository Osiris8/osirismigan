import Link from "next/link";
import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <div className="container max-w-2xl mx-auto p-6">
      <div className="card w-full card-xl shadow-sm">
        <div className="card-body">
          <h2 className="card-title">
            Ready to Bring Your Tech Project to Life?
          </h2>
          <div className="flex justify-between items-center">
            <p className="w-96 pr-12">Let’s turn your ideas into reality.</p>
            <div className="justify-end card-actions">
              <Button asChild>
                <Link href="mailto:miganosiris8@gmail.com">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
