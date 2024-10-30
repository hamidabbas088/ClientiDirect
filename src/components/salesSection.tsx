// components/SalesSection.tsx
import Image from 'next/image';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type Insight = {
  image: string;
  title: string;
  description: string;
  change: number;
  metric: string;
  style: React.CSSProperties;
};

type SalesSectionProps = {
  mainHeading: string;
  subHeading: string;
  ctaText: string;
  secondaryCtaText: string;
  testimonial: Testimonial;
  insights: Insight[];
  mainImage: string;
};

const SalesSection: React.FC<SalesSectionProps> = ({
  mainHeading,
  subHeading,
  ctaText,
  secondaryCtaText,
  testimonial,
  insights,
  mainImage,
}) => {
  return (
    <section className="sales-section p-12">
      <div className="container mx-auto flex max-w-screen-xl gap-0 text-left">
        <div className="max-w-[40%]">
          <h1 className="mb-4 text-4xl font-bold">{mainHeading}</h1>
          <p className="mb-6 text-lg text-gray-600">{subHeading}</p>
          <div className="mb-8 flex justify-start gap-4">
            <button className="rounded-full bg-black px-6 py-0 text-sm text-white">
              {ctaText}
            </button>
            <button className="rounded-full border border-gray-300 px-6 py-3 text-sm">
              {secondaryCtaText}
            </button>
          </div>
          <div className="testimonial mb-8 w-full max-w-lg text-left lg:w-full">
            <blockquote className="text-sm italic text-gray-700">
              &quot;
              {testimonial.quote}
              &quot;
            </blockquote>
            <cite className="text-xs not-italic text-gray-500">
              <span className="text-black">{testimonial.author}</span>
              {' '}
              -
              {' '}
              {testimonial.role}
            </cite>
          </div>
        </div>

        <div className="relative mx-auto h-96 w-full lg:max-w-[40%]">
          <Image
            src={mainImage}
            alt="Main background"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />

          {/* Insight Cards Overlayed on the Main Image */}
          {insights.map((insight, index) => (
            <div
              key={index}
              style={insight.style} // Custom style for positioning
              className="absolute rounded-lg border bg-white p-4 shadow"
            >
              <Image
                src={insight.image}
                alt={insight.title}
                width={50}
                height={50}
              />
              <h4 className="mt-2 text-xl font-bold">{insight.title}</h4>
              <p className="text-sm text-gray-500">{insight.description}</p>
              <p
                className={`text-sm ${insight.change >= 0 ? 'text-green-500' : 'text-red-500'}`}
              >
                {insight.change >= 0 ? '+' : '-'}
                {Math.abs(insight.change)}
                %
                {insight.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
