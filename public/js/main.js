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
            props: ["hours"],
            template: '<div class="mainContent" > our following hours: {{hours}} </div>',
        }
    },
    {
        name: 'Location',
        component: {
          template: `<div class="mainContent"> 
              You can find us here: 
              <div id="mymap"> </div>
          
          </div>`,
          created(){
            console.log("I am being created!");
            if($("#mymap")){
              console.log("the map element is created")};
          },
          mounted() {
            console.log("Mounted");
              var loc_center = { lat: 37.7749, lng: -122.4194 };
              var map = new google.maps.Map(document.getElementById('mymap'), {  // WHY NOT WORKING WITH JQUERY???
                  zoom: 4,
                  center: loc_center
              });
              var marker = new google.maps.Marker({
                          position: loc_center,
                          map: map
              });
          } // end of mounted
        } // end of component
      } // end of location
  ] // end of tabs


Vue.component("home", {
        data: 
          function(){
            return {
              tabs: tabs,
              currentTab: tabs[0],
              hours: "Unavailable"
             }
          }
        ,
        template: `       
        <div>
                <button
                  v-for="tab in tabs"
                  v-bind:key="tab.name"
                  v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
                  v-on:click="currentTab = tab, getHours(tab.name)"               
                >{{ tab.name }}</button>
              
                <component
                  v-bind:is="currentTab.component"
                  class="tab"  
                  :hours="hours"                       
                ></component>                
        </div>
       `,
        methods: {
          getHours: function(key){ 
            if(key==='Hours') {
                Vue.http.post("/gethours").then((res) => {
                //this.$http.post("/hours").then((res) => {
                            console.log("The response from the ajax call is: ")
                            console.log(res);
                            console.log("The key is: " + key);
                            this.hours = res.body;
                            
                        });
            }
        }, // end of getHours
        } // end of methods
        
});


Vue.component("partnership", {
  props:["toggle"],
        template:`
        <div>
        <div class="bottomBorderTitle">
                We proudly partner with Tutu&ampXiongmao.com.             
        </div>
        <button class="goHome" @click='$emit("updatetoggle")'> Home </button>
        </div>
        `
});

new Vue({
  el: '#container',
  data: {
      toggle: "home"
  }, 
  methods: {
      updatetoggle: function(key){
        this.toggle = key;
        console.log(this.toggle);
      }
      // , partnership: function(){     // used for ajax
      //         Vue.http.get("/partnership").then((res)=>{
      //           console.log("The response: ");
      //           console.log(res.body);
      //           document.getElementById("mainContent").innerHTML = res.body;
      //         })
      // } // end of partnership
  } // end of methods
});






// Vue.component("gmapp",{
//   //   props:{
//   //       bounds:{
//   //           type:Object
//   //       }
//   //   },
//     data: function(){
//       return {m: null}
//     },  
//   mounted: function () {
//       const element = document.getElementById("gmap")
//       const options = {
//         zoom: 14,
//         center: new google.maps.LatLng(51.501527,-0.1921837)
//       }
//       this.m = new google.maps.Map(element, options);
//       //console.log(element);
//   },

// }) // end of gmap component