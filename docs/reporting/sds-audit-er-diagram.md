# Secure Data Share Audit ER Diagram

import MermaidViewer from '@site/src/components/MermaidViewer';

# Secure Data Share Audit ER Diagram

<MermaidViewer diagram='erDiagram
    AUDIT_EVENTS {
        text TENANT_ID "Unique Id for an Organization tenant"
        text ID PK "Unique Id of the event"
        timestamp_ntz CREATED "Date When the event happened"
        text ACTION "action taken related to the Audit Event"
        text TYPE "type of Audit Event,Ex: Auth, SSO, ROLE, ACCESS_REQUEST, PROVISIONING, USER_MANAGEMENT, etc."
        text ACTOR_NAME "Who/what performed the action, this can be an Identity or a Service name"
        text TARGET_NAME "Who/what the action was performed on, this can be an Identity or a Service name"
        text STACK "Which internal service was associated with the Audit Event"
        text SOURCE_NAME "Name of the Source associated with the Audit Event"
        text ACCOUNT_NAME "Name of Account associated with the Audit Event"
        text INFO "Any additional info that might be available"
        text SOURCE_ID "ID of the source associated with the Audit Event"
        text OPERATION "Operation happened examples include EMAIL, FORWARD, UPDATE, REQUEST, etc."
        text STATUS "What was the status of the Audit Event, examples include PASSED, FAILED, TERMINATED, etc."
        timestamp_ntz SYNC_DATE "Date Audit Event Synced"
        variant ATTRIBUTES "Full attributes object associated with the Audit Event"
    }'></MermaidViewer>
