
export default function Canvas() {
    return (
        <>
            <script type="text/paperscript" src="js/spiralRaster.js" canvas="spiralCanvas" ></script >
            <script type="text/paperscript" src="js/divisionRaster.js" canvas="divisionCanvas"></script>
        </>
    );
}