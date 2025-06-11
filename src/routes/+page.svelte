<script lang="ts">
  import { goto } from '$app/navigation';
	import H1 from '../components/ui/h1.svelte';

  function handleGetStarted() {
    goto('/upload');
  }
</script>

<section class="text-center px-6 w-full max-w-2xl border-6 border-neutral-800/20 rounded-3xl p-4">
  <H1 className="m-4">
    📄 Resu Host
  </H1>

  <p class="text-neutral-400 text-lg mb-6">
    Upload your resume and get a disposable link that self-destructs in 15 days. No signups. No hassle.
  </p>

  <button
    on:click={handleGetStarted}
    class="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-lg"
  >
    Upload Now
  </button>
</section>
