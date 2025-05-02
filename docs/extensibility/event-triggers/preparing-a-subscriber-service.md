---
id: preparing-subscriber-service
title: Preparing a Subscriber Service
pagination_title: Preparing a Subscriber Service
sidebar_label: Preparing a Subscriber Service
sidebar_position: 2
sidebar_class_name: preparingSubscriberService
keywords: ['event', 'triggers', 'subscriber']
description: Before you can subscribe to an event trigger, you must prepare a service that can accept incoming HTTP requests from the event trigger service.
slug: /extensibility/event-triggers/preparing-subscriber-service
tags: ['Event Triggers']
---

Before you can subscribe to an event trigger, you must prepare a service that can accept incoming HTTP requests from the event trigger service. More specifically, your client service must accept a POST request to an endpoint of its choosing, with the ability to parse the JSON data sent by the trigger. There are many ways to accomplish this, but this guide covers four of the most common types of client services you can build to handle event triggers.

## Webhook Testing Service

There are many webhook testing websites that generate a unique URL you can use to subscribe to an event trigger and explore the data sent by the trigger. One site is https://webhook.site. This site generates a unique URL whenever you open it, which you can copy and paste into the subscription configuration in Identity Security Cloud. Any events that the trigger generates will be sent to this website for you to analyze.

![Webhook.site](./img/webhook-site.png)

The purpose of webhook testing services is to make it easy to set up a trigger and see the data of the events that will eventually be sent to your production service. This can help in the early development process when you explore the data the event trigger sends and how to best access the data you need.

## Native SaaS Workflows

Some SaaS vendors provide built-in workflow builders in their products so you do not have to use a no-code provider. Slack, for example, has a premium [workflow builder](https://slack.com/help/articles/360035692513-Guide-to-Workflow-Builder) feature that generates a unique URL you can use to configure your subscription. Slack's workflow builder can then listen for events sent by your trigger and perform Slack specific actions on the data, like sending a user a message when his or her access request is approved.

![Slack workflow](./img/slack-workflow.png)

## No-code Provider

No-code/low-code providers, like Zapier and Microsoft Power Automate, make it easy to consume event triggers and perform actions based on the event data. They are popular solutions for those looking to prototype or quickly create automated business processes, and they cater to novices and advanced users alike. Each no-code provider has documentation about how to create a new workflow and subscribe to an event trigger or webhook, so you must find the relevant documentation for your no-code provider to learn how to set one up. Zapier has the ability to configure a webhook action that generates a unique URL you can configure in your event trigger subscription.

![Zapier webhook](./img/zapier-webhook.png)

## Custom Application

A custom application is one you write in a language of your choosing and host in your own infrastructure, cloud, or on-premise. This is the most advanced option for implementing an event trigger client service. Although it requires a great deal of skill and knowledge to build, deploy, and operate your own service that can consume requests over HTTP, a custom application offers the most power and flexibility to implement your use cases. You can learn more about custom applications by checking out our [Event Trigger Example Application](https://github.com/sailpoint-oss/event-trigger-examples).

### Visual Studio Code Port Forwarding 

When you're developing a custom application that can consume event triggers, ISC needs a public URL (Integration URL) it can send event data to. However, you may want to test your custom application locally. If you're using Visual Studio Code (VSCode), you can use its [built-in port forwarding feature](https://code.visualstudio.com/docs/debugtest/port-forwarding) to generate a public URL and then forward its web traffic into your local web service. 

Follow these steps to set up port forwarding in your custom application: 

1. Open the terminal in VSCode and select the 'Ports' tab. 
2. Select 'Forward a Port'. 
3. Specify the port that your application is using to listen for event data. In the event trigger examples project, the port is 8081 by default. Click 'Enter' to create a port.
4. VSCode will prompt you to log in to GitHub. Log in, and VS Code will create a URL in the 'Forwarded Address' column. This is the URL you will make public for ISC to send event data to. 
5. Right click the URL, select 'Visibility', and set the visibility to 'Public'. ISC needs the URL to be public to send it event data. 

You now have a public URL you can provide to ISC as an 'Integration URL' when you subscribe to an event trigger. Copy the URL and paste it into the 'Integration URL' when you subscribe to an event trigger. Then add the event trigger endpoint to the end of the URL so that your application reads the correct event data. For example, you would use a URL like https://w6wl7kkz-8081.usw3.devtunnels.ms/form-submitted to consume the [Form Submitted](https://developer.sailpoint.com/docs/api/v2025/form-submitted-event) event trigger. 
