(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{254:function(e,t,s){e.exports=s.p+"assets/img/wings_configuration_example.9f3fdd0b.png"},331:function(e,t,s){"use strict";s.r(t);var a=s(15),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"migrating-to-wings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-wings"}},[e._v("#")]),e._v(" Migrating to Wings")]),e._v(" "),t("p",[e._v("This guide is for people looking to migrate from the old Node.JS daemon to Wings. Please see the\n"),t("RouterLink",{attrs:{to:"/wings/1.0/installing.html"}},[e._v("install guide")]),e._v(" if you are trying to install Wings for the first time on\na new node.")],1),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Panel Version Requirement")]),e._v(" "),t("p",[e._v("You "),t("strong",[e._v("must")]),e._v(" be running Pterodactyl Panel 1.X in order to use Wings.")])]),e._v(" "),t("p",[e._v("You'll have a brief offline period as you perform this process, however no running game processes\nwill be affected. Plus, chances are your Panel will be offline (or in maintenance mode) during this\nso your users should not notice anything out of the ordinary.")]),e._v(" "),t("h2",{attrs:{id:"install-wings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-wings"}},[e._v("#")]),e._v(" Install Wings")]),e._v(" "),t("p",[e._v("The first step for installing the daemon is to make sure we have the required directory structure setup. To do so,\nrun the commands below which will create the base directory and download the wings executable.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" /etc/pterodactyl\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-L")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" /usr/local/bin/wings https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_amd64\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" u+x /usr/local/bin/wings\n")])])]),t("h2",{attrs:{id:"copy-new-configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-new-configuration-file"}},[e._v("#")]),e._v(" Copy New Configuration File")]),e._v(" "),t("p",[e._v("Once you have installed Wings, you'll need to copy over a new configuration file from the Panel. This file\nis in a new format, and should be easier for you to manage and edit in the future.")]),e._v(" "),t("p",[e._v("Simply copy and paste the code block and paste it into a file called "),t("code",[e._v("config.yml")]),e._v(" within the "),t("code",[e._v("/etc/pterodactyl")]),e._v("\ndirectory and save it.")]),e._v(" "),t("p",[t("img",{attrs:{src:s(254),alt:""}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Please note that any modifications you previously made to the configuration will be lost with this. If you have\nmodifications to our default settings, the best option is to start Wings once with the copied configuration which\nwill then populate all of the other configuration settings.")]),e._v(" "),t("p",[e._v("From there you can make any adjustments as necessary.")])]),e._v(" "),t("h2",{attrs:{id:"remove-old-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-old-daemon"}},[e._v("#")]),e._v(" Remove Old Daemon")]),e._v(" "),t("p",[e._v("Now that Wings is installed, we need to remove all of the old daemon code from the server since it is not being\nused anymore. To do this, simply execute the following commands — assuming your old daemon is in the default\n"),t("code",[e._v("/srv/daemon")]),e._v(" directory.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stop the old daemon.")]),e._v("\nsystemctl stop wings\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete the entire directory. There is nothing stored in here that we actually need for the")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# purposes of this migration. Remember, server data is stored in /srv/daemon-data.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-rf")]),e._v(" /srv/daemon\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Optionally, remove NodeJS from your system if it was not used for anything else.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-y")]),e._v(" remove nodejs "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or: yum remove nodejs")]),e._v("\n")])])]),t("h3",{attrs:{id:"remove-standalone-sftp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-standalone-sftp"}},[e._v("#")]),e._v(" Remove Standalone SFTP")]),e._v(" "),t("p",[e._v("If you've used the "),t("RouterLink",{attrs:{to:"/daemon/0.6/standalone_sftp.html"}},[e._v("standalone SFTP server")]),e._v(" with the old daemon, we need to remove it's systemd service as well, as it's no longer needed.\nYou can do so using the following commands.")],1),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# stop and disable the standalone sftp")]),e._v("\nsystemctl disable "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--now")]),e._v(" pterosftp\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# delete the systemd service")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/systemd/system/pterosftp.service\n")])])]),t("h2",{attrs:{id:"daemonize-wings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#daemonize-wings"}},[e._v("#")]),e._v(" Daemonize Wings")]),e._v(" "),t("p",[e._v("You'll then need to edit your existing "),t("code",[e._v("systemd")]),e._v(" service file for Wings to point to the new control software. To do\nthis, open "),t("code",[e._v("/etc/systemd/system/wings.service")]),e._v(" and replace the entire contents of the file with the following:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[Unit]\nDescription=Pterodactyl Wings Daemon\nAfter=docker.service\n\n[Service]\nUser=root\nWorkingDirectory=/etc/pterodactyl\nLimitNOFILE=4096\nPIDFile=/var/run/wings/daemon.pid\nExecStart=/usr/local/bin/wings\nRestart=on-failure\nStartLimitInterval=600\n\n[Install]\nWantedBy=multi-user.target\n")])])]),t("p",[e._v("Then, start wings.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("systemctl daemon-reload\nsystemctl enable --now wings\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("What if Wings doesn't start?")]),e._v(" "),t("p",[e._v("If you encounter issues starting Wings at this point, run the following command to start Wings directly and check\nfor any specific error output.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo wings --debug\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);