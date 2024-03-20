---
id: admin-console
title: Admin Console
pagination_label: ADMIN
sidebar_label: Admin Console
sidebar_position: 5
sidebar_class_name: rudk
keywords: ['UI', 'admin','console']
description: The Admin's toolbox.
slug: /tools/admin-console
tags: ['UI']
---

## Overview 

The Identity Security Cloud (ISC) Admin Console is a desktop application you can use to administer and troubleshoot ISC. The ISC Admin Console is built using Electron and Sveltekit, and it's developed and maintained by the SailPoint Developer Relations team. 

Use the admin console to perform common administrative tasks and troubleshoot issues in your ISC tenant. 

This document provides an overview of the admin console and its setup. 

You can find all the project's code in the admin console's GitHub repository [here](https://github.com/sailpoint-oss/idn-admin-console). 

<details>
<summary>Set up admin console from release</summary>

The only requirement to use the admin console from a release is access to the ISC tenant you want to administer and troubleshoot.

The easiest way to set up the admin console is to download the latest release for your desired OS [here](https://github.com/sailpoint-oss/idn-admin-console/releases). 

Pick your OS and download the relevant file from the latest release:
| Platform | File Type |
| -------- | --------- |
| Windows  | exe, zip  |
| Mac      | dmg, zip  |
| Linux    | deb, rpm, zip |

You can then launch the admin console application. 

</details>

<details> 
<summary>Build the admin console from source</summary>

You may want to build the application from source, which allows you to get the latest changes directly from the repository, rather than wait for a new release. 

These are the requirements to build the admin console from source. 
- You must have the [Node.js package manager (npm)](https://docs.npmjs.com/about-npm) installed. You can find instructions about how to install npm [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- You must clone the [admin console's GitHub repository](https://github.com/sailpoint-oss/idn-admin-console). You can find instructions about how to clone a GitHub repository [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

Once you have ensured that you have npm installed and you have cloned the admin console's GitHub repository, you can build the admin console from source. 

Follow these steps in the specified order to build the admin console from source: 

First, go to the `./Sveltekit-App` folder. 
1. Run this command: 
    ```bash
    npm install
    ```
2. Then, run this command: 
    ```bash
    npm run build
    ```

Next, go to the `./Electron-App` folder. 
1. Run this command: 
    ```bash
    npm install
    ```
2. Then, run this command: 
    ```bash
    npm run build
    ```

Running these commands in the specified order builds the admin console application's binaries and place them in the `./Electron-App/out` folder. 

</details>

## Log in to the admin console 

When you launch the admin console, it prompts you to provide your tenant information to log in to your ISC tenant. 

You must provide this tenant information to be able to log in: 
- **Tenant**: This is your organization's tenant name. 
- **Domain**: This is usually 'identitynow'. 
- **Base URL**: This is the API URL - it is 'https://{tenant}.{domain}.com', like 'https:acme.identitynow.com', for example.
- **Tenant URL**: This is the tenant URL - it is often the same as the API URL. 

The admin console then prompts you to log in to the your tenant the same way you would from the browser. You must provide a password and possibly some additional form of authentication. 

## Admin console home page features 

Once you log in, the admin console's home page displays. The home page has four panels with different links. You can access these different admin console functionalities from the home page panels: 
- **Status**: The Status panel shows you the platform's status, such as "All Systems Operational". Click the status to open https://status.sailpoint.com in an admin console window. You will see the latest status updates for the platform there. 
- **Tenant Links**: Use these links for direct access to some areas of your tenant common for administrative functions. Click these links to open your ISC tenant UI within an admin console window. From the admin console window, you can also access the entirety of your tenant. 
- **Resources**: Use these links to access common SailPoint resources, such as the [SailPoint Developer Community](https://developer.sailpoint.com/discuss/c/identity-security-cloud/6) and the different forms of SailPoint documentation. 
- **Support**: Use these links to access [SailPoint Customer Support](https://support.sailpoint.com/csm) and submit support tickets. 

## Admin console side tab features 

The admin console's side bar has five different tabs. The first tab, 'Home', displays the admin console's home page. The other four provide unique admin access within the admin console: 
- [Sources](#sources): Use this tab to see your tenant's list of sources, with the raw JSON object for each source exposed. This tab makes it easier for administrators to find relevant information about sources, such as IDs, when they or others (Support, Services) troubleshoot your environment. 
- [Identities](#identities): Use this tab to see your tenant's list of identities, with the raw JSON object for each identity exposed. This tab makes it easier for administrators to find relevant information about identities, such as IDs, when they or others (Support, Services) troubleshoot your environment. 
- [Reports](#reports): Use this tab to find common queries, with the raw JSON object for each report exposed, that administrators may need to run to understand the health and current situation of your tenant. This tab makes it easier for administrators to run common queries to help them or others (Support, Services) troubleshoot your environment.
- [Courier](#courier): Use the Courier to send API requests from the admin console, without needing to manage authentication and authorization in a separate tool. You can copy the JSON objects from the other tabs into the courier to make quick and easy changes. The courier makes it easier for administrators to use the APIs to get additional information and make changes from within the admin console when they troubleshoot your environment. 

### Sources 

When you open the Sources tab, the admin console displays a list of your tenant's sources, along with their IDs, which don't display in the ISC UI. This is helpful because you need a source's ID to manage it with the API. 

Each source provides the options to either 'Open' or 'View it. If you 'Open' a source, the admin console displays a page with some additional useful information about the source, such as its Virtual Appliance (VA) Cluster and its most recent account and entitlement aggregations. At the end of the source's page, the admin console displays both the raw JSON for the source's connector attributes, which can be extensive and detailed, and the raw JSON for the full source. You can copy these JSONs and paste them in the Courier or an external tool to make changes with the API. 

If you 'View' a source, the admin console displays the raw JSON for the full source in a window within the list, without the additional information shown when you 'Open' the source. You can copy this JSON and paste it in the Courier or an external tool to make changes with the API. 

### Identities 

When you open the Identities tab, the admin console displays a list of your tenant's identities, along with their IDs, which don't display in the ISC UI. This is helpful because you need an identity's ID to manage it with the API. 

Each identity provides the options to either 'Open' or 'View' it. If you 'Open' an identity, the admin console displays a page with some additional information about the identity, such as its current lifecycle state. The admin console also displays the identity's raw JSON, which you can copy and paste in the Courier or an external tool to make changes with the API. At the end of the identity's page, the admin console displays the identity's recent events, such as a changed identity state or an updated identity attribute value, along with their raw JSONs. These events can help administrators or others (Support, Services) troubleshoot the identity's issues or potential issues. 

If you 'View' an identity, the admin console displays the raw JSON for the identity in a window within the list, without the additional information shown when you 'Open' the identity. You can copy this JSON and paste it in the Courier or an external tool to make changes with the API. 

### Reports 

When you open the Reports tab, the admin console displays a list of common queries administrators may need to run to understand your tenant's health and current situation. Each report contains a different summary, depending on the report. 

The admin console offers these five reports: 
- **Source Account Create Error**: This report displays a list of all source accounts with associated account create errors, along with the raw JSONs for the errors. Click an error in the list to view its raw JSON. You can copy these JSONs and provide them to Support or Services so they can better help you troubleshoot. 
- **Inactive Identities with Access**: This report displays a list of all identities that are inactive but still have access to sources, along with the sources they can access. You can either 'Open' an identity or 'View' it. If you 'Open' an identity, the admin console displays a page with some additional information about the identity, as well as the identity's raw JSON, and its recent identity events (and their raw JSONs). If you 'View' an identity, the admin console displays the raw JSON for the identity in a window within the list. You can copy either of these JSONs into the Courier or an external tool to make changes to the identity's access. 
- **Missing Cloud Life Cycle State**: This report displays a list of all identities that are missing the cloud life cycle state attribute. You can either 'Open' an identity or 'View' it. If you 'Open' an identity, the admin console displays a page with some additional information about the identity, such as its current missing lifecycle state, as well as the identity's raw JSON, and its recent identity events (and their raw JSONs). If you 'View' an identity, the admin console displays the raw JSON for the identity in a window within the list. You can copy either of these JSONs into the Courier or an external tool to make changes to the identity's missing lifecycle state. 
- **Source Owner Configured**: This report displays a list of all sources and their configured owners. Each source provides the options to either 'Open' or 'View it. If you 'Open' a source, the admin console displays a page with some additional useful information about the source, as well as a raw JSON for its connector attributes and a raw JSON for the full source itself. If you 'View' a source, the admin console displays the raw JSON for the full source in a window within the list. You can copy these JSONs and paste them in the Courier or an external tool to make changes with the API. 
- **Source Aggregations**: This report displays all sources and their most recent account and entitlement aggregation events, along with their raw JSONs. You can view the JSONs of account and entitlement aggregations for both 'started' and 'passed' aggregation events. You can copy these JSONs and provide them to Support or Services so they can better help you troubleshoot. 

### Courier 

Use the Courier to send API requests from the admin console without needing to manage authentication and authorization in a separate tool. You can copy the JSON objects from the other tabs into the courier to make quick and easy changes. The courier makes it easier for administrators to use the APIs to get additional information and make changes from within the admin console when they or others (Support, Services) troubleshoot your environment. 

When you open the Courier tab, the admin console displays its Courier tool. The Courier tool comprises four parts: 
- **API Details**: Use this dropdown menu to first select the type of API you want to call. You can either call V3 ISC APIs, the Beta ISC APIs, or Custom APIs. Once you have selected an API type, you can select the endpoint you want to call from a list, such as beta/access-profiles. 
- **API Call**: Use this dropdown menu to select the type of request you want to send to the endpoint, such as a GET, POST, PUT, PATCH, or DELETE. Then use the 'Call' button to send your request. 
- **API Request Body**: Use this section to specify your API request's body. You can copy a raw JSON into this area, or you can manually create an object or an array. 
- **API Response Body**: This section displays the API response to your request. You can copy this raw JSON and use it for additional troubleshooting. 

## Discuss 

The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. 

To learn more about the ISC admin console and discuss it with SailPoint Developer Community members, go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/c/identity-security-cloud/6). 
