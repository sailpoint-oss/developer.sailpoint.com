---
id: plugin-developer-guide
title: Plugin Developer Guide
pagination_label: Plugin Developer Guide
sidebar_label: Plugin Developer Guide
sidebar_position: 1
sidebar_class_name: plugin_developer_guide
keywords: ['plugin']
description: Plugin Developer Guide in IdentityIQ
slug: /docs/plugin-developer-guide
tags: ['plugin','guide','identityiq']
---

Introduced with IdentityIQ 7.1, the plugin framework provides the infrastructure and tools to enable developers to extend the Open Identity Platform to meet a variety of specialized use cases that one might encounter in a non-standard deployment. The plugin framework allows developers to create packaged functionality that integrates with IdentityIQ, in a upgrade safe and isolated manner. It gives implementers a safe option for creating User Interface extensions, REST services, Custom SailPoint configuration objects, and more. This guide is designed to walk through the basics of plugin development and installation.

The first iteration of the plugin framework was released as an add-on to IdentityIQ 7.0 - the development process for this legacy version is slightly different and is not the subject of this document. However, Appendix A will discuss the differences between versions, and the strategy for migrating a plugin developed for the 7.0 frameworks to the 7.1 framework.

Developing a plugin requires a fairly robust knowledge of IdentityIQ and its object model, Java, JavaScript, css, and SQL. This document is designed to provide development guidance at the high level - what the components of a plugin are, which components are required, how those objects interact. Language specific tutorials are beyond its scope. Throughout this document, examples will be taken and discussed from the 'TodoPlugin' - located here: [To-do Plugin](https://community.sailpoint.com/t5/Plugin-Framework/TodoPlugin-V3-zip/ta-p/79764)

This guide is intended to be a community driven effort - please feel free to update and or add chapters based on your use of the Plugin Framework.
