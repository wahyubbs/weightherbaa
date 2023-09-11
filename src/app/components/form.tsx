"use client";

import Link from "next/link";
import { ReactPixelTrack } from "./pixelEvent";

function Form() {
  return (
    <div className="form-container">
      <form>
        <h1>Data Penerima:</h1>
        <input
          data-label="Nama"
          required
          type="text"
          aria-required
          name="name"
          placeholder="Nama Anda"
        />
        <input
          data-label="phone"
          required
          type="tel"
          aria-required
          name="phone"
          placeholder="No. WhatsApp Anda"
        />
        <input
          data-label="Alamat Lengkap"
          required
          type="text"
          aria-required
          name="address"
          placeholder="Alamat Lengkap Anda"
        />
        <Link
          onClick={() => {
            ReactPixelTrack().then((reactPixel) => {
              reactPixel.track("Lead");
            });
          }}
          href="https://eblie.orderonline.id/weightherba_ayd/thanks?form=632a95fe9d8e8e27696288cc&sub=64fc11b548e212f6dd01655f"
        >
          <span>Pesan Sekarang! (COD)</span>
        </Link>
      </form>
    </div>
  );
}

export default Form;
