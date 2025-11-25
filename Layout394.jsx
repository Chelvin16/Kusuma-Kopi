"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout394() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Menu</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pilihan menu kami
          </h1>
          <p className="md:text-md">
            Jelajahi berbagai kategori minuman dan makanan ringan yang kami
            tawarkan.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Kopi</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Kopi klasik dengan cita rasa tradisional
                </h2>
                <p>
                  Nikmati espresso, americano, dan cappuccino yang diseduh
                  sempurna.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Lihat"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Susu</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Minuman berbasis susu yang lembut dan creamy
                </h2>
                <p>
                  Rasakan kelezatan latte, mocha, dan flat white kami yang
                  istimewa.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Lihat"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Segar</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Minuman segar dengan sentuhan buah dan rempah
                </h2>
                <p>
                  Mojito series kami menghadirkan kesegaran yang menyegarkan di
                  setiap tegukan.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Lihat"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
