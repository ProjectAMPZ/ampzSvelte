'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index = require('./index-7460d1f3.js');
var Cookie = _interopDefault(require('cookie-universal'));
var app$1 = require('./app-19cb53d9.js');
var index$3 = require('./index-91c4af8b.js');
require('./index-eb724975.js');
require('./Header-8a9931f8.js');

/* src\routes\my\_AccountMenu.svelte generated by Svelte v3.16.4 */

const css = {
	code: "ul.svelte-xoiss4>li.svelte-xoiss4:hover{background-color:#f6f6f6}.logout.svelte-xoiss4{cursor:pointer}",
	map: "{\"version\":3,\"file\":\"_AccountMenu.svelte\",\"sources\":[\"_AccountMenu.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import { first } from \\\"./../../lib\\\";\\r\\n  import Header from \\\"./../../components/Header.svelte\\\";\\r\\n  import { stores, goto } from \\\"@sapper/app\\\";\\r\\n  const { session, page } = stores();\\r\\n  import Cookie from \\\"cookie-universal\\\";\\r\\n  const cookies = Cookie();\\r\\n  import { fadeIn, fadeOut } from \\\"./../../actions/pageFade\\\";\\r\\n  let selected = true;\\r\\n  export let segment;\\r\\n  // $: user = $session.user || {};\\r\\n  function logout() {\\r\\n    $session.user = {};\\r\\n    $session.token = null;\\r\\n    cookies.set(\\\"token\\\", null);\\r\\n    goto(\\\"/\\\");\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<style scoped>\\r\\n  ul > li:hover {\\r\\n    background-color: #f6f6f6;\\r\\n  }\\r\\n  .logout {\\r\\n    cursor: pointer;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\\"p-10 border-b border-gray-200 text-center\\\">\\r\\n  <span\\r\\n    class=\\\"h-20 w-20 p-2 text-4xl text-gray-600 rounded-full bg-gray-200\\r\\n    inline-block\\\">\\r\\n    {first($session.user.firstName || 'A')}\\r\\n  </span>\\r\\n  <br />\\r\\n  <span class=\\\"text-lg\\\">\\r\\n    {#if $session.user.firstName}{$session.user.firstName}{/if}\\r\\n  </span>\\r\\n  <span class=\\\"text-sm text-gray-500\\\">\\r\\n    {#if $session.user.email}{$session.user.email}{/if}\\r\\n  </span>\\r\\n</div>\\r\\n<ul>\\r\\n  <li>\\r\\n    <a\\r\\n      href=\\\"/my/orders\\\"\\r\\n      class:text-red-500={segment == 'orders'}\\r\\n      class=\\\"w-full flex flex-wrap text-lg items-center\\\">\\r\\n      <div class=\\\"w-1/5\\\">\\r\\n        <i class=\\\"fa fa-archive p-5\\\" aria-hidden=\\\"true\\\" />\\r\\n      </div>\\r\\n      <div class=\\\"w-4/5 text-left p-3\\\">Orders</div>\\r\\n    </a>\\r\\n  </li>\\r\\n  <li>\\r\\n    <a\\r\\n      href=\\\"/my/address\\\"\\r\\n      class:text-red-500={segment == 'address'}\\r\\n      class=\\\"w-full flex flex-wrap text-lg items-center\\\">\\r\\n      <div class=\\\"w-1/5\\\">\\r\\n        <i class=\\\"fa fa-address-card p-5\\\" aria-hidden=\\\"true\\\" />\\r\\n      </div>\\r\\n      <div class=\\\"w-4/5 text-left p-3\\\">Address</div>\\r\\n    </a>\\r\\n  </li>\\r\\n  <li>\\r\\n    <a\\r\\n      href=\\\"/my/profile\\\"\\r\\n      class:text-red-500={segment == 'profile'}\\r\\n      class=\\\"w-full flex flex-wrap text-lg items-center\\\">\\r\\n      <div class=\\\"w-1/5\\\">\\r\\n        <i class=\\\"fa fa-user-circle p-5\\\" aria-hidden=\\\"true\\\" />\\r\\n      </div>\\r\\n      <div class=\\\"w-4/5 text-left p-3\\\">Profile Details</div>\\r\\n    </a>\\r\\n  </li>\\r\\n  <li>\\r\\n    <a\\r\\n      href=\\\"/my/password\\\"\\r\\n      class=\\\"w-full flex flex-wrap text-lg items-center\\\"\\r\\n      class:text-red-500={segment == 'password'}>\\r\\n      <div class=\\\"w-1/5\\\">\\r\\n        <i class=\\\"fa fa-key p-5\\\" aria-hidden=\\\"true\\\" />\\r\\n      </div>\\r\\n      <div class=\\\"w-4/5 text-left p-3\\\">Password</div>\\r\\n    </a>\\r\\n  </li>\\r\\n  <li>\\r\\n    <button on:click={logout} class=\\\"logout w-full flex flex-wrap text-lg\\\">\\r\\n      <div class=\\\"w-1/5\\\">\\r\\n        <i class=\\\"fa fa-power-off p-5\\\" aria-hidden=\\\"true\\\" />\\r\\n      </div>\\r\\n      <div class=\\\"w-4/5 text-left p-3\\\">Sign Out</div>\\r\\n    </button>\\r\\n  </li>\\r\\n</ul>\\r\\n\"],\"names\":[],\"mappings\":\"AAoBE,gBAAE,CAAG,gBAAE,MAAM,AAAC,CAAC,AACb,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AACD,OAAO,cAAC,CAAC,AACP,MAAM,CAAE,OAAO,AACjB,CAAC\"}"
};

