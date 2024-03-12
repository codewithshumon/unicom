import FundingOptionsBox from "../components/fundingOptions/FundingOptionsBox";
import { FindGrants } from "../components/global";

const FundingOptions = () => {
  return (
    <div className=" w-full h-full">
      <section className=" w-full h-full pt-[25vh] ">
        <div className=" w-full h-[100vh] px-[5%] py-[10vh]  flex flex-row gap-[10vh]">
          <div className=" w-[40vw] flex flex-col justify-between pb-[5vh]">
            <div>
              <h1 className="text-[10vh] leading-none text-[#282866]">
                Funding <br />
                <span className="text-[#8282FF]">Options</span>
              </h1>
            </div>
            <FindGrants />
          </div>
          <div className=" w-[40vw]">
            <div className=" w-[85%] flex flex-col gap-[5vh] text-[4vh] text-[#282866]">
              <p>
                You know there is funding out there, but you don’t know who to
                talk to or where to find it.
              </p>
              <p>
                So we have done the hard work for you and united the best
                funding experts. We selected three primary sectors including
                grants, renewable energy rebates and venture capital funding.
              </p>
              <p>
                Our partners often work on a success fee only so this service is
                at little or no cost to you.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full px-[5%]">
          <div className=" w-full  h-[.4vh] rounded-full bg-[#282866] "></div>
        </div>
      </section>

      <section className=" w-full h-full">
        <div className=" w-full h-full px-[5%] pb-[15vh]">
          <FundingOptionsBox
            number={"01"}
            title={"Government"}
            seondTitle={"Grants"}
            firstPara={`Up to 90% of businesses don’t know what grants are available
                  to them. They leave funding on the table—sometimes for years!`}
            secondPara={`We make sure you are aware of the right grants and you can
                  access them pain free. Our grant partner has helped over 700+
                  companies access grants and does not charge you until they win
                  the grant.`}
            listTitle={`Some of the options that are available`}
            listParaOne={`The Research and Development Grant`}
            listParaTwo={`The Export Marketing Development Grant`}
            listParaThree={`Other Grants and Reimbursements`}
          />
          <FundingOptionsBox
            number={"02"}
            title={"The Research and"}
            seondTitle={"Development Grant"}
            firstPara={`Up to 90% of businesses don’t know what grants are available
                  to them. They leave funding on the table—sometimes for years!`}
            secondPara={`We make sure you are aware of the right grants and you can
                  access them pain free. Our grant partner has helped over 700+
                  companies access grants and does not charge you until they win
                  the grant.`}
            listTitle={`Some of the options that are available`}
            listParaOne={`The Research and Development Grant`}
            listParaTwo={`The Export Marketing Development Grant`}
            listParaThree={`Other Grants and Reimbursements`}
          />
          <FundingOptionsBox
            number={"03"}
            title={"The Export Marketing"}
            seondTitle={"Development Grant"}
            firstPara={`Up to 90% of businesses don’t know what grants are available
                  to them. They leave funding on the table—sometimes for years!`}
            secondPara={`We make sure you are aware of the right grants and you can
                  access them pain free. Our grant partner has helped over 700+
                  companies access grants and does not charge you until they win
                  the grant.`}
            listTitle={`Some of the options that are available`}
            listParaOne={`The Research and Development Grant`}
            listParaTwo={`The Export Marketing Development Grant`}
            listParaThree={`Other Grants and Reimbursements`}
          />
          <FundingOptionsBox
            number={"04"}
            title={"Other Grants and"}
            seondTitle={"Reimbursements"}
            firstPara={`Up to 90% of businesses don’t know what grants are available
                  to them. They leave funding on the table—sometimes for years!`}
            secondPara={`We make sure you are aware of the right grants and you can
                  access them pain free. Our grant partner has helped over 700+
                  companies access grants and does not charge you until they win
                  the grant.`}
            listTitle={`Some of the options that are available`}
            listParaOne={`The Research and Development Grant`}
            listParaTwo={`The Export Marketing Development Grant`}
            listParaThree={`Other Grants and Reimbursements`}
          />
          <FundingOptionsBox
            number={"05"}
            title={"Other Grants and"}
            seondTitle={"Reimbursements"}
            firstPara={`Up to 90% of businesses don’t know what grants are available
                  to them. They leave funding on the table—sometimes for years!`}
            secondPara={`We make sure you are aware of the right grants and you can
                  access them pain free. Our grant partner has helped over 700+
                  companies access grants and does not charge you until they win
                  the grant.`}
            listTitle={`Some of the options that are available`}
            listParaOne={`The Research and Development Grant`}
            listParaTwo={`The Export Marketing Development Grant`}
            listParaThree={`Other Grants and Reimbursements`}
          />
          <FundingOptionsBox
            number={"06"}
            title={"Renewable Energy"}
            seondTitle={"Rebates"}
            firstPara={`Up to 90% of businesses don’t know what grants are available
                  to them. They leave funding on the table—sometimes for years!`}
            secondPara={`We make sure you are aware of the right grants and you can
                  access them pain free. Our grant partner has helped over 700+
                  companies access grants and does not charge you until they win
                  the grant.`}
            listTitle={`Some of the options that are available`}
            listParaOne={`The Research and Development Grant`}
            listParaTwo={`The Export Marketing Development Grant`}
            listParaThree={`Other Grants and Reimbursements`}
          />
          <FundingOptionsBox
            number={"07"}
            title={"Venture Capital"}
            seondTitle={"Funding"}
            firstPara={`Up to 90% of businesses don’t know what grants are available
                  to them. They leave funding on the table—sometimes for years!`}
            secondPara={`We make sure you are aware of the right grants and you can
                  access them pain free. Our grant partner has helped over 700+
                  companies access grants and does not charge you until they win
                  the grant.`}
            listTitle={`Some of the options that are available`}
            listParaOne={`The Research and Development Grant`}
            listParaTwo={`The Export Marketing Development Grant`}
            listParaThree={`Other Grants and Reimbursements`}
          />
        </div>
      </section>
    </div>
  );
};

export default FundingOptions;
