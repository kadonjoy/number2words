export default function FeatureIntro() {
  return (
    <div className="feature-intro mt-10 bg-white p-8 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        Why Use Our Number to Words Converter?
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold mt-8 mb-2 text-lg">
            1. Use Cases and Importance of "Number to Words" Functionality
          </h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4">
            <li>
              <span className="font-semibold text-gray-800">
                Writing checks and financial documents
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: When writing a check for $1,200, you must write out the
                amount in words as "One thousand two hundred dollars" to prevent
                fraud and ensure clarity. This is a legal requirement in many
                countries and helps avoid ambiguity or alteration of the numeric
                value.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Generating invoices and receipts
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: On an invoice, instead of just showing "550", you can
                print "Five hundred and fifty" to make the amount clear for both
                the customer and accounting purposes, reducing the risk of
                misreading or misinterpretation.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Legal and official paperwork
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: In contracts or agreements, stating "Ten thousand"
                instead of "10000" helps prevent tampering and ensures that the
                intended amount is clear and legally binding.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Educational tools for teaching numbers and language
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: Teachers can use number-to-words conversion to help
                students learn how to spell and understand numbers, such as
                converting "42" to "forty-two" in classroom exercises or
                educational games.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Accessibility for visually impaired users
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: Screen readers can read out "two hundred and fifty"
                instead of just "250", making digital content more accessible
                for users with visual impairments and improving their
                understanding of numerical information.
              </div>
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Automated reporting and data presentation
              </span>
              <div className="text-gray-800 text-base mb-6">
                Example: In business reports or presentations, spelling out
                totals such as "Total sales: One million two hundred thousand"
                can make the data more readable and professional, especially for
                audiences who may not be comfortable with large numbers in digit
                form.
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-8 mb-4">
            2. What is a number to word converter?
          </h2>
          <p className="text-gray-800 text-base mb-6">
            A number to word converter is a tool that transforms numeric values
            (such as 1234) into their written English word equivalents (such as
            "one thousand two hundred thirty-four"). This is useful for writing
            checks, legal documents, invoices, and for educational purposes. It
            helps ensure clarity, prevents fraud, and makes numbers easier to
            understand in written communication.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-8 mb-4">
            3. Why Use Our Number to Words Converter?
          </h2>
          <h3 className="font-bold">(1). Real-Time Conversion</h3>
          <p>The converter updates results instantly as you type</p>
          <h3 className="font-bold">(2). Accurate Results</h3>
          <p>Get precise English word representations of numbers</p>
          <h3 className="font-bold">(3). Easy to Use</h3>
          <p>Simple interface for quick conversions</p>
        </div>
      </div>
    </div>
  );
}
