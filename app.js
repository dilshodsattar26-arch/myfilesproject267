const coreManagerInstance = {
    version: "1.0.267",
    registry: [1028, 25, 1989, 918, 975, 247, 974, 812],
    init: function() {
        const nodes = this.registry.filter(x => x > 437);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});