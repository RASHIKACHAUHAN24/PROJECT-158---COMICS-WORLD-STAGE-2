AFRAME.registerComponent("poster", {
    init: function () {
      this.postersContainer = this.el;
      this.createPosters()
      
    },
    createPosters: function () {
        const thumbNailsRef = [
          {
            id: "green-arrow",
            title: "Green Arrow",
            url: "./assets/greenarrow.jpg",
          },
          {
            id: "outer-space",
            title: "Outer Space",
            url: "./assets/outerspace.jpg",
          },
    
          {
            id: "spider-man",
            title: "Spider Man",
            url: "./assets/spiderman.jpg",
          },
          {
            id: "superman",
            title: "Superman",
            url: "./assets/superman.jpg",
          },
        ];
        let prevoiusXPosition = -60;
    
        for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 10;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
    
         // Border Element
      const borderEl = this.createBorder(position,item.id)
      // Thumbnail Element
      const thumbnailEl = this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl)
      // Title Text Element
      const titleEl = this.createTitle(position,item)
      borderEl.appendChild(titleEl)
      this.postersContainer.appendChild(borderEl);
        }
      }, 
    
      createBorder:function(position,id){
        const entityEl = document.createElement("a-entity")
         entityEl.setAttribute("id",id)
         entityEl.setAttribute("position",position)
         entityEl.setAttribute("geometry",{
          primitive:"plane",
          width:22,
          height:40
     
         })
         entityEl.setAttribute("material",{
           color:"white"
         })
         entityEl.setAttribute("visible",true)
         entityEl.setAttribute("cursor-listener",{})
         return entityEl
       },
       createThumbnail:function(item){
         const entityEl = document.createElement("a-entity")
         entityEl.setAttribute("geometry",{
           primitive:"plane",
           width:20,
           height:28
         })
         entityEl.setAttribute("position",{
          x:0,
          y:5,
          z:0.1
         })
         entityEl.setAttribute("material",{
           src:item.url
         })
         entityEl.setAttribute("visible",true)
         return entityEl
     
       },
       createTitle:function(position,item){
       const entityEl = document.createElement("a-entity")
       entityEl.setAttribute("text",{
         font:"exo2bold",
         align:"center",
         width:120,
         color:"red",
         value:item.title
       })
       const elPosition = position
       elPosition.y = -20
       entityEl.setAttribute("position",elPosition)
       entityEl.setAttribute("visible",true)
       return entityEl
       },
       
     });
     