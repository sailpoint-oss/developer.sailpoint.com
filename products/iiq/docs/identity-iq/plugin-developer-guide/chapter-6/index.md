---
id: plugin-xml-artifacts
title: XML Artifacts
pagination_label: XML Artifacts
sidebar_label: XML Artifacts
sidebar_position: 6
sidebar_class_name: plugin_developer_guide_xml_artifacts
keywords: ['plugin']
description: Plugin Developer Guide XML Artifacts in IdentityIQ
slug: /docs/plugin-developer-guide/xml-artifacts
tags: ['plugin','guide','identityiq']
---

# XML Artifacts

Any IdentityIQ objects that are required as part of a plugin will need to be represented in XML artifacts. This may be something as small as a single new SPRight object, such as the 'ViewTodoPluginIcon', or a complex workflow or rule. The mechanism that is used for importing these artifacts during installation is the same as any IdentityIQ object import, so the normal import actions are also available (merge, include, execute, logConfig).

Development of these XML artifacts can be done directly in the build folder, or in the IdentityIQ UI and either exported via the console or copy and pasted from debug into the build. When developing in the UI and then migrating to your build folder, It is important to strip out some of the metadata that IdentityIQ attaches to XML objects when they are first created. First and foremost, the 'id' attribute assigned by Hibernate should be removed. Next, any other hibernate ID value references should be removed. For this reason, it is preferable to export the artifacts using the IdentityIQ console command './iiq export -clean'.

Everything in the 'import' folder is imported - the SailPoint objects can be seperated into individual files, or combined into a single file. When a plugin is uninstalled, the XML artifacts that were imported will remain in the IdentityIQ database (not deleted), but the .zip archive where plugin files are loaded from is removed from the spt_file_bucket and spt_persisted_file tables.

The development of regular IdentityIQ objects is beyond the scope of this document, but many helpful resources are available:

[Technical White Papers - IdentityIQ](https://community.sailpoint.com/space/2068)

[BeanShell Developer's Guide for IdentityIQ](https://community.sailpoint.com/docs/DOC-3375)