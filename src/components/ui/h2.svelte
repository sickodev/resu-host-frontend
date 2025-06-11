<script lang="ts">
    export let className:string = '';
</script>

<h2 class={`scroll-m-20 text-center text-3xl font-semibold tracking-tight text-balance first:mt-0 ${className}`}>
    <slot/>
</h2>