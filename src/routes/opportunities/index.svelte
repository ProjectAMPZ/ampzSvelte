

<script>
    import { fade } from 'svelte/transition';
    import Toast from 'svelte-toast'
    import Select from 'svelte-select';
    import { get, post } from "../../lib/_apiv1";
    import { onMount, afterUpdate } from "svelte";
    
    let inProgress = false;
    let nigerianStates;
    let opportunities_status;
    let sports;
    const toast = new Toast()
    let opportunities = [];

    let form = {
        search: '',
        location : '' ,
        sport: '',
        status: 'approved'
    }

  	function enter(e) {
        if(!form.profile){
            if(e.target.id == 'grp_talent') { talent_bg =  "#ef7f7f"}
            if(e.target.id == 'grp_scout') { scout_bg ='#9fef9f'}
            if(e.target.id == 'grp_coach') { coach_bg ='#fbd87f'}
        }
	}

	function leave(e) {
        hovering = false;
        if(!form.profile){
            if(e.target.id == 'grp_talent') { talent_bg =  "#ffeaea"}
            if(e.target.id == 'grp_scout') { scout_bg ='#e6fae6'}
            if(e.target.id == 'grp_coach') { coach_bg ='#fff5dc'}
        }
    }

    function simpleDate(ISOdateTime){
       return ISOdateTime.split("T")[0];
    }

	onMount(async () => {

        inProgress = true;
        opportunities_status = 'Loading ...'
        const opportunitiesRes =  await get("opportunity/list", form , null)
        const NigerianStatesRes =  await get("utils/nigerian_states", null, null)
        const SportsRes =  await post("defaultskills", null, null)
        if(opportunitiesRes) {


            opportunities = opportunitiesRes.data;
          opportunities =  opportunities.length > 0 ? opportunities.map(opp=>{
               opp.program_date = simpleDate(opp.program_date) 
            return opp
            }) : []
         opportunities_status = 'No opportunities found'
        }
      
        if(NigerianStatesRes) {
            console.log(NigerianStatesRes)
            nigerianStates = NigerianStatesRes
        }
        if(SportsRes) {
            sports = SportsRes;
            sports.map((sportsObj) => {sportsObj.label = sportsObj.name})
        }
        inProgress = false;
    })
    
    afterUpdate(() => {
        // scrollToTopPage()
    });

    function scrollToTopPage(){
          window.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(function() { }, 1500);
    }

   async function submitSearch() {
        inProgress = true
        let opts = {position: 'top-center', duration: 3000}
        const res =  await get("opportunity/list", form, null)
        if(res.success) {
            inProgress = false
            opportunities = res.data 
          
            opportunities.length > 0 ? opportunities.map(opp=>{
             opp.program_date = simpleDate(opp.program_date) 
            }) : []

        } else {
            inProgress = false
            toast.error('Error adding' ,opts)
         }
   }

</script>
<style>
.white-bg-8 {
   background-color: #fff;
}
.nav-items li a {
    color: #fff;
    font-size: 15px;
    padding: 10px 5px;
    margin-top: 30px;
    font-family: font2, sans-serif;
    text-transform: capitalize;
    line-height: 15px;
    position: relative;
    z-index: 1;
}
</style>
<svelte:head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>AMPZ - Discover A World Of Opportunities</title>
  <link rel="icon" href="img/favicon.png" />
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="ampz/css/bootstrap.min.css" />
  <link rel="stylesheet" href="ampz/css/owl.carousel.min.css" />
  <!-- style CSS -->
  <link rel="stylesheet" href="ampz/css/style.css" />

</svelte:head>

