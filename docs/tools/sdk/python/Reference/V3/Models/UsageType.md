---
id: usage-type
title: UsageType
pagination_label: UsageType
sidebar_label: UsageType
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UsageType', 'UsageType'] 
slug: /tools/sdk/python/v3/models/usage-type
tags: ['SDK', 'Software Development Kit', 'UsageType', 'UsageType']
---

# UsageType

The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created.  DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs. 

## Enum

* `CREATE` (value: `'CREATE'`)

* `UPDATE` (value: `'UPDATE'`)

* `ENABLE` (value: `'ENABLE'`)

* `DISABLE` (value: `'DISABLE'`)

* `DELETE` (value: `'DELETE'`)

* `ASSIGN` (value: `'ASSIGN'`)

* `UNASSIGN` (value: `'UNASSIGN'`)

* `CREATE_GROUP` (value: `'CREATE_GROUP'`)

* `UPDATE_GROUP` (value: `'UPDATE_GROUP'`)

* `DELETE_GROUP` (value: `'DELETE_GROUP'`)

* `REGISTER` (value: `'REGISTER'`)

* `CREATE_IDENTITY` (value: `'CREATE_IDENTITY'`)

* `UPDATE_IDENTITY` (value: `'UPDATE_IDENTITY'`)

* `EDIT_GROUP` (value: `'EDIT_GROUP'`)

* `UNLOCK` (value: `'UNLOCK'`)

* `CHANGE_PASSWORD` (value: `'CHANGE_PASSWORD'`)

[[Back to top]](#) 

