<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="min-h-screen w-full flex items-center justify-center bg-neutral-900 text-neutral-50">
	{@render children()}
</div>
