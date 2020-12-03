'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index = require('./index-7460d1f3.js');
require('./index-4169654c.js');
require('cookie-universal');
require('./index-eb724975.js');
require('./index-c0882747.js');
var Toast = _interopDefault(require('svelte-toast'));
require('./Select-6893572d.js');
var _apiv1 = require('./_apiv1-50cacf4c.js');

/* src\routes\waitlist\index.svelte generated by Svelte v3.16.4 */

const css = {
	code: ".pb_bx.svelte-zsy9fq{border-radius:4px;margin:10px 0px;border:0.3px solid #DB9A02}img.svelte-zsy9fq{background-color:var(--box-color)}.center-page-info.svelte-zsy9fq{text-align:center;font-size:18px;font-weight:500;margin:20px 20%;word-spacing:2px;color:#565F62\r\n}.center-page-warning-x2.svelte-zsy9fq{color:#DB9A02;font-size:12px;margin:40px 20%;font-weight:400;text-align:center}.nav-items li.svelte-zsy9fq a.svelte-zsy9fq{color:#fff;font-size:15px;padding:10px 5px;margin-top:30px;font-family:font2, sans-serif;text-transform:capitalize;line-height:15px;position:relative;z-index:1}.new-opportunity.svelte-zsy9fq .content .form .title.svelte-zsy9fq{font-family:font1 !important;color:black}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    import { fade } from 'svelte/transition';\\r\\n    import Toast from 'svelte-toast'\\r\\n    import Select from 'svelte-select';\\r\\n    import { get, post } from \\\"../../lib/_apiv1\\\";\\r\\n    import { onMount, afterUpdate } from \\\"svelte\\\";\\r\\n    \\r\\n    let inProgress = false;\\r\\n    let stage = 1;\\r\\n\\r\\n    let talent_bg = '#ffeaea';\\r\\n    let scout_bg = '#e6fae6';\\r\\n    let coach_bg = '#fff5dc';\\r\\n\\r\\n    let hovering;\\r\\n    let centerPageInfo = `We are currently in Beta Test and can't wait to have you on-board. Be the first to know when we roll-out.`\\r\\n    let centerPageWarning = `By completing the short form below, you agree to receive electronic notifications from AMPZ.`\\r\\n    let sports;\\r\\n\\r\\n\\r\\n    const toast = new Toast()\\r\\n\\r\\n    let form = {\\r\\n        profile: '',\\r\\n        full_name : '' ,\\r\\n        contact_email: '',\\r\\n        phone_number: '',\\r\\n        selected_sport_type: null,\\r\\n        associated_organisation: '',\\r\\n    }\\r\\n\\r\\n    let error = {\\r\\n        full_name:  {\\r\\n            message: 'Enter your full name'\\r\\n        },\\r\\n        contact_email :  {\\r\\n            message: 'Enter your contact email'\\r\\n        },\\r\\n        phone_number:  {\\r\\n            message: 'Enter your phone number'\\r\\n        },\\r\\n        associated_organisation:  {\\r\\n            message: 'Enter your associated organisation e.g  Academy/Club'\\r\\n        },\\r\\n        selected_sport_type: {\\r\\n                 message: 'Enter your sport of interest'\\r\\n        },\\r\\n        message: ''\\r\\n    }\\r\\n\\r\\n    function handleSelect(e) {\\r\\n        if(e.target){\\r\\n            if(e.target.id == 'talent') { form.profile = 'talent'}\\r\\n            if(e.target.id == 'scout') { form.profile  ='scout'}\\r\\n            if(e.target.id == 'coach') { form.profile ='coach'}\\r\\n            stage = 2\\r\\n        }\\r\\n    }\\r\\n\\r\\n  \\tfunction enter(e) {\\r\\n        if(!form.profile){\\r\\n            if(e.target.id == 'grp_talent') { talent_bg =  \\\"#ef7f7f\\\"}\\r\\n            if(e.target.id == 'grp_scout') { scout_bg ='#9fef9f'}\\r\\n            if(e.target.id == 'grp_coach') { coach_bg ='#fbd87f'}\\r\\n        }\\r\\n\\t}\\r\\n\\r\\n\\tfunction leave(e) {\\r\\n        hovering = false;\\r\\n        if(!form.profile){\\r\\n            if(e.target.id == 'grp_talent') { talent_bg =  \\\"#ffeaea\\\"}\\r\\n            if(e.target.id == 'grp_scout') { scout_bg ='#e6fae6'}\\r\\n            if(e.target.id == 'grp_coach') { coach_bg ='#fff5dc'}\\r\\n        }\\r\\n \\r\\n    }\\r\\n\\r\\n    function handleBack () {\\r\\n        stage -= 1;\\r\\n        form.profile = '';\\r\\n   }\\r\\n\\r\\n\\tonMount(async () => {\\r\\n  \\r\\n\\t\\tinProgress = true;\\r\\n        const SportsRes =  await post(\\\"defaultskills\\\", null, null)\\r\\n   \\r\\n        if(SportsRes) {\\r\\n               inProgress = false;\\r\\n            sports = SportsRes;\\r\\n            sports.map((sportsObj) => {sportsObj.label = sportsObj.name})\\r\\n        }\\r\\n        inProgress = false;\\r\\n    })\\r\\n    \\r\\n    afterUpdate(() => {\\r\\n        // scrollToTopPage()\\r\\n    });\\r\\n\\r\\n   async function submitNewMember() {\\r\\n        error.message = ''\\r\\n        let errorState;\\r\\n        if(stage === 2){\\r\\n            for(var key in form) {\\r\\n                if(form[key] === \\\"\\\" ||form[key] == null) { \\r\\n                  let talent = (key == 'associated_organisation' && form.profile == 'talent');\\r\\n                    if(!talent) {\\r\\n                        error.message = error[key].message\\r\\n                        errorState = true;\\r\\n                    }\\r\\n                 }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n    if(!errorState){error.message = ''}\\r\\n    if(!errorState){\\r\\n        inProgress = true\\r\\n        let opts = {position: 'top-center', duration: 3000}\\r\\n        const res =  await post(\\\"waitlist\\\", form, null)\\r\\n        if(res.success) {\\r\\n            inProgress = false\\r\\n            toast.success('Successfull !',opts)\\r\\n            setTimeout(function(){location.href='waitlist'} , 4000); \\r\\n        }else {\\r\\n            inProgress = false\\r\\n            toast.error('Error adding' ,opts)\\r\\n         }\\r\\n        }\\r\\n    \\r\\n   }\\r\\n\\r\\n</script>\\r\\n\\r\\n\\r\\n<style>\\r\\n   .pb_bx {\\r\\n        border-radius: 4px;\\r\\n        margin: 10px 0px;\\r\\n        border: 0.3px solid #DB9A02;   \\r\\n   } \\r\\n \\r\\n   img {\\r\\n       background-color: var(--box-color);\\r\\n   }\\r\\n\\r\\n.center-page-info{\\r\\n  text-align: center;\\r\\n    font-size: 18px;\\r\\n    font-weight: 500;\\r\\n     margin: 20px 20%;\\r\\n    word-spacing: 2px;\\r\\n    color: #565F62\\r\\n}\\r\\n\\r\\n.center-page-warning-x2 {\\r\\n        color: #DB9A02;\\r\\n        font-size: 12px;\\r\\n        margin: 40px 20%;\\r\\n        font-weight: 400;\\r\\n        text-align: center;\\r\\n    }\\r\\n.nav-items li a {\\r\\n    color: #fff;\\r\\n    font-size: 15px;\\r\\n    padding: 10px 5px;\\r\\n    margin-top: 30px;\\r\\n    font-family: font2, sans-serif;\\r\\n    text-transform: capitalize;\\r\\n    line-height: 15px;\\r\\n    position: relative;\\r\\n    z-index: 1;\\r\\n}\\r\\n.new-opportunity .content .form .title {\\r\\n  font-family: font1 !important;\\r\\n  color: black;\\r\\n}\\r\\n</style>\\r\\n<svelte:head>\\r\\n  <!-- Required meta tags -->\\r\\n  <meta charset=\\\"utf-8\\\" />\\r\\n  <meta\\r\\n    name=\\\"viewport\\\"\\r\\n    content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\" />\\r\\n  <title>AMPZ - Discover A World Of Opportunities</title>\\r\\n  <link rel=\\\"icon\\\" href=\\\"img/favicon.png\\\" />\\r\\n  <!-- Bootstrap CSS -->\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"ampz/css/bootstrap.min.css\\\" />\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"ampz/css/owl.carousel.min.css\\\" />\\r\\n  <!-- style CSS -->\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"ampz/css/style.css\\\" />\\r\\n\\r\\n</svelte:head>\\r\\n<main>\\r\\n <!--::header part start::-->\\r\\n  <header class=\\\"main_menu home_menu\\\">\\r\\n    <div class=\\\"row align-items-center\\\">\\r\\n      <div class=\\\"col-lg-12\\\">\\r\\n        <nav\\r\\n          class=\\\"navbar navbar-expand-lg navbar-light\\\"\\r\\n          style=\\\"display: flex;\\\">\\r\\n          <div class=\\\"menu_flex_a\\\">\\r\\n            <a class=\\\"navbar-brand\\\" href=\\\"/\\\">\\r\\n              <img src=\\\"img/ampz/ampz_logo.png\\\" alt=\\\"logo\\\" />\\r\\n            </a>\\r\\n          </div>\\r\\n          <button\\r\\n            class=\\\"navbar-toggler\\\"\\r\\n            type=\\\"button\\\"\\r\\n            data-toggle=\\\"collapse\\\"\\r\\n            data-target=\\\"#navbarSupportedContent\\\"\\r\\n            aria-controls=\\\"navbarSupportedContent\\\"\\r\\n            aria-expanded=\\\"false\\\"\\r\\n            aria-label=\\\"Toggle navigation\\\">\\r\\n            <span class=\\\"ti-menu\\\" />\\r\\n          </button>\\r\\n          <div\\r\\n            class=\\\"collapse navbar-collapse main-menu-item\\r\\n            justify-content-center menu_flex_b\\\"\\r\\n            id=\\\"navbarSupportedContent\\\">\\r\\n            <ul class=\\\"navbar-nav align-items-center\\\">\\r\\n              <li class=\\\"nav-item\\\">\\r\\n                <a class=\\\"nav-link\\\" href=\\\"/about-ampz\\\">About Us</a>\\r\\n              </li>\\r\\n              <li class=\\\"nav-item\\\">\\r\\n                <a class=\\\"nav-link\\\" href=\\\"/product\\\">Products</a>\\r\\n              </li>\\r\\n              <li class=\\\"nav-item\\\">\\r\\n                <a class=\\\"nav-link\\\" href=\\\"/opportunities\\\">Opportunites</a>\\r\\n              </li>             \\r\\n              <li class=\\\"nav-item\\\">\\r\\n                <a class=\\\"nav-link\\\" href=\\\"/\\\">Blogs</a>\\r\\n              </li>\\r\\n              <a class=\\\"btn gold-nav-btn1 gold-nav-link \\\" href=\\\"/waitlist\\\">\\r\\n                Get Started\\r\\n              </a>\\r\\n\\r\\n            </ul>\\r\\n\\r\\n          </div>\\r\\n        </nav>\\r\\n      </div>\\r\\n    </div>\\r\\n    <div class=\\\"container\\\" />\\r\\n  </header>\\r\\n  <!-- Header part end-->\\r\\n   <div class=\\\"wrapper new-opportunity\\\">\\r\\n                 <div class=\\\"content\\\">\\r\\n                    <div class=\\\"form\\\">\\r\\n                         \\r\\n          {#if stage == 1}\\r\\n      \\r\\n                        <h3 style=\\\"margin-top: -5px;\\\" class=\\\"title\\\">Select Profile</h3>\\r\\n                        <div class=\\\"center-page-info\\\"> Carefully pick the Profile that best matches you below. </div>\\r\\n                        \\r\\n                        <div on:mouseenter={enter} on:mouseleave={leave} id=\\\"grp_talent\\\" style=\\\"text-align: center;\\\"> <img on:click={handleSelect} id=\\\"talent\\\" style=\\\"--box-color: {talent_bg}\\\" class=\\\"profile_image pb_bx\\\" src=\\\"img/Group_Talent_Signup.png\\\" alt=\\\"\\\">  </div>\\r\\n                        <div on:mouseenter={enter} on:mouseleave={leave}  id=\\\"grp_scout\\\" style=\\\"text-align: center \\\"> <img on:click={handleSelect} id=\\\"scout\\\"  style=\\\"--box-color: {scout_bg}\\\" class=\\\"profile_image pb_bx\\\" src=\\\"img/Group_Scout_Signup.png\\\" alt=\\\"\\\"> </div>\\r\\n                        <div  on:mouseenter={enter} on:mouseleave={leave} id=\\\"grp_coach\\\" style=\\\"text-align: center;\\\"> <img on:click={handleSelect} id=\\\"coach\\\" style=\\\"--box-color: {coach_bg}\\\" class=\\\"profile_image pb_bx\\\" src=\\\"img/Group_Coach_Signup.png\\\" alt=\\\"\\\">  </div>\\r\\n              \\r\\n                    <!-- <button class=\\\"btn right\\\">Continue</button> -->\\r\\n                    <div class=\\\"clearfix\\\"></div>\\r\\n         {/if}\\r\\n\\r\\n      {#if stage === 2  && form.profile == \\\"talent\\\"}\\r\\n            <h3 class=\\\"title\\\">Hey Champ!</h3>\\r\\n            <div class=\\\"center-page-info\\\"> {centerPageInfo} </div>\\r\\n            <div class=\\\"center-page-warning-x2\\\"> <span>  <img style=\\\"height:10px\\\" src=\\\"img/warning.png\\\" alt=\\\"\\\"> </span> <span> {centerPageWarning} </span> </div>\\r\\n\\r\\n            {#if error.message}\\r\\n             <div transition:fade class=\\\"errMsg\\\"> {error.message}</div> \\r\\n            {/if}\\r\\n          \\r\\n            <input type=\\\"text\\\" bind:value={form.full_name}  placeholder=\\\"Full Name\\\" class=\\\"input\\\">\\r\\n            <input type=\\\"email\\\" bind:value={form.contact_email } placeholder=\\\"Contact Email\\\" class=\\\"input\\\">\\r\\n            <input type=\\\"text\\\"  bind:value={form.phone_number } placeholder=\\\"Phone Number (eg +234704567435)\\\" class=\\\"input\\\">\\r\\n            <select placeholder=\\\"Sport Category\\\" > \\r\\n              <option value=\\\"Football\\\">Football</option>\\r\\n              <option value=\\\"Basketball\\\">Basketball</option>\\r\\n              <option value=\\\"Athletics\\\">Athletics</option>\\r\\n              <option value=\\\"Cricket\\\">Cricket</option>\\r\\n              <option value=\\\"Rugby\\\">Rugby</option>\\r\\n              <option value=\\\"Boxing\\\">Boxing</option>\\r\\n              <option value=\\\"Tennis\\\">Tennis</option>\\r\\n            </select>\\r\\n            <button on:click={handleBack} class=\\\"back-btn btn left\\\">Back</button>\\r\\n             { #if inProgress}\\r\\n             <span class=\\\"right\\\"> <img style='height:70px' src=\\\"loading-giph.gif\\\" alt=\\\"loading-giph\\\"> </span>\\r\\n         {/if}\\r\\n        <button on:click={submitNewMember} class=\\\"btn right\\\"> Submit</button>\\r\\n      <div class=\\\"clearfix\\\"></div>\\r\\n    {/if}\\r\\n\\r\\n    {#if stage === 2 && form.profile == \\\"coach\\\"}\\r\\n            \\r\\n            <h3 class=\\\"title\\\">Thank you for your interest!</h3>\\r\\n            <div class=\\\"center-page-info\\\"> {centerPageInfo} </div>\\r\\n             <div class=\\\"center-page-warning-x2\\\"> <span>  <img style=\\\"height:10px\\\" src=\\\"img/warning.png\\\" alt=\\\"\\\"> </span> <span> {centerPageWarning} </span> </div>\\r\\n\\r\\n            {#if error.message}\\r\\n             <div transition:fade class=\\\"errMsg\\\"> {error.message}</div> \\r\\n            {/if}\\r\\n\\r\\n            <input type=\\\"text\\\" bind:value={form.full_name}  placeholder=\\\"Full Name\\\" class=\\\"input\\\">\\r\\n            <input type=\\\"email\\\" bind:value={form.contact_email } placeholder=\\\"Contact Email\\\" class=\\\"input\\\">\\r\\n            <input type=\\\"text\\\"  bind:value={form.phone_number } placeholder=\\\"Phone Number (eg +234704567435)\\\" class=\\\"input\\\">\\r\\n            <select placeholder=\\\"Sport Category\\\" > \\r\\n              <option value=\\\"Football\\\">Football</option>\\r\\n              <option value=\\\"Basketball\\\">Basketball</option>\\r\\n              <option value=\\\"Athletics\\\">Athletics</option>\\r\\n              <option value=\\\"Cricket\\\">Cricket</option>\\r\\n              <option value=\\\"Rugby\\\">Rugby</option>\\r\\n              <option value=\\\"Boxing\\\">Boxing</option>\\r\\n              <option value=\\\"Tennis\\\">Tennis</option>\\r\\n            </select>\\r\\n           \\r\\n            <input type=\\\"text\\\" bind:value={form.associated_organisation } placeholder=\\\"Academy\\\" class=\\\"input\\\">\\r\\n            <button on:click={handleBack} class=\\\"back-btn btn left\\\">Back</button>\\r\\n        \\r\\n                { #if inProgress}\\r\\n             <span class=\\\"right\\\"> <img style='height:70px' src=\\\"loading-giph.gif\\\" alt=\\\"loading-giph\\\"> </span>\\r\\n         {/if}\\r\\n        <button on:click={submitNewMember} class=\\\"btn right\\\"> Submit</button>\\r\\n      <div class=\\\"clearfix\\\"></div>\\r\\n\\r\\n        {/if}\\r\\n        \\r\\n        {#if stage === 2 && form.profile == \\\"scout\\\"}\\r\\n            <h3 class=\\\"title\\\">Thank you for your interest!</h3>\\r\\n             <div class=\\\"center-page-info\\\"> {centerPageInfo} </div>\\r\\n            <div class=\\\"center-page-warning-x2\\\"> <span>  <img style=\\\"height:10px\\\" src=\\\"img/warning.png\\\" alt=\\\"\\\"> </span> <span> {centerPageWarning} </span> </div>\\r\\n\\r\\n           \\r\\n            {#if error.message}\\r\\n             <div transition:fade class=\\\"errMsg\\\"> {error.message}</div> \\r\\n            {/if}\\r\\n\\r\\n            <input type=\\\"text\\\" bind:value={form.full_name}  placeholder=\\\"Full Name\\\" class=\\\"input\\\">\\r\\n            <input type=\\\"email\\\" bind:value={form.contact_email } placeholder=\\\"Contact Email\\\" class=\\\"input\\\">\\r\\n            <input type=\\\"text\\\"  bind:value={form.phone_number } placeholder=\\\"Phone Number (eg +234704567435)\\\" class=\\\"input\\\">\\r\\n            <select placeholder=\\\"Sport Category\\\" >\\r\\n              <option value=\\\"Football\\\">Football</option>\\r\\n              <option value=\\\"Basketball\\\">Basketball</option>\\r\\n              <option value=\\\"Athletics\\\">Athletics</option>\\r\\n              <option value=\\\"Cricket\\\">Cricket</option>\\r\\n              <option value=\\\"Rugby\\\">Rugby</option>\\r\\n              <option value=\\\"Boxing\\\">Boxing</option>\\r\\n              <option value=\\\"Tennis\\\">Tennis</option>\\r\\n            </select>\\r\\n          \\r\\n            <input type=\\\"text\\\" bind:value={form.associated_organisation } placeholder=\\\"Club\\\" class=\\\"input\\\">\\r\\n            <button on:click={handleBack} class=\\\"back-btn btn left\\\">Back</button>\\r\\n\\r\\n          { #if inProgress}\\r\\n             <span class=\\\"right\\\"> <img style='height:70px' src=\\\"loading-giph.gif\\\" alt=\\\"loading-giph\\\"> </span>\\r\\n         {/if}\\r\\n             <button on:click={submitNewMember} class=\\\"btn right\\\"> Submit</button>\\r\\n         <div class=\\\"clearfix\\\"></div>\\r\\n        {/if}\\r\\n\\r\\n            </div>\\r\\n       </div>\\r\\n\\r\\n      <!-- </div> -->\\r\\n    <!-- </div> -->\\r\\n</main>\\r\\n\"],\"names\":[],\"mappings\":\"AAuIG,MAAM,cAAC,CAAC,AACH,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,OAAO,AAChC,CAAC,AAED,GAAG,cAAC,CAAC,AACD,gBAAgB,CAAE,IAAI,WAAW,CAAC,AACtC,CAAC,AAEJ,+BAAiB,CAAC,AAChB,UAAU,CAAE,MAAM,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CACf,MAAM,CAAE,IAAI,CAAC,GAAG,CACjB,YAAY,CAAE,GAAG,CACjB,KAAK,CAAE,OAAO;AAClB,CAAC,AAED,uBAAuB,cAAC,CAAC,AACjB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,AACtB,CAAC,AACL,UAAU,CAAC,gBAAE,CAAC,CAAC,cAAC,CAAC,AACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,KAAK,CAAC,CAAC,UAAU,CAC9B,cAAc,CAAE,UAAU,CAC1B,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,AACd,CAAC,AACD,8BAAgB,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,cAAC,CAAC,AACtC,WAAW,CAAE,KAAK,CAAC,UAAU,CAC7B,KAAK,CAAE,KAAK,AACd,CAAC\"}"
};

