export default function Footer() {
  return (
    <footer className="mt-10 py-6 bg-white border-t-2 border-gray-200">
      <p className="text-center text-gray-600 text-sm">
        &copy; 2025 Free Number to Words Converter Tool -{" "}
        <a
          href="https://number2words.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="Free Number to Words Converter Tool"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          number2words.org
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
