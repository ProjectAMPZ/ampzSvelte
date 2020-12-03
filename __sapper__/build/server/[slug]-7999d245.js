'use strict';

var index = require('./index-7460d1f3.js');
require('./index-4169654c.js');
require('cookie-universal');
var app$1 = require('./app-19cb53d9.js');
require('./index-eb724975.js');
require('./index-c0882747.js');
var _apiv1 = require('./_apiv1-50cacf4c.js');
require('./crossfade-b84107f6.js');

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
      
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
      // console.log(negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : ""))
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e);
    }
  }
  function humanizeDate(date_str) {
   let month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   let date_arr = date_str.split('-');
   let day = date_arr[2].split('T')[0];
    return month[Number(date_arr[1]) - 1] + " " + Number(day) + ", " + date_arr[0]
  }

/* src\routes\opportunities\[slug].svelte generated by Svelte v3.16.4 */

const css = {
	code: ".nav-items.svelte-yemx7j li a.svelte-yemx7j{color:#fff;font-size:15px;padding:10px 5px;margin-top:30px;font-family:\"Open Sans\", sans-serif;text-transform:capitalize;line-height:15px;position:relative;z-index:1}.no-opportunity.svelte-yemx7j{text-align:center;margin:150px;color:#db9a03;font-size:18px;font-weight:800}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script >\\r\\n    import { onMount, afterUpdate } from \\\"svelte\\\";\\r\\n    import { get } from \\\"../../lib/_apiv1\\\";\\r\\n    import { formatMoney, humanizeDate } from \\\"../../lib/common\\\";\\r\\n    import { stores } from \\\"@sapper/app\\\";\\r\\n    import { send, receive } from \\\"../../actions/crossfade\\\";\\r\\n\\r\\n    const { page } = stores();\\r\\n    const { slug } = $page.params;\\r\\n\\r\\n    let inProgress = false;\\r\\n    let opportunity;\\r\\n    let otherOpportunities = false;\\r\\n    let opportunity_status;\\r\\n\\tonMount(async () => {\\r\\n\\r\\n        inProgress = true;\\r\\n        opportunity_status = 'Loading ...'\\r\\n        const opportunityRes =  await get(\\\"opportunity/\\\"+slug, null , null)\\r\\n        if(opportunityRes) {\\r\\n            opportunity = opportunityRes.data;\\r\\n            opportunity.program_date = humanizeDate(opportunity.program_date) \\r\\n            opportunity.application_deadline = humanizeDate(opportunity.application_deadline) \\r\\n            opportunity.price = formatMoney(50000)\\r\\n            opportunity_status = 'No opportunity found'\\r\\n        }\\r\\n        inProgress = false;\\r\\n    })\\r\\n    \\r\\n    function handleApplyLink(){\\r\\n        window.location.href=`//${opportunity.application_link}`\\r\\n    }\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n.nav-items li a {\\r\\n    color: #fff;\\r\\n    font-size: 15px;\\r\\n    padding: 10px 5px;\\r\\n    margin-top: 30px;\\r\\n    font-family: \\\"Open Sans\\\", sans-serif;\\r\\n    text-transform: capitalize;\\r\\n    line-height: 15px;\\r\\n    position: relative;\\r\\n    z-index: 1;\\r\\n}\\r\\n.nav-items li a.btn {\\r\\n  \\r\\n}\\r\\n\\r\\n.no-opportunity {\\r\\n    text-align: center;\\r\\n    margin: 150px;\\r\\n    color: #db9a03;\\r\\n    font-size: 18px;\\r\\n    font-weight: 800;\\r\\n}\\r\\n\\r\\n</style>\\r\\n\\r\\n\\r\\n<main>\\r\\n\\r\\n<div class=\\\"wrapper opportunity\\\">\\r\\n   <div class=\\\"nav\\\">\\r\\n                    <a href=\\\"go\\\" class=\\\"brand-logo\\\">\\r\\n                    <img src=\\\"img/logo.png\\\" alt=\\\"AMPZ\\\">\\r\\n                    </a>\\r\\n                    <ul class=\\\"nav-items\\\">\\r\\n                        <li><a href=\\\"about-ampz\\\">About Us</a></li>\\r\\n                        <li><a href=\\\"products\\\">Products</a></li>\\r\\n                        <li><a href=\\\"opportunities\\\">Opportunities</a></li>\\r\\n                        <li><a href=\\\"waitlist\\\" class=\\\"btn\\\">Get Started</a></li>\\r\\n                    </ul>\\r\\n                    <i class=\\\"material-icons menu-btn\\\">menu</i>\\r\\n            </div>\\r\\n    \\r\\n        <div class=\\\"content\\\">\\r\\n        {#if opportunity}\\r\\n            <div in:receive out:send class=\\\"main-content\\\">\\r\\n                <a href=\\\"/opportunities\\\" class=\\\"back\\\">&lsaquo; Back to Opportunities</a>\\r\\n                <div class=\\\"title\\\">\\r\\n                    <h2 class=\\\"left open-sans\\\">{opportunity.title}</h2>\\r\\n                    <img src=\\\"img/arrow.png\\\" alt=\\\"\\\" class=\\\"right\\\">\\r\\n                    <div class=\\\"clearfix\\\"></div>\\r\\n                </div>\\r\\n                <h4 class=\\\"subtitle open-sans\\\">{opportunity.sport} | {opportunity.location}</h4>\\r\\n                <img src=\\\"img/opportunity.png\\\" class=\\\"banner\\\" alt=\\\"\\\">\\r\\n                <p class=\\\"description\\\">\\r\\n                    {opportunity.description}\\r\\n                </p>\\r\\n                <div class=\\\"details\\\">\\r\\n                    <div class=\\\"item\\\">\\r\\n                        <p class=\\\"head\\\">Price</p>\\r\\n                        <p class=\\\"body price\\\">\\r\\n                            <span class=\\\"currency\\\">NGN</span>\\r\\n                            <span>{opportunity.price}</span>\\r\\n                        </p>\\r\\n                    </div>\\r\\n                    <div class=\\\"item\\\">\\r\\n                        <p class=\\\"head\\\">Sport</p>\\r\\n                        <p class=\\\"body\\\">{opportunity.sport}</p>\\r\\n                    </div>\\r\\n                    <div class=\\\"item\\\">\\r\\n                        <p class=\\\"head\\\">Date</p>\\r\\n                        <p class=\\\"body\\\">{opportunity.program_date}</p>\\r\\n                    </div>\\r\\n                    <div class=\\\"item\\\">\\r\\n                        <p class=\\\"head\\\">Minimum Age</p>\\r\\n                        <p class=\\\"body\\\">{opportunity.age}</p>\\r\\n                    </div>\\r\\n                    <div class=\\\"item\\\">\\r\\n                        <p class=\\\"head\\\">Location</p>\\r\\n                        <p class=\\\"body\\\">{opportunity.location}</p>\\r\\n                    </div>\\r\\n                    <div class=\\\"item\\\">\\r\\n                        <p class=\\\"head\\\">Apply before</p>\\r\\n                        <p class=\\\"body\\\">{opportunity.application_deadline}</p>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <button on:click={handleApplyLink} class=\\\"btn\\\">Apply</button>\\r\\n            </div>\\r\\n         {/if}\\r\\n        <h3 class=\\\"related-title\\\">Related Opportunities</h3>\\r\\n\\r\\n        <div class=\\\"no-opportunity\\\" > No Related Opportunities yet </div>\\r\\n        <div class=\\\"grid-container\\\">\\r\\n           {#if otherOpportunities}\\r\\n            <div class=\\\"item\\\">\\r\\n                <div class=\\\"item-content\\\">\\r\\n                    <div class=\\\"img img3\\\"></div>\\r\\n                    <div class=\\\"text\\\">\\r\\n                        <h4 class=\\\"title open-sans\\\">Juventus Academy Pre-Season (F)</h4>\\r\\n                        <h5 class=\\\"subtitle\\\">Basketball | Ibadan</h5>\\r\\n                        <p class=\\\"main-text\\\">\\r\\n                            Every talented kid deserves an and engaging summer to develop following his recruitment by george town hoyas men's basket...\\r\\n                        </p>\\r\\n                        <div class=\\\"main-text\\\">\\r\\n                            <span class=\\\"left small\\\">Posted on 27 Nov</span>\\r\\n                            <a href=\\\"go\\\" class=\\\"right\\\">Read More</a>\\r\\n                            <div class=\\\"clearfix\\\"></div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n         {/if}\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n</main>\"],\"names\":[],\"mappings\":\"AAmCA,wBAAU,CAAC,EAAE,CAAC,CAAC,cAAC,CAAC,AACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,cAAc,CAAE,UAAU,CAC1B,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,AACd,CAAC,AAKD,eAAe,cAAC,CAAC,AACb,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AACpB,CAAC\"}"
};

