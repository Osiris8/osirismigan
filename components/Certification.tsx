export default function Certification() {
  return (
    <div className="container max-w-2xl mx-auto p-6">
      <h2 className="text-3xl mb-6 font-bold">Certifications</h2>
      <div className="flex flex-col text-left">
        <h4 className="text-xl font-semibold">Pretraining LLMs</h4>
        <div className="flex text-md text-gray-600">
          <a
            href="https://learn.deeplearning.ai/accomplishments/5a84f143-f065-4702-9cba-341f85e38af3?usp=sharing"
            target="_blank"
            className="underline"
          >
            DeepLearning AI
          </a>
        </div>
      </div>

      <div className="flex flex-col text-left mt-4">
        <h4 className="text-xl font-semibold">Post-training of LLMs</h4>
        <div className="text-md text-gray-600">
          <a
            href="https://learn.deeplearning.ai/accomplishments/1fcf201d-5d44-4f32-b13e-b3b8f4e8d1fd?usp=sharing"
            className="underline"
            target="_blank"
          >
            DeepLearning AI
          </a>
        </div>
      </div>

      <div className="flex flex-col text-left mt-4">
        <h4 className="text-xl font-semibold">
          Finetuning Large Language Models
        </h4>
        <div className="text-md text-gray-600">
          <a
            href="https://learn.deeplearning.ai/accomplishments/e9787edb-df4e-4444-85ea-075026db500c?usp=sharing"
            className="underline"
            target="_blank"
          >
            DeepLearning AI
          </a>
        </div>
      </div>

      <div className="flex flex-col text-left mt-4">
        <h4 className="text-xl font-semibold">LLMOps</h4>
        <div className="text-md text-gray-600">
          <a
            href="https://learn.deeplearning.ai/accomplishments/325aa8a6-8151-4cf3-ac68-af590b38c775?usp=sharing"
            className="underline"
            target="_blank"
          >
            DeepLearning AI
          </a>
        </div>
        <br />
        <img src="https://cdn-uploads.huggingface.co/production/uploads/noauth/p0k9aTic2kw-pHuIpx_4t.webp" />
        <br />
        <img
          src="https://huggingface-course-unit-3-quiz.hf.space/gradio_api/file=/tmp/gradio/84ee44f40398db7c90040b4d57382b39435763cd291eef4884d5a7fad2b214bb/image.webp"
          alt=""
        />
      </div>
    </div>
  );
}
