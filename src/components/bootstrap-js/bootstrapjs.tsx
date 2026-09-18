"use client"

import { useEffect } from "react"

export default function BootstrapJs(){
    useEffect(() => {
        // bootstrap's UMD bundle sees webpack's `module`/`exports` and takes the
        // CommonJS branch, so it never attaches itself to `window.bootstrap` the
        // way it would from a plain <script> tag. Attach it ourselves so code
        // like Navbar's Offcanvas.getOrCreateInstance() call can find it.
        (window as unknown as { bootstrap: unknown }).bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      }, []);
    return null
}