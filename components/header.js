/* eslint-disable @next/next/no-img-element */
const header = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
                
              
                 <a className="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index.html">Pavo</a>

                
                <a className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
                    <img src="/images/logo.svg" alt="alternative" className="h-8" />
                </a>

                <button className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
                    <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                        <li>
                            <a className="nav-link page-scroll active" href="#header">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#features">Features</a>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#details">Details</a>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                        </li>
                        <li className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item page-scroll" href="article.html">Article Details</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                            </div>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#download">Download</a>
                        </li>
                    </ul>
                    <span className="block lg:ml-3.5">
                        <a className="no-underline" href="#your-link">
                            <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
                        </a>
                        <a className="no-underline" href="#your-link">
                            <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
                        </a>
                    </span>
                </div>
            </div> 
        </nav>
    );
}

export default header;