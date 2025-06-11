<script lang="ts">
	import H2 from '../../components/ui/h2.svelte';
	import H4 from '../../components/ui/h4.svelte';

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
			await new Promise((r) => setTimeout(r, 1000)); // Simulated upload delay
			successLink = 'https://resu.host/fake-link';
		} catch (error: any) {
			errorMessage = error.message();
		}finally{
            uploading = false;
        }
	}
</script>

<div class="mx-auto space-y-6 rounded-lg bg-neutral-800 p-6 shadow-lg filter">
	<H2 className="text-neutral-100 text-center">Upload Your Resume</H2>
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
      <p class="text-green-400 mb-1">✅ Uploaded successfully!</p>
      <a href={successLink} class="text-blue-400 underline break-all">{successLink}</a>
    </div>
  {/if}
</div>
