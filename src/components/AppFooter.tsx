
import { Link } from "react-router-dom";
import { FileText, Mail, Phone } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="bg-accountblue-950 text-white mt-auto">
      <div className="container mx-auto pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-accountblue-500 text-white">
                <FileText size={16} />
              </div>
              <span className="text-lg font-bold">AccountHub</span>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Onlayn buxgalteriya xizmatlari platformasi - biznesni qulay va ishonchli boshqarish!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accountblue-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accountblue-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accountblue-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accountblue-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm4.14 14.86c-.71.71-1.53 1.24-2.45 1.58-.93.33-1.91.51-2.92.51-1 0-1.97-.17-2.9-.51-.9-.32-1.72-.86-2.45-1.58s-1.24-1.53-1.58-2.45C3.51 13.49 3.33 12.52 3.33 11.5s.18-1.99.52-2.91c.34-.93.86-1.76 1.58-2.48s1.53-1.25 2.45-1.58c.93-.34 1.9-.52 2.91-.52s1.98.17 2.9.51c.94.33 1.76.86 2.48 1.58.71.71 1.24 1.54 1.58 2.48.33.92.5 1.9.5 2.92 0 1.01-.17 1.98-.51 2.91-.32.93-.85 1.76-1.59 2.48z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Xizmatlar</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services/tax-reports" className="hover:text-accountblue-300">Soliq Hisobotlari</Link></li>
              <li><Link to="/services/financial-statements" className="hover:text-accountblue-300">Moliyaviy Hisobotlar</Link></li>
              <li><Link to="/services/payroll" className="hover:text-accountblue-300">Ish haqi hisobi</Link></li>
              <li><Link to="/services/bookkeeping" className="hover:text-accountblue-300">Buxgalteriya hisobi</Link></li>
              <li><Link to="/services/consultations" className="hover:text-accountblue-300">Konsultatsiyalar</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Sayt xaritasi</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-accountblue-300">Bosh sahifa</Link></li>
              <li><Link to="/about" className="hover:text-accountblue-300">Biz haqimizda</Link></li>
              <li><Link to="/accountants" className="hover:text-accountblue-300">Buxgalterlar</Link></li>
              <li><Link to="/blog" className="hover:text-accountblue-300">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-accountblue-300">Ko'p beriladigan savollar</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-0.5" />
                <span>+998 90 123 45 67</span>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-0.5" />
                <span>info@accounthub.uz</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Toshkent sh., Shayxontohur t., Furqat k., 5-uy</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AccountHub | Barcha huquqlar himoyalangan | CDCGroup tomonidan yaratilgan | CraDev Company tomonidan qo'llab-quvvatlanadi | since 2019
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-accountblue-300">Maxfiylik siyosati</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-accountblue-300">Foydalanish shartlari</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
