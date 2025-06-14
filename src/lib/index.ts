// place files you want to import through the `$lib` alias in this folder.
type EnvironmentVariables = {
	BACKEND_URL: string;
}

export const env: EnvironmentVariables = {
	BACKEND_URL: import.meta.env.VITE_PUBLIC_BACKEND_URL,
}
