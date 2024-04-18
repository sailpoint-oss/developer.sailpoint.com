---
id: access-intelligence-center-audit-er-diagram
title: Access Intelligence Center Audit ER Diagram
pagination_label: Access Intelligence Center Audit ER Diagram
sidebar_label: Audit Entity Relationship Diagram
sidebar_position: 2
sidebar_class_name: AccessIntelligenceCenter
keywords: ['data listing', 'data share', 'secure data sharing']
description: Access Intelligence Center Audit ER Diagram
slug: /reporting/aic-audit-er-diagram
tags: ['AccessIntelligenceCenter', 'AIC']
hide_table_of_contents: true
---

import MermaidViewer from '@site/src/components/MermaidViewer';

# Access Intelligence Center Audit ER Diagram

<MermaidViewer diagram='erDiagram
    AUDIT {
        varchar ID PK "The primary key"
        varchar ID "Unique ID of Audit Event"
        String POD "the pod"
        String ORG "Customer organization"
        varchar TENANT_ID "Unique ID of customer organization"
        Timestamp CREATED "Date Audit Event Created"
        String ACTION "The action taken related to the Audit Event"
        String TYPE "The type of Audit Event, example SSO, ROLE, USER_MANAGER, etc."
        String ACTOR_NAME "Who/what performed the action, this can be an Identity or a Service name"
        String TARGET_NAME "Who/what the action was performed on, this can be an Identity or a Service name"
        String STACK "Which internal service was associated with the Audit Event"
        String TRACKING_NUMBER "Internal tracking ID number associated with the Audit Event"
        String IP_ADDRESS "IP Address related to Audit Event if available"
        String DETAILS "Any additional details related to the Audit Event"
        String SOURCE_NAME "Name of the Source associated with the Audit Event"
        String ACCOUNT_NAME "Name of Account associated with the Audit Event"
        String HOST_NAME "Host Name related to Audit Event if available"
        String INFO "Any additional info that might be available"
        String ERROR "Any error messages associated with the Audit Event"
        varchar SOURCE_ID "The ID of the source associated with the Audit Event"
        String OPERATION "What operation took place on the Audit Event, examples include SETUP, UPDATE, REQUEST, etc."
        String STATUS "What was the status of the Audit Event, examples include PASSED, FAILED, TERMINATED, etc."
        String TECHNICAL_NAME "The underlying technical Audit Event name"
        String NAME "The friendly name description of the Audit Event"
        Timestamp SYNC_DATE "Date Audit Event Synced"
    }'></MermaidViewer>
