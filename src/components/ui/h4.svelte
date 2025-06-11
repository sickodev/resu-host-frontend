<script lang="ts">
    export let className:string = '';
</script>

<h4 class={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
    <slot/>
</h4>