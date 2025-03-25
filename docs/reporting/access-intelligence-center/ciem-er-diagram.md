---
id: aic-ciem-er-diagram
title: Access Intelligence Center CIEM ER Diagram
pagination_label: Access Intelligence Center CIEM ER Diagram
sidebar_label: CIEM Entity Relationship Diagram
sidebar_position: 3
sidebar_class_name: AccessIntelligenceCenter
keywords: ['data listing', 'data share', 'secure data sharing']
description: Access Intelligence Center CIEM ER Diagram
slug: /reporting/aic-ciem-er-diagram
tags: ['AccessIntelligenceCenter', 'AIC', 'CIEM']
hide_table_of_contents: true
---

import MermaidViewer from '@site/src/components/MermaidViewer';

# Access Intelligence Center CIEM ER Diagram

<!-- Identity Attributes are to be worked on later because there are no current default values -->

<MermaidViewer diagram='erDiagram
    "Entitlement Service Usage" {
        varchar ENTITLEMENT_VALUE "ISC entitlement value associated with the access. Usually the cloud native ID."
        varchar CIEM_KEY PK "composite key: CLOUD_PROVIDER-SERVICE-ENTITLEMENT_ACCOUNT_NATIVE_IDENTITY-CLOUD_SOURCE_NATIVE_ID-CLOUD_SUB_SOURCE_NATIVE_ID"
        varchar ACCESS_ASSIGNMENT_ID "Cloud native ID of the access assignment object. AWS: <policy arn>|<statement id> GCP: <policy id>:<role id>, Azure: RoleAssignment, RoleAssignmentScheduleInstance (PIM) or RoleEligibilityScheduleInstance (PIM)"
        varchar ACCOUNT_CLOUD_NAME "Cloud provider associated with the account (AWS|GCP|Okta|Azure). When the access is federated, this will be different than CLOUD_PROVIDER."
        varchar DISPLAY_NAME "Account display name"
        varchar ACCOUNT_EMAIL "Account email. Note: AWS IAM users will not have email."
        varchar ENTITLEMENT_ACCOUNT_NATIVE_ID "Account native ID"
        varchar CLOUD_PROVIDER "Cloud provider of the service the account has access to (AWS|GCP|Azure)"
        varchar CLOUD_SOURCE_DISPLAY_NAME "Cloud native display name of the service source. AWS: Management account, Azure: Tenant, GCP: Org"
        varchar CLOUD_SOURCE_NATIVE_ID "Cloud native ID of the service’s source"
        varchar CLOUD_SUB_SOURCE_DISPLAY_NAME "Cloud native display name of the service sub-source (if applicable). AWS: Managed account, Azure: Subscription, GCP: Project"
        varchar CLOUD_SUB_SOURCE_NATIVE_ID "Cloud native ID of the service’s sub-source (if applicable)"
        varchar SERVICE "Cloud service for which usage is being determined"
        varchar SOURCE_NAME "ISC source name associated with the cloud service"
        array ENTITLEMENT_USAGE "Aggregated usage across all accounts and services for the ENTITLEMENT_VALUE"
    }
    "Resource Access" {
        varchar CIEM_KEY PK "composite key: CLOUD_PROVIDER-SERVICE-ENTITLEMENT_ACCOUNT_NATIVE_IDENTITY-CLOUD_SOURCE_NATIVE_ID-CLOUD_SUB_SOURCE_NATIVE_ID"
        varchar ACCOUNT_NATIVE_IDENTITY "Account native ID"
        varchar ACCESS_LEVEL "The access level(s) the account has to the resource (Read, Write, Admin)"
        varchar ACCOUNT_SOURCE_TYPE "Cloud provider of the account GCP|AWS|Azure|Okta"
        varchar RESOURCE_ACCESS_CLOUD_PROVIDER "Cloud provider of the resource (GCP|AWS|Azure)"
        varchar RESOURCE_ACCESS_CLOUD_SOURCE_NATIVE_ID "Cloud sub-source native ID of the resource’s source (if applicable)"
        varchar RESOURCE_ACCESS_CLOUD_SOURCE_SUB_NATIVE_ID "Cloud provider of the service the account has access to (GCP|AWS|Azure)"
        varchar RESOURCE_ACCOUNT_NAME "Cloud native display name of the resource source. AWS: Account name, Azure: Subscription name, GCP: Project name"
        varchar RESOURCE_ID "Cloud native ID of the resource"
        varchar RESOURCE_NAME "Human readable name of the resource (if available)"
        varchar RESOURCE_TYPE "Resource type, derived from the cloud API response types"
        varchar RESOURCE_ACCESS_SERVICE "Cloud service associated with the resource"
        varchar RESOURCE_ACCESS_SOURCE_NAME "ISC source name associated with the resource"
    }
    ENTITLEMENT {
        varchar ENTITLEMENT_VALUE "ISC entitlement value associated with the access. Usually the cloud native ID."
        varchar _PK_ PK "Primary key, constructed as tenantID concatenated with the entitlement UUID"
        varchar ENTITLEMENT_ATTRIBUTE "Entitlement type as determined by ISC sources"
        varchar ENTITLEMENT_DISPLAY_NAME "Human readable name of the entitlement as constructed by ISC"
        timestamp ENTITLEMENT_SYNC_DATE "Timestamp of latest sync of entitlement to source tables"
    }
    IDENTITY {
        varchar IDENTITY_ID PK "Unique identifier of the identity"
        timestamp IDENTITY_CREATED "Identity created date in ISC"
        timestamp IDENTITY_UPDATED "Identity modified date in ISC"
        varchar IDENTITY_NAME "Name of the identity"
        varchar IDENTITY_DISPLAY_NAME "User friendly label for the identity. Usually First Name Last Name."
        varchar IDENTITY_MANAGERS_NAME "Name of the manager of the identity"
        varchar IDENTITY_EMAIL "Email of the identity"
        varchar LIFECYCLE_STATE "Lifecycle state of the identity"
        varchar IDENTITY_JOB_TITLE "Job title of the identity"
        varchar IDENTITY_LOCATION "Location of the identity"
        varchar IDENTITY_LOCATION_CODE "Location code of the identity"
        varchar IDENTITY_DEPARTMENT "Department of the identity"
        timestamp IDENTITY_SYNC_DATE "Timestamp of latest sync of identity to source tables"
    }
    ACCOUNT {
        varchar ACCOUNT_NATIVE_IDENTITY "Cloud native ID of account"
        varchar IDENTITY_ID "ISC unique identifier of the identity correlated with the account (null if uncorrelated)"
        varchar ACCOUNT_ID PK "ISC unique identifier of account"
        varchar ACCOUNT_NAME "Name of account as configured in ISC"
        varchar ACCOUNT_CREATED_DATE "Account creation date (ingestion/creation in ISC)"
        varchar ACCOUNT_UPDATED_DATE "Account update date (updated in ISC)"
        varchar ACCOUNT_DISPLAY_NAME "Display name of account as configured in ISC"
        varchar ACCOUNT_STATUS "Status of account (Enabled|Disabled|Locked)"
        varchar ACCOUNT_SYNC_DATE "Timestamp of latest sync of record to source tables"
    }
    IDENTITY ||--o{ ACCOUNT : "associated to"
    ACCOUNT ||--o{ "Resource Access" : "associated to"
    "Resource Access" }o--o{ "Entitlement Service Usage": "associated to"
    "Entitlement Service Usage" }o--|| ENTITLEMENT : "associated to"'></MermaidViewer>
