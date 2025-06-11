<script lang="ts">
    export let className:string = '';
</script>

<h1 class={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}>
    <slot/>
</h1>