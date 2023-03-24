import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import vitePlugImp from "vite-plugin-imp";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteMockServe({
            mockPath: "./src/mock",
            supportTs: true,
        }),
        vitePlugImp({
            libList: [
                {
                    libName: "antd",
                    style: (name) => `antd/es/${name}/style`,
                },
            ],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/assets/style/main.scss";',
            },
        },
    },
    server: {
        port: 8080,
    },
    resolve: {
        // preserveSymlinks: true,
        alias: {
            "@": resolve(__dirname, "src"), // 路径别名
        },
        // extensions: [".js", ".json", ".ts", ], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
});
