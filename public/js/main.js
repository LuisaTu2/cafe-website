var tabs = [
    {
      name: 'Home', 
      component: {
        template: '<div class="mainContent">Home component</div>' 
      }
    },
    {
      name: 'About',
      component: {
        template: '<div class="mainContent">Posts component</div>'
      }
    },
    {
      name: 'Menu',
      component: {
        template: '<div class="mainContent">Menu component</div>',
      }
    },
    {
        name: 'Hours',
        component: {
            props: ["h"],
            template: '<div class="mainContent" > our following hours: {{h}} </div>',
        }
    },
    {
        name: 'Location',
        component: {
          template: `<div class="mainContent"> 
          You can find us here: 
          
          </div>`,
        }
      }
  ]

  Vue.component("googlemap",{
    //   props:{
    //       bounds:{
    //           type:Object
    //       }
    //   },
    //   data: function(){
    //     return {m: null}
    //   },
   
    mounted: function initMap() {
        const element = document.getElementById("gmap")
        const options = {
          zoom: 14,
          center: new google.maps.LatLng(51.501527,-0.1921837)
        }
        this.m = new google.maps.Map(element, options);
        //console.log(element);
    },

  })
  
  new Vue({
    el: '#container',
    data: {
        tabs: tabs,
        currentTab: tabs[0],
        h: "No request so far"
    },
    
    methods: {
        ajaxCall: function(key){ 
            if(key==='Hours') {
                Vue.http.post("/hours").then((res) => {
                    //this.$http.post("/hours").then((res) => {
                            console.log("The response from the ajax call is: ")
                            console.log(res);
                            console.log("The key is:" + key);
                            this.h = res.body;
                        });
            }
        }
    }
  })
 



//  Vue.component("post",{
//         props: ["selected", "h"],
//         data: function(){
//             return{
//                 tabs: 
//                     [
//                         {
//                             id: 1,
//                             title:"home",
//                             content: '<p > This is the home!!  </p>'
//                         },
//                         {
//                             id: 2,
//                             title:"about",
//                             content: '<p> This is the about content! </p>'
//                         },
//                         {
//                             id: 3,
//                             title:"menu",
//                             content: '<p> This is the menu </p>'
//                         },                        
//                         {
//                             id: 4,
//                             title:"hours",
//                             content: ` We operate during the following hours:
//                             <div > 
                            
//                             </div>
//                             `
//                         },
//                         {
//                             id: 5,
//                             title:"location",
//                             content: `<p> You can find us here: 
                                
//                                     <div id="map"></div>

//                                 </p>
                                                          
//                                 `  
//                         }
//                     ],
//             }
//         },
//         computed: {
//             activeTab: function() {
//                 var self = this;
//                 return self.tabs.filter(function(t) {
//                         if(t.title === self.selected){
//                         return t
//                     }
//                 })
//             }, // end of activeTab
//             // activeHours: function(){
//             //     var self = this;
//             //     return self.h;
//             // }
//         },
//         template: 
//         `                
//             <div class="mainContent">  
//                 <li v-for="a in activeTab"> 
//                     <p v-html="a.content"> </p>   
//                     <p > {{h}} </p>
//                     The selection:
//                     {{selected}}   
                          
//                 </li>                   
//             </div>                
//         `
//     });


    // new Vue({
    //     el:"#container",
    //     data: {
    //         selected: "home",
    //         h: "This is where the hours go."           
    //     },
    //     // mounted: function(){
    //     //     this.updateAjax();
    //     // },
    //     methods:{
    //         makeActive: function(item, $event){
    //             var e = $event;
    //             console.log(e);
    //             console.log(item);
    //             this.selected = item;
    //             if(item === "hours"){
    //                 this.updateHoursAjax();
    //             }
    //         }, // end of makeActive
    //         updateHoursAjax: function(){           
    //             Vue.http.post("/hours").then((res) => {
    //             //this.$http.post("/hours").then((res) => {
    //                     console.log("The response from the ajax call is: ")
    //                     console.log(res);
    //                     this.h = res.body;
    //                 });
    //         }
    //     }, // end of methods
       
              

    // });

