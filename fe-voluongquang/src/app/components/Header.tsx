'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import {
    faCog,
    faEnvelopeOpen,
    faUserCircle,
    faSearch,
    faPhone,
    faCaretDown,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className="bg-customGreen">
            <div className="max-w-[1200px] max-h-[250px] mx-auto px-6 bg-customGreen text-white text-sm py-2">
                <div className="mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-10">
                        <a href="#" className="flex font-cairo items-center">
                            <i className="fa fa-envelope mr-2"></i>
                            thucphamchayvoluongquang@gmail.com
                        </a>
                        <span className="font-cairo border-l border-white pl-4">
                            Miễn phí ship cho hóa đơn trên 3 triệu
                        </span>
                    </div>

                    {/* Bên phải */}
                    <div className="flex space-x-6">
                        <a
                            href="https://www.facebook.com/p/Th%E1%BB%B1c-Ph%E1%BA%A9m-Chay-V%C3%B4-L%C6%B0%E1%BB%A3ng-Quang-100057316875463/"
                            className="hover:text-blue-600 flex items-center ml-1">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="w-4 h-4"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@voluongquang20"
                            className="hover:text-black flex items-center">
                            <FontAwesomeIcon
                                icon={faTiktok}
                                className="w-4 h-4"
                            />
                        </a>
                        <a
                            href="settings.html"
                            className="font-cairo border-l border-white pl-4 flex items-center hover:text-gray-600">
                            <FontAwesomeIcon
                                icon={faCog}
                                className="mr-1 pt-0 w-4 h-4"
                            />{' '}
                            Cài Đặt
                        </a>
                        <a
                            href="contact.html"
                            className="font-cairo border-l border-white pl-4 flex items-center hover:text-gray-600">
                            <FontAwesomeIcon
                                icon={faEnvelopeOpen}
                                className="mr-1 pt-0 w-4 h-4"
                            />{' '}
                            Liên Hệ
                        </a>
                        <a
                            href="login.html"
                            className="font-cairo border-l border-white pl-4 flex items-center py-1 hover:text-gray-600">
                            <FontAwesomeIcon
                                icon={faUserCircle}
                                className="mr-1 pt-0 w-4 h-4"
                            />
                            Đăng nhập
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div
                className={`bg-white w-full z-50 transition-all duration-300  ${
                    isScrolled
                        ? 'fixed top-0 left-0 shadow-lg pb-2'
                        : 'relative'
                }`}>
                <div className="max-w-[1000px] mx-auto grid grid-cols-12 items-center">
                    {/* Logo - Chiếm 3 cột */}
                    <div className="col-span-3 flex justify-center">
                        <a href="index.html">
                            <img src="/logo.png" alt="Logo" className="h-16" />
                        </a>
                    </div>

                    {/* Navigation - Chiếm 6 cột */}
                    <nav className="col-span-6 flex justify-center space-x-6 text-gray-700 mt-4">
                        <Link
                            href="/"
                            className="font-cairo hover:text-customGreen hover:font-bold">
                            Trang Chủ
                        </Link>
                        <Link
                            href="/introduce"
                            className="font-cairo hover:text-customGreen hover:font-bold">
                            Giới Thiệu
                        </Link>
                        <div className="relative group">
                            <button className="flex font-cairo items-center space-x-1">
                                Shop{' '}
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className="mr-1 pt-0 w-4 h-4"
                                />
                            </button>

                            {/* Menu dropdown */}
                            <div className="absolute -left-10 hidden group-hover:block bg-white shadow-lg rounded-2xl w-40 z-[1000] transition-all duration-200">
                                <Link
                                    href="/product"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100 hover:text-customGreen hover:font-bold">
                                    Au Lac
                                </Link>
                                <Link
                                    href="/product"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100 hover:text-customGreen hover:font-bold">
                                    Thanh Dung
                                </Link>
                                <Link
                                    href="/product"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100 hover:text-customGreen hover:font-bold">
                                    Hoa Y
                                </Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="flex font-cairo items-center space-x-1">
                                Sản Phẩm{' '}
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className="mr-1 pt-0 w-4 h-4"
                                />
                            </button>
                            <div className="absolute -left-10 hidden group-hover:block bg-white shadow-lg rounded-2xl w-40 z-[1000] transition-all duration-200">
                                <Link
                                    href="/product"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100 hover:text-customGreen hover:font-bold">
                                    Omelettes
                                </Link>
                                <Link
                                    href="/product"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100 hover:text-customGreen hover:font-bold">
                                    Breakfast Scrambles
                                </Link>
                                <Link
                                    href="/product"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100 hover:text-customGreen hover:font-bold">
                                    Griddle
                                </Link>
                                <Link
                                    href="/product"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100 hover:text-customGreen hover:font-bold">
                                    Biscuits
                                </Link>
                                <Link
                                    href="/product"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100 hover:text-customGreen hover:font-bold">
                                    Seasonal Fruit Plate
                                </Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="flex font-cairo items-center space-x-1">
                                Blog{' '}
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className="mr-1 pt-0 w-4 h-4"
                                />
                            </button>
                            <div className="absolute -left-10 hidden group-hover:block bg-white shadow-lg rounded-2xl w-40 z-[1000] transition-all duration-200">
                                <Link
                                    href="/blog"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100">
                                    Beauty
                                </Link>
                                <Link
                                    href="/blog"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100">
                                    Fashion
                                </Link>
                                <Link
                                    href="/blog"
                                    className="block font-cairo px-4 py-2 hover:bg-gray-100">
                                    Food
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Icons - Chiếm 3 cột */}
                    <div className="col-span-3 fflex justify-center space-x-4 mt-4 ml-4">
                        <a
                            href="cart.html"
                            className="text-gray-700 hover:text-customGreen flex items-center ">
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="mr-1 pt-0 w-6 h-6"
                            />
                            <span className="ml-2 font-cairo">Giỏ Hàng</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-[1000px] mx-auto grid grid-cols-12 items-center">
                    {/* Dòng giới thiệu (3 cột) */}
                    <div className="col-span-3 flex justify-center">
                        <span className="font-playfair italic text-[#666666] text-[14px] font-normal">
                            All the best item for You
                        </span>
                    </div>

                    {/* Thanh tìm kiếm (6 cột) */}
                    <div className="col-span-6 flex justify-center">
                        <form className="relative max-w-[600px] w-full">
                            <input
                                type="text"
                                className="text-[14px] text-[#222222] border-2 border-[#dddddd] w-full rounded-full py-[10px] pr-[40px] pl-[20px]"
                                placeholder="Tìm kiếm..."
                            />
                            <button
                                type="submit"
                                className="absolute w-5 right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="text-xl text-black"
                                />
                            </button>
                        </form>
                    </div>

                    {/* Thông tin liên hệ (3 cột) */}
                    <div className="col-span-3 flex ml-5 text-gray-700 ">
                        <div>
                            <h5 className="font-bold font-cairo flex items-center gap-2 text-sm">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="mr-1 pt-0 w-4 h-4"
                                />
                                (+84) 853 267 747
                            </h5>
                            <p className="text-sm font-cairo">
                                T2-T7: 8h-18h --- CN: 8h-17h
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
