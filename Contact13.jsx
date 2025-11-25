"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Hubungi</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Hubungi kami
          </h2>
          <p className="md:text-md">
            Kami siap melayani pertanyaan dan pesanan Anda kapan saja
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Email
              </h3>
              <p className="mb-2">Hubungi melalui email</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                WhatsApp
              </h3>
              <p className="mb-2">Pesan langsung ke kami</p>
              <a className="underline" href="#">
                Kusuma Kopi || 0813-9170-2477 Menara Cinta || 0812-2726-9979
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Alamat
              </h3>
              <p className="mb-2">
                Jl. Villa Marina No.2, Kec. Semarang Utara, Kota Semarang, Jawa
                Tengah 50144
              </p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Buka peta"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Buka peta
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
