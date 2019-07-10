var tabs = [
    {
        name: 'Home', 
        component: {
        template: `
        <div id="home" class="text"> 
            Welcome to Dark Roast Cafe! 
            <br />
            Enjoy our blends made with the finest Colombian coffee beans. 
            <br /> 
            <img src="./pics/espresso-beans.jpg" />
        </div>` 
      }
    },
    {
        name: 'About',
        component: {
        template: `
        <div class="text"> 
            It all started with two gals wanting to explored the world by backpacking in South America... 
        </div>`
      }
    },
    {   name: 'Menu',
        component: {
        template: `
        <div class="text">
            Menu component
        </div>`,
      }
    },
    {   name: 'Suppliers',
        component: {
          template: `
            <div class="text">
                We parter with...
            </div>`,
        }
    },
    {
        name: 'Hours',
        component: {
            props: ["hours"],
            template: `<div class="text"> 
                              <p> Come visit us during the following hours: </p>
                              <p> Monday through Friday: {{hours.MF}} </p>
                              <p> Weekends and Holidays: {{hours.WH}} </p>
                       </div>`,
        }
    },
    {
        name: 'Locations',
        component: {
          template: `<div> 
                    <p> You can find us: </p> 
                    <p> 1234 Hilly Hill Road </p> 

                    <div id="mymap"> </div>
                    Follow us on FriendBook and Foodagram!
          </div>`
          ,
          created(){
            console.log("I am being created!");
            if($("#mymap")){
              console.log("the map element is created")};
          },
          mounted() {
            console.log("Mounted");
              var loc_center = { lat: 37.7749, lng: -122.4194 };
              var map = new google.maps.Map(document.getElementById('mymap'), {  // Check if working with jquery
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


Vue.component("maincontent", {
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
        <div class="container-fluid mainContentFluidContainer">
            <div class="row rowTabs ">
                <div
                  v-for="tab in tabs"
                  v-bind:key="tab.name"
                  v-bind:class="['tab-item','col', 'text-center',  { active: currentTab.name === tab.name }]"
                  v-on:click="currentTab = tab, getHours(tab.name)"               
                >{{ tab.name }}</div>
            </div>
            <div class="row rowMainContent "> 
                <div
                  v-bind:is="currentTab.component"
                  class="col colMainContent"  
                  :hours="hours"                       
                ></div>                
            </div>
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


// Vue.component("partnership", {
//   props:["toggle"],
//         template:`
//         <div>
//         <div class="bottomBorderTitle">
//                 We proudly partner with Tutu&ampXiongmao.com.             
//         </div>
//         <button class="goHome" @click='$emit("updatetoggle")'> Home </button>
//         </div>
//         `
// });








Vue.component("gmapp",{
  //   props:{
  //       bounds:{
  //           type:Object
  //       }
  //   },
    data: function(){
      return {m: null}
    },  
  mounted: function () {
      const element = document.getElementById("gmap")
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(51.501527,-0.1921837)
      }
      this.m = new google.maps.Map(element, options);
      //console.log(element);
  },

}) // end of gmap component


new Vue({
    el: '#mainContentToggle',
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