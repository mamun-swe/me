/* eslint-disable jsx-a11y/anchor-is-valid */
import { PrimaryButton } from "components/button";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import socialLinks from "json/social-link.json";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-6 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="text-center lg:text-left lg:pr-10">
              <p className="text-base leading-loose break-after-auto mb-8 text-secondary">
                I'd like to work with any organization who believes my skills
                would be beneficial to them. Please inform if you're looking for
                someone similar to me. You may also simply say hello to me.
              </p>
              <a
                type="button"
                href="mailto:mamun.swe.277@gmail.com"
                className="btn shadow-none"
              >
                <PrimaryButton type="button" filled children="Contact Me" />
              </a>
            </div>
            <div className="p-3">
              <ContactContainer
                title="E-mail"
                address="mamun.swe.277@gmail.com"
              />
              <ContactContainer title="Skype" address="live:c0fc53cd8e6c958a" />
              <ContactContainer
                title="Address"
                address="Mirpur, Dhaka, Bangladesh"
              />

              {/* Follw me */}
              <div className="flex justify-center lg:justify-start gap-2">
                <a href={socialLinks.github} rel="noreferrer" target="_blank">
                  <AiOutlineGithub size={20} className="text-white" />
                </a>
                <a href={socialLinks.linkedin} rel="noreferrer" target="_blank">
                  <GrLinkedinOption size={20} className="text-white" />
                </a>
                <a href={socialLinks.leetcode} rel="noreferrer" target="_blank">
                  <SiLeetcode size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8">
        <p className="text-center text-base font-normal text-secondary">
          Thanks for visiting my portfolio.
        </p>
      </div>
    </div>
  );
};

/* Contact container */
type ContactContainerPropsTypes = {
  title: string;
  address: string;
};
const ContactContainer: React.FC<ContactContainerPropsTypes> = (
  props: ContactContainerPropsTypes
): JSX.Element => {
  return (
    <div className="mb-4 text-center lg:text-left">
      <p className="text-lg font-bold text-secondary">{props.title}</p>
      <p className="text-base text-secondary">{props.address}</p>
    </div>
  );
};
