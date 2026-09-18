"use client"

import { useEffect } from "react"

export default function BootstrapJs(){
    useEffect(() => {
        // bootstrap's UMD bundle sees webpack's `module`/`exports` and takes the
        // CommonJS branch, so it never attaches itself to `window.bootstrap` the
        // way it would from a plain <script> tag. Attach it ourselves so code
        // like Navbar's Offcanvas.getOrCreateInstance() call can find it.
        //
        // Loaded via a dynamic import (rather than a static require) so
        // webpack code-splits it into its own chunk, fetched after the page
        // is already interactive instead of inflating the main bundle every
        // visitor has to download before first paint.
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then((mod) => {
          // bootstrap's UMD build only sets `module.exports`, so webpack's
          // CJS interop surfaces it as the namespace's `default` — not the
          // namespace object itself.
          (window as unknown as { bootstrap: unknown }).bootstrap = (mod as unknown as { default: unknown }).default ?? mod;
        });
      }, []);
    return null
}