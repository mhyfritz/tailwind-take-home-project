import { product } from "../data";
import { useEffect, useMemo, useState } from "react";
import Configuration from "../components/configuration";
import Description from "../components/description";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/header";
import ImageGallery from "../components/image-gallery";
import Specifications from "../components/specifications";
import StartPrice from "../components/start-price";

export default function Home() {
  const [configuration, setConfiguration] = useState(() => ({}));

  useEffect(() => {
    const config = {};
    for (const module of product.configuration.modules) {
      config[module.name] = module.options[0];
    }
    setConfiguration(config);
  }, []);

  function handleConfigurationChange(name, option) {
    setConfiguration((config) => ({
      ...config,
      [name]: option,
    }));
  }

  const totalPrice = useMemo(
    () =>
      Object.values(configuration).reduce(
        (acc, cur) => acc + cur.price,
        product.configuration.base.price
      ),
    [configuration]
  );

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Tailwind Take-Home Project</title>
      </Head>
      <div className="pt-12 pb-36 sm:pb-48">
        <div className="px-4 space-y-4 divide-y divide-gray-300 sm:px-12 sm:container sm:mx-auto">
          <Header headings={product.headings} />
          <main className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2">
              <div className="pt-8 lg:sticky lg:top-0">
                <ImageGallery images={product.images} />
              </div>
            </div>
            <div className="pt-8 space-y-12 lg:w-1/2">
              <div className="space-y-4">
                <StartPrice price={product.configuration.base.price} />
                <Description description={product.description} />
              </div>
              <Configuration
                configuration={product.configuration}
                onChange={handleConfigurationChange}
                selected={configuration}
              />
              <Specifications specifications={product.specifications} />
            </div>
          </main>
        </div>
        <div className="fixed inset-x-0 bottom-0">
          <Footer price={totalPrice} />
        </div>
      </div>
    </>
  );
}