const Waitlist = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let inProgress = false;
	let stage = 1;
	let talent_bg = "#ffeaea";
	let scout_bg = "#e6fae6";
	let coach_bg = "#fff5dc";
	let centerPageInfo = `We are currently in Beta Test and can't wait to have you on-board. Be the first to know when we roll-out.`;
	let centerPageWarning = `By completing the short form below, you agree to receive electronic notifications from AMPZ.`;
	let sports;
	const toast = new Toast();

	let form = {
		profile: "",
		full_name: "",
		contact_email: "",
		phone_number: "",
		selected_sport_type: null,
		associated_organisation: ""
	};

	let error = {
		full_name: { message: "Enter your full name" },
		contact_email: { message: "Enter your contact email" },
		phone_number: { message: "Enter your phone number" },
		associated_organisation: {
			message: "Enter your associated organisation e.g  Academy/Club"
		},
		selected_sport_type: { message: "Enter your sport of interest" },
		message: ""
	};

	index.onMount(async () => {
		inProgress = true;
		const SportsRes = await _apiv1.post("defaultskills", null, null);

		if (SportsRes) {
			inProgress = false;
			sports = SportsRes;

			sports.map(sportsObj => {
				sportsObj.label = sportsObj.name;
			});
		}

		inProgress = false;
	});

	index.afterUpdate(() => {
		
	});

	$$result.css.add(css);

	return `${($$result.head += `<meta charset="${"utf-8"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, shrink-to-fit=no"}"><title>AMPZ - Discover A World Of Opportunities</title><link rel="${"icon"}" href="${"img/favicon.png"}"><link rel="${"stylesheet"}" href="${"ampz/css/bootstrap.min.css"}"><link rel="${"stylesheet"}" href="${"ampz/css/owl.carousel.min.css"}"><link rel="${"stylesheet"}" href="${"ampz/css/style.css"}">`, "")}