const U5Bslugu5D = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $page;
	const { page } = app$1.stores$1();
	$page = index.get_store_value(page);
	const { slug } = $page.params;
	let opportunity;

	index.onMount(async () => {
		const opportunityRes = await _apiv1.get("opportunity/" + slug, null, null);

		if (opportunityRes) {
			opportunity = opportunityRes.data;
			opportunity.program_date = humanizeDate(opportunity.program_date);
			opportunity.application_deadline = humanizeDate(opportunity.application_deadline);
			opportunity.price = formatMoney(50000);
		}
	});

	$$result.css.add(css);
	$page = index.get_store_value(page);

	return `<main>

<div class="${"wrapper opportunity"}">
   <div class="${"nav"}">
                    <a href="${"go"}" class="${"brand-logo"}">
                    <img src="${"img/logo.png"}" alt="${"AMPZ"}">
                    </a>
                    <ul class="${"nav-items svelte-yemx7j"}">
                        <li><a href="${"about-ampz"}" class="${"svelte-yemx7j"}">About Us</a></li>
                        <li><a href="${"products"}" class="${"svelte-yemx7j"}">Products</a></li>
                        <li><a href="${"opportunities"}" class="${"svelte-yemx7j"}">Opportunities</a></li>
                        <li><a href="${"waitlist"}" class="${"btn svelte-yemx7j"}">Get Started</a></li>
                    </ul>
                    <i class="${"material-icons menu-btn"}">menu</i>
            </div>
    
        <div class="${"content"}">
        ${opportunity
	? `<div class="${"main-content"}">
                <a href="${"/opportunities"}" class="${"back"}">‹ Back to Opportunities</a>
                <div class="${"title"}">
                    <h2 class="${"left open-sans"}">${index.escape(opportunity.title)}</h2>
                    <img src="${"img/arrow.png"}" alt="${""}" class="${"right"}">
                    <div class="${"clearfix"}"></div>
                </div>
                <h4 class="${"subtitle open-sans"}">${index.escape(opportunity.sport)} | ${index.escape(opportunity.location)}</h4>
                <img src="${"img/opportunity.png"}" class="${"banner"}" alt="${""}">
                <p class="${"description"}">
                    ${index.escape(opportunity.description)}
                </p>
                <div class="${"details"}">
                    <div class="${"item"}">
                        <p class="${"head"}">Price</p>
                        <p class="${"body price"}">
                            <span class="${"currency"}">NGN</span>
                            <span>${index.escape(opportunity.price)}</span>
                        </p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Sport</p>
                        <p class="${"body"}">${index.escape(opportunity.sport)}</p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Date</p>
                        <p class="${"body"}">${index.escape(opportunity.program_date)}</p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Minimum Age</p>
                        <p class="${"body"}">${index.escape(opportunity.age)}</p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Location</p>
                        <p class="${"body"}">${index.escape(opportunity.location)}</p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Apply before</p>
                        <p class="${"body"}">${index.escape(opportunity.application_deadline)}</p>
                    </div>
                </div>
                <button class="${"btn"}">Apply</button>
            </div>`
	: ``}
        <h3 class="${"related-title"}">Related Opportunities</h3>

        <div class="${"no-opportunity svelte-yemx7j"}"> No Related Opportunities yet </div>
        <div class="${"grid-container"}">
           ${ ``}
        </div>
    </div>
</div>

</main>`;
});

exports.default = U5Bslugu5D;
