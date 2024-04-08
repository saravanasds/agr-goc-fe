import React from "react";
import "./business.css";
import { BsPersonFillCheck } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiFillUnlock } from "react-icons/ai";
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";
import { TbHexagonNumber4 } from "react-icons/tb";

function Business() {
  return (
    <div className="scheme">
      <div className="heading">
        <h1>Business</h1>
      </div>

      <div className="scheme-main">
        <div className="scheme-left ">
          <div className="steps">
            <h1 className="text-black font-bold">How <span className="text-white">Investment Works</span> In Our Scheme</h1>
            <div className="step">
              <TbHexagonNumber1 className="one w-20 h-20 z-10 bg-[#057d45] text-white rounded-full"/>
              <h2 className="create">Create Account</h2>
            </div>
            <div className="step">
              <TbHexagonNumber2 className="two w-20 h-20 z-10 bg-white text-[#3E4095] rounded-full" />
              <h2 className="choose">Choose Plan</h2>
            </div>
            <div className="step">
              <TbHexagonNumber3 className="three w-20 h-20 z-10 bg-[#057d45] text-white rounded-full"/>
              <h2 className="invest">Investment</h2>
            </div>
            <div className="step">
              <TbHexagonNumber4 className="four w-20 h-20 z-10 bg-white text-[#3E4095] rounded-full"/>
              <h2 className="get">Get Profit</h2>
            </div>
          </div>
          <div className="scheme-chart">
            <div className="scheme-box box-1">
              <div>
                <BsPersonFillCheck className="w-14 h-14" />
                <span>Join As Member</span>
              </div>
            </div>
            <div className="scheme-box box-2">
              <div>
                <GiMoneyStack className="w-14 h-14" />
                <span>Earn Multiple Imcome</span>
              </div>
            </div>
            <div className="scheme-box box-3">
              <div>
                <GiTakeMyMoney className="w-14 h-14" />
                <span>Get More Bonus</span>
              </div>
            </div>
            <div className="scheme-box box-4">
              <div>
                <AiFillUnlock className="w-14 h-14" />
                <span>Unlock Prices & Offers</span>
              </div>
            </div>
            <div className="circle">
              <img
                src="/assets/logos/agr logo 2.png"
                alt=""
                className=" h-32 opacity-30"
              />
            </div>
          </div>
          
        </div>
        

        {/* <div className="scheme-right">
          <div className="scheme-text">
            <h1>Join As Member:</h1>
            <p>
              Become a valued member of our AGR community today! Experience the
              power of our innovative system and unlock a world of exclusive
              benefits and opportunities.
            </p>
          </div>
          <div className="scheme-text">
            <h1>Earn Multiple Income Streams:</h1>
            <p>
              Whether it's through product sales,
              referrals, or other avenues, you'll discover a diverse range of
              ways to boost your earnings and achieve financial independence.
            </p>
          </div>
          <div className="scheme-text">
            <h1>Maximize Your Bonuses:</h1>
            <p>
              Active engagement within our AGR community ensures that your
              bonuses keep growing. Enjoy a plethora of exciting bonuses and
              incentives as you reach milestones and exceed your goals.
            </p>
          </div>
          <div className="scheme-text">
            <h1>Access Exclusive Prizes and Offers:</h1>
            <p>
              The rewards extend beyond bonuses, with exclusive prizes and
              offers waiting to be unlocked.our AGR platform ensures that your hard work is duly recognized and rewarded.
            </p>
          </div>
        </div> */}
      </div>
      <div className="scheme-bottom w-full h-60 m-0 flex"></div>
    </div>
  );
}

export default Business;
