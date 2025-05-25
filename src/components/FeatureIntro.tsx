export default function FeatureIntro() {
  return (
    <div className="feature-intro mt-10 bg-white p-8 rounded-lg shadow">
      <div className="space-y-4">
        <div>
          <h3 className="font-bold mt-8 mb-2 text-lg">
            1. Use Cases and Importance of &quot;Number to Words&quot;
            Functionality
          </h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4">
            <li>
              <span className="font-semibold text-gray-800">
                Writing checks and financial documents
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: When writing a check for $1,200, you must write out the
                amount in words as &quot;One thousand two hundred dollars&quot;
                to prevent fraud and ensure clarity. This is a legal requirement
                in many countries and helps avoid ambiguity or alteration of the
                numeric value.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Generating invoices and receipts
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: On an invoice, instead of just showing &quot;550&quot;,
                you can print &quot;Five hundred and fifty&quot; to make the
                amount clear for both the customer and accounting purposes,
                reducing the risk of misreading or misinterpretation.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Legal and official paperwork
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: In contracts or agreements, stating &quot;Ten
                thousand&quot; instead of &quot;10000&quot; helps prevent
                tampering and ensures that the intended amount is clear and
                legally binding.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Educational tools for teaching numbers and language
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: Teachers can use number-to-words conversion to help
                students learn how to spell and understand numbers, such as
                converting &quot;42&quot; to &quot;forty-two&quot; in classroom
                exercises or educational games.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Accessibility for visually impaired users
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: Screen readers can read out &quot;two hundred and
                fifty&quot; instead of just &quot;250&quot;, making digital
                content more accessible for users with visual impairments and
                improving their understanding of numerical information.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Automated reporting and data presentation
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: In business reports or presentations, spelling out
                totals such as &quot;Total sales: One million two hundred
                thousand&quot; can make the data more readable and professional,
                especially for audiences who may not be comfortable with large
                numbers in digit form.
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mt-8 mb-4">
            2. What is a number to word converter?
          </h3>
          <p className="text-gray-800 text-base mb-6">
            A number to word converter is a tool that transforms numeric values
            (such as 1234) into their written English word equivalents (such as
            &quot;one thousand two hundred thirty-four&quot;). This is useful
            for writing checks, legal documents, invoices, and for educational
            purposes. It helps ensure clarity, prevents fraud, and makes numbers
            easier to understand in written communication.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">
            3. Why Use Our Number to Words Converter?
          </h3>
          <ul className="list-disc pl-8 text-gray-800 space-y-2 mb-6">
            <li>
              <span className="font-semibold">Fast and Accurate:</span>{" "}
              Instantly converts both whole numbers and decimals into clear,
              grammatically correct English words.
            </li>
            <li>
              <span className="font-semibold">Decimal Support:</span> Accurately
              converts numbers with decimal points, such as 123.45, into
              &quot;One Hundred Twenty Three point Four Five&quot; for precise
              and comprehensive results.
            </li>
            <li>
              <span className="font-semibold">Flexible Output Case:</span>{" "}
              Supports output in ALL UPPERCASE, all lowercase, or Capitalize
              Each Word, so you can choose the style that best fits your needs.
            </li>
            <li>
              <span className="font-semibold">Free and No Registration:</span>{" "}
              The tool is completely free to use and requires no sign-up or
              registration.
            </li>
            <li>
              <span className="font-semibold">Cross-Platform Support:</span>{" "}
              Works seamlessly on both desktop and mobile devices.
            </li>
            <li>
              <span className="font-semibold">Versatile Use Cases:</span>{" "}
              Perfect for writing checks, preparing documents, or teaching
              number literacy.
            </li>
            <li>
              <span className="font-semibold">Real-Time Results:</span> Provides
              reliable results instantly, helping you save time and avoid
              mistakes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
