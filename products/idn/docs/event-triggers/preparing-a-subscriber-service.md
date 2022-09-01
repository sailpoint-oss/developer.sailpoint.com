---
id: preparing-a-subscriber-service
slug: /docs/event-triggers/getting-started/preparing-a-subscriber-service
---

# Preparing a Subscriber Service

Before you can subscribe to an event trigger, you need to prepare a service that can accept incoming HTTP requests from the event trigger service.  More specifically, your client service needs to accept a POST request to an endpoint of its choosing, with the ability to parse the JSON data sent by the trigger.  There are many ways to accomplish this, but we will cover four of the most common types of client services you can build to handle event triggers.

## Webhook testing service

There are numerous webhook testing websites that will generate a unique URL that you can use to subscribe to an event trigger and explore the data that is sent by the trigger.  One such site is https://webhook.site.  This site will generate a unique URL each time you open it, which you can copy and paste into the subscription configuration in IdentityNow.  Any events that the trigger generates will be sent to this website for you to analyze.

![Webhook.site](./img/webhook-site.png)

The purpose of webhook testing services is to make it easy to set up a trigger and see the data of the events that will eventually be sent to your production service.  This can aid in the early development process as you explore the data the event trigger sends and how best to access the data that you need.

## Native SaaS workflows

Some SaaS vendors provide built-in workflow builders in their product so you don't have to use a no code provider.  Slack, for example, has a premium [workflow builder](https://slack.com/help/articles/360035692513-Guide-to-Workflow-Builder) feature that will generate a unique URL that you can use to configure your subscription.  Slack's workflow builder can then listen for events sent by your trigger and perform Slack specific actions on the data, like sending a user a message when their access request has been approved.

![Slack workflow](./img/slack-workflow.png)

## No code provider

No code/low code providers, like Zapier and Microsoft Power Automate, make it very easy to consume event triggers and perform actions based on the event data.  They are a popular solution for those looking to prototype or quickly create automated business processes, and cater to novices and advanced users alike.  Each no code provider has documentation on how to create a new workflow and subscribe to an event trigger or webhook, so you will need to find the relevant documentation for your no code provider to learn how to set one up.  Zapier has the ability to configure a webhook action that will generate a unique URL that you can configure in your event trigger subscription.

![Zapier webhook](./img/zapier-webhook.png)

## Custom application

A custom application is one that you write in a language of your choosing and host in your own infrastructure, cloud or on-premise.  This is the most advanced option for implementing an event trigger client service.  Although it requires a great deal of skill and knowledge to build, deploy, and operate your own service that can consume requests over HTTP, it offers the most power and flexibility to implement your use cases.  You can learn more about custom applications by checking out our [Event Trigger Example Application](https://github.com/sailpoint-oss/event-trigger-examples).
