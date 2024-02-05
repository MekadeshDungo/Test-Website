  <script>
    function showMoreInfo(sectionId) {
      var moreInfoDiv = document.getElementById("moreInfo-" + sectionId);
      if (moreInfoDiv.style.display === "none") {
        moreInfoDiv.style.display = "block";
      } else {
        moreInfoDiv.style.display = "none";
      }
    }
  </script>