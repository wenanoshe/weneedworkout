import { defineConfig} from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
});
//
// export default defineConfig(({mode}) => {
//
//   const env = loadEnv(mode, process.cwd(), 'REACT_');
//
//   return {
//     plugins: [react()],
//     REACT_RAPIDAPI_KEY: env.REACT_RAPIDAPI_KEY,
//
//  }
//
// })
