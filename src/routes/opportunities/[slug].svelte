<script >
    import { onMount, afterUpdate } from "svelte";
    import { get } from "../../lib/_apiv1";
    import { formatMoney, humanizeDate } from "../../lib/common";
    import { stores } from "@sapper/app";
    import { send, receive } from "../../actions/crossfade";

    const { page } = stores();
    const { slug } = $page.params;

    let inProgress = false;
    let opportunity;
    let otherOpportunities = false;
    let opportunity_status;
	onMount(async () => {

        inProgress = true;
        opportunity_status = 'Loading ...'
        const opportunityRes =  await get("opportunity/"+slug, null , null)
        if(opportunityRes) {
            opportunity = opportunityRes.data;
            opportunity.program_date = humanizeDate(opportunity.program_date) 
            opportunity.application_deadline = humanizeDate(opportunity.application_deadline) 
            opportunity.price = formatMoney(50000)
            opportunity_status = 'No opportunity found'
        }
        inProgress = false;
    })
    
    function handleApplyLink(){
        window.location.href=`//${opportunity.application_link}`
    }
</script>

<style>
.nav-items li a {
    color: #fff;
    font-size: 15px;
    padding: 10px 5px;
    margin-top: 30px;
    font-family: "Open Sans", sans-serif;
    text-transform: capitalize;
    line-height: 15px;
    position: relative;
    z-index: 1;
}
.nav-items li a.btn {
  
}

.no-opportunity {
    text-align: center;
    margin: 150px;
    color: #db9a03;
    font-size: 18px;
    font-weight: 800;
}

</style>


<main>

<div class="wrapper opportunity">
   <div class="nav">
                    <a href="go" class="brand-logo">
                    <img src="img/logo.png" alt="AMPZ">
                    </a>
                    <ul class="nav-items">
                        <li><a href="about-ampz">About Us</a></li>
                        <li><a href="products">Products</a></li>
                        <li><a href="opportunities">Opportunities</a></li>
                        <li><a href="waitlist" class="btn">Get Started</a></li>
                    </ul>
                    <i class="material-icons menu-btn">menu</i>
            </div>
    
        <div class="content">
        {#if opportunity}
            <div in:receive out:send class="main-content">
                <a href="/opportunities" class="back">&lsaquo; Back to Opportunities</a>
                <div class="title">
                    <h2 class="left open-sans">{opportunity.title}</h2>
                    <img src="img/arrow.png" alt="" class="right">
                    <div class="clearfix"></div>
                </div>
                <h4 class="subtitle open-sans">{opportunity.sport} | {opportunity.location}</h4>
                <img src="img/opportunity.png" class="banner" alt="">
                <p class="description">
                    {opportunity.description}
                </p>
                <div class="details">
                    <div class="item">
                        <p class="head">Price</p>
                        <p class="body price">
                            <span class="currency">NGN</span>
                            <span>{opportunity.price}</span>
                        </p>
                    </div>
                    <div class="item">
                        <p class="head">Sport</p>
                        <p class="body">{opportunity.sport}</p>
                    </div>
                    <div class="item">
                        <p class="head">Date</p>
                        <p class="body">{opportunity.program_date}</p>
                    </div>
                    <div class="item">
                        <p class="head">Minimum Age</p>
                        <p class="body">{opportunity.age}</p>
                    </div>
                    <div class="item">
                        <p class="head">Location</p>
                        <p class="body">{opportunity.location}</p>
                    </div>
                    <div class="item">
                        <p class="head">Apply before</p>
                        <p class="body">{opportunity.application_deadline}</p>
                    </div>
                </div>
                <button on:click={handleApplyLink} class="btn">Apply</button>
            </div>
         {/if}
        <h3 class="related-title">Related Opportunities</h3>

        <div class="no-opportunity" > No Related Opportunities yet </div>
        <div class="grid-container">
           {#if otherOpportunities}
            <div class="item">
                <div class="item-content">
                    <div class="img img3"></div>
                    <div class="text">
                        <h4 class="title open-sans">Juventus Academy Pre-Season (F)</h4>
                        <h5 class="subtitle">Basketball | Ibadan</h5>
                        <p class="main-text">
                            Every talented kid deserves an and engaging summer to develop following his recruitment by george town hoyas men's basket...
                        </p>
                        <div class="main-text">
                            <span class="left small">Posted on 27 Nov</span>
                            <a href="go" class="right">Read More</a>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
         {/if}
        </div>
    </div>
</div>

</main>