import Image from "next/image";

const Footer = () => {
  const cardBrands = [
    { name: "Visa", src: "/cards/visa.svg" },
    { name: "Mastercard", src: "/cards/mastercard.svg" },
    { name: "American Express", src: "/cards/amex.svg" },
    { name: "Discover", src: "/cards/discover.svg" },
    { name: "PayPal", src: "/cards/paypal.svg" },
  ];

  return (
    <div className='mt-auto'>
      <footer className='text-center p-4 flex sm:flex-row items-center sm:justify-between  flex-col justify-center mt-5 gap-4 sm:gap-0'>
        <div className='flex flex-col items-center sm:items-start'>
          <Image src='/logo.png' alt='Logo' width={150} height={150} />
          <p className='text-sm text-gray-500 mt-2'>
            &copy; 2025 The Free Agent Portal
          </p>
          <p className='text-xs text-gray-500 mt-1'>
            "The Free Agent Portal" is a joint venture service of Sterling Haven
            LLC and Draft Diamonds LLC.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row sm:items-start items-center text-sm text-gray-500 gap-6 sm:gap-8'>
          <div className='text-center sm:text-right'>
            <h4 className='font-semibold text-gray-600 mb-2'>Contact Us</h4>
            <p className='text-xs mb-1'>Phone: (503) 702-7541</p>
            <p className='text-xs mb-2'>PO Box 935 Blountville, TN 37617</p>
            <div className='text-xs space-y-1'>
              <p>
                Billing:{" "}
                <a
                  href='mailto:info@sterlinghavenllc.com'
                  className='hover:underline text-white'
                >
                  info@sterlinghavenllc.com
                </a>
              </p>
              <p>
                Support:{" "}
                <a
                  href='mailto:support@thefreeagentportal.com'
                  className='hover:underline text-white'
                >
                  support@thefreeagentportal.com
                </a>
              </p>
            </div>
          </div>
          <div className='text-center sm:text-right'>
            <h4 className='font-semibold text-gray-600 mb-2'>Legal</h4>
            <a
              href='/legal/terms'
              className='hover:underline mb-1 block text-xs'
            >
              Terms of Use
            </a>
            <a
              href='/legal/privacy'
              className='hover:underline mb-1 block text-xs'
            >
              Privacy Policy
            </a>
            <a href='/legal' className='hover:underline mb-1 block text-xs'>
              Other Legal Information
            </a>
          </div>
        </div>
      </footer>

      {/* Credit Card Brands */}
      <div className='border-t-[0.5px] border-gray-600 py-3 px-4'>
        <div className='flex flex-wrap justify-center items-center gap-3 max-w-sm mx-auto'>
          <span className='text-xs text-gray-400 mr-2'>We accept:</span>
          {cardBrands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.src}
              alt={`${brand.name} accepted`}
              width={45}
              height={20}
              className='opacity-70 hover:opacity-100 transition-opacity'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
