/* mermaid.js — reusable Mermaid diagram loader.
   Usage in a lesson:
     <pre class="mermaid">
     flowchart TD
       A["start"] --> B["end"]
     </pre>
     <script src="../assets/mermaid.js"></script>
   Renders in place via CDN. Offline or in print, the block degrades to the
   readable diagram source inside its normal code frame (see course.css). */

(function () {
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
  s.onload = function () {
    var config = {
      startOnLoad: true,
      theme: "neutral",
      themeVariables: { fontFamily: "Consolas, Menlo, monospace" },
    };
    // Render at natural size: never stretch to the column, and let wide
    // diagrams scroll inside their block instead of shrinking (course.css).
    ["flowchart", "sequence", "class", "state", "er", "gantt", "journey",
     "pie", "mindmap", "timeline", "gitGraph"].forEach(function (type) {
      config[type] = { useMaxWidth: false };
    });
    mermaid.initialize(config);
  };
  document.head.appendChild(s);
})();
