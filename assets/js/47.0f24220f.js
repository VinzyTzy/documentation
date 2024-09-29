(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{306:function(t,e,s){"use strict";s.r(e);var a=s(15),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"upgrading-0-5-series"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-0-5-series"}},[t._v("#")]),t._v(" Upgrading 0.5 Series")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("This Software is Abandoned")]),t._v(" "),e("p",[t._v("This documentation is for "),e("strong",[t._v("abandoned software")]),t._v(" which does not recieve any security updates or support\nfrom the community. This documentation has been left accessible for historial reasons.")]),t._v(" "),e("p",[t._v("You should be installing and using "),e("RouterLink",{attrs:{to:"/wings/1.0/installing.html"}},[t._v("Wings")]),t._v(" in production environments with\n"),e("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[t._v("Pterodactyl Panel 1.0")]),t._v(".")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Your servers will not go offline during this process thanks to Docker. Clients will briefly lose connection\nto the Daemon from the Panel, but only during the restart phase.")])]),t._v(" "),e("h2",{attrs:{id:"download-newest-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-newest-release"}},[t._v("#")]),t._v(" Download Newest Release")]),t._v(" "),e("p",[t._v("First, ensure you're in the Daemon directory, "),e("code",[t._v("/srv/daemon")]),t._v(", before continuing through this process. After you've done\nthat, run the command below to pull down the latest files and unpack them in the daemon directory.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-L")]),t._v(" https://github.com/pterodactyl/daemon/releases/download/v0.5.7/daemon.tar.gz "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" --strip-components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-xzv")]),t._v("\n")])])]),e("h2",{attrs:{id:"update-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-components"}},[t._v("#")]),t._v(" Update Components")]),t._v(" "),e("p",[t._v("After you've pulled down the latest files the last thing you need to do is run the commands below to update the\ncomponents and then restart the daemon.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" update "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--only")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production\nsystemctl restart wings\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);