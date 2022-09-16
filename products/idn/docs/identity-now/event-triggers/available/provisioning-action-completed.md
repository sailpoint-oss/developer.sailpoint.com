---
id: provisioning-action-completed
title: Provisioning Action Completed
pagination_label: Provisioning Action Completed
sidebar_label: Provisioning Action Completed
sidebar_class_name: provisioningActionCompleted
keywords:
  ["event", "trigger", "provisioning", "action", "completed", "available"]
description: Fires after a provisioning action completed on a source.
slug: /docs/event-triggers/triggers/provisioning-action-completed
tags: ["Event Triggers", "Available Event Triggers", "Fire and Forget"]
---

## Event Context

![Flow](./img/provisioning-action.png)

The Provisioning Action Completed event trigger notifies subscribed applications
after the action is completed. This event trigger provides a flexible way to
extend the Provisioning workflow after access has changed for an identity within
SailPoint. This provides more proactive governance and ensures users can quickly
get necessary access.

Some uses cases for this trigger include the following:

- Notify the requester that the access request has been fulfilled.
- Notify an application user and/or access certifier that access has been
  revoked.
- Notify an administrator or system that provisioning has been completed.
- Notify a third party system to trigger another action, like continuing
  additional provisioning actions or auditing of provisioning activities, for
  example.

This is an example input from this trigger:

```json
{
  "trackingNumber": "4b4d982dddff4267ab12f0f1e72b5a6d",
  "sources": "Corp AD, Corp LDAP, Corp Salesforce",
  "action": "IdentityRefresh",
  "errors": ["Connector AD Failed"],
  "warnings": ["Notification Skipped due to invalid email"],
  "recipient": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  },
  "requester": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  },
  "accountRequests": [
    {
      "source": {
        "id": "4e4d982dddff4267ab12f0f1e72b5a6d",
        "type": "SOURCE",
        "name": "Corporate Active Directory"
      },
      "accountId": "CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com",
      "accountOperation": "Modify",
      "provisioningResult": "SUCCESS",
      "provisioningTarget": "Corp AD",
      "ticketId": "72619262",
      "attributeRequests": [
        {
          "attributeName": "memberOf",
          "attributeValue": "CN=jedi,DC=starwars,DC=com",
          "operation": "Add"
        }
      ]
    }
  ]
}
```

## Prerequisites

Before consuming this event trigger, the following prerequesites must be met:

- An oAuth Client configured with authority as `ORG_ADMIN`.
- An org enabled with the `ARSENAL_ALLOW_POSTPROVISIONING_TRIGGERS` feature
  flag.
- Configure connectors for provisioning into target applications.
- An org configured for automated provisioning. See the Event Context section
  for specific setup.

To provision to a target application, the connector for the source must support
the following connector features:

- `ENABLE` - Can enable or disable accounts.
- `UNLOCK` - Can lock or unlock accounts.
- `PROVISIONING` - Can write to accounts. Currently, the trigger does not
  include attribute synchronization.
- `PASSWORD` - Can update password for accounts.

For a list of supported connectors and features, see
[Supported Connectors for IdentityNow](https://community.sailpoint.com/t5/Connectors/Supported-Sources-Connectors-for-IdentityNow/ta-p/80019).

For information about configuring sources for provisioning, see
[How can I edit the Create Profile on a source?](https://community.sailpoint.com/t5/Connectors/How-can-I-edit-the-Create-Profile-on-a-source/ta-p/74429).

Provisioning events occur in these workflows:

- [Access Request](#access-request)
- [Certification](#certification)
- [Role Membership](#role-membership)
- [Lifecycle Management](#lifecycle-management)
- [Password Management](#password-management)

### Access Request

When an Access Request approval process has completed with all positive
approvals, the access request is fulfilled with provisioning to the target
application with requested access.

![Flow](./img/provisioning-access-request.png)

Access acquired through a role request can also be revoked, and those changes
can be provisioned to an account.

The following steps must be completed:

- Source Connector configured for `PROVISIONING`. Access requests in SailPoint
  SaaS currently do not support `ACCOUNT_ONLY_REQUEST` or
  `ADDITIONAL_ACCOUNT_REQUEST`.
- Source entitlements mapped in Account Schema.
- Access profile using source entitlements. Role setup is optional.
- Application enabled for Access Request.

> **NOTE:** There is no indication to the approver in the IdentityNow UI that
> the approval is for a revoke action. This must be considered for all usage of
> these APIs.

![Flow](./img/provisioning-access-request-2.png)

### Certification

Provisioning removal of accounts acquired through Access Request occurs through
certifications.

> **Note:** Certifications cannot revoke access acquired via role membership or
> lifecycle Changes.

![Flow](./img/provisioning-access-request-certification.png)

### Role Membership

Access defined in access profiles can be grouped into roles, and roles can be
assigned to identities using `COMPLEX_CRITERION` or `IDENTITY_LIST`. See
[Admin UI](https://community.sailpoint.com/t5/Admin-Help/Standard-Role-Membership-Criteria-Options/ta-p/74392)
for information on how to set `COMPLEX_CRITERION`.

> **Note:** `CUSTOM` role membership through rules is no longer supported.

Roles can also be mapped from an authoritative source.

![Flow](./img/provisioning-role-membership.png)

### Lifecycle Management

This trigger fires when an account has been provisioned, enabled, or disabled.

![Flow](./img/provisioning-lifecycle-management.png)

To provision access with lifecycle states, the prerequisites must be met:

- Source connector configured for `ENABLE` to enable/disable accounts and/or
  `PROVISIONING` to create/update/delete accounts.
- Source entitlements mapped from an authoritative source.
- Source entitlements mapped to access profiles.
- Identity profile using an authoritative source.
- Lifecycle states configured. To set them up, follow this [guide].

### Password Management

Password changes can be provisioned to target applications through password
reset or password interception. Also, unlocking of accounts can be provisioned
via password change within SailPoint SaaS.

For password management setup, you must configure the following:

- Source connector configured for `PASSWORD` for password changes and/or
  `UNLOCK` for unlocking changes.
- Password sync group

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Provisioning-Completed-Event-Trigger-Input) -->
