*   [Skip to content](#fw-content)
*   [Skip to search](#)
*   [Skip to footer](#fw-footer-v2)

*   [Cisco.com Worldwide](/c/en/us/index.html)
*   [Products and Services](/c/en/us/products/index.html)
*   [Solutions](//www.cisco.com/c/en/us/solutions/index.html)
*   [Support](/c/en/us/support/index.html)
*   [Learn](/c/en/us/training-events.html)
*   [Explore Cisco](//www.cisco.com/c/en/us/about/sitemap.html)
*   [How to Buy](/c/en/us/buy.html)
*   [Partners Home](/c/en/us/partners.html)
*   [Partner Program](/c/en/us/partners/partner-with-cisco.html?ccid=cc000864&dtid=odiprc001129)
*   [Support](/c/en/us/partners/support-help.html)
*   [Tools](/c/en/us/partners/tools.html)
*   [Find a Cisco Partner](//locatr.cloudapps.cisco.com/WWChannels/LOCATR/openBasicSearch.do)
*   [Meet our Partners](/c/en/us/partners/connect-with-a-partner.html)
*   [Become a Cisco Partner](//partnersuccess.cisco.com/becomeapartner)

*   [](#)
*   [Home](/c/en/us/index.html)
*   [Support](/c/en/us/support/index.html)
*   [Product Support](/c/en/us/support/all-products.html)
*   [Switches](/c/en/us/support/switches/index.html)
*   [Cisco Nexus 9000 Series Switches](/c/en/us/support/switches/nexus-9000-series-switches/series.html)
*   [Configuration Guides](/c/en/us/support/switches/nexus-9000-series-switches/products-installation-and-configuration-guides-list.html)

if (window.cdc === undefined) { window.cdc = {}; } if (cdc.breadcrumb === undefined) { cdc.breadcrumb = (function () { let clone = document.querySelector('#fw-breadcrumb').cloneNode(true); let appendClone = function () { let hasBreadcrumb = document.querySelector('#fw-breadcrumb') !== null, firstMarquee = document.querySelectorAll('.dmc-mq')\[0\]; if (!hasBreadcrumb && firstMarquee !== undefined) { firstMarquee.querySelector('.frame .inset').insertBefore(this.clone, firstMarquee.querySelector('.frame .inset').firstElementChild); } }; return { clone: clone, appendClone: appendClone } }()); } //DE380224 var anchorChild = document.getElementsByTagName("a"); for(var i=0; i<anchorChild.length; i++){ if(anchorChild\[i\].getAttribute("itemprop")=="item") { if ( anchorChild\[i\].href.includes("%3Clocale%3E") ){ let anchorChildHREF = anchorChild\[i\].href; let docLocale = document.querySelector('meta\[name="locale"\]').getAttribute('content'); let docLanguage = document.querySelector('meta\[name="language"\]').getAttribute('content'); var docSeparator; if ((docLocale.toLowerCase() == "us") && (docLanguage.toLowerCase() == "en")) { docSeparator="/"; } else { docSeparator="\_"; } let anchorURLReplace = docLanguage.toLowerCase() + docSeparator + docLocale.toLowerCase(); anchorChildHREF = anchorChildHREF.replace("%3Clocale%3E", anchorURLReplace); anchorChild\[i\].setAttribute('href', anchorChildHREF); } } }

Cisco Nexus 9000 Series NX-OS VXLAN Configuration Guide, Release 10.3(x)
========================================================================

// initialize dictionary for i18n cdc.util.ensureNamespace("cdc.rc"); cdc.rc.eotkeys = { showOnly5Products : "Show Only 5 Products", showAllRowsProducts : "Show All nRows Products", supportCommunityUrl : "https://community.cisco.com/t5/technology-and-support/ct-p/technology-support", supportCommunity : "Cisco Community", thankYou : "Thank You", viewersAlso : "Customers Also Viewed", show : "Show", more : "More", showOnly3Documents: "Show Only 3 Documents" };

Bias-Free Language

### Bias-Free Language

The documentation set for this product strives to use bias-free language. For the purposes of this documentation set, bias-free is defined as language that does not imply discrimination based on age, disability, gender, racial identity, ethnic identity, sexual orientation, socioeconomic status, and intersectionality. Exceptions may be present in the documentation due to language that is hardcoded in the user interfaces of the product software, language used based on RFP documentation, or language that is used by a referenced third-party product. [Learn more](https://www.cisco.com/c/en/us/about/social-justice/inclusive-language-policy.html) about how Cisco is using Inclusive Language.

/\* this is needed for the translation selector \*/ if (typeof(cdc) == "undefined") cdc={}; if (typeof(cdc.translations) == "undefined") cdc.translations={}; var bookTitle = 'Book Title Page';

Book Contents

Book Contents

*   [Preface](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_n9k_software_preface.html)
*   [New and Changed Information](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-new-and-changed-information-103x.html)
*   [Overview](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_overview.html)
*   [Configuring VXLAN](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_vxlan_93x.html)
*   [Configuring the Underlay](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_the_underlay.html)
*   [Configuring VXLAN BGP EVPN](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_vxlan_bgp_evpn.html)
*   [Default Gateway Coexistence of HSRP and Anycast Gateway (VXLAN EVPN)](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-default-gateway-coexistence-of-hsrp-and-vxlan-evpn.html)
*   [Configuring VXLAN with IPv6 in the Underlay (VXLANv6)](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_vxlan_with_ipv6_in_the_underlay_vxlanv6.html)
*   [Configuring External VRF Connectivity and Route Leaking](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_external_vrf_connectivity_and_route_leaking_93x.html)
*   [Configuring BGP EVPN Filtering](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_bgp_evpn_filtering.html)
*   [EVPN Hybrid IRB Mode](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-evpn-hybrid-irb-mode.html)
*   [EVPN Distributed NAT](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-evpn-distributed-nat-.html)
*   [Configuring VXLAN OAM](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_vxlan_oam.html)
*   [Configuring vPC Multi-Homing](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_vpc_multihoming.html)
*   [Interoperability with EVPN Multi-Homing Using ESI](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-interoperability-with-mvpn-multi-homing-using-esi.html)
*   [Configuring Multi-Site](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_multisite_93x.html)
*   [Configuring Tenant Routed Multicast (TRM)](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_tenant_routed_multicast_93x.html)
*   [Configuring Cross Connect](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_cross_connect_93x.html)
*   [Configuring Port VLAN Mapping](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_port_vlan_mapping_93x.html)
*   [Configuring IGMP Snooping](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_igmp_snooping.html)
*   [Configuring VLANs](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_private_vlans_93x.html)
*   [Configuring ACL](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_acl.html)
*   [Configuring Secure VXLAN EVPN Multi-Site Using CloudSec](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-configuring-cloudsec.html)
*   [Configuring VXLAN QoS](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_vxlan_qos_93x.html)
*   [Configuring vPC Fabric Peering](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_vpc_fabric_peering_93x.html)
*   [Configuring Seamless Integration of EVPN with L3VPN (MPLS LDP)](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_seamless_integration_of_evpn_with_l3vpn_mpls_ldp.html)
*   [Configuring Seamless Integration of EVPN with L3VPN (MPLS SR)](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_seamless_integration_of_evpn_with_l3vpn_mpls_sr.html)
*   [Configuring Seamless Integration of EVPN with L3VPN SRv6](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-configuring-seamless-integration-of-evpn-with-l3vpn-srv6-93x.html)
*   [Configuring Seamless Integration of EVPN (TRM) with MVPN](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-configuring-seamless-integration-of-evpn-trm-with-mvpn.html)
*   [Configuring VXLAN BGP-EVPN Null Route](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-configuring-vxlan-bgp-evpn-blackhole.html)
*   [Configuring Bud Node](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_bud_node.html)
*   [DHCP Relay in VXLAN BGP EVPN](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_dhcp_relay.html)
*   [Configuring Layer 4 - Layer 7 Network Services Integration](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_layer_4-layer_7_network_services_integration.html)
*   [Configuring Proportional Multipath for VNF](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_proportional_multipath_for_vnf.html)
*   [Configuring ND Suppression](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m-configuring-nd-suppression.html)

<div class="versionsdd"> <button class="versionbutton" aria-haspopup="true" aria-expanded="false" aria-labelledby="other versions" class="version"><label></label></button> <ul class="versionlist" aria-labelledby="other versions"> <% let pageUrl = window.location.pathname.replace("/content/","/c/").toLowerCase(); if (true) pageUrl = pageUrl.substring(0,pageUrl.lastIndexOf("/"))+".html"; for(let i=0; i< data.length; i++) { let item = data\[i\], myurl = item.linkUrl, urlm = myurl.replace("/content/","/c/");; mytitle = item.linkTitle; myclass= urlm.toLowerCase() == pageUrl ? "class=\\"selected\\"":""; %> <li><a href="${myurl}" ${myclass}>${mytitle}</a></li> <% } %> </ul> </div> Search

Find Matches in This Book

 !\[Clear Contents of Search\](./images/ic\_clear\_gray.png)

cdc.util.ensureNamespace("cdc.rc.savedoc"); cdc.rc.savedoc.isLoggedIn = false; cdc.rc.savedoc.save = "Save"; cdc.rc.savedoc.saved = "Saved"; Save

[Log in](/c/login/index.html?referer=/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_tenant_routed_multicast_93x.html) to Save Content

[

Translations](#)

/\* Specifically for books at the simple overlay trigger class on English locale pages, if its a non english locale do not add the trigger. \*/ if(jQuery('body').hasClass('cdc-books') && !jQuery('a').hasClass('nonEnglish')) { jQuery('.translations').addClass('simpleOverlay-trigger'); }

Available Languages

cdc.translations.map = "{ja-jp=https://www.cisco.com/c/ja\_jp/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m\_configuring\_tenant\_routed\_multicast\_93x.html, en-us=https://www.cisco.com/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m\_configuring\_tenant\_routed\_multicast\_93x.html, x-default=https://www.cisco.com/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m\_configuring\_tenant\_routed\_multicast\_93x.html}";//storing the map for use in the JS cdc.translations.locale="en\_us";

// stored value for overlay label to use in js var downloadOPtionLabel = 'Download Options', bookSearchlabel = 'Find Matches in This Book', translationsLabel = 'Translations', bookConentLabel= 'Book Contents'; Download

Download Options

### Book Title

Cisco Nexus 9000 Series NX-OS VXLAN Configuration Guide, Release 10.3(x)

Chapter Title

### Configuring Tenant Routed Multicast (TRM)

*   [PDF - Complete Book (16.19 MB)](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x.pdf) [PDF - This Chapter (2.43 MB)](/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_tenant_routed_multicast_93x.pdf)
    
    View with Adobe Reader on a variety of devices
    

Print

 !\[Clear Contents of Search\](./images/ic\_clear\_gray.png)

Results
-------

<div> <button class="up on" title="Previous Match"><span></span></button> <button class="up off" title="Previous Match Not Available"><span></span></button> <span class="matchlabel">Matches</span> <button class="down on" title="Next Match"><span></span></button> <button class="down off" title="Next Match Not Available"><span></span></button> </div> <p>There are no Matches in this chapter.</p> <p class="h3">Chapters with Matches</p> <ul> <% var i = 0; while ( modelData.links\[i\] ) { %> <li> <% curpage = (window.location.pathname.indexOf(modelData.links\[i\].href) > -1 )?true:false; if ( i === modelData.curpage ) { if ( ! jQuery('.mobileSearch').css("display") == "block") { %> <span class="currentIndicator"></span>${modelData.links\[i\].title} <% } else { %> <span class="currentIndicator"></span><button class="curpage" data-href="${modelData.links\[i\].url}?bookSearch=true${modelData.wcm}">${modelData.links\[i\].title}</button> <% } } else { %> <button data-href="${modelData.links\[i\].url}?bookSearch=true${modelData.wcm}">${modelData.links\[i\].title}</button> <% } %> </li> <% i++; } %> </ul> <p class="head">No matches found in this book</p> <p>This feature looks for an exact match of what you entered in the box.</p> <p>If you entered several words, try reducing the entry to one or two and search again.</p> <p>Search is currently unavailable due to technical issues. We are working to resolve the problem as quickly as possible.</p> <div id="mobileSearchFooter"> <button class="mobileSearch" title="Search in this Book"></button> <button class="closeFooter"><span></span><span></span></button> <div class="matches"> </div> </div>

Updated:

May 9, 2024

Chapter: Configuring Tenant Routed Multicast (TRM)
--------------------------------------------------

Chapter Contents

*   [Configuring Tenant Routed Multicast (TRM)](#id_91636)
*   [About Tenant Routed Multicast](#concept_x2h_vyb_zfb)
*   [About Tenant Routed Multicast Mixed Mode](#concept_r3b_5yb_zfb)
*   [About Tenant Routed Multicast with IPv6 Overlay](#Cisco_Concept.dita_7386f2d4-c356-4a79-8465-55af7f780992)
*   [About Multicast Flow Path Visibility for TRM Flows](#concept_lzd_jxd_jvb)
*   [Guidelines and Limitations for Tenant Routed Multicast](#id_113443)
*   [Guidelines and Limitations for Layer 3 Tenant Routed Multicast](#concept_h1g_qyb_zfb)
*   [Guidelines and Limitations for Layer 2/Layer 3 Tenant Routed Multicast (Mixed Mode)](#concept_mnm_pyb_zfb)
*   [Rendezvous Point for Tenant Routed Multicast](#reference_zqy_nyb_zfb)
*   [Configuring a Rendezvous Point for Tenant Routed Multicast](#concept_svm_jqc_zfb)
*   [Configuring a Rendezvous Point Inside the VXLAN Fabric](#task_dvr_myb_zfb)
*   [Configuring an External Rendezvous Point](#task_rly_gyb_zfb)
*   [Configuring RP Everywhere with PIM Anycast](#id_82955)
    *   [Configuring a TRM Leaf Node for RP Everywhere with PIM Anycast](#id_82501)
    *   [Configuring a TRM Border Leaf Node for RP Everywhere with PIM Anycast](#id_82503)
    *   [Configuring an External Router for RP Everywhere with PIM Anycast](#id_82508)
*   [Configuring RP Everywhere with MSDP Peering](#id_82954)
    *   [Configuring a TRM Leaf Node for RP Everywhere with MSDP Peering](#id_82515)
    *   [Configuring a TRM Border Leaf Node for RP Everywhere with MSDP Peering](#id_82524)
    *   [Configuring an External Router for RP Everywhere with MSDP Peering](#id_82576)
*   [Configuring Layer 3 Tenant Routed Multicast](#task_wcw_2yb_zfb)
*   [Configuring TRM on the VXLAN EVPN Spine](#task_xk5_cyb_zfb)
*   [Configuring Tenant Routed Multicast in Layer 2/Layer 3 Mixed Mode](#task_ibf_1sd_zfb)
*   [Configuring Layer 2 Tenant Routed Multicast](#task_ugy_wxb_zfb)
*   [Configuring TRM with vPC Support](#id_104302)
*   [Configuring TRM with vPC Support (Cisco Nexus 9504-R and 9508-R)](#task_yvd_gdk_gjb)
*   [Flex Stats for TRM](#concept_w1g_k2m_mtb)
*   [Configuring Flex Stats for TRM](#task_ddc_qfm_mtb)
*   [Configuring TRM Data MDT](#concept_hz4_jxc_lvb)
    *   [About TRM Data MDT](#concept_tsz_rfc_lvb)
    *   [Guidelines and Limitations for TRM Data MDT](#concept_zpl_5fc_lvb)
    *   [Configuring TRM Data MDT](#task_j4z_yc3_gvb)
    *   [Verifying TRM Data MDT Configuration](#concept_ebb_c2r_v5b)

Close

Configuring Tenant Routed Multicast (TRM)
=========================================

This chapter contains the following sections:

*   [About Tenant Routed Multicast](#concept_x2h_vyb_zfb)
*   [About Tenant Routed Multicast Mixed Mode](#concept_r3b_5yb_zfb)
*   [About Tenant Routed Multicast with IPv6 Overlay](#Cisco_Concept.dita_7386f2d4-c356-4a79-8465-55af7f780992)
*   [About Multicast Flow Path Visibility for TRM Flows](#concept_lzd_jxd_jvb)
*   [Guidelines and Limitations for Tenant Routed Multicast](#id_113443)
*   [Guidelines and Limitations for Layer 3 Tenant Routed Multicast](#concept_h1g_qyb_zfb)
*   [Guidelines and Limitations for Layer 2/Layer 3 Tenant Routed Multicast (Mixed Mode)](#concept_mnm_pyb_zfb)
*   [Rendezvous Point for Tenant Routed Multicast](#reference_zqy_nyb_zfb)
*   [Configuring a Rendezvous Point for Tenant Routed Multicast](#concept_svm_jqc_zfb)
*   [Configuring a Rendezvous Point Inside the VXLAN Fabric](#task_dvr_myb_zfb)
*   [Configuring an External Rendezvous Point](#task_rly_gyb_zfb)
*   [Configuring RP Everywhere with PIM Anycast](#id_82955)
*   [Configuring RP Everywhere with MSDP Peering](#id_82954)
*   [Configuring Layer 3 Tenant Routed Multicast](#task_wcw_2yb_zfb)
*   [Configuring TRM on the VXLAN EVPN Spine](#task_xk5_cyb_zfb)
*   [Configuring Tenant Routed Multicast in Layer 2/Layer 3 Mixed Mode](#task_ibf_1sd_zfb)
*   [Configuring Layer 2 Tenant Routed Multicast](#task_ugy_wxb_zfb)
*   [Configuring TRM with vPC Support](#id_104302)
*   [Configuring TRM with vPC Support (Cisco Nexus 9504-R and 9508-R)](#task_yvd_gdk_gjb)
*   [Flex Stats for TRM](#concept_w1g_k2m_mtb)
*   [Configuring Flex Stats for TRM](#task_ddc_qfm_mtb)
*   [Configuring TRM Data MDT](#concept_hz4_jxc_lvb)

About Tenant Routed Multicast
-----------------------------

Tenant Routed Multicast (TRM) enables multicast forwarding on the VXLAN fabric that uses a BGP-based EVPN control plane. TRM provides multi-tenancy aware multicast forwarding between senders and receivers within the same or different subnet local or across VTEPs.

This feature brings the efficiency of multicast delivery to VXLAN overlays. It is based on the standards-based next generation control plane (ngMVPN) described in IETF RFC 6513, 6514. TRM enables the delivery of customer IP multicast traffic in a multitenant fabric, and thus in an efficient and resilient manner. The delivery of TRM improves Layer-3 overlay multicast functionality in our networks.

While BGP EVPN provides the control plane for unicast routing, ngMVPN provides scalable multicast routing functionality. It follows an “always route” approach where every edge device (VTEP) with distributed IP Anycast Gateway for unicast becomes a Designated Router (DR) for Multicast. Bridged multicast forwarding is only present on the edge-devices (VTEP) where IGMP snooping optimizes the multicast forwarding to interested receivers. Every other multicast traffic beyond local delivery is efficiently routed.

Figure 1. VXLAN EVPN TRM

!\[Image\](./images/501498.jpg)

With TRM enabled, multicast forwarding in the underlay is leveraged to replicate VXLAN encapsulated routed multicast traffic. A Default Multicast Distribution Tree (Default-MDT) is built per-VRF. This is an addition to the existing multicast groups for Layer-2 VNI Broadcast, Unknown Unicast, and Layer-2 multicast replication group. The individual multicast group addresses in the overlay are mapped to the respective underlay multicast address for replication and transport. The advantage of using a BGP-based approach allows the VXLAN BGP EVPN fabric with TRM to operate as fully distributed Overlay Rendezvous-Point (RP), with the RP presence on every edge-device (VTEP).

A multicast-enabled data center fabric is typically part of an overall multicast network. Multicast sources, receivers, and multicast rendezvous points, might reside inside the data center but might also be inside the campus or externally reachable via the WAN. TRM allows a seamless integration with existing multicast networks. It can leverage multicast rendezvous points external to the fabric. Furthermore, TRM allows for tenant-aware external connectivity using Layer-3 physical interfaces or subinterfaces.

About Tenant Routed Multicast Mixed Mode
----------------------------------------

Figure 2. TRM Layer 2/Layer 3 Mixed Mode

!\[Image\](./images/501659.jpg)

About Tenant Routed Multicast with IPv6 Overlay
-----------------------------------------------

Beginning with Cisco NX-OS Release 10.2(1), Tenant Routed Multicast (TRM) supports IPv6 in the overlay.

### Guidelines and Limitations for TRM with IPv6 Overlay

The following are supported by TRM with IPv6 Overlay:

*   Multicast IPv4 underlay within fabric. Bidir and SSM are not supported.
    
*   IPv4 Underlay in the data center core for multisite.
    
*   IPv4 overlay only, IPv6 overlay Only, combination of IPv4 and IPv6 overlays
    
*   Anycast Border Gateway with Border Leaf Role
    
*   vPC support on Border Gateway and Leaf
    
*   Virtual MCT on Leaf
    
*   Anycast RP (internal, external, and RP-everywhere)
    
*   Multisite Border Gateway is supported on Cisco Nexus 9300 -FX3, -GX, and GX2 TORs.
    
*   RP-everywhere with Anycast RP is supported.
    
*   TRMv6 is supported only on default system routing mode.
    
*   MLD snooping with VxLAN VLANs with TRM
    
*   PIM6 SVI and MLD snooping configuration on the VLAN are not supported.
    
*   TRM with IPv6 Overlay is supported on Cisco Nexus 9300 -EX, -FX, - FX2, -FX3, -GX, - GX2 TORs.
    

The following are not supported by TRM with IPv6 Overlay:

*   L2 TRM
    
*   VXLAN flood mode on L2 VLANs with L3TRM is not supported
    
*   L2-L3 TRM Mixed Mode
    
*   VXLAN Ingress Replication within a single site
    
*   IPv6 in the underlay
    
*   MLD snooping with VXLAN VLANs without TRM
    
*   PIM6 SVI configuration without MLD snooping
    
*   MSDP
    

About Multicast Flow Path Visibility for TRM Flows
--------------------------------------------------

Beginning with Cisco NX-OS Release 10.3(2)F, the Multicast Flow Path Visualization (FPV) for TRM Flows feature is supported for TRM L3 mode and underlay multicast along with the already supported multicast flows. This feature enables you to export all multicast states in a Cisco Nexus 9000 Series switch. This helps to have a complete and reliable traceability of the flow path from the source to a receiver. To enable Multicast Flow Path Data Export on Cisco Nexus 9000 Series switches, use the multicast flow-path export command.

Guidelines and Limitations for Tenant Routed Multicast
------------------------------------------------------

Tenant Routed Multicast (TRM) has the following guidelines and limitations:

*   Beginning with Cisco NX-OS Release 10.1(2), TRM Multisite with vPC BGW is supported.
    
*   Beginning with Cisco NX-OS Release 10.2(1q)F, VXLAN TRM is supported on Cisco Nexus N9K-C9332D-GX2B platform switches.
    
*   Beginning with Cisco NX-OS Release 10.2(3)F, VXLAN TRM is supported on Cisco Nexus 9364D-GX2A, and 9348D-GX2A platform switches.
    
*   With Tenant Routed Multicast enabled, FEX is not supported.
    
*   If VXLAN TRM feature is enabled on a VTEP, it would stop to send IGMP messages to the VXLAN fabric.
    
*   The Guidelines and Limitations for VXLAN also apply to TRM.
    
*   With TRM enabled, SVI as a core link is not supported.
    
*   If TRM is configured, ISSU is disruptive.
    
*   TRM supports IPv4 multicast only.
    
*   TRM requires an IPv4 multicast-based underlay using PIM Any Source Multicast (ASM) which is also known as sparse mode.
    
*   TRM supports overlay PIM ASM and PIM SSM only. PIM BiDir is not supported in the overlay.
    
*   RP has to be configured either internal or external to the fabric.
    
*   The internal RP must be configured on all TRM-enabled VTEPs including the border nodes.
    
*   The external RP must be external to the border nodes.
    
*   The RP must be configured within the VRF pointing to the external RP IP address (static RP). This ensures that unicast and multicast routing is enabled to reach the external RP in the given VRF.
    
*   In a Transit Routing Multicast (TRM) deployment, the RP-on-stick model can sometimes lead to traffic drops if there is flapping on the Protocol Independent Multicast (PIM) enabled interface. Use the ip pim spt-switch-graceful command on the turnaround router that leads to the RP. This command allows for a graceful switch to the Shortest Path Tree (SPT) during flapping, which can minimize traffic drops.
    
*   Replication of first packet is supported only on Cisco Nexus 9300 – EX, FX, FX2 family switches.
    
*   Beginning with Cisco NX-OS Release 10.2(3)F, Replication of first packet is supported on the Cisco Nexus 9300-FX3 platform switches.
    
*   TRM with Multi-Site is not supported on Cisco Nexus 9504-R platforms.
    
*   TRM supports multiple border nodes. Reachability to an external RP/source via multiple border leaf switches is supported with ECMP and requires symmetric unicast routing.
    
*   Both PIM and ip igmp snooping vxlan must be enabled on the L3 VNI's VLAN in a VXLAN vPC setup.
    
*   For traffic streams with an internal source and external L3 receiver using an external RP, the external L3 receiver might send PIM S,G join requests to the internal source. Doing so triggers the recreation of S,G on the fabric FHR, and it can take up to 10 minutes for this S,G to be cleared.
    
*   Beginning with Cisco NX-OS Release 10.3(1)F, the Real-time/flex statistics for TRM is supported on Cisco Nexus 9300-X Cloud Scale Switches.
    

Guidelines and Limitations for Layer 3 Tenant Routed Multicast
--------------------------------------------------------------

Layer 3 Tenant Routed Multicast (TRM) has the following configuration guidelines and limitations:

*   When upgrading from Cisco NX-OS Release 9.3(3) to Cisco NX-OS Release 9.3(6), if you do not retain configurations of the TRM enabled VRFs from Cisco NX-OS Release 9.3(3), or if you create new VRFs after the upgrade, the auto-generation of ip multicast multipath s-g-hash next-hop-based CLI, when feature ngmvpn is enabled, will not happen. You must enable the CLI manually for each TRM enabled VRF.
    
*   Layer 3 TRM is supported for Cisco Nexus 9200, 9300-EX, and 9300-FX/FX2/FX3/FXP and 9300-GX platform switches.
    
*   Beginning with Cisco NX-OS Release 10.2(3)F, Layer 3 TRM is supported on the Cisco Nexus 9300-GX2 platform switches.
    
*   Beginning with Cisco NX-OS Release 9.3(7), Cisco Nexus N9K-C9316D-GX, N9K-C9364C-GX, and N9K-X9716D-GX platform switches support the combination of Layer 3 TRM and EVPN Multi-Site.
    
*   Cisco Nexus 9300-GX platform switches do not support the combination of Layer 3 TRM and EVPN Multi-Site in Cisco NX-OS Release 9.3(5).
    
*   Beginning with Cisco NX-OS Release 10.2(3)F, the combination of Layer 3 TRM and EVPN Multi-Site is supported on the Cisco Nexus 9300-GX2 platform switches.
    
*   Beginning with Cisco NX-OS Release 9.3(3), the Cisco Nexus 9504 and 9508 platform switches with -R/RX line cards support TRM in Layer 3 mode. This feature is supported on IPv4 overlays only. Layer 2 mode and L2/L3 mixed mode are not supported.
    
    The Cisco Nexus 9504 and 9508 platform switches with -R/RX line cards can function as a border leaf for Layer 3 unicast traffic. For Anycast functionality, the RP can be internal, external, or RP everywhere.
    
*   When configuring TRM VXLAN BGP EVPN, the following platforms are supported:
    
    *   Cisco Nexus 9200, 9332C, 9364C, 9300-EX, and 9300-FX/FX2/FX3/FXP platform switches.
        
    *   Cisco Nexus 9500 platform switches with 9700-EX line cards, 9700-FX line cards, or a combination of both line cards.
        
*   Layer 3 TRM and VXLAN EVPN Multi-Site are supported on the same physical switch. For more information, see [Configuring Multi-Site](g_configuring_multisite.xml).
    
*   TRM Multi-Site functionality is not supported on Cisco Nexus 9504 platform switches with -R/RX line cards.
    
*   If one or both VTEPs is a Cisco Nexus 9504 or 9508 platform switch with -R/RX line cards, the packet TTL is decremented twice, once for routing to the L3 VNI on the source leaf and once for forwarding from the destination L3 VNI to the destination VLAN on the destination leaf.
    
*   TRM with vPC border leafs is supported only for Cisco Nexus 9200, 9300-EX, and 9300-FX/FX2/FX3/GX/GX2 platform switches and Cisco Nexus 9500 platform switches with -EX/FX or -R/RX line cards. The advertise-pip and advertise virtual-rmac commands must be enabled on the border leafs to support this functionality. For configuration information, see the "Configuring VIP/PIP" section.
    
*   Well-known local scope multicast (224.0.0.0/24) is excluded from TRM and is bridged.
    
*   When an interface NVE is brought down on the border leaf, the internal overlay RP per VRF must be brought down.
    
*   Beginning with Cisco NX-OS Release 10.3(1)F, TRM support for the new L3VNI mode CLIs are provided on Cisco Nexus 9300-X Cloud Scale switches.
    
*   Beginning Cisco NXOS release 10.2(1)F, TRM Flow Path Visualization is supported for flows within a single VXLAN EVPN site.
    
*   Beginning Cisco NXOS Release 10.3(2)F, TRM Flow Path Visualization support has been extended to below traffic patterns on Cisco Nexus 9000 Series platform switches:
    
    *   TRM Multisite DCI Multicast
        
    *   TRM Multisite DCI IR
        
    *   TRM Data MDT
        
    *   TRM on Virtual MCT vPC
        
    *   TRM using new L3VNI
        
    *   BUM Traffic visibility is not supported.
        

Guidelines and Limitations for Layer 2/Layer 3 Tenant Routed Multicast (Mixed Mode)
-----------------------------------------------------------------------------------

Layer 2/Layer 3 Tenant Routed Multicast (TRM) has the following configuration guidelines and limitations:

*   All TRM Layer 2/Layer 3 configured switches must be Anchor DR. This is because in TRM Layer 2/Layer 3, you can have switches configured with TRM Layer 2 mode that co-exist in the same topology. This mode is necessary if non-TRM and Layer 2 TRM mode edge devices (VTEPs) are present in the same topology.  
    
*   Anchor DR is required to be an RP in the overlay.
    
*   An extra loopback is required for anchor DRs.
    
*   Non-TRM and Layer 2 TRM mode edge devices (VTEPs) require an IGMP snooping querier configured per multicast-enabled VLAN. Every non-TRM and Layer 2 TRM mode edge device (VTEP) requires this IGMP snooping querier configuration because in TRM multicast control-packets are not forwarded over VXLAN.
    
*   The IP address for the IGMP snooping querier can be re-used on non-TRM and Layer 2 TRM mode edge devices (VTEPs).
    
*   The IP address of the IGMP snooping querier in a VPC domain must be different on each VPC member device.
    
*   When interface NVE is brought down on the border leaf, the internal overlay RP per VRF should be brought down.
    
*   The NVE interface must be shut and unshut while configuring the ip multicast overlay-distributed-dr command.
    
*   Beginning with Cisco NX-OS Release 9.2(1), TRM with vPC border leafs is supported. Advertise-PIP and Advertise Virtual-Rmac need to be enabled on border leafs to support with functionality. For configuring advertise-pip and advertise virtual-rmac, see the "Configuring VIP/PIP" section.
    
*   Anchor DR is supported only on the following hardware platforms:
    
    *   Cisco Nexus 9200, 9300-EX, and 9300-FX/FX2 platform switches
        
    *   Cisco Nexus 9500 platform switches with 9700-EX line cards, 9700-FX line cards, or a combination of both line cards
        
*   Beginning with Cisco NX-OS Release 10.2(3)F, Anchor DR is supported on the Cisco Nexus 9300-FX3 platform switches.
    
*   Layer 2/Layer 3 Tenant Routed Multicast (TRM) is not supported on Cisco Nexus 9300-FX3/GX/GX2 platform switches.
    

Rendezvous Point for Tenant Routed Multicast
--------------------------------------------

With TRM enabled Internal and External RP is supported. The following table displays the first release in which RP positioning is or is not supported.

   

RP Internal

RP External

PIM-Based RP Everywhere

TRM L2 Mode

N/A

N/A

N/A

TRM L3 Mode

7.0(3)I7(1), 9.2(x)

7.0(3)I7(4), 9.2(3)

Supported in 7.0(3)I7(x) releases starting from 7.0(3)I7(5)

Not supported in 9.2(x)

Supported in NX-OS releases beginning with 9.3(1) for the following Nexus 9000 switches:

*   Cisco Nexus 9200 Series switches
    
*   Cisco Nexus 9364C platform switches
    
*   Cisco Nexus 9300-EX/FX/FX2 platform switches (excluding the Cisco Nexus 9300-FXP platform switch)
    

Supported for Cisco Nexus 9300-FX3 platform switches beginning with Cisco NX-OS Release 9.3(5)

TRM L2L3 Mode

7.0(3)I7(1), 9.2(x)

N/A

N/A

Configuring a Rendezvous Point for Tenant Routed Multicast
----------------------------------------------------------

For Tenant Routed Multicast, the following rendezvous point options are supported:

*   [Configuring a Rendezvous Point Inside the VXLAN Fabric](#task_dvr_myb_zfb)
    
*   [Configuring an External Rendezvous Point](#task_rly_gyb_zfb)
    
*   [Configuring RP Everywhere with PIM Anycast](#id_82955)
    
*   [Configuring RP Everywhere with MSDP Peering](#id_82954)
    

Configuring a Rendezvous Point Inside the VXLAN Fabric
------------------------------------------------------

Configure the loopback for the TRM VRFs with the following commands on all devices (VTEP). Ensure it is reachable within EVPN (advertise/redistribute).

!\[Image\](./images/502089.jpg)

### SUMMARY STEPS

1.  configure terminal
2.  interface loopback loopback\_number
3.  vrf member vxlan-number
4.  ip address ip-address
5.  ip pim sparse-mode
6.  vrf context vrf-name
7.  ip pim rp-address ip-address-of-router group-list group-range-prefix

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal

Enters global configuration mode.

**Step 2**

interface loopback loopback\_number

### Example:

    switch(config)# interface loopback 11

Configure the loopback interface on all TRM-enabled nodes. This enables the rendezvous point inside the fabric.

**Step 3**

vrf member vxlan-number

### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 4**

ip address ip-address

### Example:

    switch(config-if)# ip address 209.165.200.1/32

Specify IP address.

**Step 5**

ip pim sparse-mode

### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 6**

vrf context vrf-name

### Example:

    switch(config-if)# vrf context vrf100

Create a VXLAN tenant VRF.

**Step 7**

ip pim rp-address ip-address-of-router group-list group-range-prefix

### Example:

    switch(config-vrf# ip pim rp-address 209.165.200.1 group-list 224.0.0.0/4

The value of the ip-address-of-router parameter is that of the RP. The same IP address must be on all the edge devices (VTEPs) for a fully distributed RP.

Configuring an External Rendezvous Point
----------------------------------------

Configure the external rendezvous point (RP) IP address within the TRM VRFs on all devices (VTEP). In addition, ensure reachability of the external RP within the VRF via the border node.

!\[Image\](./images/502090.jpg)

### SUMMARY STEPS

1.  configure terminal
2.  vrf context vrf100
3.  ip pim rp-address ip-address-of-router group-list group-range-prefix

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

vrf context vrf100

### Example:

    switch(config)# vrf context vrf100

Enter configuration mode.

**Step 3**

ip pim rp-address ip-address-of-router group-list group-range-prefix

### Example:

    switch(config-vrf)# ip pim rp-address 209.165.200.1 group-list 224.0.0.0/4

The value of the ip-address-of-router parameter is that of the RP. The same IP address must be on all of the edge devices (VTEPs) for a fully distributed RP.

Configuring RP Everywhere with PIM Anycast
------------------------------------------

RP Everywhere configuration with PIM Anycast solution.

!\[Image\](./images/502091.jpg)

For information about configuring RP Everywhere with PIM Anycast, see:

*   [Configuring a TRM Leaf Node for RP Everywhere with PIM Anycast](#id_82501)
    
*   [Configuring a TRM Border Leaf Node for RP Everywhere with PIM Anycast](#id_82503)
    
*   [Configuring an External Router for RP Everywhere with PIM Anycast](#id_82508)
    

*   [Configuring a TRM Leaf Node for RP Everywhere with PIM Anycast](#id_82501)
*   [Configuring a TRM Border Leaf Node for RP Everywhere with PIM Anycast](#id_82503)
*   [Configuring an External Router for RP Everywhere with PIM Anycast](#id_82508)

### Configuring a TRM Leaf Node for RP Everywhere with PIM Anycast

Configuration of Tenant Routed Multicast (TRM) leaf node for RP Everywhere.

### SUMMARY STEPS

1.  configure terminal
2.  interface loopback loopback\_number
3.  vrf member vrf-name
4.  ip address ip-address
5.  ip pim sparse-mode
6.  vrf context vxlan
7.  ip pim rp-address ip-address-of-router group-list group-range-prefix

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

#### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 11

Configure the loopback interface on all VXLAN VTEP devices.

**Step 3**

vrf member vrf-name

#### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 4**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.200.1/32

Specify IP address.

**Step 5**

ip pim sparse-mode

#### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 6**

vrf context vxlan

#### Example:

    switch(config-if)# vrf context vrf100

Create a VXLAN tenant VRF.

**Step 7**

ip pim rp-address ip-address-of-router group-list group-range-prefix

#### Example:

    switch(config-vrf# ip pim rp-address 209.165.200.1 group-list 224.0.0.0/4

The value of the ip-address-of-router parameters is that of the RP. The same IP address must be on all the edge devices (VTEPs) for a fully distributed RP.

### Configuring a TRM Border Leaf Node for RP Everywhere with PIM Anycast

Configuring the TRM Border Leaf Node for RP Anywhere with PIM Anycast.

### SUMMARY STEPS

1.  configure terminal
2.  {ip | ipv6} pim evpn-border-leaf
3.  interface loopback loopback\_number
4.  vrf member vrf-name
5.  ip address ip-address
6.  ipv6 pim sparse-mode
7.  interface loopback loopback\_number
8.  vrf member vxlan-number
9.  ipv6 address ipv6-address
10.  ipv6 pim sparse-mode
11.  vrf context vrf-name
12.  ipv6 pim rp-address ipv6-address-of-router group-list group-range-prefix
13.  ipv6 pim anycast-rp anycast-rp-address address-of-rp
14.  ipv6 pim anycast-rp anycast-rp-address address-of-rp
15.  ipv6 pim anycast-rp anycast-rp-address address-of-rp
16.  ipv6 pim anycast-rp anycast-rp-address address-of-rp

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

#### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

{ip | ipv6} pim evpn-border-leaf

#### Example:

    switch(config)# ipv6 pim evpn-border-leaf

Configure VXLAN VTEP as TRM border leaf node,

**Step 3**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 11

Configure the loopback interface on all VXLAN VTEP devices.

**Step 4**

vrf member vrf-name

#### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 5**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.200.1/32

Specify IP address.

**Step 6**

ipv6 pim sparse-mode

#### Example:

    switch(config-if)# ipv6 pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 7**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 12

Configure the PIM Anycast set RP loopback interface.

**Step 8**

vrf member vxlan-number

#### Example:

    switch(config-if)# vrf member vxlan-number

Configure VRF name.

**Step 9**

ipv6 address ipv6-address

#### Example:

    switch(config-if)# ip address 209.165.200.11/32

Specify IP address.

**Step 10**

ipv6 pim sparse-mode

#### Example:

    switch(config-if)# ipv6 pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 11**

vrf context vrf-name

#### Example:

    switch(config-if)# vrf context vrf100

Create a VXLAN tenant VRF.

**Step 12**

ipv6 pim rp-address ipv6-address-of-router group-list group-range-prefix

#### Example:

    switch(config-vrf)# ipv6 pim rp-address 2090:165:200::1 group ff1e::/16

The value of the ip-address-of-router parameters is that of the RP. The same IP address must be on all the edge devices (VTEPs) for a fully distributed RP.

**Step 13**

ipv6 pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ipv6 pim anycast-rp 2090:165:2000::1 2090:165:2000::11

Configure PIM Anycast RP set.

**Step 14**

ipv6 pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ipv6 pim anycast-rp 2090:165:2000::1 2090:165:2000::12

Configure PIM Anycast RP set.

**Step 15**

ipv6 pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ipv6 pim anycast-rp 2090:165:2000::1 2090:165:2000::13

Configure PIM Anycast RP set.

**Step 16**

ipv6 pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ipv6 pim anycast-rp 2090:165:2000::1 2090:165:2000::14

Configure PIM Anycast RP set.

### Configuring an External Router for RP Everywhere with PIM Anycast

Use this procedure to configure an external router for RP Everywhere.

### SUMMARY STEPS

1.  configure terminal
2.  interface loopback loopback\_number
3.  vrf member vrf-name
4.  ip address ip-address
5.  ip pim sparse-mode
6.  interface loopback loopback\_number
7.  vrf member vxlan-number
8.  ip address ip-address
9.  ip pim sparse-mode
10.  vrf context vxlan
11.  ip pim rp-address ip-address-of-router group-list group-range-prefix
12.  ip pim anycast-rp anycast-rp-address address-of-rp
13.  ip pim anycast-rp anycast-rp-address address-of-rp
14.  ip pim anycast-rp anycast-rp-address address-of-rp
15.  ip pim anycast-rp anycast-rp-address address-of-rp

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

#### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 11

Configure the loopback interface on all VXLAN VTEP devices.

**Step 3**

vrf member vrf-name

#### Example:

    switch(config-if)# vrf member vfr100

Configure VRF name.

**Step 4**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.200.1/32

Specify IP address.

**Step 5**

ip pim sparse-mode

#### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 6**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 12

Configure the PIM Anycast set RP loopback interface.

**Step 7**

vrf member vxlan-number

#### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 8**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.200.13/32

Specify IP address.

**Step 9**

ip pim sparse-mode

#### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 10**

vrf context vxlan

#### Example:

    switch(config-if)# vrf context vrf100

Create a VXLAN tenant VRF.

**Step 11**

ip pim rp-address ip-address-of-router group-list group-range-prefix

#### Example:

    switch(config-vrf)# ip pim rp-address 209.165.200.1 group-list 224.0.0.0/4

The value of the ip-address-of-router parameters is that of the RP. The same IP address must be on all the edge devices (VTEPs) for a fully distributed RP.

**Step 12**

ip pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ip pim anycast-rp 209.165.200.1 209.165.200.11

Configure PIM Anycast RP set.

**Step 13**

ip pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ip pim anycast-rp 209.165.200.1 209.165.200.12

Configure PIM Anycast RP set.

**Step 14**

ip pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ip pim anycast-rp 209.165.200.1 209.165.200.13

Configure PIM Anycast RP set.

**Step 15**

ip pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ip pim anycast-rp 209.165.200.1 209.165.200.14

Configure PIM Anycast RP set.

Configuring RP Everywhere with MSDP Peering
-------------------------------------------

The following figure represents the RP Everywhere configuration with MSDP RP solution.

For information about configuring RP Everywhere with MSDP Peering, see:

*   [Configuring a TRM Leaf Node for RP Everywhere with MSDP Peering](#id_82515)
    
*   [Configuring a TRM Border Leaf Node for RP Everywhere with MSDP Peering](#id_82524)
    
*   [Configuring an External Router for RP Everywhere with MSDP Peering](#id_82576)
    

!\[Image\](./images/502092.jpg)

*   [Configuring a TRM Leaf Node for RP Everywhere with MSDP Peering](#id_82515)
*   [Configuring a TRM Border Leaf Node for RP Everywhere with MSDP Peering](#id_82524)
*   [Configuring an External Router for RP Everywhere with MSDP Peering](#id_82576)

### Configuring a TRM Leaf Node for RP Everywhere with MSDP Peering

Configuring a TRM leaf node for RP Everywhere with MSDP peering.

### SUMMARY STEPS

1.  configure terminal
2.  interface loopback loopback\_number
3.  vrf member vrf-name
4.  ip address ip-address
5.  ip pim sparse-mode
6.  vrf context vrf-name
7.  ip pim rp-address ip-address-of-router group-list group-range-prefix

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

#### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 11

Configure the loopback interface on all VXLAN VTEP devices.

**Step 3**

vrf member vrf-name

#### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 4**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.200.1/32

Specify IP address.

**Step 5**

ip pim sparse-mode

#### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 6**

vrf context vrf-name

#### Example:

    switch(config-if)# vrf context vrf100

Create a VXLAN tenant VRF.

**Step 7**

ip pim rp-address ip-address-of-router group-list group-range-prefix

#### Example:

    switch(config-vrf# ip pim rp-address 209.165.200.1 group-list 224.0.0.0/4

The value of the ip-address-of-router parameters is that of the RP. The same IP address must be on all the edge devices (VTEPs) for a fully distributed RP.

### Configuring a TRM Border Leaf Node for RP Everywhere with MSDP Peering

Use this procedure to configure a TRM border leaf for RP Everywhere with PIM Anycast.

### SUMMARY STEPS

1.  configure terminal
2.  feature msdp
3.  ip pim evpn-border-leaf
4.  interface loopback loopback\_number
5.  vrf member vrf-name
6.  ip address ip-address
7.  ip pim sparse-mode
8.  interface loopback loopback\_number
9.  vrf member vrf-name
10.  ip address ip-address
11.  ip pim sparse-mode
12.  vrf context vrf-name
13.  ip pim rp-address ip-address-of-router group-list group-range-prefix
14.  ip pim anycast-rp anycast-rp-address address-of-rp
15.  ip pim anycast-rp anycast-rp-address address-of-rp
16.  ip msdp originator-id loopback
17.  ip msdp peer ip-address connect-source loopback

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

#### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

feature msdp

#### Example:

    switch(config)# feature msdp

Enable feature MSDP.

**Step 3**

ip pim evpn-border-leaf

#### Example:

    switch(config)# ip pim evpn-border-leaf

Configure VXLAN VTEP as TRM border leaf node,

**Step 4**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 11

Configure the loopback interface on all VXLAN VTEP devices.

**Step 5**

vrf member vrf-name

#### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 6**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.200.1/32

Specify IP address.

**Step 7**

ip pim sparse-mode

#### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 8**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 12

Configure the PIM Anycast set RP loopback interface.

**Step 9**

vrf member vrf-name

#### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 10**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.200.11/32

Specify IP address.

**Step 11**

ip pim sparse-mode

#### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 12**

vrf context vrf-name

#### Example:

    switch(config-if)# vrf context vrf100

Create a VXLAN tenant VRF.

**Step 13**

ip pim rp-address ip-address-of-router group-list group-range-prefix

#### Example:

    switch(config-vrf)# ip pim rp-address 209.165.200.1 group-list 224.0.0.0/4

The value of the ip-address-of-router parameter is that of the RP. The same IP address must be on all the edge devices (VTEPs) for a fully distributed RP.

**Step 14**

ip pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ip pim anycast-rp 209.165.200.1 209.165.200.11

Configure PIM Anycast RP set.

**Step 15**

ip pim anycast-rp anycast-rp-address address-of-rp

#### Example:

    switch(config-vrf)# ip pim anycast-rp 209.165.200.1 209.165.200.12

Configure PIM Anycast RP set.

**Step 16**

ip msdp originator-id loopback

#### Example:

    switch(config-vrf)# ip msdp originator-id loopback12

Configure MSDP originator ID.

**Step 17**

ip msdp peer ip-address connect-source loopback

#### Example:

    switch(config-vrf)# ip msdp peer 209.165.201.11 connect-source loopback12

Configure MSDP peering between border node and external RP router.

### Configuring an External Router for RP Everywhere with MSDP Peering

### SUMMARY STEPS

1.  configure terminal
2.  feature msdp
3.  interface loopback loopback\_number
4.  vrf member vrf-name
5.  ip address ip-address
6.  ip pim sparse-mode
7.  interface loopback loopback\_number
8.  vrf member vrf-name
9.  ip address ip-address
10.  ip pim sparse-mode
11.  vrf context vrf-name
12.  ip pim rp-address ip-address-of-router group-list group-range-prefix
13.  ip msdp originator-id loopback12
14.  ip msdp peer ip-address connect-source loopback12

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

#### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

feature msdp

#### Example:

    switch(config)# feature msdp

Enable feature MSDP.

**Step 3**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 11

Configure the loopback interface on all VXLAN VTEP devices.

**Step 4**

vrf member vrf-name

#### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 5**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.201.1/32

Specify IP address.

**Step 6**

ip pim sparse-mode

#### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 7**

interface loopback loopback\_number

#### Example:

    switch(config)# interface loopback 12

Configure the PIM Anycast set RP loopback interface.

**Step 8**

vrf member vrf-name

#### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 9**

ip address ip-address

#### Example:

    switch(config-if)# ip address 209.165.201.11/32

Specify IP address.

**Step 10**

ip pim sparse-mode

#### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on an interface.

**Step 11**

vrf context vrf-name

#### Example:

    switch(config-if)# vrf context vrf100

Create a VXLAN tenant VRF.

**Step 12**

ip pim rp-address ip-address-of-router group-list group-range-prefix

#### Example:

    switch(config-vrf)# ip pim rp-address 209.165.201.1 group-list 224.0.0.0/4

The value of the ip-address-of-router parameters is that of the RP. The same IP address must be on all the edge devices (VTEPs) for a fully distributed RP.

**Step 13**

ip msdp originator-id loopback12

#### Example:

    switch(config-vrf)# ip msdp originator-id loopback12

Configure MSDP originator ID.

**Step 14**

ip msdp peer ip-address connect-source loopback12

#### Example:

    switch(config-vrf)# ip msdp peer 209.165.200.11 connect-source loopback12

Configure MSDP peering between external RP router and all TRM border nodes.

Configuring Layer 3 Tenant Routed Multicast
-------------------------------------------

This procedure enables the Tenant Routed Multicast (TRM) feature. TRM operates primarily in the Layer 3 forwarding mode for IP multicast by using BGP MVPN signaling. TRM in Layer 3 mode is the main feature and the only requirement for TRM enabled VXLAN BGP EVPN fabrics. If non-TRM capable edge devices (VTEPs) are present, the Layer 2/Layer 3 mode and Layer 2 mode have to be considered for interop.

To forward multicast between senders and receivers on the Layer 3 cloud and the VXLAN fabric on TRM vPC border leafs, the VIP/PIP configuration must be enabled. For more information, see Configuring VIP/PIP.

!\[Image\](./images/note.gif)  

**Note**

* * *

TRM follows an always-route approach and hence decrements the Time to Live (TTL) of the transported IP multicast traffic.

* * *

### Before you begin

VXLAN EVPN feature nv overlay and nv overlay evpn must be configured.

The rendezvous point (RP) must be configured.

To enable/disable TRM v4/v6, PIM v4/v6 must be enabled.

### Procedure

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

feature ngmvpn

### Example:

    switch(config)# feature ngmvpn

Enables the Next-Generation Multicast VPN (ngMVPN) control plane. New address family commands become available in BGP.

**Note**

 

The no feature ngmvpn command will not remove MVPN configuration under BGP.

You will get a syslog message when you enable this command. The message informs you that ip multicast multipath s-g-hash next-hop-based is the recommended multipath hashing algorithm and you need enable it for the TRM enabled VRFs.

The auto-generation of ip multicast multipath s-g-hash next-hop-based command does not happen after you enable the feature ngmvpn command. You need to configure ip multicast multipath s-g-hash next-hop-based as part of the VRF configuration.

**Step 3**

ip igmp snooping vxlan

### Example:

    switch(config)# ip igmp snooping vxlan

Configure IGMP snooping for VXLAN VLANs.

**Step 4**

interface nve1

### Example:

    switch(config)# interface nve 1

Configure the NVE interface.

**Step 5**

member vni vni-range associate-vrf

### Example:

    switch(config-if-nve)# member vni 200100 associate-vrf

Configure the Layer 3 virtual network identifier. The range of vni-range is from 1 to 16,777,214.

**Step 6**

mcast-group ip-prefix

### Example:

    switch(config-if-nve-vni)# mcast-group 225.3.3.3

Builds the default multicast distribution tree for the VRF VNI (Layer 3 VNI).

The multicast group is used in the underlay (core) for all multicast routing within the associated Layer 3 VNI (VRF).

**Note**

 

We recommend that underlay multicast groups for Layer 2 VNI, default MDT, and data MDT not be shared. Use separate, non-overlapping groups.

**Step 7**

exit

### Example:

    switch(config-if-nve-vni)# exit

Exits command mode.

**Step 8**

exit

### Example:

    switch(config-if)# exit

Exits command mode.

**Step 9**

router bgp <as-number>

### Example:

    switch(config)# router bgp 100

Set autonomous system number.

**Step 10**

vni number

### Example:

    switch(config-router)# vni 500001 l3
    

Specifies the VNI for the tenant VRF.

Beginning with Cisco NX-OS Release 10.3(1)F, the L3 keyword is provided to indicate that the new L3VNI configuration is enabled.

**Step 11**

neighbor ip-addr

### Example:

    switch(config-router)# neighbor 1.1.1.1 

Configure IP address of the neighbor.

**Step 12**

address-family ipv4 mvpn

### Example:

    switch(config-router-neighbor)# address-family ipv4 mvpn

Configure multicast VPN.

**Step 13**

send-community extended

### Example:

    switch(config-router-neighbor-af)# send-community extended

Enables ngMVPN for address family signalization. The send community extended command ensures that extended communities are exchanged for this address family.

**Step 14**

exit

### Example:

    switch(config-router-neighbor-af)# exit

Exits command mode.

**Step 15**

exit

### Example:

    switch(config-router)# exit

Exits command mode.

**Step 16**

vrf context vrf\_name

### Example:

    switch(config-router)# vrf context vrf100
    

Configures VRF name.

**Step 17**

mvpn vri id <id>

### Example:

    switch(config-router)#mvpn vri 100 
    

Generates the VRI for TRM.

Run this command under router bgp <as-number> submode.

The vri id range is from 1 to 65535.

**Note**

 

This command is mandatory on vPC leaf nodes, and value has to be same across vPC pair and unique in TRM domain. Also the value must not collide with any site-id value.

**Note**

 

This command is required on BGWs if site-id value is greater than 2 bytes, and value has to be same across all same site BGWs and unique in TRM domain. Also the value must not collide with any site-id value.

**Step 18**

\[no\] mdt \[v4|v6\] vxlan

### Example:

    switch(config-router)#mdt v4 vxlan
    

Enables TRM v4/v6 on the specified VRF. The TRM v4/v6 is enabled by default.

The no option disables the TRM v4/v6 on the specified VRF.

Run this command under the sub-mode of new L3VNI config.

**Note**

 

This command is applicable only to VRFs configured with new-L3VNI.

**Step 19**

ip multicast multipath s-g-hash next-hop-based

### Example:

    switch(config-vrf)# ip multicast multipath s-g-hash next-hop-based

Configures multicast multipath and initiates S, G, nexthop hashing (rather than the default of S/RP, G-based hashing) to select the RPF interface.

**Step 20**

ip pim rp-address ip-address-of-router group-list group-range-prefix

### Example:

    switch(config-vrf)# ip pim rp-address 209.165.201.1 group-list 226.0.0.0/8

The value of the ip-address-of-router parameter is that of the RP. The same IP address must be on all of the edge devices (VTEPs) for a fully distributed RP.

For overlay RP placement options, see the [Configuring a Rendezvous Point for Tenant Routed Multicast](#concept_svm_jqc_zfb) section.

**Step 21**

address-family ipv4 unicast

### Example:

    switch(config-vrf)# address-family ipv4 unicast

Configures unicast address family.

**Step 22**

route-target both auto mvpn

### Example:

    switch(config-vrf-af-ipv4)# route-target both auto mvpn

Defines the BGP route target that is added as an extended community attribute to the customer multicast (C\_Multicast) routes (ngMVPN route type 6 and 7).

Auto route targets are constructed by the 2-byte Autonomous System Number (ASN) and Layer 3 VNI.

**Step 23**

ip multicast overlay-spt-only

### Example:

    switch(config)# ip multicast overlay-spt-only

Gratuitously originate (S,A) route when the source is locally connected. The ip multicast overlay-spt-only command is enabled by default on all MVPN-enabled Cisco Nexus 9000 Series switches (typically leaf node).

**Step 24**

interfacevlan\_id

### Example:

    switch(config)# interface vlan11

Configures the first-hop gateway (distributed anycast gateway for the Layer 2 VNI. No router PIM peering must ever happen with this interface.

**Step 25**

no shutdown

### Example:

    switch(config-if)# no shutdown

Disables an interface.

**Step 26**

vrf member vrf-num

### Example:

    switch(config-if)# vrf member vrf100

Configures VRF name.

**Step 27**

ipv6 address ipv6\_address

### Example:

    switch(config-if)# ip address 11.1.1.1/24

Configures IP address.

**Step 28**

ipv6 pim sparse-mode

### Example:

    switch(config-if)# ip pim sparse-mode

Enables IGMP and PIM on the SVI. This is required is multicast sources and/or receivers exist in this VLAN.

**Step 29**

fabric forwarding mode anycast-gateway

### Example:

    switch(config-if)# fabric forwarding mode anycast-gateway

Configures Anycast Gateway Forwarding Mode.

**Step 30**

ip pim neighbor-policy route-map-name

### Example:

    switch(config-if)# ip pim neighbor-policy route-map1

Creates an IP PIM neighbor policy with a suitable route-map to deny any IPv4 addresses, preventing PIM from establishing PIM neighborship on the L2VNI link.

**Note**

 

Do not use Distributed Anycast Gateway for PIM Peerings.

**Step 31**

exit

### Example:

    switch(config-if)# exit

Exits command mode.

**Step 32**

interface vlan\_id

### Example:

    switch(config)# interface vlan100

Configures Layer 3 VNI.

**Step 33**

no shutdown

### Example:

    switch(config-if)# no shutdown

Disable an interface.

**Step 34**

vrf member vrf100

### Example:

    switch(config-if)# vrf member vrf100

Configures VRF name.

**Step 35**

ip forward

### Example:

    switch(config-if)# ip forward

Enable IP forwarding on interface.

**Step 36**

ip pim sparse-mode

### Example:

    switch(config-if)# ip pim sparse-mode

Configures sparse-mode PIM on interface. There is no PIM peering happening in the Layer-3 VNI, but this command must be present for forwarding.

Configuring TRM on the VXLAN EVPN Spine
---------------------------------------

This procedure enables Tenant Routed Multicast (TRM) on a VXLAN EVPN spine switch.

### Before you begin

The VXLAN BGP EVPN spine must be configured. See [Configuring iBGP for EVPN on the Spine](m_configuring_vxlan_bgp_evpn.html#task_hh2_qjn_yfb).

### SUMMARY STEPS

1.  configure terminal
2.  route-map permitall permit 10
3.  set ip next-hop unchanged
4.  exit
5.  router bgp \[autonomous system\] number
6.  address-family ipv4 mvpn
7.  retain route-target all
8.  neighbor ip-address \[remote-as number\]
9.  address-family ipv4 mvpn
10.  disable-peer-as-check
11.  rewrite-rt-asn
12.  send-community extended
13.  route-reflector-client
14.  route-map permitall out

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

route-map permitall permit 10

### Example:

    switch(config)# route-map permitall permit 10

Configure the route-map.

**Note**

 

The route-map keeps the next-hop unchanged for EVPN routes

*   Required for eBGP
    
*   Options for iBGP
    

**Step 3**

set ip next-hop unchanged

### Example:

    switch(config-route-map)# set ip next-hop unchanged

Set next hop address.

**Note**

 

The route-map keeps the next-hop unchanged for EVPN routes

*   Required for eBGP
    
*   Options for iBGP
    

**Step 4**

exit

### Example:

    switch(config-route-map)# exit

Return to exec mode.

**Step 5**

router bgp \[autonomous system\] number

### Example:

    switch(config)# router bgp 65002

Specify BGP.

**Step 6**

address-family ipv4 mvpn

### Example:

    switch(config-router)# address-family ipv4 mvpn

Configure the address family IPv4 MVPN under the BGP.

**Step 7**

retain route-target all

### Example:

    switch(config-router-af)# retain route-target all

Configure retain route-target all under address-family IPv4 MVPN \[global\].

**Note**

 

Required for eBGP. Allows the spine to retain and advertise all MVPN routes when there are no local VNIs configured with matching import route targets.

**Step 8**

neighbor ip-address \[remote-as number\]

### Example:

    switch(config-router-af)# neighbor 100.100.100.1 

Define neighbor.

**Step 9**

address-family ipv4 mvpn

### Example:

    switch(config-router-neighbor)# address-family ipv4 mvpn

Configure address family IPv4 MVPN under the BGP neighbor.

**Step 10**

disable-peer-as-check

### Example:

    switch(config-router-neighbor-af)# disable-peer-as-check

Disables checking the peer AS number during route advertisement. Configure this parameter on the spine for eBGP when all leafs are using the same AS but the spines have a different AS than leafs.

**Note**

 

Required for eBGP.

**Step 11**

rewrite-rt-asn

### Example:

    switch(config-router-neighbor-af)# rewrite-rt-asn

Normalizes the outgoing route target's AS number to match the remote AS number. Uses the BGP configured neighbors remote AS. The rewrite-rt-asn command is required if the route target auto feature is being used to configure EVPN route targets.

**Step 12**

send-community extended

### Example:

    switch(config-router-neighbor-af)# send-community extended

Configures community for BGP neighbors.

**Step 13**

route-reflector-client

### Example:

    switch(config-router-neighbor-af)# route-reflector-client

Configure route reflector.

**Note**

 

Required for iBGP with route-reflector.

**Step 14**

route-map permitall out

### Example:

    switch(config-router-neighbor-af)# route-map permitall out

Applies route-map to keep the next-hop unchanged.

**Note**

 

Required for eBGP.

Configuring Tenant Routed Multicast in Layer 2/Layer 3 Mixed Mode
-----------------------------------------------------------------

This procedure enables the Tenant Routed Multicast (TRM) feature. This enables both Layer 2 and Layer 3 multicast BGP signaling. This mode is only necessary if non-TRM edge devices (VTEPs) are present in the Cisco Nexus 9000 Series switches (1st generation). Only the Cisco Nexus 9000-EX and 9000-FX switches can do Layer 2/Layer 3 mode (Anchor-DR).

To forward multicast between senders and receivers on the Layer 3 cloud and the VXLAN fabric on TRM vPC border leafs, the VIP/PIP configuration must be enabled. For more information, see Configuring VIP/PIP.

All Cisco Nexus 9300-EX and 9300-FX platform switches must be in Layer 2/Layer 3 mode.

### Before you begin

VXLAN EVPN must be configured.

The rendezvous point (RP) must be configured.

### Procedure

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

feature ngmvpn

### Example:

    switch(config)# feature ngmvpn

Enables the Next-Generation Multicast VPN (ngMVPN) control plane. New address family commands become available in BGP.

**Note**

 

The no feature ngmvpn command will not remove MVPN configuration under BGP.

**Step 3**

advertise evpn multicast

### Example:

    switch(config)# advertise evpn multicast

Advertises IMET and SMET routes into BGP EVPN towards non-TRM capable switches.

**Step 4**

ip igmp snooping vxlan

### Example:

    switch(config)# ip igmp snooping vxlan

Configure IGMP snooping for VXLAN VLANs.

**Step 5**

ip multicast overlay-spt-only

### Example:

    switch(config)# ip multicast overlay-spt-only

Gratuitously originate (S,A) route when source is locally connected. The ip multicast overlay-spt-only command is enabled by default on all MVPN-enabled Cisco Nexus 9000 Series switches (typically leaf nodes).

**Step 6**

ip multicast overlay-distributed-dr

### Example:

    switch(config)# ip multicast overlay-distributed-dr

Enables distributed anchor DR function on this VTEP.

**Note**

 

The NVE interface must be shut and unshut while configuring this command.

**Step 7**

interface nve1

### Example:

    switch(config)# interface nve 1

Configure the NVE interface.

**Step 8**

\[no\] shutdown

### Example:

    switch(config-if-nve)# shutdown

Shuts down the NVE interface. The no shutdown command brings up the interface.

**Step 9**

member vni vni-range associate-vrf

### Example:

    switch(config-if-nve)# member vni 200100 associate-vrf

Configure the Layer 3 virtual network identifier. The range of vni-range is from 1 to 16,777,214.

**Step 10**

mcast-group ip-prefix

### Example:

    switch(config-if-nve-vni)# mcast-group 225.3.3.3

Configures the multicast group on distributed anchor DR.

**Step 11**

exit

### Example:

    switch(config-if-nve-vni)# exit

Exits command mode.

**Step 12**

interface loopback loopback\_number

### Example:

    switch(config-if-nve)# interface loopback 10

Configure the loopback interface on all distributed anchor DR devices.

**Step 13**

ip address ip\_address

### Example:

    switch(config-if)# ip address 100.100.1.1/32

Configure IP address. This IP address is the same on all distributed anchor DR.

**Step 14**

ip router ospf process-tag area ospf-id

### Example:

    switch(config-if)# ip router ospf 100 area 0.0.0.0

OSPF area ID in IP address format.

**Step 15**

ip pim sparse-mode

### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on interface.

**Step 16**

interface nve1

### Example:

    switch(config-if)# interface nve1

Configure NVE interface.

**Step 17**

shutdown

### Example:

    switch(config-if-nve)# shutdown

Disable the interface.

**Step 18**

mcast-routing override source-interface loopback int-num

### Example:

    switch(config-if-nve)# mcast-routing override source-interface loopback 10

Enables that TRM is using a different loopback interface than the VTEPs default source-interface.

The loopback10 variable must be configured on every TRM-enabled VTEP (Anchor DR) in the underlay with the same IP address. This loopback and the respective override command are needed to serve TRM VTEPs in co-existence with non-TRM VTEPs.

**Step 19**

exit

### Example:

    switch(config-if-nve)# exit

Exits command mode.

**Step 20**

router bgp 100

### Example:

    switch(config)# router bgp 100

Set autonomous system number.

**Step 21**

neighbor ip-addr

### Example:

    switch(config-router)# neighbor 1.1.1.1 

Configure IP address of the neighbor.

**Step 22**

address-family ipv4 mvpn

### Example:

    switch(config-router-neighbor)# address-family ipv4 mvpn

Configure multicast VPN.

**Step 23**

send-community extended

### Example:

    switch(config-router-neighbor-af)# send-community extended

Send community attribute.

**Step 24**

exit

### Example:

    switch(config-router-neighbor-af)# exit

Exits command mode.

**Step 25**

exit

### Example:

    switch(config-router)# exit

Exits command mode.

**Step 26**

vrf vrf\_name vrf100

### Example:

    switch(config)# vrf context vrf100

Configure VRF name.

**Step 27**

ip pim rp-address ip-address-of-router group-list group-range-prefix

### Example:

    switch(config-vrf)# ip pim rp-address 209.165.201.1 group-list 226.0.0.0/8

The value of the ip-address-of-router parameter is that of the RP. The same IP address must be on all of the edge devices (VTEPs) for a fully distributed RP.

For overlay RP placement options, see the [Configuring a Rendezvous Point for Tenant Routed Multicast](#concept_svm_jqc_zfb) - Internal RP section.

**Step 28**

address-family ipv4 unicast

### Example:

    switch(config-vrf)# address-family ipv4 unicast

Configure unicast address family.

**Step 29**

route-target both auto mvpn

### Example:

    switch(config-vrf-af-ipv4)# route-target both auto mvpn

Specify target for mvpn routes.

**Step 30**

exit

### Example:

    switch(config-vrf-af-ipv4)# exit

Exits command mode.

**Step 31**

exit

### Example:

    switch(config-vrf)# exit

Exits command mode.

**Step 32**

interface vlan\_id

### Example:

    switch(config)# interface vlan11

Configure Layer 2 VNI.

**Step 33**

no shutdown

### Example:

    switch(config-if)# no shutdown

Disable an interface.

**Step 34**

vrf member vrf100

### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 35**

ip address ip\_address

### Example:

    switch(config-if)# ip address 11.1.1.1/24

Configure IP address.

**Step 36**

ip pim sparse-mode

### Example:

e

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on the interface.

**Step 37**

fabric forwarding mode anycast-gateway

### Example:

    switch(config-if)# fabric forwarding mode anycast-gateway

Configure Anycast Gateway Forwarding Mode.

**Step 38**

ip pim neighbor-policy route-map-name

### Example:

    switch(config-if)# ip pim neighbor-policy route-map1

Creates an IP PIM neighbor policy with a suitable route-map to deny any IPv4 addresses, preventing PIM from establishing PIM neighborship on the L2VNI link.

**Step 39**

exit

### Example:

    switch(config-if)# exit

Exits command mode.

**Step 40**

interface vlan\_id

### Example:

    switch(config)# interface vlan100

Configure Layer 3 VNI.

**Step 41**

no shutdown

### Example:

    switch(config-if)# no shutdown

Disable an interface.

**Step 42**

vrf member vrf100

### Example:

    switch(config-if)# vrf member vrf100

Configure VRF name.

**Step 43**

ip forward

### Example:

    switch(config-if)# ip forward

Enable IP forwarding on interface.

**Step 44**

ip pim sparse-mode

### Example:

    switch(config-if)# ip pim sparse-mode

Configure sparse-mode PIM on the interface.

Configuring Layer 2 Tenant Routed Multicast
-------------------------------------------

This procedure enables the Tenant Routed Multicast (TRM) feature. This enables Layer 2 multicast BGP signaling.

IGMP Snooping Querier must be configured per multicast-enabled VXLAN VLAN on all Layer-2 TRM leaf switches.

### Before you begin

VXLAN EVPN must be configured.

### Procedure

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

feature ngmvpn

### Example:

    switch(config)# feature ngmvpn

Enables EVPN/MVPN feature.

**Note**

 

The no feature ngmvpn command will not remove MVPN configuration under BGP.

**Step 3**

advertise evpn multicast

### Example:

    switch(config)# advertise evpn multicast

Advertise L2 multicast capability.

**Step 4**

ip igmp snooping vxlan

### Example:

    switch(config)# ip igmp snooping vxlan

Configure IGMP snooping for VXLANs.

**Step 5**

vlan configuration vlan-id

### Example:

    switch(config)# vlan configuration 101

Enter configuration mode for VLAN 101.

**Step 6**

ip igmp snooping querier querier-ip-address

### Example:

    switch(config-vlan-config)# ip igmp snooping querier 2.2.2.2

Configure IGMP snooping querier for each multicast-enabled VXLAN VLAN.

Configuring TRM with vPC Support
--------------------------------

This section provides steps to configure TRM with vPC support. Beginning with Cisco NX-OS Release 10.1(2), TRM Multisite with vPC BGW is supported.

### SUMMARY STEPS

1.  configure terminal
2.  feature vpc
3.  feature interface-vlan
4.  feature lacp
5.  feature pim
6.  feature ospf
7.  ip pim rp-address address group-list range
8.  vpc domain domain-id
9.  peer switch
10.  peer gateway
11.  peer-keepalive destination ipaddress
12.  ip arp synchronize
13.  ipv6 nd synchronize
14.  Create vPC peer-link.
15.  system nve infra-vlans range
16.  vlan number
17.  Create the SVI.
18.  (Optional) delay restore interface-vlan seconds

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal 

Enter global configuration mode.

**Step 2**

feature vpc

### Example:

    switch(config)# feature vpc

Enables vPCs on the device.

**Step 3**

feature interface-vlan

### Example:

    switch(config)# feature interface-vlan

Enables the interface VLAN feature on the device.

**Step 4**

feature lacp

### Example:

    switch(config)# feature lacp

Enables the LACP feature on the device.

**Step 5**

feature pim

### Example:

    switch(config)# feature pim

Enables the PIM feature on the device.

**Step 6**

feature ospf

### Example:

    switch(config)# feature ospf

Enables the OSPF feature on the device.

**Step 7**

ip pim rp-address address group-list range

### Example:

    switch(config)# ip pim rp-address 100.100.100.1 group-list 224.0.0/4

Defines a PIM RP address for the underlay multicast group range.

**Step 8**

vpc domain domain-id

### Example:

    switch(config)# vpc domain 1

Creates a vPC domain on the device and enters vpn-domain configuration mode for configuration purposes. There is no default. The range is from 1 to 1000.

**Step 9**

peer switch

### Example:

    switch(config-vpc-domain)# peer switch

Defines the peer switch.

**Step 10**

peer gateway

### Example:

    switch(config-vpc-domain)# peer gateway

To enable Layer 3 forwarding for packets destined to the gateway MAC address of the virtual port channel (vPC), use the peer-gateway command.

**Step 11**

peer-keepalive destination ipaddress

### Example:

    switch(config-vpc-domain)# peer-keepalive destination 172.28.230.85

Configures the IPv4 address for the remote end of the vPC peer-keepalive link.

**Note**

 

The system does not form the vPC peer link until you configure a vPC peer-keepalive link.

The management ports and VRF are the defaults.

**Note**

 

We recommend that you configure a separate VRF and use a Layer 3 port from each vPC peer device in that VRF for the vPC peer-keepalive link.

For more information about creating and configuring VRFs, see the [Cisco Nexus 9000 NX-OS Series Unicast Routing Config Guide, 9.3(x)](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/93x/unicast/configuration/guide/b-cisco-nexus-9000-series-nx-os-unicast-routing-configuration-guide-93x.html).

**Step 12**

ip arp synchronize

### Example:

    switch(config-vpc-domain)# ip arp synchronize

Enables IP ARP synchronize under the vPC Domain to facilitate faster ARP table population following device reload.

**Step 13**

ipv6 nd synchronize

### Example:

    switch(config-vpc-domain)# ipv6 nd synchronize

Enables IPv6 nd synchronization under the vPC domain to facilitate faster nd table population following device reload.

**Step 14**

Create vPC peer-link.

### Example:

    switch(config)# interface port-channel 1
    switch(config)# switchport
    switch(config)# switchport mode trunk
    switch(config)# switchport trunk allowed vlan 1,10,100-200
    switch(config)# mtu 9216
    switch(config)# vpc peer-link
    switch(config)# no shut
    
    switch(config)# interface Ethernet 1/1, 1/21
    switch(config)# switchport
    switch(config)# mtu 9216
    switch(config)# channel-group 1 mode active
    switch(config)# no shutdown
    

Creates the vPC peer-link port-channel interface and adds two member interfaces to it.

**Step 15**

system nve infra-vlans range

### Example:

    switch(config)# system nve infra-vlans 10

Defines a non-VXLAN enabled VLAN as a backup routed path.

**Step 16**

vlan number

### Example:

    switch(config)# vlan 10

Creates the VLAN to be used as an infra-VLAN.

**Step 17**

Create the SVI.

### Example:

    switch(config)# interface vlan 10
    switch(config)# ip address 10.10.10.1/30
    switch(config)# ip router ospf process UNDERLAY area 0
    switch(config)# ip pim sparse-mode
    switch(config)# no ip redirects
    switch(config)# mtu 9216
    switch(config)# no shutdown
    

Creates the SVI used for the backup routed path over the vPC peer-link.

**Step 18**

(Optional) delay restore interface-vlan seconds

### Example:

    switch(config-vpc-domain)# delay restore interface-vlan 45

(Optional)

Enables the delay restore timer for SVIs. We recommend tuning this value when the SVI/VNI scale is high. For example, when the SCI count is 1000, we recommend that you set the delay restore for interface-vlan to 45 seconds.

Configuring TRM with vPC Support (Cisco Nexus 9504-R and 9508-R)
----------------------------------------------------------------

### SUMMARY STEPS

1.  configure terminal
2.  feature vpc
3.  feature interface-vlan
4.  feature lacp
5.  feature pim
6.  feature ospf
7.  ip pim rp-address address group-list range
8.  vpc domain domain-id
9.  hardware access-list tcam region mac-ifacl
10.  hardware access-list tcam region vxlan 10
11.  reload
12.  peer switch
13.  peer gateway
14.  peer-keepalive destination ipaddress
15.  ip arp synchronize
16.  ipv6 nd synchronize
17.  Create vPC peer-link.
18.  system nve infra-vlans range
19.  vlan number
20.  Create the SVI.
21.  (Optional) delay restore interface-vlan seconds

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal 

Enter global configuration mode.

**Step 2**

feature vpc

### Example:

    switch(config)# feature vpc

Enables vPCs on the device.

**Step 3**

feature interface-vlan

### Example:

    switch(config)# feature interface-vlan

Enables the interface VLAN feature on the device.

**Step 4**

feature lacp

### Example:

    switch(config)# feature lacp

Enables the LACP feature on the device.

**Step 5**

feature pim

### Example:

    switch(config)# feature pim

Enables the PIM feature on the device.

**Step 6**

feature ospf

### Example:

    switch(config)# feature ospf

Enables the OSPF feature on the device.

**Step 7**

ip pim rp-address address group-list range

### Example:

    switch(config)# ip pim rp-address 100.100.100.1 group-list 224.0.0/4

Defines a PIM RP address for the underlay multicast group range.

**Step 8**

vpc domain domain-id

### Example:

    switch(config)# vpc domain 1

Creates a vPC domain on the device and enters vpn-domain configuration mode for configuration purposes. There is no default. The range is 1–1000.

**Step 9**

hardware access-list tcam region mac-ifacl

### Example:

    switch(config)# hardware access-list tcam region mac-ifacl 0

Carves the TCAM region for the ACL database.

**Note**

 

This TCAM carving command is required to enable TRM forwarding for N9K-X9636C-RX line cards only. With no TCAM region carved for mac-ifacl , the TCAM resources are used for TRM instead.

**Step 10**

hardware access-list tcam region vxlan 10

### Example:

    switch(config)# hardware access-list tcam region vxlan 10

Assigns the the TCAM region for use by a VXLAN.

**Note**

 

This TCAM carving command is required to enable TRM forwarding for N9K-X9636C-RX line cards only.

**Step 11**

reload

### Example:

    switch(config)# reload

Reloads the switch config for the TCAM assignments to become active.

**Step 12**

peer switch

### Example:

    switch(config-vpc-domain)# peer switch

Defines the peer switch.

**Step 13**

peer gateway

### Example:

    switch(config-vpc-domain)# peer gateway

To enable Layer 3 forwarding for packets that are destined to the gateway MAC address of the virtual port channel (vPC), use the peer-gateway command.

**Step 14**

peer-keepalive destination ipaddress

### Example:

    switch(config-vpc-domain)# peer-keepalive destination 172.28.230.85

Configures the IPv4 address for the remote end of the vPC peer-keepalive link.

**Note**

 

The system does not form the vPC peer link until you configure a vPC peer-keepalive link.

The management ports and VRF are the defaults.

**Note**

 

We recommend that you configure a separate VRF and use a Layer 3 port from each vPC peer device in that VRF for the vPC peer-keepalive link.

For more information about creating and configuring VRFs, see the [Cisco Nexus 9000 NX-OS Series Unicast Routing Config Guide, 9.3(x)](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/93x/unicast/configuration/guide/b-cisco-nexus-9000-series-nx-os-unicast-routing-configuration-guide-93x.html).

**Step 15**

ip arp synchronize

### Example:

    switch(config-vpc-domain)# ip arp synchronize

Enables IP ARP synchronize under the vPC Domain to facilitate faster ARP table population following device reload.

**Step 16**

ipv6 nd synchronize

### Example:

    switch(config-vpc-domain)# ipv6 nd synchronize

Enables IPv6 and synchronization under the vPC domain to facilitate faster and table population following device reload.

**Step 17**

Create vPC peer-link.

### Example:

    switch(config)# interface port-channel 1
    switch(config)# switchport
    switch(config)# switchport mode trunk
    switch(config)# switchport trunk allowed vlan 1,10,100-200
    switch(config)# mtu 9216
    switch(config)# vpc peer-link
    switch(config)# no shut
    
    switch(config)# interface Ethernet 1/1, 1/21
    switch(config)# switchport
    switch(config)# mtu 9216
    switch(config)# channel-group 1 mode active
    switch(config)# no shutdown
    

Creates the vPC peer-link port-channel interface and adds two member interfaces to it.

**Step 18**

system nve infra-vlans range

### Example:

    switch(config)# system nve infra-vlans 10

Defines a non-VXLAN enabled VLAN as a backup routed path.

**Step 19**

vlan number

### Example:

    switch(config)# vlan 10

Creates the VLAN to be used as an infra-VLAN.

**Step 20**

Create the SVI.

### Example:

    switch(config)# interface vlan 10
    switch(config)# ip address 10.10.10.1/30
    switch(config)# ip router ospf process UNDERLAY area 0
    switch(config)# ip pim sparse-mode
    switch(config)# no ip redirects
    switch(config)# mtu 9216
    switch(config)# no shutdown
    

Creates the SVI used for the backup routed path over the vPC peer-link.

**Step 21**

(Optional) delay restore interface-vlan seconds

### Example:

    switch(config-vpc-domain)# delay restore interface-vlan 45

(Optional)

Enables the delay restore timer for SVIs. We recommend tuning this value when the SVI/VNI scale is high. For example, when the SCI count is 1000, we recommend that you set the delay restore for interface-vlan to 45 seconds.

Flex Stats for TRM
------------------

Beginning with Cisco NX-OS Release 10.3(1)F, the Real-time/flex statistics for TRM is supported for Overlay routes on Cisco Nexus 9300-X Cloud Scale Switches. Flex Stats is not supported for Underlay Routes

!\[Image\](./images/note.gif)  

**Note**

* * *

VXLAN NVE VNI ingress and egress, NVE per-peer ingress and tunnel tx stats won't be supported.

* * *

In a VXLAN TRM setup, if you want mroute statistics for overlay mroutes you must configure the hardware profile multicast flex-stats-enable command in the default template. For more information on configuration, see [Configuring Flex Stats for TRM](#task_ddc_qfm_mtb).

The following CLIs will not be supported after the flex stats CLI is enabled:

*       sh nve vni <vni_id>/<all> counters
    
*       sh nve peers <peer-ip> interface nve 1 counters
    
*       sh int tunnel <Tunnel interface number> counters
    

Configuring Flex Stats for TRM
------------------------------

This procedure enables/disables the flex stats counters in a VXLAN TRM setup.

### SUMMARY STEPS

1.  configure terminal
2.  \[no\] hardware profile multicast flex-stats-enable

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

### Example:

    switch# configure terminal

Enter configuration mode.

**Step 2**

\[no\] hardware profile multicast flex-stats-enable

### Example:

    switch(config)# hardware profile multicast flex-stats-enable

Enables the flex stats on TRM.

The no option disables the flex stats on TRM.

**Note**

 

To reflect the changes done during configuration, ensure that the switch is reloaded.

Configuring TRM Data MDT
------------------------

*   [About TRM Data MDT](#concept_tsz_rfc_lvb)
*   [Guidelines and Limitations for TRM Data MDT](#concept_zpl_5fc_lvb)
*   [Configuring TRM Data MDT](#task_j4z_yc3_gvb)
*   [Verifying TRM Data MDT Configuration](#concept_ebb_c2r_v5b)

### About TRM Data MDT

Tenant Routed Multicast (TRM) enables multicast forwarding on the VXLAN fabric that uses a BGP-based EVPN control plane. TRM provides multi-tenancy aware multicast forwarding between senders and receivers within the same or different subnet local to the VTEP or across VTEPs.

Existing TRM solution enables multicast forwarding using default Multicast Distribution Tree (default MDT). With default MDT, nodes (PEs) will always receive traffic in the underlay irrespective of whether they have interested receiver on the overlay.

The solution described in this document enables optimized multicast forwarding using S-PMSI (data MDT). With S-PMSI, source traffic will be encapsulated in a selective multicast tunnel. Only the leafs that have interested receivers will join the selective multicast distribution tree.

Switchover to Data MDT can be immediate or based on the traffic bandwidth (threshold based configuration).

### Guidelines and Limitations for TRM Data MDT

TRM Data MDT has the following guidelines and limitations:

*   Beginning with Cisco NX-OS Release 10.3(2)F, TRM Data MDT is supported on Cisco Nexus 9300 EX/FX/FX2/FX3/GX/GX2 switches, and 9500 switches with 9700-EX/FX/GX line cards.
    
*   Data MDT in fabric is supported only with DCI IR for a given VRF. Data MDT in fabric is not supported with DCI Multicast for a given VRF on the site BGW.
    
*   Data MDT configuration is VRF specific and configured under L3 VRF.
    
*   The following TRM Data MDT features are supported:
    
    *   ASM and SSM group ranges are supported for Data MDT. PIM-Bider Underlay is not supported for Data MDT.
        
    *   Data MDT supports IPv4 and IPv6 overlay multicast traffic.
        
    *   Data MDT will be supported by vPC, VMCT leaf’s as well as vPC/Anycast BGW. Also, L2, L3 orphan/external network can be connected to vPC nodes.
        
    *   Data MDT config per L3 VRF.
        
    *   Data MDT origination (immediate and threshold based).
        
    *   Data MDT encap route programming delay of 3 seconds. User-defined delays are currently not supported.
        
*   L2, L2 -L3 mixed mode will not be supported.
    
*   New L3VNI mode is supported.
    
*   Ensure that the total number of underlay groups (L2 BUM, default MDT, and data MDT groups) is 512.
    

### Configuring TRM Data MDT

Follow this procedure to configure TRM Data MDT:

#### Before you begin

To enable switching to data MDT group based on real-time flow rate, the following command is needed:

hardware profile multicast flex-stats-enable

!\[Image\](./images/note.gif)  

**Note**

* * *

This command requires switch reloading.

* * *

### SUMMARY STEPS

1.  configure terminal
2.  vrf context vrf-name
3.  address-family {ipv4 | ipv6} unicast
4.  \[ no\] mdt data vxlan <group-range-1> \[threshold\] \[route-map <value> <policy-name\_1> \] \[seq <sequence-number>\]

### DETAILED STEPS

 

Command or Action

Purpose

**Step 1**

configure terminal

#### Example:

    switch# configure terminal

Enters global configuration mode.

**Step 2**

vrf context vrf-name

#### Example:

    switch(config)# vrf context vrf1

Configures the VRF.

**Step 3**

address-family {ipv4 | ipv6} unicast

#### Example:

For IPv4

    switch(config-vrf)# address-family ipv4 unicast

For IPv6

    switch(config-vrf)# address-family ipv6 unicast

Configures the IPv4 or IPv6 unicast address family.

**Step 4**

\[ no\] mdt data vxlan <group-range-1> \[threshold\] \[route-map <value> <policy-name\_1> \] \[seq <sequence-number>\]

#### Example:

    switch(config-vrf-af)# mdt data vxlan 224.7.8.0/24 route-map map1 10​

Data MDT can be enabled/disabled per address family. Cisco Nexus supports overlapping group ranges between VRF as well as within the VRF between the address families.

*   Threshold & route-maps are optional. The traffic threshold is the traffic of the source and is measured in kbps. When the threshold is exceeded, the traffic takes 3 seconds to switch over to data MDT.
    
*   Group-range is part of the command key. More than one group range can be configured per address family.
    
*   BUM & default MDT group should not overlap with data MDT group.
    
*   Data MDT can have overlapping config range.
    

### Verifying TRM Data MDT Configuration

To display the TRM Data MDT configuration information, enter one of the following commands:

 

Command

Purpose

show nve vni { <vni-id> | all } mdt \[{ local | remote | peer-sync }\] \[{ <cs> <cg>} | { <cs6> <cg6>}\]

Displays customer source (CS), customer group (CG) to data source (DS), data group (DG) mapping information.

show nve vrf \[x\] mdt \[local | remote | peer-sync\] \[y\] \[z\]

Displays CS, CG allocations under VRF.

show bgp ipv4 mvpn route-type 3 detail

Displays BGP S-PMSI route information for IPv4 overlay route.

show bgp ipv6 mvpn route-type 3 detail

Displays BGP S-PMSI route information for IPv6 overlay route.

show fabric multicast \[ipv4 | ipv6\] spmsi-ad-route \[Source Address\] \[Group address\] vrf <vrf\_name>

Displays fabric multicast SPMSI-AD IPV4/IPv6 information for a given tenant VRF.

**show ip mroute detail vrf** _<vrf\_name>_

Displays IP multicast route information for default VRF.

show l2route spmsi {all | topology <vlan>}

Displays CS-CG to DS-DG mapping information at L2RIB (Encap route programming).

show forwarding distribution multicast vxlan mdt-db

Displays MFDM/MFIB data MDT db.

show nve resource multicast

Displays the resource usage of data MDT and any failed allocations.

### Was this Document Helpful?

Yes No [!\[Feedback\](./images/Feedback\_OceanBlue.png)Feedback](javascript: void\(0\))

### Contact Cisco

*   [Open a Support Case](https://mycase.cloudapps.cisco.com/start?prodDocUrl=)!\[login required\](./images/icon\_lock\_small.png)
*   (Requires a [Cisco Service Contract](//www.cisco.com/c/en/us/services/order-services.html))

jQuery(document).ready(function() { var getURL=jQuery("#eotLetUsHelpProdDocUrl").attr("href"), domInd = location.href.indexOf('cisco.com') ; if ( domInd > -1 && domInd < location.href.search(/\\w\\/\\w/) ) { getURL += encodeURI(location.href); } jQuery("#eotLetUsHelpProdDocUrl").attr("href",getURL); });

var test=""; if(test!=undefined && test.trim().length>0){ mboxCreate('en-us\_dg\_support\_bookchapters','type=default',''); }else{ mboxCreate('en-us\_dg\_support\_bookchapters','type=default'); }

var eottdatp = document.getElementsByClassName('eot-tdatp'); if (eottdatp && eottdatp.style) { eottdatp.style.display="none"; }

if(document.querySelector('#privacy-manager')!=null){ document.querySelector('#privacy-manager').href='#cookies'; }

!\[Image\](./images/12345)