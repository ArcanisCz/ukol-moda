import React from 'react';
import "./style.css";

const Dress = () => {
    return (<section className="dresses">
                <h2>Šaty</h2>
                <div className="products">

                    <div className="product">
                        <img className="product__image" src="assets/red-dress.jpg" alt="Červené šaty"/>
                        <div className="product__content">
                            <h3 className="product__name">Červené šaty</h3>
                            <p className="product__description">V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.</p>
                            <p className="product__price">2290 Kč</p>
                        </div>
                    </div>

                    <div className="product">
                        <img className="product__image" src="assets/flower-dress.jpg" alt="Květované šaty" />
                        <div className="product__content">
                            <h3 className="product__name">Květované šaty</h3>
                            <p className="product__description">Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat.</p>
                            <p className="product__price">3100 Kč</p>
                        </div>
                    </div>

                    <div className="product">
                        <img className="product__image" src="assets/yellow-dress.jpg" alt="Žluté šaty" />
                        <div className="product__content">
                            <h3 className="product__name">Žluté šaty</h3>
                            <p className="product__description">Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě. </p>
                            <p className="product__price">4250 Kč</p>
                        </div>
                    </div>

                </div>
            </section>
)};

export default Dress;