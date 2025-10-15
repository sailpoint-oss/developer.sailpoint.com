---
id: aic-das-er-diagram
title: Access Intelligence Center DAS ER Diagram
pagination_label: Access Intelligence Center DAS ER Diagram
sidebar_label: DAS Entity Relationship Diagram
sidebar_position: 5
sidebar_class_name: AccessIntelligenceCenter
keywords: ['data listing', 'data share', 'secure data sharing']
description: Access Intelligence Center DAS ER Diagram
slug: /reporting/aic-das-er-diagram
tags: ['AccessIntelligenceCenter', 'AIC', 'DAS']
hide_table_of_contents: true
---

import MermaidViewer from '@site/src/components/MermaidViewer';

# Access Intelligence Center DAS ER Diagram

<!-- Identity Attributes are to be worked on later because there are no current default values -->

<MermaidViewer diagram='erDiagram
    "ACCOUNTS" {
        varchar USER_IDN_ID "This is the unique IDN id for the user"
        int USER_ID "This is the unique identifier for the account user"
        int ACCOUNT_BAM_ID "This is the account BAM identifier"
        varchar SOURCE_IDN_ID " This is the IDN source identifier"     
        varchar DEPARTMENT "This is the department associated with the account"
        varchar USER_NAME "This is the user name associated with the account"
        varchar USER_DISPLAY_NAME "This is the human friendly label for the user associated with the account"
        boolean USER_LOCKED "This shows if the user is locked or not"
        varchar USER_DOMAIN "This is the domain associated with the account"
        boolean USER_DISABLED "This shows is the user is disables or not"
        boolean USER_PASSWORD_NEVER_EXPIRES "This shows if the password never expires"
        boolean USER_PASSWORD_NOT_REQUIRED "This shows if the user requires a password or not"
        varchar USER_UID "This is the unique identifier for the user"
        varchar SOURCE_DB "This shows the soure db connection"
        varchar RA_ENTITY_TYPE_NAME "This is the name of the ra entity type"
        boolean EXTERNAL_ACCOUNTS "This shows if the accounts are external or not"
        timestamp TENANT_USER_SYNC_DATE "This is the date the account data was synced to the table"
        boolean NO_GROUP "This shows if the account is not in any group"
    }
    "USER_ACLS_WITH_HIERARCHY" {
        int USER_ID "This is the unique identifier for the user"
        int PERMISSION_TYPE_ID "This is the permission type identifier"
    }
    "PERMISSION_TYPE_LIVE" {
        int PERMISSION_TYPE_ID "This is the permission type identifier"
        varchar PERMISSION_TYPE_NAME "This is the name of the live permission type"
        boolean IS_SHARE "This shows if the user is sharable or not"
        timestamp PERMISSION_TYPE_SYNC_DATE "This is the date the permission type data was synced to the table"
    }
    "USER_ROLE_WITH_HIERARCHY" {
        int USER_ID "This is the unique identifier for the user"
        int ROLE_ID "This is the unique identifier for the role"
        timestamp USER_ROLE_HIERARCHY_SYNC_DATE "This is the date the data was synced to the table"
    }
    "ROLES" {
        int ROLE_ID PK "This is the unique identifier for the role"
        int GROUP_BAM_ID "This is the group BAM identifier"
        varchar ROLE_NAME "This is the human-readable name of the role"   
        varchar ROLE_DOMAIN "This is the domain associated with the role"
        varchar ROLE_IDN_ID "This is the unique IDN id for the role"
        int CONTAINS_ALL_USERS_TYPE "This shows the number of user types associated with the role"
        int USERS_COUNT_LESS_EXCLUSIONS "This is the number of user count less exclusions associated with the role"
        int USERS_PERCENTAGE "This is the user percentage associated with the role"
        int RA_ROLES_COLLECTOR_ID "This is the roles collector identifier"
        boolean CREATES_LOOP "This shows if the role creates a loop or not"
        int TOTAL_USERS_COUNT "This shoes the number of users associated with the role"
        timestamp ROLES_SYNC_DATE "This is the date the role data was synced to the table"
    }
    "ROLE_WITH_CHILDREN_HIERARCHY" {
        int ROLE_ID PK "This is the unique identifier for the role"
        int CHILD_ROLE_ID "This is the unique identifier for the child role"
        varchar ROLE_PATH "This is the path of the role"   
        boolean NESTED_ENTITLEMENT "This shows if the role is associated with nested entitlement or not"   
    }
    "USER_APPLICATIONS" {
        int USER_ID "This is the unique identifier for the user"
        int USER_APPLICATION "This is application associated with the user"
    }
    "USER_PERMISSION" {
        int ACL_ID PK "This is the unique identifier for the acl"
        int USER_ID PK "This is the unique identifier for the user"
        int USER_BR_PERMISSION_ID "This is the unique identifier for the user br permission" 
        varchar PERMISSION_KEY "This is the user permission key"
        int RA_PERMISSION_TYPE_ID "This is the unique identifier for the permission type"
        timestamp USER_PERMISSION_SYNC_DATE "This is the date the user permission data was synced to the table"
    }
    "ROLE_BR_PERMISSION" {
        int ACL_ID PK "This is the unique identifier for the acl associated with the role"
        int ROLE_BR_PERMISSION_ID "This is the unique identifier for the role br permission" 
        int RA_ROLE_ID "This is the unique identifier for the role"
        int ROLE_PERMISSION_TYPE_ID "This is the unique identifier for the permission type associated with the role"
        timestamp ROLE_PERMISSION_SYNC_DATE "This is the date the role permission data was synced to the table"
    }
    "BUSINESS_SERVICE_LIVE" {
        int BR_ID PK "This is the unique identifier for the BR"
        int ACL_ID PK "This is the unique identifier for the ACL associated with the role"
        int PARENT_BAM_ID "This is the parent BAM identifier"
        boolean Sensitive_Resource "This shows if the business service is sensitive or not"
        varchar Application_Name "This is the name of the application"
        varchar Critical_Resource_Name "This is critical resource name"
        varchar NAME "This is the name associated with the business service"
        varchar FULL_PATH "This is the full path of the business service"
        boolean SOFT_DELETE "This shows if the business live service was soft deleted or not"
        boolean HARD_DELETE "This shows if the business live service was hard deleted or not"
        int PARENT_BR_ID "This is the unique identifier for the parent"
        int BUSINESS_SERVICE_ID "This is the unique identifier for the business service"
        timestamp BUSINESS_SERVICE_LIVE_SYNC_DATE "This is the date the live business service data was synced to the table"
    }
    BAM_LIVE {
        int PARENT_BAM_ID PK "This is the parent BAM identifier"
        int BAM_TYPE_ID "This is the BAM type identifier"
        varchar BAM_NAME "This is the name of the BAM"
        timestamp BAM_SYNC_DATE "This is the date the BAM data was synced to the table"
    }
    SENSITIVE_FILES {
        int BR_ID FK "This is the unique identifier for the BR"
        int DC_ID_S "This is the unique identifier for the DC"
        varchar FILE_NAME_S "This is the name of the file"
        varchar SENSITIVE_FILES "This is the name of the sensitive file"
    }
    DATA_CLASSIFICATION {
        int POLICY_ID FK "This is the unique identifier for the policy"
        int DATA_CLASSIFICATION_ID PK "This is the unique identifier for the DC"
        int RULE_ID PK "This is the unique identifier for the DC rule"
        int BR_ID PK "This is the unique identifier for the BR"
        timestamp DATA_CLASSIFICATION_SYNC_DATE "This is the date the DC data was synced to the table"
    }
    POLICY {
        int POLICY_ID PK "This is the unique identifier for the policy"
        varchar POLICY_NAME "This is the name of the policy"
        boolean POLICY_IS_ACTIVE "This shows if the policy is active or not"
        boolean POLICY_IS_INTERNAL "This shows if the policy is internal or not"
        timestamp POLICY_SYNC_DATE "This is the date the policy data was synced to the table"
        boolean POLICY_DELETED "This shows if the policy is deleted or not"
    }
    DATA_CLASS_FILES {
        int DATA_CLASSIFICATION_ID PK "This is the unique identifier for the DC"
        int DCF_ID "This is the unique identifier for the DCF"
        varchar FILE_NAME "This is the name of the data class file"
        int MATCH_COUNT "This shows the number of matches"
        timestamp DATA_CLASSIFICATION_RESULTS_FILES_SYNC_DATE "This is the date the data classification data was synced to the table"
    }
    DC_POLICY_RULE_CATEGORY {
        int CATEGORY_ID FK "This is the unique identifier for the category"
        int RULE_ID PK "This is the unique identifier for the DC rule"
        timestamp POLICY_RULE_SYNC_DATE "This is the date the policy-rule data was synced to the table"
    }
    DATA_CLASSIFICATION_CATEGORY {
        int CATEGORY_ID PK "This is the unique identifier for the category"
        varchar DATA_CLASSIFICATION_CATEGORY_NAME "This is the name od the DC category"
        int SENSITIVITY_LEVEL "This is the sensitivity level of the DC"
        timestamp DATA_CLASSIFICATION_SYNC_DATE "This is the date the DC category data was synced to the table"
    }
    ACCOUNTS ||--o{ USER_ACLS_WITH_HIERARCHY : "associated to and owns"
    USER_ACLS_WITH_HIERARCHY ||--o{ PERMISSION_TYPE_LIVE : "associated to and owns"
    ACCOUNTS ||--o{ USER_ROLE_WITH_HIERARCHY : "associated to and owns"
    USER_ROLE_WITH_HIERARCHY ||--o{ ROLES : "associated to and owns"
    USER_ROLE_WITH_HIERARCHY ||--o{ ROLE_WITH_CHILDREN_HIERARCHY : "associated to and owns"
    ACCOUNTS ||--o{ USER_APPLICATIONS : "associated to and owns"
    ACCOUNTS ||--o{ USER_PERMISSION : "associated to and owns"
    USER_PERMISSION ||--o{ ROLE_BR_PERMISSION : "associated to and owns"
    USER_PERMISSION ||--o{ BUSINESS_SERVICE_LIVE : "associated to and owns"
    BUSINESS_SERVICE_LIVE ||--o{ BAM_LIVE : "associated to and owns"
    BUSINESS_SERVICE_LIVE ||--o{ SENSITIVE_FILES : "associated to and owns"
    BUSINESS_SERVICE_LIVE ||--o{ DATA_CLASSIFICATION : "associated to and owns"
    DATA_CLASSIFICATION ||--o{ POLICY : "associated to and owns"
    DATA_CLASSIFICATION ||--o{ DATA_CLASS_FILES : "associated to and owns"
    DATA_CLASSIFICATION ||--o{ DC_POLICY_RULE_CATEGORY : "associated to and owns"
    DC_POLICY_RULE_CATEGORY ||--o{ DATA_CLASSIFICATION_CATEGORY : "associated to and owns"'></MermaidViewer>