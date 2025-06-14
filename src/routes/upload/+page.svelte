<script lang="ts">
	import H2 from '../../components/ui/h2.svelte';
	import { env } from '$lib';

	let file: File | null = null;
	let uploading: boolean = false;
	let errorMessage: string = '';
	let successLink: string = '';

	function handleFileChange(event: Event) {
		const target = event.target as HTMLInputElement;
		file = target?.files?.[0] ?? null;
		alert(`Uploaded ${file?.name}`);
	}

	async function handleUpload() {
		if (!file) {
			errorMessage = 'Please select a file.';
			alert(errorMessage);
			return;
		}

		uploading = true;
		errorMessage = '';
		successLink = '';

		try {
			const formData = new FormData();
			formData.append('file', file);

			const response = await fetch(`${env.BACKEND_URL}/upload`,{
				method: 'POST',
				body: formData
			});

			if(!response.ok){
				const errorData = await response.json();
				errorMessage = errorData.message || 'Upload Failed'
				return;
			}

			const result = await response.json();
			console.log(result)
			successLink = result.data.filePath;
		} catch (error: any) {
			errorMessage = error.message();
		}finally{
            uploading = false;
		}
	}
</script>

<div class="mx-auto space-y-6 rounded-lg bg-neutral-800 p-6 shadow-lg filter">
	<H2 className="text-neutral-100 text-center">Upload Your Resume</H2>
	<p class="text-center text-neutral-600 font-semibold">Your upload self destructs in 15 days</p>
	<hr class="border border-neutral-700"/>
	<input
		type="file"
		accept=".pdf"
		on:change={handleFileChange}
		class="w-full rounded border border-neutral-600 bg-neutral-700 p-2
           text-neutral-300 file:cursor-pointer file:rounded file:border-0 file:bg-blue-600
           file:px-4 file:py-2 file:text-white"
	/>

	<button
		on:click={handleUpload}
		class="w-full rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
		disabled={uploading}
	>
		{uploading ? 'Uploading...' : 'Upload'}
	</button>
</div>
<div class={`bg-neutral-800 w-full rounded-lg text-center font-bold ${errorMessage?"p-2":"p-0"}`}>
    {#if errorMessage}
		<p class="text-sm text-red-500">{errorMessage}</p>
	{/if}
</div>

<div class={`bg-neutral-800 w-full rounded-lg text-center font-bold ${successLink?"p-2":"p-0"}`}>
    {#if successLink}
    <div class="p-4 rounded text-sm">
      <p class="text-emerald-500 mb-1"> Uploaded successfully!</p>
      <a href={successLink} class="text-blue-400 underline break-all">{successLink}</a>
    </div>
  {/if}
</div>
