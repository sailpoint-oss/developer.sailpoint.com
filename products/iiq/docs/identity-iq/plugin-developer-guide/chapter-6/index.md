---
id: plugin-xml-artifacts
title: XML Artifacts
pagination_label: XML Artifacts
sidebar_label: XML Artifacts
sidebar_position: 6
sidebar_class_name: plugin_developer_guide_xml_artifacts
keywords: ['plugin']
description: IdentityIQ Plugin XML Artifacts
slug: /docs/plugin-developer-guide/xml-artifacts
tags: ['plugin','guide','identityiq']
---

# XML Artifacts

Any IdentityIQ objects required as part of a plugin must be represented in XML artifacts. This can mean something as small as a single new SPRight object, such as the 'ViewTodoPluginIcon', or a complex workflow or rule. The mechanism used to import these artifacts during installation is the same as any other IdentityIQ object import, so the normal import actions are also available: merge, include, execute, logConfig.

You can directly develop these XML artifacts in the build folder or in the IdentityIQ UI. You can then export them either by using the console or by copying and pasting them from the build's debug. 

When you're developing in the UI and then migrating the artifacts to your build folder, it is important to strip out some of the metadata that IdentityIQ attaches to XML objects when they're first created. First and foremost, you should remove the 'id' attribute assigned by 'Hibernate'. Then remove any other hibernate ID value references. For this reason, it is preferable to export the artifacts by using the IdentityIQ console command: './iiq export -clean'

Everything in the 'import' folder is imported - the SailPoint objects can be separated into individual files or combined into a single file. When a plugin is uninstalled, the imported XML artifacts remain in the IdentityIQ database (not deleted), but the .zip archive where the plugin files are loaded from is removed from the 'spt_file_bucket' and 'spt_persisted_file' tables.

The development of regular IdentityIQ objects is beyond the scope of this document, but many helpful resources are available:

[Technical White Papers - IdentityIQ](https://community.sailpoint.com/space/2068)

[BeanShell Developer's Guide for IdentityIQ](https://community.sailpoint.com/docs/DOC-3375)