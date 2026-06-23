---
id: audit-events-reference
title: Audit Events Reference
pagination_label: Audit Events Reference
sidebar_label: Audit Events Reference
sidebar_position: 4
sidebar_class_name: auditEventsReference
keywords: ['audit', 'events', 'search', 'reference', 'event types']
description: Complete reference of all audit event action names and types supported by the ISC Search API.
slug: /guides/audit-events-reference
tags: ['Search', 'Audit', 'Events', 'Reference']
---

## Overview

This page lists every audit event supported by the Identity Security Cloud Search API.

The **Search Field** column tells you which field to use in your query:

- **`action`** — use in a `match` query on the `action` field (most events)
- **`technicalName`** — use in a `match` query on the `technicalName`

See [Searching Audit Events](./searching-audit-events) for query examples.

| Search Value | Search Field | Type in Search | Description |
|--------------|--------------|----------------|-------------|
| ACCESS_APPROVAL_STARTED | action | ACCESS_REQUEST | Access Request Approval Started |
| ACCESS_PROFILE_UPDATE_SEGMENT_ADD_AUDIT | action | ACCESS_PROFILE | Access Profile Audit Event |
| ACCESS_PROFILE_UPDATE_SEGMENT_REMOVE_AUDIT | action | ACCESS_PROFILE | Access Profile Audit Event |
| ACCESS_REQUEST_MULTI_ACCOUNT_FAILED_AUDIT | action | ACCESS_REQUEST | Access Request Multi Account Failed Event |
| ACCESS_REQUEST_ON_BEHALF_OF_SUBMITTED | action | ACCESS_REQUEST | Access Request On Behalf Of Submitted |
| ACCOUNT PRIVILEGE | action | ACCOUNT_PRIVILEGE | Account Privilege Audit Event |
| ACCOUNT_CREATED | action | SOURCE_MANAGEMENT | Native Change Detection Event |
| ACCOUNT_DELETE_CONFIG_UPDATED | action | SOURCE_MANAGEMENT | Account Delete Config Updated Event |
| ACCOUNT_DELETED | action | SOURCE_MANAGEMENT | Native Change Detection Event |
| ACCOUNT_DELETION_REQUEST_COMPLETED | action | SOURCE_MANAGEMENT | Account Request Deletion Event |
| ACCOUNT_DELETION_REQUEST_FAILED | action | SOURCE_MANAGEMENT | Account Request Deletion Event |
| ACCOUNT_DELETION_REQUEST_SUBMITTED | action | SOURCE_MANAGEMENT | Account Request Deletion Event |
| ACCOUNT_PROFILE_CREATED | action | SOURCE_MANAGEMENT | Account Profile Event |
| ACCOUNT_PROFILE_DELETED | action | SOURCE_MANAGEMENT | Account Profile Event |
| ACCOUNT_PROFILE_UPDATED | action | SOURCE_MANAGEMENT | Account Profile Event |
| ACCOUNT_REMOVE_PASSED | action | ACCOUNT_REMOVE | Account Remove Event |
| ACCOUNT_UPDATED | action | SOURCE_MANAGEMENT | Native Change Detection Event |
| ACCOUNTS_REMOVE_FAILED | action | ACCOUNTS_REMOVE | Accounts Remove Event |
| ACCOUNTS_REMOVE_PASSED | action | ACCOUNTS_REMOVE | Accounts Remove Event |
| ACCOUNTS_REMOVE_STARTED | action | ACCOUNTS_REMOVE | Accounts Remove Event |
| ACTIVATE_CAMPAIGN | action | CERTIFICATION | Activate Campaign Event |
| API_CLIENT_CREATED | action | AUTH | Api Client Event |
| API_CLIENT_DELETED | action | AUTH | Api Client Event |
| API_CLIENT_UPDATED | action | AUTH | Api Client Event |
| APPROVAL_CONFIG_UPDATED | action | APPROVAL CONFIG | Approval Request Event |
| APPROVAL_REQUEST_APPROVED | action | APPROVAL REQUEST | Approval Request Event |
| APPROVAL_REQUEST_ASSIGNED | action | APPROVAL REQUEST | Approval Request Event |
| APPROVAL_REQUEST_CANCELLED | action | APPROVAL REQUEST | Approval Request Event |
| APPROVAL_REQUEST_CREATED | action | APPROVAL REQUEST | Approval Request Event |
| APPROVAL_REQUEST_ESCALATED | action | APPROVAL REQUEST | Approval Request Event |
| APPROVAL_REQUEST_REJECTED | action | APPROVAL REQUEST | Approval Request Event |
| APPROVAL_REQUEST_TIMED_OUT | action | APPROVAL REQUEST | Approval Request Event |
| APPROVAL_REQUEST_UPDATED | action | APPROVAL REQUEST | Approval Request Event |
| APPROVAL_SETTINGS_UPDATED | action | MACHINE ACCOUNT SUBTYPE CREATION APPROVAL SETTINGS | Update Machine Account Subtype Creation Config Event |
| AUDIT_DIMENSION_CREATED | action | DIMENSION | Dimension Audit Event |
| AUDIT_DIMENSION_DELETED | action | DIMENSION | Dimension Audit Event |
| AUDIT_DIMENSION_UPDATED | action | DIMENSION | Dimension Audit Event |
| AUDIT_ENTITLEMENT_CREATED | action | LAUNCHER_ENTITLEMENT | Launcher Entitlement Audit Event |
| AUDIT_ENTITLEMENT_DELETED | action | LAUNCHER_ENTITLEMENT | Launcher Entitlement Audit Event |
| AUDIT_ENTITLEMENT_SOURCE_RESET | action | AUDIT_ENTITLEMENT_SOURCE_RESET | Entitlement Source Reset Audit Event |
| AUDIT_ENTITLEMENT_UPDATED | action | AUDIT_ENTITLEMENT_UPDATED | Entitlement Patch Audit Event |
| AUDIT_FORM_DEFINITION_CREATED | action | FORM_DEFINITION | Form Definition Event |
| AUDIT_FORM_DEFINITION_DELETED | action | FORM_DEFINITION | Form Definition Event |
| AUDIT_FORM_DEFINITION_FILE_UPLOAD | action | FORM_DEFINITION | Form Definition Event |
| AUDIT_FORM_DEFINITION_FILES_CLEANUP | action | FORM_DEFINITION | Form Definition Event |
| AUDIT_FORM_DEFINITION_OWNER_UPDATED | action | FORM_DEFINITION | Form Definition Event |
| AUDIT_FORM_DEFINITION_UPDATED | action | FORM_DEFINITION | Form Definition Event |
| AUDIT_FORM_DEFINITION_USED | action | FORM_DEFINITION | Form Definition Event |
| AUDIT_FORM_INSTANCE_CANCELLED | action | FORM_INSTANCE | Form Instance Event |
| AUDIT_FORM_INSTANCE_CREATED | action | FORM_INSTANCE | Form Instance Event |
| AUDIT_FORM_INSTANCE_DELETED | action | FORM_INSTANCE | Form Instance Event |
| AUDIT_FORM_INSTANCE_EXPIRED | action | FORM_INSTANCE | Form Instance Event |
| AUDIT_FORM_INSTANCE_STATE_CHANGE | action | FORM_INSTANCE | Form Instance Event |
| AUDIT_FORM_INSTANCE_SUBMITTED | action | FORM_INSTANCE | Form Instance Event |
| AUDIT_INTERACTIVE_PROCESS_BLOCK_ADDED | action | INTERACTIVE_PROCESS_BLOCK | Interactive Process Block Event |
| AUDIT_INTERACTIVE_PROCESS_COMPLETED | action | INTERACTIVE_PROCESS | Interactive Process Event |
| AUDIT_INTERACTIVE_PROCESS_LAUNCHED | action | INTERACTIVE_PROCESS | Interactive Process Event |
| AUDIT_WORKFLOW_EXECUTION_BLOCKED | action | WORKFLOW | Workflow Event |
| AUDIT_WORKFLOW_EXECUTION_UNBLOCKED | action | WORKFLOW | Workflow Event |
| AUTH_SUPPORT_LOGIN_CREATED | action | AUTH | Auth Support Login Event |
| AUTH_SUPPORT_LOGIN_DELETED | action | AUTH | Auth Support Login Event |
| AUTH_SUPPORT_LOGIN_EXPIRED | action | AUTH | Auth Support Login Event |
| AUTH_SUPPORT_LOGIN_UPDATED | action | AUTH | Auth Support Login Event |
| AUTH_USER_PASSWORD_UPDATE | action | AUTH | User Password Event |
| AUTOMATIC_WORKITEM_REASSIGNMENT | action | CERTIFICATION | CMS Automatic WorkItem Event |
| CAMPAIGN_FILTER | action | CERTIFICATION | Certification Event |
| CAPABILITY_UPDATE_EVENT | action | USER_MANAGEMENT | Capability Update Event |
| CERTIFICATION_CAMPAIGN | action | CERTIFICATION | Certification Event |
| CERTIFICATION_SIGN_OFF | action | CERTIFICATION | Certification SignOff Event |
| CIEM_ACTIVITY_COLLECTION_ERROR | action | CIEM_ACTIVITY_COLLECTION | CIEM Activity Collection Event |
| CIEM_ACTIVITY_COLLECTION_SUCCESS | action | CIEM_ACTIVITY_COLLECTION | CIEM Activity Collection Event |
| CIEM_INVENTORY_COLLECTION_ERROR | action | CIEM_INVENTORY_COLLECTION | CIEM Inventory Collection Event |
| CIEM_INVENTORY_COLLECTION_SKIPPED | action | CIEM_INVENTORY_COLLECTION | CIEM Inventory Collection Event |
| CIEM_INVENTORY_COLLECTION_SUCCESS | action | CIEM_INVENTORY_COLLECTION | CIEM Inventory Collection Event |
| CIEM_TEST_CONNECTION_ERROR | action | CIEM_TEST_CONNECTION | CIEM Test Connection Event |
| CIEM_TEST_CONNECTION_SUCCESS | action | CIEM_TEST_CONNECTION | CIEM Test Connection Event |
| CLOSE_IDENTITY_REQUESTS_COMPLETED | action | PROVISIONING | Identity Request Batch Close |
| CLOSE_IDENTITY_REQUESTS_STARTED | action | PROVISIONING | Identity Request Batch Close |
| COMPLETE_CAMPAIGN | action | CERTIFICATION | Complete Campaign Event |
| CONFIG_HUB_CONNECTION_CREATE | action | CONFIG_HUB | Config Hub Connection Audit Event |
| CONFIG_HUB_CONNECTION_DELETE | action | CONFIG_HUB | Config Hub Connection Audit Event |
| CONFIG_HUB_DEPLOY | action | CONFIG_HUB | Config Hub Audit Event |
| CONFIG_HUB_SCHEDULED_ACTION_CREATE | action | CONFIG_HUB | Config Hub Scheduled Audit Event |
| CONFIG_HUB_SCHEDULED_ACTION_DELETE | action | CONFIG_HUB | Config Hub Scheduled Audit Event |
| CONFIG_HUB_SCHEDULED_ACTION_UPDATE | action | CONFIG_HUB | Config Hub Scheduled Audit Event |
| CORE_MODELS_CHANGE | action | NON_EMPLOYEE | NE Generic Auditable Change |
| CORRELATION_CONFIG_UPDATED | action | CORRELATION_CONFIG_UPDATED | Correlation config update event |
| Create Access Model Metadata Attribute Passed | action | AMM_ATTRIBUTE | AMM Attribute Audit Event |
| Create Access Model Metadata Attribute Value Passed | action | AMM_ATTRIBUTE_VALUE | AMM Attribute Value Audit Event |
| CREATE_ACCOUNT_SKIPPED | action | PROVISIONING | Account Event |
| CREATE_CAMPAIGN | action | CERTIFICATION | Create Campaign Event |
| CREATE_CAMPAIGN_FILTER | action | CERTIFICATION | Create Campaign Filter Event |
| CREATE_SOD_POLICY | action | SOD_POLICY | Create SOD Policy Event |
| CREATE_TRANSFORM | action | TRANSFORM | Transform Audit Event |
| CREATE_WORKITEM_PASSED | action | MANUAL_WORKITEM | Create Workitem Passed |
| CREDENTIAL_CHANGE | action | SSF EVENT CREDENTIAL_CHANGE | SSF Correlated Events |
| DATA_SEGMENT_AUDIT | action | DATA_SEGMENT | Data Segment Audit Event |
| Delete Access Model Metadata Attribute Passed | action | AMM_ATTRIBUTE | AMM Attribute Audit Event |
| Delete Access Model Metadata Attribute Value Passed | action | AMM_ATTRIBUTE_VALUE | AMM Attribute Value Audit Event |
| DELETE_ACCOUNT_FAILED | action | (unknown) | Delete Account Provisioning Completed Event |
| DELETE_ACCOUNT_PASSED | action | (unknown) | Delete Account Provisioning Completed Event |
| DELETE_CAMPAIGN | action | CERTIFICATION | Delete Campaign Event |
| DELETE_CAMPAIGN_FILTER | action | CERTIFICATION | Delete Campaign Filter Event |
| DELETE_SOD_POLICY | action | SOD_POLICY | Delete SOD Policy Event |
| DELETE_TRANSFORM | action | TRANSFORM | Transform Audit Event |
| DEVICE_COMPLIANCE_CHANGE | action | SSF EVENT DEVICE_COMPLIANCE_CHANGE | SSF Correlated Events |
| EMAIL_SENT | action | EMAIL_SENT | Email Sent Status Event |
| EMAIL_TEMPLATE_UPDATED | action | EMAIL_TEMPLATE_UPDATED | Email Template Update Event |
| EMAIL_TEST_MODE_UPDATED | action | EMAIL_TEST_MODE_UPDATED | Email Test Mode Update Event |
| ENTITLEMENT PRIVILEGE | action | ENTITLEMENT_PRIVILEGE | Entitlement Privilege Audit Event |
| ENTITLEMENT_CONNECTION_CREATED | action | ENTITLEMENT_CONNECTION | Entitlement Connection Event |
| ENTITLEMENT_CONNECTION_DELETED | action | ENTITLEMENT_CONNECTION | Entitlement Connection Event |
| ENTITLEMENT_CONNECTION_UPDATED | action | ENTITLEMENT_CONNECTION | Entitlement Connection Event |
| ENTITLEMENT_METADATA_CHANGED | action | ENTITLEMENT_METADATA | Entitlement Metadata Audit Event |
| EVIDENCE_CHANGE | action | NON_EMPLOYEE | NE Generic Auditable Change |
| FLINK_EVENT | action | ACCESS_PROFILE_PRIVILEGE | Access Profile Privilege Audit Event |
| FORCE_AUTH_ACCESS | action | AUTH | Force Auth Event |
| GOVERNANCE_GROUP_CREATE | action | GOVERNANCE_GROUPS | Governance Groups Audit Event |
| GOVERNANCE_GROUP_DELETE | action | GOVERNANCE_GROUPS | Governance Groups Audit Event |
| GOVERNANCE_GROUP_MEMBERSHIP_UPDATE | action | GOVERNANCE_GROUPS | Governance Groups Membership Audit Event |
| GOVERNANCE_GROUP_UPDATE | action | GOVERNANCE_GROUPS | Governance Groups Audit Event |
| IAI_ADMIN_CONFIG_UPDATE_EVENT | action | IAI_ADMIN_AUDIT | Iai_Admin_Event |
| IAI_ADMIN_CUSTOMER_DELETE_EVENT | action | IAI_ADMIN_AUDIT | Iai_Admin_Event |
| IAI_ADMIN_CUSTOMER_UPDATE_EVENT | action | IAI_ADMIN_AUDIT | Iai_Admin_Event |
| IAI_ADMIN_DATA_SOURCE_DELETE_EVENT | action | IAI_ADMIN_AUDIT | Iai_Admin_Event |
| IAI_ADMIN_DATA_SOURCE_UPDATE_EVENT | action | IAI_ADMIN_AUDIT | Iai_Admin_Event |
| IAI_ADMIN_MAPPING_UPDATE_EVENT | action | IAI_ADMIN_AUDIT | Iai_Admin_Event |
| IAI_PIPELINE_BATCH | action | IAI_PIPELINE_BATCH | IAI Pipeline Batch Event |
| IAI_PIPELINE_STREAMING | action | IAI_PIPELINE_STREAMING | IAI Pipeline Streaming Event |
| IDENTITY_PROCESSING | action | IDENTITY_PROCESSING | Identity Processing |
| IDENTITY_PROCESSING_FAILED | action | IDENTITY_PROCESSING | Attribute Synchronization |
| IDENTITY_PROCESSING_PASSED | action | IDENTITY_PROCESSING | Identity Processing |
| IDENTITY_PROCESSING_STARTED | action | IDENTITY_PROCESSING | Identity Processing |
| IDENTITY_PROFILE_PASSWORD_RESET_SETTINGS_UPDATED | action | AUTH | MFA Identity Profile Setting Event |
| IDENTITY_PROVIDER_EXTERNAL_DISABLED | action | AUTH | Identity Provider Event |
| IDENTITY_PROVIDER_EXTERNAL_ENABLED | action | AUTH | Identity Provider Event |
| IDENTITY_STATE_CHANGE_EVENT | action | IDENTITY_STATE_CHANGE_EVENT | Identity Lifecycle Event |
| IDENTITY_UNCORRELATED | action | IDENTITY_UNCORRELATED | Identity Uncorrelated |
| INTEGRATION_DISABLED | action | PASSWORD_ACTIVITY | MFA Configuration Event |
| INTEGRATION_ENABLED | action | PASSWORD_ACTIVITY | MFA Configuration Event |
| JIT_ACCESS_POLICY | action | JIT_ACCESS_POLICY | JIT Access Policy Event |
| JIT_ACTIVATION_WORKFLOW | action | JIT_ACTIVATION_WORKFLOW | JIT Access Event |
| JIT_ENTITLEMENT_ACTIVATED | action | JIT | JIT Entitlement Provisioning Audit Event |
| JIT_ENTITLEMENT_DEACTIVATED | action | JIT | JIT Entitlement Provisioning Audit Event |
| JIT-ACTIVATION_POLICY_CREATED | action | POLICY_UPDATE | Policy Engine Update Event |
| JIT-ACTIVATION_POLICY_DELETED | action | POLICY_UPDATE | Policy Engine Update Event |
| JIT-ACTIVATION_POLICY_UPDATED | action | POLICY_UPDATE | Policy Engine Update Event |
| LAUNCHER_CREATED | action | LAUNCHER_AUDIT | Launcher Audit Event |
| LAUNCHER_DELETED | action | LAUNCHER_AUDIT | Launcher Audit Event |
| LAUNCHER_LAUNCHED | action | LAUNCHER_AUDIT | Launcher Audit Event |
| LAUNCHER_UPDATED | action | LAUNCHER_AUDIT | Launcher Audit Event |
| LOCKOUT_CONFIGURATION_UPDATED | action | AUTH | Lockout Configuration Event |
| MACHINE_ACCOUNT_CLASSIFICATION_CONFIG_UPDATE | action | SOURCE_MANAGEMENT | Update Machine Account Classification Configuration Passed |
| MACHINE_ACCOUNT_CREATE_CONFIG | action | MACHINE ACCOUNT SUBTYPE CREATE CONFIG | Update Machine Account Subtype Creation Config Event |
| MACHINE_ACCOUNT_CREATED | action | MACHINE_ACCOUNT | Machine Account Created |
| MACHINE_ACCOUNT_CREATION | action | MACHINE_ACCOUNT | Account-Provisioning-Event |
| MACHINE_ACCOUNT_CREATION_FAILED | action | MACHINE_ACCOUNT | Machine Account Creation Failed |
| MACHINE_ACCOUNT_UPDATED | action | MACHINE_IDENTITY | Machine Account Updated |
| MACHINE_IDENTITY_CREATED | action | MACHINE_IDENTITY | Machine Identity |
| MACHINE_IDENTITY_DELETED | action | MACHINE_IDENTITY | Machine Identity |
| MACHINE_IDENTITY_UPDATED | action | MACHINE_IDENTITY | Machine Identity |
| MANAGED_CLIENT_CREATE | action | MANAGED_CLIENTS | Managed Clients Audit Event |
| MANAGED_CLIENT_DELETE | action | MANAGED_CLIENTS | Managed Clients Audit Event |
| MANAGED_CLIENT_UPDATE | action | MANAGED_CLIENTS | Managed Clients Audit Event |
| MANAGED_CLUSTER_CREATE | action | MANAGED_CLIENTS | Managed Clients Audit Event |
| MANAGED_CLUSTER_DELETE | action | MANAGED_CLIENTS | Managed Clients Audit Event |
| MANAGED_CLUSTER_UPDATE | action | MANAGED_CLIENTS | Managed Clients Audit Event |
| ManuallyCorrelatedEvent | action | MANUAL_CORRELATION | ManuallyCorrelatedEvent |
| MFA_ON_LOGIN_AUTHENTICATE | action | AUTH | MFA On Login Event |
| MFA_REGISTRATION_REGISTERED | action | AUTH | MFA Registration Event |
| MFA_REGISTRATION_RESET | action | AUTH | MFA Registration Event |
| NATIVE_CHANGE_DETECTION_CONFIGURATION_UPDATE | action | SOURCE_MANAGEMENT | Update Native Change Detection Configuration Passed |
| NE_CORE_MODELS_ASSIGNMENT_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_ASSIGNMENT_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_ASSIGNMENT_EAV_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_ASSIGNMENT_EAV_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_ASSIGNMENT_EAV_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_ASSIGNMENT_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_JOB_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_JOB_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_JOB_EAV_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_JOB_EAV_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_JOB_EAV_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_JOB_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_EAV_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_EAV_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_EAV_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_ORGANIZATION_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_ORGANIZATION_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_ORGANIZATION_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CORE_MODELS_NON_EMPLOYEE_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_CUSTOM_ATTRIBUTE_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_CUSTOM_ATTRIBUTE_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_CUSTOM_ATTRIBUTE_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_OPTION_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_OPTION_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_OPTION_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_VALIDATION_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_VALIDATION_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_CUSTOM_ATTRIBUTES_VALIDATION_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_ACTIVE_AGREEMENT_BODY_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_ACTIVE_AGREEMENT_BODY_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_ACTIVE_AGREEMENT_BODY_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_AGREEMENT_BODY_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_AGREEMENT_BODY_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_AGREEMENT_BODY_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_AGREEMENT_SIGNATURE_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_AGREEMENT_SIGNATURE_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_AGREEMENT_SIGNATURE_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_CLICK_THROUGH_AGREEMENT_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_CLICK_THROUGH_AGREEMENT_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_EVIDENCE_CLICK_THROUGH_AGREEMENT_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_POLICY_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_POLICY_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_POLICY_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_REQUIREMENT_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_REQUIREMENT_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_REQUIREMENT_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_TASK_GROUP_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_TASK_GROUP_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_POLICY_TASK_GROUP_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_GADGET_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_GADGET_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_GADGET_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_WIDGET_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_WIDGET_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_WIDGET_OWNER_CREATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_WIDGET_OWNER_DELETED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_WIDGET_OWNER_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NE_SKELETON_WIDGET_UPDATED | action | NON_EMPLOYEE | NE Generic Auditable Change |
| NON_EMPLOYEE_APPROVAL_ACTION_COMPLETED | action | NON_EMPLOYEE | Non-Employee-Approval-Event |
| NON_EMPLOYEE_BULK_EXPORT_FAILED | action | NON_EMPLOYEE | Non-Employee Bulk Operation Event |
| NON_EMPLOYEE_BULK_EXPORT_PASSED | action | NON_EMPLOYEE | Non-Employee Bulk Operation Event |
| NON_EMPLOYEE_BULK_EXPORT_STARTED | action | NON_EMPLOYEE | Non-Employee Bulk Operation Event |
| NON_EMPLOYEE_BULK_IMPORT_FAILED | action | NON_EMPLOYEE | Non-Employee Bulk Operation Event |
| NON_EMPLOYEE_BULK_IMPORT_PASSED | action | NON_EMPLOYEE | Non-Employee Bulk Operation Event |
| NON_EMPLOYEE_BULK_IMPORT_STARTED | action | NON_EMPLOYEE | Non-Employee Bulk Operation Event |
| NON_EMPLOYEE_CREATE_PASSED | action | NON_EMPLOYEE | Non-Employee Event |
| NON_EMPLOYEE_DELETE_PASSED | action | NON_EMPLOYEE | Non-Employee Event |
| NON_EMPLOYEE_REQUEST_ACTION_COMPLETED | action | NON_EMPLOYEE | Non-Employee-Approval-Event |
| NON_EMPLOYEE_REQUEST_CREATED | action | NON_EMPLOYEE | Non-Employee-Approval-Event |
| NON_EMPLOYEE_REQUEST_DELETED | action | NON_EMPLOYEE | Non-Employee-Approval-Event |
| NON_EMPLOYEE_SOURCE_CREATED | action | NON_EMPLOYEE | Non-Employee-Source-Event |
| NON_EMPLOYEE_SOURCE_DELETED | action | NON_EMPLOYEE | Non-Employee-Source-Event |
| NON_EMPLOYEE_SOURCE_UPDATED | action | NON_EMPLOYEE | Non-Employee-Source-Event |
| NON_EMPLOYEE_UPDATE_PASSED | action | NON_EMPLOYEE | Non-Employee Event |
| ORG_CONFIG_CHANGE_AUDIT | action | ORG_CONFIG | Org Config Audit Event |
| ORG_KBA_ADD | action | SYSTEM_CONFIG | MFA KBA Configuration Event |
| ORG_KBA_DELETE | action | SYSTEM_CONFIG | MFA KBA Configuration Event |
| ORGANIZATIONS_CHANGE | action | NON_EMPLOYEE | NE Generic Auditable Change |
| PARAMETER_STORAGE_CREATED | action | PARAMETER | Parameter Storage Event |
| PARAMETER_STORAGE_DELETED | action | PARAMETER | Parameter Storage Event |
| PARAMETER_STORAGE_MODIFIED | action | PARAMETER | Parameter Storage Event |
| PARAMETER_STORAGE_REVEALED | action | PARAMETER | Parameter Storage Event |
| PARAMETER_STORAGE_SECRET_MODIFIED | action | PARAMETER | Parameter Storage Event |
| PERMISSION_REVOKED | action | PERMISSION_REVOKED | DAS Deprovisioning Event |
| PERSONAL_ACCESS_TOKEN_CREATED | action | AUTH | Personal Access Token Event |
| PERSONAL_ACCESS_TOKEN_DELETED | action | AUTH | Personal Access Token Event |
| PERSONAL_ACCESS_TOKEN_EXPIRED | action | AUTH | Personal Access Token Event |
| PERSONAL_ACCESS_TOKEN_UPDATED | action | AUTH | Personal Access Token Event |
| PERSONAL_ACCESS_TOKEN_USE_FAILED | action | AUTH | Personal Access Token Event Failed |
| PERSONAL_ACCESS_TOKEN_USED | action | AUTH | Personal Access Token Event |
| POLICY_CHANGE | action | NON_EMPLOYEE | NE Generic Auditable Change |
| POLICY_EVALUATED | action | POLICY_EVALUATE | Policy Engine Evaluated Event |
| PRIVILEGE_CRITERIA_CONFIG_UPDATED | action | CRITERIA_CONFIG | Privilege Criteria Config Event |
| PRIVILEGE_CRITERIA_CREATED | action | PRIVILEGE_CRITERIA | Privilege Criteria Event |
| PRIVILEGE_CRITERIA_DELETED | action | PRIVILEGE_CRITERIA | Privilege Criteria Event |
| PRIVILEGE_CRITERIA_UPDATED | action | PRIVILEGE_CRITERIA | Privilege Criteria Event |
| REASSIGN_CERTIFICATIONS | action | CERTIFICATION | Reassign Certifications Event |
| REASSIGN_SUBJECTS_AND_ITEMS | action | CERTIFICATION | Reassign Subjects And Items Event |
| REMEDIATE_CERTIFICATION_ITEM | action | CERTIFICATION | Remediate Certification Item Event |
| REPORT_EXPORT_PASSED | action | (unknown) | Report Export Event |
| RISK_LEVEL_CHANGE | action | SSF EVENT RISK_LEVEL_CHANGE | SSF Correlated Events |
| ROLE PRIVILEGE | action | ROLE_PRIVILEGE | Role Privilege Audit Event |
| ROLE_PROPAGATION_COMPLETED | action | ROLE_PROPAGATION | Role Propagation Audit Event |
| ROLE_PROPAGATION_CONFIG_CREATED | action | ROLE_PROPAGATION_CONFIG | Role Propagation Config Audit Event |
| ROLE_PROPAGATION_CONFIG_UPDATED | action | ROLE_PROPAGATION_CONFIG | Role Propagation Config Audit Event |
| ROLE_PROPAGATION_STARTED | action | ROLE_PROPAGATION | Role Propagation Audit Event |
| ROLE_UPDATED_SEGMENT_ADD_AUDIT | action | ROLE | Role Audit Event |
| ROLE_UPDATED_SEGMENT_REMOVE_AUDIT | action | ROLE | Role Audit Event |
| SAML_JIT_CONFIGURATION_UPDATED | action | AUTH | SAML SP JIT Configuration Event |
| SAML_JIT_USER_CREATED | action | AUTH | SAML SP JIT Provisioning Event |
| SAML_JIT_USER_UPDATED | action | AUTH | SAML SP JIT Provisioning Event |
| SAVED_SEARCH_CREATE_PASSED | action | SYSTEM_CONFIG | Saved Search Event |
| SAVED_SEARCH_DELETE_PASSED | action | SYSTEM_CONFIG | Saved Search Event |
| SAVED_SEARCH_UPDATE_PASSED | action | SYSTEM_CONFIG | Saved Search Event |
| SCHEDULER_CERTIFICATION_EMAIL_CREATE | action | SCHEDULER | Scheduler Certification Email Event |
| SCHEDULER_CERTIFICATION_EMAIL_DELETE | action | SCHEDULER | Scheduler Certification Email Event |
| SCHEDULER_CERTIFICATION_EMAIL_UPDATE | action | SCHEDULER | Scheduler Certification Email Event |
| SEGMENT_CREATED_AUDIT | action | SEGMENT | Segment Audit Event |
| SEGMENT_DELETED_AUDIT | action | SEGMENT | Segment Audit Event |
| SEGMENT_UPDATE_ADD_AUDIT_EVENT | action | SEGMENT | Segment Update Audit Event |
| SEGMENT_UPDATE_REMOVE_AUDIT_EVENT | action | SEGMENT | Segment Update Audit Event |
| SEGMENT_UPDATED_AUDIT | action | SEGMENT | Segment Audit Event |
| SESSION_CONFIGURATION_UPDATED | action | AUTH | Session Configuration Event |
| SESSION_REVOKED | action | SSF EVENT SESSION_REVOKED | SSF Correlated Events |
| SLPT_TOKEN_EXCHANGE | action | AUTH | Support Login Token Issue Event |
| SOD_APPLY_CONTROL | action | SOD_VIOLATION | Apply Control SOD Violation Event |
| SOD_CONTROL_CREATED | action | SOD_CONTROL | Create SOD Control Passed |
| SOD_CONTROL_DELETED | action | SOD_CONTROL | Delete SOD Control Passed |
| SOD_CONTROL_UPDATED | action | SOD_CONTROL | Update SOD Control Passed |
| SOD_POLICY_CREATED | action | POLICY_UPDATE | Policy Engine Update Event |
| SOD_POLICY_DELETED | action | POLICY_UPDATE | Policy Engine Update Event |
| SOD_POLICY_UPDATED | action | POLICY_UPDATE | Policy Engine Update Event |
| SOD_VIOLATION_CHECK_COMPLETED | action | SOD | SOD Violation Check |
| SOD_VIOLATION_CREATED | action | SOD_VIOLATION | Create SOD Violation Passed |
| SOD_VIOLATION_REASSIGNED | action | SOD_VIOLATION_REASSIGNED | Reassign SOD Violation Passed |
| SOD_VIOLATION_UPDATED | action | SOD_VIOLATION | Update SOD Violation Event |
| SOURCE_ACCOUNT_AGGREGATION_FAILED | action | SOURCE_MANAGEMENT | Source Account Aggregation History Event |
| SOURCE_ACCOUNT_AGGREGATION_PASSED | action | SOURCE_MANAGEMENT | Source Account Aggregation History Event |
| SOURCE_ACCOUNT_AGGREGATION_TERMINATED | action | SOURCE_MANAGEMENT | Source Account Aggregation History Event |
| SOURCE_MANAGEMENT | action | SOURCE_MANAGEMENT | Source Account Export Event |
| SOURCE_MANAGEMENT_ADD_SOURCE_FAILED | action | CIEM_SOURCE_MANAGEMENT | CIEM Sources Event |
| SOURCE_MANAGEMENT_ADD_SOURCE_SUCCEEDED | action | CIEM_SOURCE_MANAGEMENT | CIEM Sources Event |
| SOURCE_MANAGEMENT_ADD_SUBSOURCE_FAILED | action | CIEM_SOURCE_MANAGEMENT | CIEM SubSources Event |
| SOURCE_MANAGEMENT_ADD_SUBSOURCE_SUCCEEDED | action | CIEM_SOURCE_MANAGEMENT | CIEM SubSources Event |
| SOURCE_MANAGEMENT_ADD_SUBSOURCES_FAILED | action | CIEM_SOURCE_MANAGEMENT | CIEM SubSources Event |
| SOURCE_MANAGEMENT_ADD_SUBSOURCES_SUCCEEDED | action | CIEM_SOURCE_MANAGEMENT | CIEM SubSources Event |
| SOURCE_MANAGEMENT_AUTO_DISCOVERY_DISABLED | action | CIEM_SCOPE_MANAGEMENT | CIEM Scopes Event |
| SOURCE_MANAGEMENT_AUTO_DISCOVERY_ENABLED | action | CIEM_SCOPE_MANAGEMENT | CIEM Scopes Event |
| SOURCE_MANAGEMENT_DELETE_ALL_FAILED | action | CIEM_SOURCE_MANAGEMENT | CIEM Sources Event |
| SOURCE_MANAGEMENT_DELETE_ALL_SUCCEEDED | action | CIEM_SOURCE_MANAGEMENT | CIEM Sources Event |
| SOURCE_MANAGEMENT_DELETE_SOURCE_FAILED | action | CIEM_SOURCE_MANAGEMENT | CIEM Sources Event |
| SOURCE_MANAGEMENT_DELETE_SOURCE_SUCCEEDED | action | CIEM_SOURCE_MANAGEMENT | CIEM Sources Event |
| SOURCE_MANAGEMENT_DELETE_SUBSOURCE_FAILED | action | CIEM_SOURCE_MANAGEMENT | CIEM SubSources Event |
| SOURCE_MANAGEMENT_DELETE_SUBSOURCE_SUCCEEDED | action | CIEM_SOURCE_MANAGEMENT | CIEM SubSources Event |
| SOURCE_MANAGEMENT_DISABLE_SCOPE_SUCCEEDED | action | CIEM_SCOPE_MANAGEMENT | CIEM Scopes Event |
| SOURCE_MANAGEMENT_ENABLE_SCOPE_SUCCEEDED | action | CIEM_SCOPE_MANAGEMENT | CIEM Scopes Event |
| SOURCE_MANAGEMENT_UPDATE_SOURCE_FAILURE | action | CIEM_SOURCE_MANAGEMENT | CIEM Sources Event |
| SOURCE_MANAGEMENT_UPDATE_SOURCE_SUCCEEDED | action | CIEM_SOURCE_MANAGEMENT | CIEM Sources Event |
| SOURCE_SCHEDULE_CREATED | action | SOURCE_SCHEDULE_CREATED | Source schedule created event |
| SOURCE_SCHEDULE_REMOVED | action | SOURCE_SCHEDULE_REMOVED | Source schedule removed event |
| SOURCE_SCHEDULE_UPDATED | action | SOURCE_SCHEDULE_UPDATED | Source schedule update event |
| SOURCE_SUBTYPE_CREATED | action | (unknown) | Source Subtype |
| SOURCE_SUBTYPE_DELETED | action | (unknown) | Source Subtype |
| SOURCE_SUBTYPE_UPDATED | action | (unknown) | Source Subtype |
| SUBSCRIPTION_CREATE_PASSED | action | SYSTEM_CONFIG | Subscription Event |
| SUBSCRIPTION_DELETE_PASSED | action | SYSTEM_CONFIG | Subscription Event |
| SUBSCRIPTION_EXECUTE_STARTED | action | SYSTEM_CONFIG | Subscription Event |
| SUBSCRIPTION_RECIPIENT_EXCLUDED | action | SYSTEM_CONFIG | Subscription Event |
| SUBSCRIPTION_UPDATE_PASSED | action | SYSTEM_CONFIG | Subscription Event |
| SUPPORT_LOGIN_AUTHENTICATE | action | AUTH | Support Login Token Authentication Event |
| TENANT_CONFIG_CREATED | action | TENANT_CONFIG | Work Reassignment Tenant Config Event |
| TENANT_CONFIG_DELETED | action | TENANT_CONFIG | Work Reassignment Tenant Config Event |
| TENANT_CONFIG_UPDATED | action | TENANT_CONFIG | Work Reassignment Tenant Config Event |
| TOKEN_CLAIMS_CHANGE | action | SSF EVENT TOKEN_CLAIMS_CHANGE | SSF Correlated Events |
| TOKEN_VERIFICATION_FAILED | action | AUTH | MFA Authentication Event |
| TOKEN_VERIFICATION_PASSED | action | AUTH | MFA Authentication Event |
| UI_PLUGIN_ASSET_BUNDLE_CREATED | action | (dynamic) | UI Plugin Asset Bundle Event |
| UI_PLUGIN_ASSET_BUNDLE_DELETED | action | (dynamic) | UI Plugin Asset Bundle Event |
| UI_PLUGIN_INSTANCE_CREATED | action | (dynamic) | UI Plugin Instance Event |
| UI_PLUGIN_INSTANCE_DELETED | action | (dynamic) | UI Plugin Instance Event |
| UI_PLUGIN_INSTANCE_UPDATED | action | (dynamic) | UI Plugin Instance Event |
| Update Access Model Metadata Attribute Passed | action | AMM_ATTRIBUTE | AMM Attribute Audit Event |
| Update Access Model Metadata Attribute Value Passed | action | AMM_ATTRIBUTE_VALUE | AMM Attribute Value Audit Event |
| UPDATE_CAMPAIGN_FILTER | action | CERTIFICATION | Update Campaign Filter Event |
| UPDATE_SOD_POLICY | action | SOD_POLICY | Update SOD Policy Event |
| UPDATE_TRANSFORM | action | TRANSFORM | Transform Audit Event |
| USER_KBA_ANSWER_DELETE | action | SYSTEM_CONFIG | MFA KBA Configuration Event |
| USER_KBA_ANSWER_UPDATE | action | SYSTEM_CONFIG | MFA KBA Configuration Event |
| USER_KBA_ANSWER_UPDATE_NOTIFICATION | action | SYSTEM_CONFIG | MFA KBA Configuration Event |
| USER_LEVEL_CREATE | action | AUTHORIZATION | User Level Audit Event |
| USER_LEVEL_DELETE | action | AUTHORIZATION | User Level Audit Event |
| USER_LEVEL_PUBLISH | action | AUTHORIZATION | User Level Audit Event |
| USER_LEVEL_UPDATE | action | AUTHORIZATION | User Level Audit Event |
| USER_SEARCH_FAILED | action | SYSTEM_CONFIG | User Search Event |
| USER_SEARCH_PASSED | action | SYSTEM_CONFIG | User Search Event |
| WORK_REASSIGNMENT_CONFIG_ITEM_DELETED | action | GOV_WORK_REASSIGNMENT | Work Reassignment Config Event |
| WORK_REASSIGNMENT_CREATED | action | GOV_WORK_REASSIGNMENT | Work Reassignment Config Event |
| WORK_REASSIGNMENT_DELETED | action | GOV_WORK_REASSIGNMENT | Work Reassignment Config Event |
| WORK_REASSIGNMENT_UPDATED | action | GOV_WORK_REASSIGNMENT | Work Reassignment Config Event |
| WORKFLOW_CREATED | action | WORKFLOW | Workflow Event |
| WORKFLOW_DEFINITION_UPDATED | action | WORKFLOW | Workflow Event |
| WORKFLOW_DELETED | action | WORKFLOW | Workflow Event |
| WORKFLOW_DISABLED | action | WORKFLOW | Workflow Event |
| WORKFLOW_ENABLED | action | WORKFLOW | Workflow Event |
| WORKFLOW_EXECUTION_APPROVAL_REQUEST_COMPLETED | action | WORKFLOW | Custom Approval Workflow Execution Event |
| WORKFLOW_EXECUTION_APPROVAL_REQUEST_FAILED | action | WORKFLOW | Custom Approval Workflow Execution Event |
| WORKFLOW_EXECUTION_APPROVAL_REQUEST_STARTED | action | WORKFLOW | Custom Approval Workflow Execution Event |
| WORKFLOW_EXECUTION_CANCELLED | action | WORKFLOW | Workflow Execution Event |
| WORKFLOW_EXECUTION_RATE_LIMITED | action | WORKFLOW_EXECUTION_RATE_LIMITED | Workflow Execution Rate Limit Quota Exceeded |
| WORKFLOW_EXECUTIONS_BATCH_TERMINATED | action | WORKFLOW | Workflow Event |
| WORKFLOW_OWNER_UPDATED | action | WORKFLOW | Workflow Event |
| WORKFLOW_SECRET_CREATED | action | WORKFLOW_SECRET | Workflow Secrets Event |
| WORKFLOW_SECRET_DELETED | action | WORKFLOW_SECRET | Workflow Secrets Event |
| WORKFLOW_SECRET_UPDATED | action | WORKFLOW_SECRET | Workflow Secrets Event |
| WORKFLOW_SECRETS_ACCESSED | action | WORKFLOW_SECRET | Workflow Secrets Accessed Event |
| WORKFLOW_TRIGGER_UPDATED | action | WORKFLOW | Workflow Event |
| ACCESS_PROFILE_CREATE | action | ACCESS_ITEM | Access profile create |
| ACCESS_PROFILE_CREATE_PASSED | action | ACCESS_ITEM | Access profile create passed |
| ACCESS_PROFILE_DELETE | action | ACCESS_ITEM | Access profile delete |
| ACCESS_PROFILE_DELETE_PASSED | action | ACCESS_ITEM | Access profile delete passed |
| ACCESS_PROFILE_UPDATE | action | ACCESS_ITEM | Access profile update |
| ACCESS_PROFILE_UPDATE_PASSED | action | ACCESS_ITEM | Access profile update passed |
| ACCESS_REQUEST_APPROVED | action | ACCESS_REQUEST | Access request approved |
| ACCESS_REQUEST_CANCELLED | action | ACCESS_REQUEST | Access request cancelled |
| ACCESS_REQUEST_ESCALATE | action | ACCESS_REQUEST | Access request escalate |
| ACCESS_REQUEST_ESCALATED | action | ACCESS_REQUEST | Access request escalated |
| ACCESS_REQUEST_FORWARDED | action | ACCESS_REQUEST | Access request forwarded |
| ACCESS_REQUEST_PROCESSED | action | ACCESS_REQUEST | Access request processed |
| ACCESS_REQUEST_REJECTED | action | ACCESS_REQUEST | Access request rejected |
| ACCESS_REQUEST_REQUESTED | action | ACCESS_REQUEST | Access request requested |
| ACCESS_REVOKE_REQUEST_APPROVED | action | ACCESS_REQUEST | Access revoke request approved |
| ACCESS_REVOKE_REQUEST_CANCELLED | action | ACCESS_REQUEST | Access revoke request cancelled |
| ACCESS_REVOKE_REQUEST_ESCALATED | action | ACCESS_REQUEST | Access revoke request escalated |
| ACCESS_REVOKE_REQUEST_FORWARDED | action | ACCESS_REQUEST | Access revoke request forwarded |
| ACCESS_REVOKE_REQUEST_PROCESSED | action | ACCESS_REQUEST | Access revoke request processed |
| ACCESS_REVOKE_REQUEST_REJECTED | action | ACCESS_REQUEST | Access revoke request rejected |
| ACCESS_REVOKE_REQUEST_REQUESTED | action | ACCESS_REQUEST | Access revoke request requested |
| AccessRequestConfigUpdated | action | ACCESS_ITEM | Access request config updated |
| ACCOUNT_FULL_RESET | action | PASSWORD_ACTIVITY | Account full reset |
| ACCOUNT_PASSWORD_RESET_FAILED | action | PASSWORD_ACTIVITY | Account password reset failed |
| ACCOUNT_PASSWORD_RESET_PASSED | action | PASSWORD_ACTIVITY | Account password reset passed |
| ACCOUNT_PASSWORD_SYNC_PASSED | action | PASSWORD_ACTIVITY | Account password sync passed |
| ACCOUNT_VAULT_UPDATED | action | PASSWORD_ACTIVITY | Account vault updated |
| ACTION_APP_REQUEST_APPROVED | action | PROVISIONING | Action app request approved |
| ACTION_APP_REQUEST_REJECTED | action | PROVISIONING | Action app request rejected |
| ACTION_DISABLE_ATTRIBUTE_SYNC | action | PROVISIONING | Action disable attribute sync |
| ACTION_ENABLE_ATTRIBUTE_SYNC | action | PROVISIONING | Action enable attribute sync |
| ACTION_IDENTITY_DIRECT_CREATE | action | IDENTITY_MANAGEMENT | Action identity direct create |
| ACTION_MAPPING_ATTRIBUTE_CREATE | action | ACCESS_ITEM | Action mapping attribute create |
| ACTION_MAPPING_ATTRIBUTE_DELETE | action | ACCESS_ITEM | Action mapping attribute delete |
| ACTION_MAPPING_ATTRIBUTE_UPDATE | action | (unknown) | Action mapping attribute update |
| ACTION_PASSWORD_CHANGE_SUCCESS | action | PASSWORD_ACTIVITY | Action password change success |
| ACTION_STATE_CHANGE | action | PROVISIONING | Action state change |
| AddEntitlement | action | ACCESS_ITEM | Add entitlement |
| AddEntitlementFailure | action | ACCESS_ITEM | Add entitlement failure |
| API_CLIENT_CREATE | action | SYSTEM_CONFIG | Api client create |
| API_CLIENT_DELETE | action | SYSTEM_CONFIG | Api client delete |
| APP_ACCESS_DENIED | action | SSO | App access denied |
| APP_ADD | action | ACCESS_ITEM | App add |
| APP_CREATE | action | ACCESS_ITEM | App create |
| APP_DELETE | action | ACCESS_ITEM | App delete |
| APP_IMPORT | action | ACCESS_ITEM | App import |
| APP_LAUNCH_DIR_PSWD | action | SSO | App launch dir pswd |
| APP_LAUNCH_NONE | action | SSO | App launch none |
| APP_LAUNCH_PASSWORD | action | SSO | App launch password |
| APP_LAUNCH_SAML | action | SSO | App launch saml |
| APP_LAUNCH_WSFED | action | SSO | App launch wsfed |
| APP_PURGED | action | ACCESS_ITEM | App purged |
| APP_REMOVE | action | ACCESS_ITEM | App remove |
| APP_SET_ACCESS_PROFILES | action | ACCESS_ITEM | App set access profiles |
| APP_UPDATE | action | ACCESS_ITEM | App update |
| APP_UPDATE_XML | action | ACCESS_ITEM | App update xml |
| APP_USAGE_AGREEMENT | action | SSO | App usage agreement |
| approveLineItem | action | PROVISIONING | Approve line item |
| AUTHENTICATION-100 | action | AUTH | Authentication request passed |
| AUTHENTICATION-103 | action | AUTH | Authentication request passed |
| AUTHENTICATION-105 | action | AUTH | Authentication request passed |
| AUTHENTICATION-240 | action | AUTH | Authentication request failed |
| AUTHENTICATION-241 | action | AUTH | Authentication request failed |
| AUTHENTICATION-245 | action | AUTH | User account locked |
| AUTHENTICATION-246 | action | AUTH | User password expired |
| AUTHENTICATION-247 | action | AUTH | Authentication timed out |
| AUTHENTICATION-281 | action | AUTH | User account blocked |
| AUTHENTICATION-300 | action | AUTH | User logout |
| AUTHENTICATION-303 | action | AUTH | User logout |
| BRANDING_CREATE | action | SYSTEM_CONFIG | Branding create |
| BRANDING_DELETE | action | SYSTEM_CONFIG | Branding delete |
| BRANDING_UPDATE | action | SYSTEM_CONFIG | Branding update |
| CampaignFilterCreate | action | CERTIFICATION | Campaign filter create |
| CampaignFilterDelete | action | CERTIFICATION | Campaign filter delete |
| CampaignFilterUpdate | action | CERTIFICATION | Campaign filter update |
| CERT_CAMPAIGN_COMPLETE | action | CERTIFICATION | Cert campaign complete |
| CERT_CAMPAIGN_REVIEW_NOTIFICATION | action | CERTIFICATION | Cert campaign review notification |
| CERT_ITEM_TIMESTAMP_STATS | action | CERTIFICATION | Cert item timestamp stats |
| CertificationCampaignActivate | action | CERTIFICATION | Certification campaign activate |
| CertificationCampaignComplete | action | CERTIFICATION | Certification campaign complete |
| CertificationCampaignCreate | action | CERTIFICATION | Certification campaign create |
| CertificationCampaignDelete | action | CERTIFICATION | Certification campaign delete |
| certificationPhaseChange | action | CERTIFICATION | Certification phase change |
| CERTIFICATIONSFINISHED | action | CERTIFICATION | Certificationsfinished |
| CLIENT_TOKEN_ISSUE | action | AUTH | Client token issue |
| comment | action | PROVISIONING | Comment |
| CONNECTOR_CREATE | action | SOURCE_MANAGEMENT | Connector create |
| CONNECTOR_DELETE | action | SOURCE_MANAGEMENT | Connector delete |
| CONNECTOR_EXPORT | action | SOURCE_MANAGEMENT | Connector export |
| CONNECTOR_FILE_DELETE | action | SOURCE_MANAGEMENT | Connector file delete |
| CONNECTOR_FILE_UPLOAD | action | SOURCE_MANAGEMENT | Connector file upload |
| CONNECTOR_UPDATE | action | SOURCE_MANAGEMENT | Connector update |
| CreateAccount | action | PROVISIONING | Create account |
| CreateAccountFailure | action | PROVISIONING | Create account failure |
| CUSTOM_PASSWORD_INSTRUCTIONS_CREATE | action | PASSWORD_ACTIVITY | Custom password instructions create |
| CUSTOM_PASSWORD_INSTRUCTIONS_DELETE | action | PASSWORD_ACTIVITY | Custom password instructions delete |
| DeleteAccount | action | PROVISIONING | Delete account |
| DeleteAccountFailure | action | PROVISIONING | Delete account failure |
| DIGIT_TOKEN_GENERATION_FAILED | action | PASSWORD_ACTIVITY | Digit token generation failed |
| DIGIT_TOKEN_GENERATION_PASSED | action | PASSWORD_ACTIVITY | Digit token generation passed |
| DIGIT_TOKEN_VERIFICATION_FAILED | action | PASSWORD_ACTIVITY | Digit token verification failed |
| DIGIT_TOKEN_VERIFICATION_PASSED | action | PASSWORD_ACTIVITY | Digit token verification passed |
| DisableAccount | action | PROVISIONING | Disable account |
| DisableAccountFailure | action | PROVISIONING | Disable account failure |
| EMAIL_REDIRECTION_DISABLED | action | SYSTEM_CONFIG | Email redirection disabled |
| EMAIL_REDIRECTION_ENABLED | action | SYSTEM_CONFIG | Email redirection enabled |
| EMAIL_TEMPLATE_UPDATE | action | SYSTEM_CONFIG | Email template update |
| emailFailure | action | USER_MANAGEMENT | Email failure |
| emailSent | action | USER_MANAGEMENT | Email sent |
| EnableAccount | action | PROVISIONING | Enable account |
| EnableAccountFailure | action | PROVISIONING | Enable account failure |
| expiredPasswordChange | action | PASSWORD_ACTIVITY | Expired password change |
| ExpirePasswordStart | action | PASSWORD_ACTIVITY | Expire password start |
| forgotPasswordChange | action | PASSWORD_ACTIVITY | Forgot password change |
| ForgotPasswordStart | action | PASSWORD_ACTIVITY | Forgot password start |
| forward | action | ACCESS_ITEM | Forward |
| IDENTITY_ATTRIBUTE_UPDATE | action | PROVISIONING | Identity attribute update |
| IDENTITY_CREATE_PASSED | action | PROVISIONING | Identity create passed |
| IDENTITY_DELETE_PASSED | action | PROVISIONING | Identity delete passed |
| IDENTITY_PROFILE_ATTRIBUTES_UPDATED | action | ACCESS_ITEM | Identity profile attributes updated |
| IDENTITY_PROFILE_CONFIGURE_AUTHN | action | ACCESS_ITEM | Identity profile configure authn |
| IDENTITY_PROFILE_CREATE | action | ACCESS_ITEM | Identity profile create |
| IDENTITY_PROFILE_DELETE | action | ACCESS_ITEM | Identity profile delete |
| IDENTITY_PROFILE_PIGS_USER_INVITE_SETTINGS_UPDATED | action | PASSWORD_ACTIVITY | Identity profile pigs user invite settings updated |
| IDENTITY_PROFILE_UPDATE | action | ACCESS_ITEM | Identity profile update |
| IDENTITY_PROVIDER_CERTIFICATE_RENEWED | action | PROVISIONING | Identity provider certificate renewed |
| IDENTITY_PROVIDER_ENABLED | action | AUTH | Identity provider enabled |
| IDENTITY_UPDATE_PASSED | action | PROVISIONING | Identity update passed |
| IdentityDirectCreateFailure | action | IDENTITY_MANAGEMENT | Identity direct create failure |
| identityTriggerEvent | action | PROVISIONING | Identity trigger event |
| INTEGRATION_UPDATED | action | PASSWORD_ACTIVITY | Integration updated |
| LIFECYCLE_STATE_CREATE_PASSED | action | ACCESS_ITEM | Lifecycle state create passed |
| LIFECYCLE_STATE_DELETE_PASSED | action | ACCESS_ITEM | Lifecycle state delete passed |
| LIFECYCLE_STATE_UPDATE_PASSED | action | ACCESS_ITEM | Lifecycle state update passed |
| manualChange | action | PROVISIONING | Manual change |
| MFA_VERIFICATION_FAILED | action | PASSWORD_ACTIVITY | Mfa verification failed |
| ModifyAccount | action | PROVISIONING | Modify account |
| ModifyAccountFailure | action | PROVISIONING | Modify account failure |
| ONBOARDING_TOKEN_GENERATION_FAILED | action | PASSWORD_ACTIVITY | Onboarding token generation failed |
| ONBOARDING_TOKEN_GENERATION_LIMIT_BYPASS | action | PASSWORD_ACTIVITY | Onboarding token generation limit bypass |
| ONBOARDING_TOKEN_GENERATION_PASSED | action | PASSWORD_ACTIVITY | Onboarding token generation passed |
| ONBOARDING_TOKEN_VERIFICATION_FAILED | action | PASSWORD_ACTIVITY | Onboarding token verification failed |
| ONBOARDING_TOKEN_VERIFICATION_PASSED | action | PASSWORD_ACTIVITY | Onboarding token verification passed |
| PASSWORD_ORG_CONFIG_CREATE | action | PASSWORD_ACTIVITY | Password org config create |
| PASSWORD_ORG_CONFIG_UPDATE | action | PASSWORD_ACTIVITY | Password org config update |
| PASSWORD_POLICY_CREATED | action | PASSWORD_ACTIVITY | Password policy created |
| PASSWORD_POLICY_DELETED | action | PASSWORD_ACTIVITY | Password policy deleted |
| PASSWORD_POLICY_UPDATED | action | PASSWORD_ACTIVITY | Password policy updated |
| PASSWORD_REPLAY_DISABLED | action | PASSWORD_ACTIVITY | Password replay disabled |
| PASSWORD_REPLAY_ENABLED | action | PASSWORD_ACTIVITY | Password replay enabled |
| PASSWORD_REPLAY_PASSIVE | action | PASSWORD_ACTIVITY | Password replay passive |
| passwordChange | action | PASSWORD_ACTIVITY | Password change |
| passwordChangeFailure | action | PASSWORD_ACTIVITY | Password change failure |
| PasswordsRequestStart | action | PASSWORD_ACTIVITY | Passwords request start |
| reassign | action | CERTIFICATION | Reassign |
| REDIRECT_PATTERNS_UPDATED | action | PASSWORD_ACTIVITY | Redirect patterns updated |
| remediate | action | CERTIFICATION | Remediate |
| RemoveEntitlement | action | ACCESS_ITEM | Remove entitlement |
| RemoveEntitlementFailure | action | ACCESS_ITEM | Remove entitlement failure |
| RequestApp | action | ACCESS_REQUEST | Request app |
| ROLE_CREATE_PASSED | action | ACCESS_ITEM | Role create passed |
| ROLE_DELETE_PASSED | action | ACCESS_ITEM | Role delete passed |
| ROLE_UPDATE_PASSED | action | ACCESS_ITEM | Role update passed |
| roleAdd | action | ACCESS_ITEM | Role add |
| roleRemove | action | ACCESS_ITEM | Role remove |
| RULE_CREATE_PASSED | action | CERTIFICATION | Rule create passed |
| RULE_DELETE_PASSED | action | CERTIFICATION | Rule delete passed |
| RULE_UPDATE_PASSED | action | CERTIFICATION | Rule update passed |
| SAML_FORCE_AUTHN | action | AUTH | Saml force authn |
| SAML2-142 | action | AUTH | SAML assertion received |
| SAML2-166 | action | AUTH | SAML login failed |
| SAML2-31 | action | AUTH | SAML request sent |
| SCHEMA_CREATED | action | SOURCE_MANAGEMENT | Schema created |
| SCHEMA_DELETED | action | SOURCE_MANAGEMENT | Schema deleted |
| SCHEMA_UPDATED | action | SOURCE_MANAGEMENT | Schema updated |
| SERVICE_DESK_INTEGRATION_CREATE_FAILED | action | SOURCE_MANAGEMENT | Service desk integration create failed |
| SERVICE_DESK_INTEGRATION_CREATED | action | SOURCE_MANAGEMENT | Service desk integration created |
| SERVICE_DESK_INTEGRATION_DELETE_FAILED | action | SOURCE_MANAGEMENT | Service desk integration delete failed |
| SERVICE_DESK_INTEGRATION_DELETED | action | SOURCE_MANAGEMENT | Service desk integration deleted |
| SERVICE_DESK_INTEGRATION_UPDATE_FAILED | action | SOURCE_MANAGEMENT | Service desk integration update failed |
| SERVICE_DESK_INTEGRATION_UPDATED | action | SOURCE_MANAGEMENT | Service desk integration updated |
| SERVICE_PASSWORD_REPLAY | action | SSO | Service password replay |
| SERVICE_PASSWORD_REPLAY_CREDENTIALS_RETRIEVED | action | SSO | Service password replay credentials retrieved |
| SESSION-1 | action | AUTH | Session created |
| SESSION-2 | action | AUTH | Session idle timeout |
| SESSION-3 | action | AUTH | Session max timeout |
| SESSION-4 | action | AUTH | User logout |
| SESSION-6 | action | AUTH | Session destroyed |
| SetEntitlement | action | ACCESS_ITEM | Set entitlement |
| signoff | action | CERTIFICATION | Signoff |
| SOURCE_ACCOUNT_AGGREGATION | action | SOURCE_MANAGEMENT | Source account aggregation |
| SOURCE_ACCOUNT_AGGREGATION_STARTED | action | SOURCE_MANAGEMENT | Source account aggregation started |
| SOURCE_ACCOUNT_FEED_DOWNLOAD | action | SOURCE_MANAGEMENT | Source account feed download |
| SOURCE_ACCOUNTS_EXPORT | action | SOURCE_MANAGEMENT | Source accounts export |
| SOURCE_ACTIVITY_EXPORT | action | SOURCE_MANAGEMENT | Source activity export |
| SOURCE_AGGREGATION_SCHEDULE_UPDATED | action | SOURCE_MANAGEMENT | Source aggregation schedule updated |
| SOURCE_AGGREGATION_TERMINATED | action | SOURCE_MANAGEMENT | Source aggregation terminated |
| SOURCE_CREATE | action | SOURCE_MANAGEMENT | Source create |
| SOURCE_DELETE | action | SOURCE_MANAGEMENT | Source delete |
| SOURCE_ENTITLEMENT_AGGREGATION | action | SOURCE_MANAGEMENT | Source entitlement aggregation |
| SOURCE_ENTITLEMENT_AGGREGATION_FAILED | action | SOURCE_MANAGEMENT | Source entitlement aggregation failed |
| SOURCE_ENTITLEMENT_AGGREGATION_STARTED | action | SOURCE_MANAGEMENT | Source entitlement aggregation started |
| SOURCE_ENTITLEMENT_AGGREGATION_TERMINATED | action | SOURCE_MANAGEMENT | Source entitlement aggregation terminated |
| SOURCE_ENTITLEMENT_EXPORT | action | SOURCE_MANAGEMENT | Source entitlement export |
| SOURCE_ENTITLEMENT_IMPORT | action | SOURCE_MANAGEMENT | Source entitlement import |
| SOURCE_EXTERNAL_PASSWORD_CHANGE | action | PASSWORD_ACTIVITY | Source external password change |
| SOURCE_EXTERNAL_PASSWORD_CHANGE_ACTIVITY_EXPORT | action | SOURCE_MANAGEMENT | Source external password change activity export |
| SOURCE_EXTERNAL_PASSWORD_CHANGE_FAILED | action | PASSWORD_ACTIVITY | Source external password change failed |
| SOURCE_EXTERNAL_PASSWORD_CHANGE_PASSED | action | PASSWORD_ACTIVITY | Source external password change passed |
| SOURCE_FEATURES_STRING_UPDATE | action | SOURCE_MANAGEMENT | Source features string update |
| SOURCE_PASSWORD_INTERCEPT_IGNORED | action | PASSWORD_ACTIVITY | Source password intercept ignored |
| SOURCE_PASSWORD_INTERCEPT_PROCESSED | action | PASSWORD_ACTIVITY | Source password intercept processed |
| SOURCE_PASSWORD_POLICY_ASSIGNED | action | PASSWORD_ACTIVITY | Source password policy assigned |
| SOURCE_RESET | action | SOURCE_MANAGEMENT | Source reset |
| SOURCE_SCHEMA_ATTRIBUTE_ADDED | action | SOURCE_MANAGEMENT | Source schema attribute added |
| SOURCE_SCHEMA_ATTRIBUTES_DELETED | action | SOURCE_MANAGEMENT | Source schema attributes deleted |
| SOURCE_SCHEMA_ATTRIBUTES_UPDATED | action | SOURCE_MANAGEMENT | Source schema attributes updated |
| SOURCE_UPDATE | action | SOURCE_MANAGEMENT | Source update |
| SOURCE_UPDATE_DELETE_THRESHOLD | action | SOURCE_MANAGEMENT | Source update delete threshold |
| STUCK_PENDING_CAMPAIGN_DETECTED | action | CERTIFICATION | Stuck pending campaign detected |
| TASK_SCHEDULE_CREATE_PASSED | action | SYSTEM_CONFIG | Task schedule create passed |
| TASK_SCHEDULE_DELETE_PASSED | action | SYSTEM_CONFIG | Task schedule delete passed |
| TASK_SCHEDULE_UPDATE_PASSED | action | SYSTEM_CONFIG | Task schedule update passed |
| taskResultsPruned | action | SYSTEM_CONFIG | Task results pruned |
| UnlockAccount | action | PROVISIONING | Unlock account |
| UnlockAccountFailure | action | PROVISIONING | Unlock account failure |
| USER_ACTIVATE | action | USER_MANAGEMENT | User activate |
| USER_ACTIVITY_EXPORT | action | USER_MANAGEMENT | User activity export |
| USER_ADMIN_GRANT | action | USER_MANAGEMENT | User admin grant |
| USER_ADMIN_REVOKE | action | USER_MANAGEMENT | User admin revoke |
| USER_CERT_ADMIN_GRANT | action | USER_MANAGEMENT | User cert admin grant |
| USER_CERT_ADMIN_REVOKE | action | USER_MANAGEMENT | User cert admin revoke |
| USER_DASHBOARD_GRANT | action | USER_MANAGEMENT | User dashboard grant |
| USER_DASHBOARD_REVOKE | action | USER_MANAGEMENT | User dashboard revoke |
| USER_DELETE | action | USER_MANAGEMENT | User delete |
| USER_EMAIL_UPDATE | action | USER_MANAGEMENT | User email update |
| USER_HELPDESK_GRANT | action | USER_MANAGEMENT | User helpdesk grant |
| USER_HELPDESK_REVOKE | action | USER_MANAGEMENT | User helpdesk revoke |
| USER_INVITE | action | USER_MANAGEMENT | User invite |
| USER_INVITE_FAILURE | action | USER_MANAGEMENT | User invite failure |
| USER_KBA_ANSWERS | action | USER_MANAGEMENT | User kba answers |
| USER_LOCK | action | USER_MANAGEMENT | User lock |
| USER_PASSWORD_RESET_REJECTED | action | PASSWORD_ACTIVITY | User password reset rejected |
| USER_PASSWORD_UPDATE | action | PASSWORD_ACTIVITY | User password update |
| USER_PASSWORD_UPDATE_FAILED | action | PASSWORD_ACTIVITY | User password update failed |
| USER_PASSWORD_UPDATE_PASSED | action | PASSWORD_ACTIVITY | User password update passed |
| USER_PHONE_UPDATE | action | USER_MANAGEMENT | User phone update |
| USER_REGISTRATION | action | USER_MANAGEMENT | User registration |
| USER_REGISTRATION_FAILURE | action | USER_MANAGEMENT | User registration failure |
| USER_REGISTRATION_LINK | action | USER_MANAGEMENT | User registration link |
| USER_REMOVE | action | USER_MANAGEMENT | User remove |
| USER_REMOVE_ACCOUNT | action | PROVISIONING | User remove account |
| USER_REPORT_ADMIN_GRANT | action | USER_MANAGEMENT | User report admin grant |
| USER_REPORT_ADMIN_REVOKE | action | USER_MANAGEMENT | User report admin revoke |
| USER_RESET | action | USER_MANAGEMENT | User reset |
| USER_ROLE_ADMIN_GRANT | action | USER_MANAGEMENT | User role admin grant |
| USER_ROLE_ADMIN_REVOKE | action | USER_MANAGEMENT | User role admin revoke |
| USER_SOURCE_ADMIN_GRANT | action | USER_MANAGEMENT | User source admin grant |
| USER_SOURCE_ADMIN_REVOKE | action | USER_MANAGEMENT | User source admin revoke |
| USER_STEP_UP_AUTH | action | USER_MANAGEMENT | User step up auth |
| USER_STEP_UP_AUTH_FAILURE | action | USER_MANAGEMENT | User step up auth failure |
| USER_UNLOCK | action | USER_MANAGEMENT | User unlock |
| USER_UNLOCK_REJECTED | action | USER_MANAGEMENT | User unlock rejected |
| WORK_ITEM_FORWARD | action | PROVISIONING | Work item forward |
| ACCESS_PROFILE_CREATE_PASSED | technicalName | ACCESS_ITEM | Access profile created |
| ACCESS_PROFILE_DELETE_PASSED | technicalName | ACCESS_ITEM | Access profile deleted |
| ACCESS_PROFILE_UPDATE_PASSED | technicalName | ACCESS_ITEM | Access profile updated |
| IDENTITY_CREATE_PASSED | technicalName | USER_MANAGEMENT | Identity created |
| IDENTITY_DELETE_PASSED | technicalName | USER_MANAGEMENT | Identity deleted |
| IDENTITY_UPDATE_PASSED | technicalName | USER_MANAGEMENT | Identity updated |
| LIFECYCLE_STATE_CREATE_PASSED | technicalName | ACCESS_ITEM | Lifecycle state created |
| LIFECYCLE_STATE_DELETE_PASSED | technicalName | ACCESS_ITEM | Lifecycle state deleted |
| LIFECYCLE_STATE_UPDATE_PASSED | technicalName | ACCESS_ITEM | Lifecycle state updated |
| ROLE_CREATE_PASSED | technicalName | ACCESS_ITEM | Role created |
| ROLE_DELETE_PASSED | technicalName | ACCESS_ITEM | Role deleted |
| ROLE_UPDATE_PASSED | technicalName | ACCESS_ITEM | Role updated | 
| RULE_CREATE_PASSED | technicalName | CERTIFICATION | Rule created |
| RULE_DELETE_PASSED | technicalName | CERTIFICATION | Rule deleted |
| RULE_UPDATE_PASSED | technicalName | CERTIFICATION | Rule updated |
| TASK_SCHEDULE_CREATE_PASSED | technicalName | SYSTEM_CONFIG | Task schedule created |
| TASK_SCHEDULE_DELETE_PASSED | technicalName | SYSTEM_CONFIG | Task schedule deleted |
| TASK_SCHEDULE_UPDATE_PASSED | technicalName | SYSTEM_CONFIG | Task schedule updated |