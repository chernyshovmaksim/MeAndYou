// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				catalog: resolve(__dirname, "catalog.html"),
				contact: resolve(__dirname, "contact.html"),
				favorites: resolve(__dirname, "favorites.html"),
				product: resolve(__dirname, "product.html"),
				cart: resolve(__dirname, "cart.html"),
			},
		},
	},
});
