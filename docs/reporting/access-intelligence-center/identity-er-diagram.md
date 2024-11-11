---
id: access-intelligence-center-er-diagram
title: Access Intelligence Center ER Diagram
pagination_label: Access Intelligence Center ER Diagram
sidebar_label: Entity Relationship Diagram
sidebar_position: 1
sidebar_class_name: AccessIntelligenceCenter
keywords: ['data listing', 'data share', 'secure data sharing']
description: Access Intelligence Center ER Diagram
slug: /reporting/aic-er-diagram
tags: ['AccessIntelligenceCenter', 'AIC']
hide_table_of_contents: true
---

import MermaidViewer from '@site/src/components/MermaidViewer';

# Access Intelligence Center ER Diagram

<!-- Identity Attributes are to be worked on later because there are no current default values -->

<MermaidViewer diagram='erDiagram
    IDENTITY_ATRIBUTE {
        varchar IDENTITY_ID "This contains the unique identifier for the identity"
        varchar City "Identity’s City"
        varchar Cloud_Lifecycle_State "Identity’s Cloud Lifecycle State"
        varchar Company "Identity Company"
        varchar CompanyName "Identity CompanyName"
        varchar Cost_Center "Identity Cost Center"
        varchar Country "Identity Country"
        varchar Department "Identity Department"
        varchar Job "Identity Job"
        varchar Location "Identity Location"
        varchar Postal_Code "Identity Postal Code"
        varchar Region "Identity Region"
        varchar State "Identity State"
        varchar Title "Identity Title"
    }
    IDENTITY_ROLES_FULL {
        varchar IDENTITY_ID "This is the unique identifier for the Identity"
        varchar ROLE_ID "This is the unique identifier for the Role"
        varchar ROLE_NAME "This is the human-readable name of the Role"
        varchar ROLE_DISPLAY_NAME "This is the user friendly label for the Role"
    }
    IDENTITY {
        varchar ID PK "This is the primary key"
        varchar TENANT_ID "This is the unique identifier of customer organization"
        varchar IDENTITY_ID "This is the unique identifier for the Identity"
        timestamp IDENTITY_CREATED "This is the Identity created date"
        timestamp IDENTITY_UPDATED "This is the Identity modified date"
        varchar NAME "This is the human-readable name of the Identity"
        varchar DISPLAY_NAME "This is the user friendly label for the Identity; usually First Name Last Name"
        varchar MANAGERS_NAME "This is the managers name for the Identity"
        varchar EMAIL "This is the Identity email"
        varchar STATUS "This is the Identity status"
        varchar JOB_TITLE "This is the Identity job title"
        varchar LOCATION "This is the Identity location"
        varchar LOCATION_CODE "This is the Identity location code"
        varchar DEPARTMENT "This is the Identity department"
        varchar IDENTITY_CREATED_MONTH_SORT "This is the field to sort charts based on the month an Identity was created"
        number IDENTITY_CREATED_WEEK_SORT "This is the field to sort charts based on the week an Identity was created"
        timestamp SYNC_DATE "This is the date the data was synced to the table"
    }
    ACCESS_PROFILES_FULL {
        varchar IDENTITY_ID "This is the unique identifier for the Identity"
        varchar ACCESS_PROFILE_ID "This is the unique identifier for Access Profile"
        varchar ACCESS_PROFILE_NAME "This is the human-readable name of the Access Profile"
        varchar ACCESS_PROFILE_DISPLAY_NAME "This is the user friendly label for the Access Profile"
        varchar ACCESS_PROFILE_DESCRIPTION "This is a short description for the Access Profile"
    }
    IDENTITY_ACCOUNTS_FULL {
        varchar IDENTITY_ID "This is the unique identifier for the Identity"
        varchar ACCOUNT_ID "This is the unique identifier for the Account"
        varchar NATIVE_IDENTITY "This is the name of the native Identity"
        varchar ACCOUNT_DISPLAY_NAME "This is the user friendly label for the Account"
        varchar ACCOUNT_SOURCE_ID "This is the unique identifier for the Account source"
        varchar ACCOUNT_SOURCE__DISPLAY_NAME "This is the user friendly label for the Account source"
        varchar ACCOUNT_SOURCE_TYPE "This is the type of the Account source"
    }
    IDENTITY_APPS_FULL {
        varchar IDENTITY_ID "This is the unique identifier for the Identity"
        varchar APP_ID "This is the unique identifier for the App"
        varchar APP_DISPLAY_NAME "This is the user friendly label for the App"
    }
    IDENTITY_ENTITLEMENTS_FULL {
        varchar IDENTITY_ID "This is the unique identifier for the Identity"
        varchar ENTITLEMENT_ID "This is the unique identifier for the Entitlement"
        varchar ENTITLEMENT_DISPLAY_NAME "This is the user friendly label for the Entitlement"
        timestamp ENTITLEMENT_CREATED_DATE "This is the Entitlement created date"
        timestamp ENTITLEMENT_UPDATED_DATE "This is the Entitlement modified date"
        varchar ENTITLEMENT_ATTRIBUTE "This is the attribute associated with the Entitlement"
        varchar ENTITLEMENT_VALUE "This is the actual value of the attribute associated with the Entitlement"
        varchar ENTITLEMENT_SOURCE_DISPLAY_NAME "This is the user friendly label for the Entitlement source"
    }   
    ACCESS_REQUEST_DURATION {
        varchar IDENTITY_ID "This is the unique identifier for the Identity"
        varchar DURATION_HOURS "This is the duration in hours from the create date to the end date of an Identity Access Request"
    } 
    CERTIFICATION_STATS {
        varchar CERTIFICATION_ID "This is the unique identifier for the Certification"
        timestamp DUE_DATE "This is the date a Certification is due"
        timestamp FINISHED_DATE "This is the date a Certification was completed"
        number DAYS_LATE "This is the number of days after the due date that a Certification was completed"
        number HOURS_LATE "This is the number of hours after the due date that a Certification was completed"
        varchar CERTIFIER_DISPLAY_NAME "This is the user friendly label for the Certifier"
    }   
    CERTIFICATION_ITEM {
        varchar CERTIFICATION_ID "This is the unique identifier for the Certification"
        varchar REVIEWER_ID "This is the Identity ID of the Certifier"
        varchar IDENTITY_ID "This is the unique identifier for the Identity"
        varchar ID "This is the unique identifier for the Certification Item"
        timestamp CREATED_DATE "This is the date a Certification Item was created"
        timestamp UPDATED_DATE "This is the date a Certification Item was last updated"
        timestamp DELETED_DATE "This is the date a Certification Item was deleted"
        varchar APPLICATION_ID "This is the unique identifier for the Application"
        varchar REVIEWED_ID "This is the unique identifier of the reviewed Identity"
        varchar REVIEWED_TYPE "This is the reviewed element of the Certification"
        varchar TYPE "This contains the type of the Certification Item, if any"
        varchar SUB_TYPE "This contains the sub type of the Certification Item, if any"
        timestamp COMPLETED_DATE "This is the date a Certification Item is completed"
        timestamp DECISION_DATE "This is the date a Certification Item reaches a decision"
        varchar APPROVED "This is the date a Certification Item is approved"
        varchar CERTIFICATION_ITEM_STATUS "This is the status of the Certification Item"
        varchar DECISION "This is the decision made on the Certification Item"
        varchar BULK "This is the bulk nature of the Certification Item"
        varchar REMEDIATED "This tells if the Certification Item was remediated or not"
        varchar PRIVILEGED "This tells if the Certification Item was privileged or not"
        varchar REMEDIATION_ACTION "This is the remediated action on the Certification Item"
        varchar MITIGATION_EXPIRATION "This shows if the mitigation for the Certification Item has expired or not"
        varchar INSTANCE "This is the instance of the Certifier Item"
        varchar ACCOUNT_ONLY "This tells if the Cerification Item is account_only or not"
        varchar NEW_ACCESS "This tells if the Cerification Item has new_access properties"
        varchar POLICY_NAME "This is the name of the policy associated with the Cerification Item"
        varchar CONSTRAINT_NAME "This shows constraints associated with the Cerification Item"
        timestamp SYNC_DATE "This is the date the data was synced to the table"
    } 
    CERTIFICATION_IDENTITY_FULL {
        varchar CERT_ID "This is the unique identifier for the Certification"
        varchar NAME "This is the human-readable name of the Certification"
        varchar ORIGINAL_CERTIFICATION_ID "This is the original unique identifier of the Certification"
        varchar CERTIFICATION_CAMPAIGN_ID "This is the unique identifier of a Certification campaign"
        varchar CERTIFICATION_CAMPAIGN_STATUS "This is the status of a Certification campaign"
        varchar CERTIFICATION_CAMPAIGN_DEADLINE "This is the deadline of a Certification ampaign"
        varchar CERTIFICATION_CAMPAIGN_TYPE "This is the type of a Certification campaign"
        varchar SIGNER_ID "This is the unique Identity ID of the signer of a Certification"
        varchar MANAGER_ID "This is the unique Identity ID for the manager of a Certification"
        varchar CERTIFIER_ID "This is the unique Identity ID for the certifier of a Certification"
        boolean REJECTED "This is a boolean value for the rejection status of a Certification"
    } 
    IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL {
        varchar IDENTITY_REQUEST_ITEM_APPROVER_ID "This is the unique Identity ID of the Identity Request approver"
        varchar IDENTITY_REQUEST_ITEM_REQUEST_ID "This is the unique Identity Item Request id"
        varchar IDENTITY_REQUEST_ITEM_REQUESTER_ID "This is the unique Identity ID of the Identity Request requester"
        varchar IDENTITY_ID "This is the unique identifier for the target Identity"
        varchar IDENTITY_REQUEST_ITEM_ID "This is the unique identifier for the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_INSTANCE "This is the instance name of the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_NATIVE_IDENTITY "This is the native identity name for the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_DISPLAY_NAME "The human-readable name for the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_NAME "This is the name for the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_VALUE "This is the value of the identity request item"
        varchar IDENTITY_REQUEST_ITEM_ANNOTATION "This is the annotation of the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_OPERATION "This is the operation of the Identity Request Item"
        timestamp IDENTITY_REQUEST_ITEM_START_DATE "This is the date the Identity Request Item started"
        timestamp IDENTITY_REQUEST_ITEM_END_DATE "This is the date of the identity request item ended"
        varchar IDENTITY_REQUEST_ITEM_APPROVED "This is the approved of the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_REJECTED "This is the rejected of the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_PROVISIONING_STATE "This is the state of the Identity Request Item provisioning"
        varchar IDENTITY_REQUEST_ITEM_COMPILATION_STATUS "This is the status of the Identity Request Item compilation"
        varchar IDENTITY_REQUEST_ITEM_EXPANSION_CAUSE "This is the cause of the Identity Request Item expansion"
        number IDENTITY_REQUEST_ITEM_RETRIES "This is the retries of the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_PROVISIONING_ENGINE "This is the engine of the Identity Request Item provisioning"
        timestamp IDENTITY_REQUEST_ITEM_CREATED_DATE "This is the date of the Identity Request Item created"
        varchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_ID "This is the id of the Identity Request Item access request"
        varchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_TYPE "This is the type of the Identity Request Item access request"
        timestamp IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_CREATED_DATE "This is the date of the Identity Request Item access request created"
        timestamp IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_END_DATE "This is the date of the Identity Request Item access request end"
        varchar IDENTITY_REQUEST_ITEM_EXECUTION_STATUS "This is the status of the eIdentity Request Item execution"
        varchar IDENTITY_REQUEST_ITEM_COMPLETION_STATUS "This is the status of the Identity Request Item completion"
        varchar IDENTITY_REQUEST_ITEM_PRIORITY "This is the priority of the Identity Request Item"
        varchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_REQUESTER "This is the requester of the Identity Request Item access request"
        varchar IDENTITY_REQUEST_ITEM_APP_ID "This is the id of the Identity Request Item app"
        varchar IDENTITY_REQUEST_ITEM_APP_DISPLAY_NAME "This is the name of the Identity Request Item app display"
        timestamp IDENTITY_REQUEST_ITEM_REQUESTER_CREATED_DATE "This is the date of the Identity Request Item requester created"
        timestamp IDENTITY_REQUEST_ITEM_REQUESTER_UPDATE_DATE "This is the date of the Identity Request Item requester update"
        varchar IDENTITY_REQUEST_ITEM_TARGET_DISPLAY_NAME "This is the name of the Identity Request Item target display"
        timestamp IDENTITY_REQUEST_ITEM_TARGET_CREATED_DATE "This is the date of the Identity Request Item target created"
        timestamp IDENTITY_REQUEST_ITEM_TARGET_UPDATE_DATE "This is the date of the Identity Request Item target update"
        timestamp IDENTITY_REQUEST_ITEM_APPROVER_CREATED_DATE "This is the date of the Identity Request Item approver created"
        timestamp IDENTITY_REQUEST_ITEM_APPROVER_UPDATED_DATE "This is the date of the Identity Request Item approver updated"
        varchar IDENTITY_REQUEST_ITEM_APPROVER_DISPLAY_NAME "This is the name of the Identity Request Item approver display"
        varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_ID "This is the id of the Identity Request Item entitlement"
        varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_VALUE "This is the value of the Identity Request Item entitlement"
        varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_DISPLAY_NAME "This is the name of the Identity Request Item entitlement display"
        varchar IDENTITY_REQUEST_ITEM_ROLE_ID "This is the id of the Identity Request Item role"
        varchar IDENTITY_REQUEST_ITEM_ROLE_NAME "This is the name of the Identity Request Item role"
        varchar IDENTITY_REQUEST_ITEM_ROLE_DISPLAY_NAME "This is the name of the Identity Request Item role display"
    } 
    IDENTITY_ITEM_APPROVER {
        varchar IDENTITY_REQUEST_ITEM_APPROVER_ID "This is the unique Identity ID of the Identity Request Approver",
        timestamp APPROVER_IDENTITY_CREATED "This is the date that the Identity Item Approver was created",
        timestamp APPROVER_IDENTITY_UPDATED "This is the date that the Identity Item Approver was updated",
        varchar APPROVER_NAME "This is the name for the Identity Item Approver",
        varchar APPROVER_DISPLAY_NAME "The human-readable name for the Identity Item Approver",
        varchar APPROVER_MANAGERS_NAME "The managers name for the Identity Item Approver",
        varchar APPROVER_EMAIL "The email for the Identity Item Approver",
        varchar APPROVER_STATUS "The status of the Identity Item Approver",
        varchar APPROVER_JOB_TITLE "The job title for the Identity Item Approver", 
        varchar APPROVER_LOCATION "The location of the Identity Item Approver", 
        varchar APPROVER_LOCATION_CODE "The location code of the Identity Item Approver", 
        varchar APPROVER_DEPARTMENT "The department of the Identity Item Approver",   
        timestamp APPROVER_SYNC_DATE "This is the date the data was synced to the table"
    }
    IDENTITY_ITEM_REQUESTER {
        varchar IDENTITY_REQUEST_ITEM_REQUESTER_ID "This is the unique Identity ID of the Identity Item Requester",
        timestamp REQUESTER_IDENTITY_CREATED "This is the date that the Identity Item Requester was created",
        timestamp REQUESTER_IDENTITY_UPDATED "This is the date that the Identity Item Requester was updated",
        varchar REQUESTER_NAME "This is the name for the Identity Item Requester",
        varchar REQUESTER_DISPLAY_NAME "The human-readable name for the Identity Item Requester",
        varchar REQUESTER_MANAGERS_NAME "The managers name for the Identity Item Requester",
        varchar REQUESTER_EMAIL "The email for the Identity Item Requester",
        varchar REQUESTER_STATUS "The status of the Identity Item Requester",
        varchar REQUESTER_JOB_TITLE "The job title for the Identity Item Requester", 
        varchar REQUESTER_LOCATION "The location of the Identity Item Requester", 
        varchar REQUESTER_LOCATION_CODE "The location code of the Identity Item Requester", 
        varchar REQUESTER_DEPARTMENT "The department of the Identity Item Requester",   
        timestamp REQUESTER_SYNC_DATE "This is the date the data was synced to the table"
    }
    CERTIFICATION_ITEM_REVIEWER {
        varchar REVIEWER_ID "This is the unique Identity ID of the Identity Certification Item Reviewer",
        timestamp REVIEWER_IDENTITY_CREATED "This is the date that the Identity Certification Item Reviewer was created",
        timestamp REVIEWER_IDENTITY_UPDATED "This is the date that the Identity Certification Item Reviewer was updated",
        varchar REVIEWER_NAME "This is the name for the Identity Certification Item Reviewer",
        varchar REVIEWER_DISPLAY_NAME "The human-readable name for the Identity Certification Item Reviewer",
        varchar REVIEWER_MANAGERS_NAME "The managers name for the Identity Certification Item Reviewer",
        varchar REVIEWER_EMAIL "The email for the Identity Certification Item Reviewer",
        varchar REVIEWER_STATUS "The status of the Identity Certification Item Reviewer",
        varchar REVIEWER_JOB_TITLE "The job title for the Identity Certification Item Reviewer", 
        varchar REVIEWER_LOCATION "The location of the Identity Certification Item Reviewer", 
        varchar REVIEWER_LOCATION_CODE "The location code of the Identity Certification Item Reviewer", 
        varchar REVIEWER_DEPARTMENT "The department of the Identity Certification Item Reviewer",   
        timestamp REVIEWER_SYNC_DATE "This is the date the data was synced to the table"
    }
    CERTIFICATION_CERTIFIER {
        varchar CERTIFICATION_CERTIFIER_ID "This is the unique Identity ID of the Identity Certification Certifier",
        timestamp CERTIFICATION_CERTIFIER_IDENTITY_CREATED "This is the date that the Identity Certification Certifier was created",
        timestamp CERTIFICATION_CERTIFIER_IDENTITY_UPDATED "This is the date that the Identity Certification Certifier was updated",
        varchar CERTIFICATION_CERTIFIER_NAME "This is the name for the Identity Certification Certifier",
        varchar CERTIFICATION_CERTIFIER_DISPLAY_NAME "The human-readable name for the Identity Certification Certifier",
        varchar CERTIFICATION_CERTIFIER_MANAGERS_NAME "The managers name for the Identity Certification Certifier",
        varchar CERTIFICATION_CERTIFIER_EMAIL "The email for the Identity Certification Certifier",
        varchar CERTIFICATION_CERTIFIER_STATUS "The status of the Identity Certification Certifier",
        varchar CERTIFICATION_CERTIFIER_JOB_TITLE "The job title for the Identity Certification Certifier", 
        varchar CERTIFICATION_CERTIFIER_LOCATION "The location of the Identity Certification Certifier", 
        varchar CERTIFICATION_CERTIFIER_LOCATION_CODE "The location code of the Identity Certification Certifier", 
        varchar CERTIFICATION_CERTIFIER_DEPARTMENT "The department of the Identity Certification Certifier",   
        timestamp CERTIFICATION_CERTIFIER_SYNC_DATE "This is the date the data was synced to the table"
    }
    CERTIFICATION_MANAGER {
        varchar CERTIFICATION_MANAGER_ID "This is the unique Identity ID of the Identity Certification Manager",
        timestamp CERTIFICATION_MANAGER_IDENTITY_CREATED "This is the date that the Identity Certification Manager was created",
        timestamp CERTIFICATION_MANAGER_IDENTITY_UPDATED "This is the date that the Identity Certification Manager was updated",
        varchar CERTIFICATION_MANAGER_NAME "This is the name for the Identity Certification Manager",
        varchar CERTIFICATION_MANAGER_DISPLAY_NAME "The human-readable name for the Identity Certification Manager",
        varchar CERTIFICATION_MANAGER_MANAGERS_NAME "The managers name for the Identity Certification Manager",
        varchar CERTIFICATION_MANAGER_EMAIL "The email for the Identity Certification Manager",
        varchar CERTIFICATION_MANAGER_STATUS "The status of the Identity Certification Manager",
        varchar CERTIFICATION_MANAGER_JOB_TITLE "The job title for the Identity Certification Manager", 
        varchar CERTIFICATION_MANAGER_LOCATION "The location of the Identity Certification Manager", 
        varchar CERTIFICATION_MANAGER_LOCATION_CODE "The location code of the Identity Certification Manager", 
        varchar CERTIFICATION_MANAGER_DEPARTMENT "The department of the Identity Certification Manager",   
        timestamp CERTIFICATION_MANAGER_SYNC_DATE "This is the date the data was synced to the table"
    }
    CERTIFICATION_SIGNER {
        varchar CERTIFICATION_SIGNER_ID "This is the unique Identity ID of the Identity Certification Signer",
        timestamp CERTIFICATION_SIGNER_IDENTITY_CREATED "This is the date that the Identity Certification Signer was created",
        timestamp CERTIFICATION_SIGNER_IDENTITY_UPDATED "This is the date that the Identity Certification Signer was updated",
        varchar CERTIFICATION_SIGNER_NAME "This is the name for the Identity Certification Signer",
        varchar CERTIFICATION_SIGNER_DISPLAY_NAME "The human-readable name for the Identity Certification Signer",
        varchar CERTIFICATION_SIGNER_MANAGERS_NAME "The managers name for the Identity Certification Signer",
        varchar CERTIFICATION_SIGNER_EMAIL "The email for the Identity Certification Signer",
        varchar CERTIFICATION_SIGNER_STATUS "The status of the Identity Certification Signer",
        varchar CERTIFICATION_SIGNER_JOB_TITLE "The job title for the Identity Certification Signer", 
        varchar CERTIFICATION_SIGNER_LOCATION "The location of the Identity Certification Signer", 
        varchar CERTIFICATION_SIGNER_LOCATION_CODE "The location code of the Identity Certification Signer", 
        varchar CERTIFICATION_SIGNER_DEPARTMENT "The department of the Identity Certification Signer",   
        timestamp CERTIFICATION_SIGNER_SYNC_DATE "This is the date the data was synced to the table"
    }
    IDENTITY ||--o{ IDENTITY_ATRIBUTE : "associated to and owns"
    IDENTITY ||--o{ IDENTITY_ROLES_FULL : "associated to and owns"
    IDENTITY ||--o{ ACCESS_PROFILES_FULL: "associated to and owns"
    IDENTITY ||--o{ IDENTITY_ACCOUNTS_FULL : "associated to and owns"
    IDENTITY ||--o{ IDENTITY_APPS_FULL : "associated to and owns"
    IDENTITY ||--o{ IDENTITY_ENTITLEMENTS_FULL : "associated to and owns"
    IDENTITY ||--o{ CERTIFICATION_ITEM : "associated to and owns"
    CERTIFICATION_ITEM ||--o{ CERTIFICATION_STATS : "associated to and owns"
    CERTIFICATION_ITEM ||--o{ CERTIFICATION_IDENTITY_FULL : "associated to and owns"
    IDENTITY ||--o{ IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL : "associated to and owns"
    IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL ||--o{ IDENTITY_REQUEST_WITH_DURATION : "associated to and owns"'></MermaidViewer>
