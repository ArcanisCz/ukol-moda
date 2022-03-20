import React from 'react';
import "./style.css";
import Product from '../Product';

const Dress = () => {
    return (
            <section className="dresses">
                <h2>Šaty</h2>
                <div className="products">
                    <Product name="Červené šaty"
                    description={"V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií"}
                    price = {2290}
                    image="red-dress.jpg" />

                    <Product name="Květované šaty"
                    description="Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat."
                    price={3100}
                    image="flower-dress.jpg" />

                    <Product name="žluté šaty"
                    description ="Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě."
                    price={4250}
                    image="yellow-dress.jpg" />
                </div>
            </section>
)};

export default Dress;