import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FaqsSlice} FaqsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqsSlice>} FaqsProps
 * @type {import("react").FC<FaqsProps>}
 */
export default function Faqs({ slice }) {
  const faqs = slice.primary.faqs || [];

  return (
    <section
      className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xl font-semibold text-center tracking-tight sm:text-3xl">
          {slice.primary.title || "FAQs"}
        </h2>

        <dl className="mt-16 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <Disclosure
              key={index}
              as="div"
              className="py-6 first:pt-0 last:pb-0"
            >
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      aria-hidden="true"
                      className="size-6 group-data-open:hidden"
                    />
                    <MinusSmallIcon
                      aria-hidden="true"
                      className="size-6 hidden group-data-open:block"
                    />
                  </span>
                </DisclosureButton>
              </dt>

              <DisclosurePanel
                as="dd"
                className="mt-2 pr-12 text-gray-600 text-base"
              >
                {faq.answer ? (
                  <PrismicRichText
                    field={faq.answer}
                    components={{
                      heading1: ({ children }) => (
                        <h1 className="text-4xl font-bold mb-4">{children}</h1>
                      ),
                      heading2: ({ children }) => (
                        <h2 className="text-2xl font-bold mb-3">{children}</h2>
                      ),
                      heading3: ({ children }) => (
                        <h3 className="text-xl font-semibold mb-2">{children}</h3>
                      ),
                      heading4: ({ children }) => (
                        <h4 className="text-xl font-medium mb-2">{children}</h4>
                      ),
                      paragraph: ({ children }) => (
                        <p className="mb-4 leading-relaxed">{children}</p>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-bold text-gray-900">{children}</strong>
                      ),
                      list: ({ children }) => (
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-2 px-2">
                          {children}
                        </ul>
                      ),
                      oList: ({ children }) => (
                        <ol className="list-decimal list-inside pl-5 mb-4 space-y-2 px-2">
                          {children}
                        </ol>
                      ),
                      listItem: ({ children }) => <li>{children}</li>,
                      oListItem: ({ children }) => <li>{children}</li>,
                      hyperlink: ({ node, children }) => (
                        <a
                          href={node.data.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  />
                ) : (
                  <p>No answer provided.</p>
                )}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
}
