AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
  
    handleComicsListState: function () {
      const id = this.el.getAttribute("id");
      const postersId = ["green-arrow", "outer-space", "spider-man", "superman"];
      if (postersId.includes(id)) {
        const postersContainer = document.querySelector("#posters-container");
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "red",
          opacity: 0.4,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handleComicsListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave",()=>{
      //const selectedItemId = this.data.selectedItemId
      const {selectedItemId} = this.data
      if(selectedItemId){
        const el = document.querySelector(`#${selectedItemId}`)
        el.setAttribute("material",{
          color:"white"
        })
      }
  
      });
    },
  });
  