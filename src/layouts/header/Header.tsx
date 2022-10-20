const Header = () => {
    return (
        <div className="bgHeader">
            <a href="#" className="btnHeader">
                home
            </a>
            <a href="#" className="btnHeader">
                artigos
            </a>
            <a href="#" className="btnHeader">
                fotos
            </a>
            <a href="#" className="btnHeader">
                vídeos
            </a>
            <div className="dropdown btnHeader">
                redes
                <div className="dropdown-content">
                    <div className="dropBTN-content">                
                        <a href="#">
                            facebook
                        </a>
                        <a href="#">
                            twitter
                        </a>
                        <a href="#">
                            instagram
                        </a>
                        <a href="#">
                            youtube
                        </a>
                        <a href="#">
                            tiktok
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;