<main>
 
  <header class="${"main_menu home_menu"}">
    <div class="${"row align-items-center"}">
      <div class="${"col-lg-12"}">
        <nav class="${"navbar navbar-expand-lg navbar-light"}" style="${"display: flex;"}">
          <div class="${"menu_flex_a"}">
            <a class="${"navbar-brand"}" href="${"/"}">
              <img src="${"img/ampz/ampz_logo.png"}" alt="${"logo"}" class="${"svelte-zsy9fq"}">
            </a>
          </div>
          <button class="${"navbar-toggler"}" type="${"button"}" data-toggle="${"collapse"}" data-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}">
            <span class="${"ti-menu"}"></span>
          </button>
          <div class="${"collapse navbar-collapse main-menu-item\r\n            justify-content-center menu_flex_b"}" id="${"navbarSupportedContent"}">
            <ul class="${"navbar-nav align-items-center"}">
              <li class="${"nav-item svelte-zsy9fq"}">
                <a class="${"nav-link svelte-zsy9fq"}" href="${"/about-ampz"}">About Us</a>
              </li>
              <li class="${"nav-item svelte-zsy9fq"}">
                <a class="${"nav-link svelte-zsy9fq"}" href="${"/product"}">Products</a>
              </li>
              <li class="${"nav-item svelte-zsy9fq"}">
                <a class="${"nav-link svelte-zsy9fq"}" href="${"/opportunities"}">Opportunites</a>
              </li>             
              <li class="${"nav-item svelte-zsy9fq"}">
                <a class="${"nav-link svelte-zsy9fq"}" href="${"/"}">Blogs</a>
              </li>
              <a class="${"btn gold-nav-btn1 gold-nav-link "}" href="${"/waitlist"}">
                Get Started
              </a>

            </ul>

          </div>
        </nav>
      </div>
    </div>
    <div class="${"container"}"></div>
  </header>
  
   <div class="${"wrapper new-opportunity svelte-zsy9fq"}">
                 <div class="${"content"}">
                    <div class="${"form"}">
                         
          ${stage == 1
	? `<h3 style="${"margin-top: -5px;"}" class="${"title svelte-zsy9fq"}">Select Profile</h3>
                        <div class="${"center-page-info svelte-zsy9fq"}"> Carefully pick the Profile that best matches you below. </div>
                        
                        <div id="${"grp_talent"}" style="${"text-align: center;"}"> <img id="${"talent"}" style="${"--box-color: " + index.escape(talent_bg)}" class="${"profile_image pb_bx svelte-zsy9fq"}" src="${"img/Group_Talent_Signup.png"}" alt="${""}">  </div>
                        <div id="${"grp_scout"}" style="${"text-align: center "}"> <img id="${"scout"}" style="${"--box-color: " + index.escape(scout_bg)}" class="${"profile_image pb_bx svelte-zsy9fq"}" src="${"img/Group_Scout_Signup.png"}" alt="${""}"> </div>
                        <div id="${"grp_coach"}" style="${"text-align: center;"}"> <img id="${"coach"}" style="${"--box-color: " + index.escape(coach_bg)}" class="${"profile_image pb_bx svelte-zsy9fq"}" src="${"img/Group_Coach_Signup.png"}" alt="${""}">  </div>
              
                    
                    <div class="${"clearfix"}"></div>`
	: ``}

      ${stage === 2 && form.profile == "talent"
	? `<h3 class="${"title svelte-zsy9fq"}">Hey Champ!</h3>
            <div class="${"center-page-info svelte-zsy9fq"}"> ${index.escape(centerPageInfo)} </div>
            <div class="${"center-page-warning-x2 svelte-zsy9fq"}"> <span>  <img style="${"height:10px"}" src="${"img/warning.png"}" alt="${""}" class="${"svelte-zsy9fq"}"> </span> <span> ${index.escape(centerPageWarning)} </span> </div>

            ${error.message
		? `<div class="${"errMsg"}"> ${index.escape(error.message)}</div>`
		: ``}
          
            <input type="${"text"}" placeholder="${"Full Name"}" class="${"input"}"${index.add_attribute("value", form.full_name, 1)}>
            <input type="${"email"}" placeholder="${"Contact Email"}" class="${"input"}"${index.add_attribute("value", form.contact_email, 1)}>
            <input type="${"text"}" placeholder="${"Phone Number (eg +234704567435)"}" class="${"input"}"${index.add_attribute("value", form.phone_number, 1)}>
            <select placeholder="${"Sport Category"}"> 
              <option value="${"Football"}">Football</option>
              <option value="${"Basketball"}">Basketball</option>
              <option value="${"Athletics"}">Athletics</option>
              <option value="${"Cricket"}">Cricket</option>
              <option value="${"Rugby"}">Rugby</option>
              <option value="${"Boxing"}">Boxing</option>
              <option value="${"Tennis"}">Tennis</option>
            </select>
            <button class="${"back-btn btn left"}">Back</button>
             ${inProgress
		? `<span class="${"right"}"> <img style="${"height:70px"}" src="${"loading-giph.gif"}" alt="${"loading-giph"}" class="${"svelte-zsy9fq"}"> </span>`
		: ``}
        <button class="${"btn right"}"> Submit</button>
      <div class="${"clearfix"}"></div>`
	: ``}

    ${stage === 2 && form.profile == "coach"
	? `<h3 class="${"title svelte-zsy9fq"}">Thank you for your interest!</h3>
            <div class="${"center-page-info svelte-zsy9fq"}"> ${index.escape(centerPageInfo)} </div>
             <div class="${"center-page-warning-x2 svelte-zsy9fq"}"> <span>  <img style="${"height:10px"}" src="${"img/warning.png"}" alt="${""}" class="${"svelte-zsy9fq"}"> </span> <span> ${index.escape(centerPageWarning)} </span> </div>

            ${error.message
		? `<div class="${"errMsg"}"> ${index.escape(error.message)}</div>`
		: ``}

            <input type="${"text"}" placeholder="${"Full Name"}" class="${"input"}"${index.add_attribute("value", form.full_name, 1)}>
            <input type="${"email"}" placeholder="${"Contact Email"}" class="${"input"}"${index.add_attribute("value", form.contact_email, 1)}>
            <input type="${"text"}" placeholder="${"Phone Number (eg +234704567435)"}" class="${"input"}"${index.add_attribute("value", form.phone_number, 1)}>
            <select placeholder="${"Sport Category"}"> 
              <option value="${"Football"}">Football</option>
              <option value="${"Basketball"}">Basketball</option>
              <option value="${"Athletics"}">Athletics</option>
              <option value="${"Cricket"}">Cricket</option>
              <option value="${"Rugby"}">Rugby</option>
              <option value="${"Boxing"}">Boxing</option>
              <option value="${"Tennis"}">Tennis</option>
            </select>
           
            <input type="${"text"}" placeholder="${"Academy"}" class="${"input"}"${index.add_attribute("value", form.associated_organisation, 1)}>
            <button class="${"back-btn btn left"}">Back</button>
        
                ${inProgress
		? `<span class="${"right"}"> <img style="${"height:70px"}" src="${"loading-giph.gif"}" alt="${"loading-giph"}" class="${"svelte-zsy9fq"}"> </span>`
		: ``}
        <button class="${"btn right"}"> Submit</button>
      <div class="${"clearfix"}"></div>`
	: ``}
        
        ${stage === 2 && form.profile == "scout"
	? `<h3 class="${"title svelte-zsy9fq"}">Thank you for your interest!</h3>
             <div class="${"center-page-info svelte-zsy9fq"}"> ${index.escape(centerPageInfo)} </div>
            <div class="${"center-page-warning-x2 svelte-zsy9fq"}"> <span>  <img style="${"height:10px"}" src="${"img/warning.png"}" alt="${""}" class="${"svelte-zsy9fq"}"> </span> <span> ${index.escape(centerPageWarning)} </span> </div>

           
            ${error.message
		? `<div class="${"errMsg"}"> ${index.escape(error.message)}</div>`
		: ``}

            <input type="${"text"}" placeholder="${"Full Name"}" class="${"input"}"${index.add_attribute("value", form.full_name, 1)}>
            <input type="${"email"}" placeholder="${"Contact Email"}" class="${"input"}"${index.add_attribute("value", form.contact_email, 1)}>
            <input type="${"text"}" placeholder="${"Phone Number (eg +234704567435)"}" class="${"input"}"${index.add_attribute("value", form.phone_number, 1)}>
            <select placeholder="${"Sport Category"}">
              <option value="${"Football"}">Football</option>
              <option value="${"Basketball"}">Basketball</option>
              <option value="${"Athletics"}">Athletics</option>
              <option value="${"Cricket"}">Cricket</option>
              <option value="${"Rugby"}">Rugby</option>
              <option value="${"Boxing"}">Boxing</option>
              <option value="${"Tennis"}">Tennis</option>
            </select>
          
            <input type="${"text"}" placeholder="${"Club"}" class="${"input"}"${index.add_attribute("value", form.associated_organisation, 1)}>
            <button class="${"back-btn btn left"}">Back</button>

          ${inProgress
		? `<span class="${"right"}"> <img style="${"height:70px"}" src="${"loading-giph.gif"}" alt="${"loading-giph"}" class="${"svelte-zsy9fq"}"> </span>`
		: ``}
             <button class="${"btn right"}"> Submit</button>
         <div class="${"clearfix"}"></div>`
	: ``}

            </div>
       </div>

      
    
</div></main>`;
});

exports.default = Waitlist;
