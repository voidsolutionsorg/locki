// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/img/*' {
    let meta
    export default meta
}