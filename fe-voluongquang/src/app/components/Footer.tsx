'use client';
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
        <footer className="bg-gray-100 py-10">
            <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <Link href="/" className="block">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={330}
                            height={130}
                        />
                    </Link>
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="text-xl text-green-500"
                        />
                        <p className="text-lg text-grey-600 font-cairo">
                            <span className="block font-bold text-lg text-grey-600 font-cairo">
                                Có câu hỏi cho chúng tôi?
                            </span>
                            (+84) 853 267 747
                        </p>
                    </div>
                    <div className="mt-4">
                        <h4 className="font-cairo text-lg text-gray-600 font-bold">
                            Thư Đăng Kí Mới
                        </h4>
                        <form className="mt-2 flex">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn vào đây..."
                                className="w-full p-2 border border-gray-300 rounded-l-md font-cairo"
                            />
                            <button
                                type="submit"
                                className="w-[120px] px-6 bg-customGreen text-white rounded-r-md font-cairo hover:bg-green-700">
                                Đăng kí
                            </button>
                        </form>
                    </div>
                </div>

                {/* Cột 2: Trống */}
                <div></div>

                {/* Cột 3: Thông tin liên hệ */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-600">
                        Transport Offices
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start space-x-2">
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="text-gray-600 mt-1"
                            />
                            <p className="font-cairo text-gray-600">
                                Q44 Đường 128, Phường Phước Long A, TP. Thủ Đức,
                                TP. Hồ Chí Minh, Việt Nam
                            </p>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-gray-600 mt-1"
                            />
                            <p className="font-cairo text-gray-600">
                                Phone: (+84) 853 267 747
                            </p>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FontAwesomeIcon
                                icon={faEnvelopeOpen}
                                className="text-gray-600 mt-1"
                            />
                            <p className="font-cairo text-gray-600">
                                Email: voluongquang@company.com
                            </p>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FontAwesomeIcon
                                icon={faClock}
                                className="text-gray-600 mt-1"
                            />
                            <p className="font-cairo text-gray-600">
                                Làm việc hàng ngày (kể cả ngày lễ).
                                <br /> Từ 8h - 17h
                            </p>
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