const AccountMenu = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $session;
	const { session, page } = app$1.stores$1();
	$session = index.get_store_value(session);
	const cookies = Cookie();
	let { segment } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css);
	$session = index.get_store_value(session);

	return `<div class="${"p-10 border-b border-gray-200 text-center"}">
  <span class="${"h-20 w-20 p-2 text-4xl text-gray-600 rounded-full bg-gray-200\r\n    inline-block"}">
    ${index.escape(index$3.first($session.user.firstName || "A"))}
  </span>
  <br>
  <span class="${"text-lg"}">
    ${$session.user.firstName
	? `${index.escape($session.user.firstName)}`
	: ``}
  </span>
  <span class="${"text-sm text-gray-500"}">
    ${$session.user.email
	? `${index.escape($session.user.email)}`
	: ``}
  </span>
</div>
<ul class="${"svelte-xoiss4"}">
  <li class="${"svelte-xoiss4"}">
    <a href="${"/my/orders"}" class="${[
		"w-full flex flex-wrap text-lg items-center",
		segment == "orders" ? "text-red-500" : ""
	].join(" ").trim()}">
      <div class="${"w-1/5"}">
        <i class="${"fa fa-archive p-5"}" aria-hidden="${"true"}"></i>
      </div>
      <div class="${"w-4/5 text-left p-3"}">Orders</div>
    </a>
  </li>
  <li class="${"svelte-xoiss4"}">
    <a href="${"/my/address"}" class="${[
		"w-full flex flex-wrap text-lg items-center",
		segment == "address" ? "text-red-500" : ""
	].join(" ").trim()}">
      <div class="${"w-1/5"}">
        <i class="${"fa fa-address-card p-5"}" aria-hidden="${"true"}"></i>
      </div>
      <div class="${"w-4/5 text-left p-3"}">Address</div>
    </a>
  </li>
  <li class="${"svelte-xoiss4"}">
    <a href="${"/my/profile"}" class="${[
		"w-full flex flex-wrap text-lg items-center",
		segment == "profile" ? "text-red-500" : ""
	].join(" ").trim()}">
      <div class="${"w-1/5"}">
        <i class="${"fa fa-user-circle p-5"}" aria-hidden="${"true"}"></i>
      </div>
      <div class="${"w-4/5 text-left p-3"}">Profile Details</div>
    </a>
  </li>
  <li class="${"svelte-xoiss4"}">
    <a href="${"/my/password"}" class="${[
		"w-full flex flex-wrap text-lg items-center",
		segment == "password" ? "text-red-500" : ""
	].join(" ").trim()}">
      <div class="${"w-1/5"}">
        <i class="${"fa fa-key p-5"}" aria-hidden="${"true"}"></i>
      </div>
      <div class="${"w-4/5 text-left p-3"}">Password</div>
    </a>
  </li>
  <li class="${"svelte-xoiss4"}">
    <button class="${"logout w-full flex flex-wrap text-lg svelte-xoiss4"}">
      <div class="${"w-1/5"}">
        <i class="${"fa fa-power-off p-5"}" aria-hidden="${"true"}"></i>
      </div>
      <div class="${"w-4/5 text-left p-3"}">Sign Out</div>
    </button>
  </li>
</ul>`;
});

exports.AccountMenu = AccountMenu;