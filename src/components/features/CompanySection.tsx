import Image from 'next/image';
import React from 'react';

type CompanyData = {
  imagesrc: string;
  altText: string;
};

type Feature = {
  title: string;
  description: string;
  icon: string;
};

type IPCompanyProps = {
  companyData: CompanyData;
  features: Feature[];
};

const IPCompany: React.FC<IPCompanyProps> = ({ companyData, features }) => {
  const Heading = 'Turn any IP into a company object';
  const Paragraph
    = 'We track multiple market signals and data sources to provide the highest identification rates at the best quality in the market. Old school static IP to company databases are a thing of the past.';
  return (
    <div className="company-section mx-auto flex w-full max-w-screen-xl items-center gap-14 px-4 max-lg:flex-col-reverse">
      <div className="company-info lg:max-w-[50%]">
        <Image
          src={companyData.imagesrc}
          alt={companyData.altText}
          width={700}
          height={700}
        />
      </div>
      <div className="features lg:max-w-[50%]">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">{Heading}</h2>
        <p className="max-w-xl text-lg text-gray-500">{Paragraph}</p>
        {features.map((feature, index) => (
          <div key={index} className="feature-item my-5 flex gap-2">
            <div className="icon">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
              />
            </div>
            <div className="feature-content max-w-md">
              <h4 className="text-xl tracking-tight">{feature.title}</h4>
              <p className="text-md tracking-tight text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
        <div className="cta mt-10 flex gap-4">
          <button className="cta-button h-fit rounded-full bg-black px-4 py-1 text-white">
            Start Free Trial
          </button>
          <button className="cta-button h-fit rounded-full border border-gray-300 px-4 py-1 text-black">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPCompany;
