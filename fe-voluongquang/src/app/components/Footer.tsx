import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTiktok,
    faTwitter,
    faPinterest,
    faYoutube,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
    faPhone,
    faMapMarkerAlt,
    faEnvelopeOpen,
    faClock,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-10 container mx-auto px-4">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cột 1: Logo và Newsletter */}
                <div className="space-y-4">
                    <Link href="/" className="block">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={150}
                            height={50}
                        />
                    </Link>
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="text-xl text-green-500"
                        />
                        <p>
                            <span className="block font-bold">
                                Got Questions?
                            </span>
                            (+84) 83 899 48 41
                        </p>
                    </div>
                    <div className="mt-4">
                        <h4 className="font-semibold">Newsletter Signup</h4>
                        <form className="mt-2 flex">
                            <input
                                type="email"
                                placeholder="Your email here..."
                                className="w-full p-2 border border-gray-300 rounded-l-md"
                            />
                            <button
                                type="submit"
                                className="px-4 bg-green-500 text-white rounded-r-md">
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Cột 2: Trống */}
                <div></div>

                {/* Cột 3: Thông tin liên hệ */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Transport Offices</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start space-x-2">
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="text-green-500 mt-1"
                            />
                            <p>
                                Q44 128 St. Phuoc Long A ward, Thu Duc district,
                                Ho Chi Minh City, Viet Nam
                            </p>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-green-500 mt-1"
                            />
                            <p>Phone: (+84) 83 899 48 41</p>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FontAwesomeIcon
                                icon={faEnvelopeOpen}
                                className="text-green-500 mt-1"
                            />
                            <p>Email: voluongquang@company.com</p>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FontAwesomeIcon
                                icon={faClock}
                                className="text-green-500 mt-1"
                            />
                            <p>Hours: 7 Days a week from 10:00 am</p>
                        </li>
                    </ul>

                    {/* Mạng xã hội */}
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500">
                            <FontAwesomeIcon icon={faPinterest} size="lg" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500">
                            <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
