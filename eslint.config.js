import { defineConfig } from "eslint/config";
import globals from 'globals';
import js from "@eslint/js";

export default defineConfig([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		languageOptions: {
			globals: globals.browser,
		},
		rules: {
			'no-var': 'error',
			'prefer-const': 'error',
			'no-console': 'error',
		},
	},
]);