<main class="white-bg-8">
    <div class="wrapper opportunities">
        <div class="header">
            <div class="overlay">
                 <!--::header part start::-->
                  <header class="main_menu home_menu">
                    <div class="row align-items-center">
                      <div class="col-lg-12">
                        <nav
                          class="navbar navbar-expand-lg navbar-light"
                          style="display: flex;">
                          <div class="menu_flex_a">
                            <a class="navbar-brand" href="/">
                              <img src="img/ampz/ampz_logo.png" alt="logo" />
                            </a>
                          </div>
                          <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="ti-menu" />
                          </button>
                          <div
                            class="collapse navbar-collapse main-menu-item
                            justify-content-center menu_flex_b"
                            id="navbarSupportedContent">
                            <ul class="navbar-nav align-items-center">
                              <li class="nav-item">
                                <a class="nav-link" href="/about-ampz">About Us</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/product">Products</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/opportunities">Opportunites</a>
                              </li>              
                              <li class="nav-item">
                                <a class="nav-link" href="/">Blogs</a>
                              </li>

                              <a class="btn gold-nav-btn1 gold-nav-link " href="/waitlist">
                                Get Started
                              </a>

                            </ul>

                          </div>
                        </nav>
                      </div>
                    </div>
                    
                  </header>
                  <!-- Header part end-->
                <div class="header-content">
                    <p class="font2">verified opportunities</p>
                    <h3 class="font1">Opportunity Portal</h3>
                    <h5 style="margin-bottom: 5%;">
                        &ldquo;Ability is nothing without opportunity&ldquo;<br>
                        - Napoleon Bonaparte
                    </h5>
                </div>
                <div class="empty"></div>
            </div>
        </div>
        <div id="searchArea" class="container">
          <form action="">
            <div class="row">
              <div class="col-md-3">
                <input type="text" name="" id="" placeholder="Search for anything">
              </div>
              <div class="col-md-3">
                <input type="text" name="" id="" placeholder="All location">
              </div>
              <div class="col-md-3">
                <select placeholder="Sport Category" >
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Athletics">Athletics</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Rugby">Rugby</option>
                  <option value="Boxing">Boxing</option>
                </select>
              </div>
              <div class="col-md-3">
                <input type="submit" name="" id="" value="Search">
              </div>                     
            </div>
          </form> 
        </div> 
        <section class="our_service">
          <div class="container">              
              <div class="row job-wrapper mt-5 mb-5 pb-5">
                  <div class="col-sm-6 col-xl-4">
                      <div class="mt-5">
                        <div>
                            <img src="img/ampz/cards/card_image_1.png" alt="ampz">
                            <div><a href="/#">
                            </a><div class="rect"><a href="/#">
                                <p>
                                    <span class="h5 addr">LTFC Summer Camp</span>
                                </p>
                                <span class="addr category"> 
                                      Football
                                  &nbsp;</span>
                                <span style="color: #282828;opacity: 0.6;font-size: 20px;vertical-align: top;margin-top: -5px;">  | </span>
                                <span style="margin-left: 5px;" class="addr">
                                &nbsp;Lagos
                                </span>
                                <p class="addr_a">
                                    Every talented kid deserves an and engaging sumer to develop. Following his recruitment by George town Hoyas men’s basket
                                </p>
                                <div class="row"> 
                                      <span class="job_date col-md-5 d-md-inline-block"> Posted on 12 Jul</span>
                                        
                                        <span class="job_date col-md-5 d-md-inline-block" style="
                                        color: #5f0000;
                                        clear: right;
                                        padding-bottom: 15px; "> Read More</span>
                                        </div>
                                </a>
                            </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                        <div class="mt-5">
                          <div>
                              <img src="img/ampz/cards/card_image_1.png" alt="ampz">
                              <div><a href="/#">
                              </a><div class="rect"><a href="/#">
                                  <p>
                                      <span class="h5 addr">Juventus Academy Pre-Season (F)</span>
                                  </p>
                                  <span class="addr category"> 
                                      Basket ball 
                                    &nbsp;</span>
                                  <span style="color: #282828;opacity: 0.6;font-size: 20px;vertical-align: top;margin-top: -5px;">  | </span>
                                  <span style="margin-left: 5px;" class="addr">
                                  &nbsp;Lagos
                                  </span>
                                  <p class="addr_a">
                                      Every talented kid deserves an and engaging sumer to 
                                      develop. Following his recruitment by George town Hoyas men’s basket...
                                  </p>
                                  <div class="row"> 
                                        <span class="job_date col-md-5 d-md-inline-block"> Posted on 25 Nov </span>
                                          
                                          <span class="job_date col-md-5 d-md-inline-block" style="
                                          color: #5f0000;
                                          clear: right;
                                          padding-bottom: 15px;"> Read More</span>
                                          </div>
                                  </a>
                              </div>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-xl-4">
                          <div class="mt-5">
                            <div>
                                <img src="img/ampz/cards/card_image_1.png" alt="ampz">
                                <div><a href="/#">
                                </a><div class="rect"><a href="/#">
                                    <p>
                                        <span class="h5 addr">Juventus Academy Pre-Season (G)</span>
                                    </p>
                                    <span class="addr category"> 
                                        Basket ball 
                                      &nbsp;</span>
                                    <span style="color: #282828;opacity: 0.6;font-size: 20px;vertical-align: top;margin-top: -5px;">  | </span>
                                    <span style="margin-left: 5px;" class="addr">
                                    &nbsp;Lagos
                                    </span>
                                    <p class="addr_a">
                                        Every talented kid deserves an and engaging sumer to 
                                        develop. Following his recruitment by George town Hoyas men’s basket...
                                    </p>
                                    <div class="row"> 
                                          <span class="job_date col-md-5 d-md-inline-block"> Posted on 25 Nov </span>
                                            
                                            <span class="job_date col-md-5 d-md-inline-block" style="
                                            color: #5f0000;
                                            clear: right;
                                            padding-bottom: 15px;
                                            "> Read More</span>
                                            </div>
                                    </a>
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                </div>
          </div>
        </section>   
        <div class="create">
            <div class="overlay">
                <h3>Create Opportunities.</h3>
                <h5>Are you scouting or running a development programme? Reach more talents by sharing your opportunities with us.</h5>
                <a href="/opportunities/new" class="btn">Create</a>
            </div>
        </div>
    </div>
</main>