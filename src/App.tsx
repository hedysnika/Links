import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="h-auto min-h-screen">
      <div className="flex items-center justify-center h-screen text-center">
        <pre>
          <div className="text-5xl font-semibold">τὰ φίλτατα Nike</div> <br />
          <a href="https://github.com/hedysnika/" target="_blank">
            <div className="flex justify-center mt-4 mb-3 text-xl  hover:text-[#669e88]">
              Github <Icon icon="mdi:github" color="black" width="24" height="24" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nikko-undefined-3626ab255/" target="_blank">
            <div className="flex justify-center my-3 text-xl  hover:text-[#669e88]">
              Linked
              <Icon icon="mdi:linkedin" color="black" width="24" height="24" />
            </div>
          </a>
          <a href="https://twitter.com/hedysnike" target="_blank">
            <div className="flex justify-center my-3 text-xl  hover:text-[#669e88]">
              twitter <Icon icon="ph:twitter-logo" color="black" width="24" height="24" />
            </div>
            <a href="" target="_blank"><div className="flex justify-center my-3 text-xl  hover:text-[#669e88] ">Telegram <Icon icon="ic:baseline-telegram" color="#249ed7" width="24" height="24" /></div></a>
          </a>
          <div className="flex justify-center my-3 text-xl  hover:text-[#669e88]">Portfolio Website</div>
        </pre>
      </div>
    </div>
  );
}

export default App;
